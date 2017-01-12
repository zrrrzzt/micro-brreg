'use strict'

const readFileSync = require('fs').readFileSync
const { parse } = require('url')
const marked = require('marked')
const { json, send } = require('micro')
const getEnhet = require('./lib/get-enhet')
const getUnderenhet = require('./lib/get-underenhet')

module.exports = async (request, response) => {
  const {pathname, query} = await parse(request.url, true)
  const data = request.method === 'POST' ? await json(request) : query

  if (data.organisasjonsnummer && data.organisasjonsnummer.length > 0) {
    const enhet = await getEnhet(data.organisasjonsnummer)
    const underenhet = await getUnderenhet(data.organisasjonsnummer)

    const result = enhet || underenhet
    send(response, 200, result || {})
  } else {
    const readme = readFileSync('./README.md', 'utf-8')
    const html = marked(readme)
    send(response, 200, html)
  }
}
