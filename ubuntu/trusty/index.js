const Handlebars = require('handlebars')
const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')
const debug = require('debug')('ubuntu:trusty')

const versions = require('./versions')
const source = fs.readFileSync(path.join(__dirname, 'Dockerfile.hbs'), 'utf-8')
const template = Handlebars.compile(source)

function generate () {
  debug('Starting generating ubuntu:trusty Dockerfiles')
  versions.forEach((version) => {
    const dockerFileContent = template({
      VERSION: version
    })

    const dockerFileLocation = path.join(__dirname, version)

    mkdirp.sync(dockerFileLocation)
    fs.writeFileSync(`${dockerFileLocation}/Dockerfile`, dockerFileContent)
    debug('Dockerfile for ubuntu:trusty with Node %s is done.', version)
  })
}

module.exports.generate = generate
