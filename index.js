const fs = require('fs')
const path = require('path')
const read = require('fs-readdir-recursive')
const mkdirp = require('mkdirp')
const Handlebars = require('handlebars')

const dockerTemplates = read('.').filter(function (filePath) {
  return filePath.includes('Dockerfile.hbs')
})

dockerTemplates.forEach((templatePath) => {
  const dir = path.resolve(templatePath, '../')
  const versions = require(`${dir}/versions`)
  const source = fs.readFileSync(`${dir}/Dockerfile.hbs`, 'utf-8')
  const template = Handlebars.compile(source)

  versions.forEach((version) => {
    const dockerFileLocation = path.join(dir, version)
    const dockerFileContent = template({
      VERSION: version
    })

    mkdirp.sync(dockerFileLocation)

    fs.writeFileSync(`${dockerFileLocation}/Dockerfile`, dockerFileContent)
  })
})
