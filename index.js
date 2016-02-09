const fs = require('fs')
const path = require('path')
const read = require('fs-readdir-recursive')
const mkdirp = require('mkdirp')
const Handlebars = require('handlebars')

const dockerTemplates = read('.').filter(function (filePath) {
  return filePath.includes('Dockerfile.hbs')
})

const circleDependencies = []
const circleDeployments = []

dockerTemplates.forEach((templatePath) => {
  const dir = path.resolve(templatePath, '../')
  const versions = require(`${dir}/versions`)
  const source = fs.readFileSync(`${dir}/Dockerfile.hbs`, 'utf-8')
  const template = Handlebars.compile(source)

  versions.forEach((version) => {
    const tag = `${version.base.version}-${version.node}`
    const dockerFileLocation = path.join(dir, tag)
    const dockerFileContent = template({
      nodeVersion: version.node,
      baseVersion: version.base.tag
    })

    circleDependencies.push(`- version=$(node -pe "($(cat package.json)).version"); cd alpine/${tag} && docker build -t risingstack/alpine:${tag}-$version .;`)
    circleDeployments.push(`- version=$(node -pe "($(cat package.json)).version"); cd alpine/${tag} && docker push risingstack/alpine:${tag}-$version .;`)

    mkdirp.sync(dockerFileLocation)

    fs.writeFileSync(`${dockerFileLocation}/Dockerfile`, dockerFileContent)
  })
})

const source = fs.readFileSync('./circle.hbs', 'utf-8')
const circleTemplate = Handlebars.compile(source)

const circleYml = circleTemplate({
  deployments: circleDeployments,
  dependencies: circleDependencies
})

fs.writeFileSync('./circle.yml', circleYml)
