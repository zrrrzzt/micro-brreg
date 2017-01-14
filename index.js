'use strict'

const readFileSync = require('fs').readFileSync
const { parse } = require('url')
const marked = require('marked')
const { json, send } = require('micro')
const getEnhet = require('./lib/get-enhet')

module.exports = async (request, response) => {
  const {query} = await parse(request.url, true)
  const data = request.method === 'POST' ? await json(request) : query

  if (data.organisasjonsnummer && data.organisasjonsnummer.length > 0) {
    const enhet = await getEnhet(data.organisasjonsnummer, 'enhet')
    const underenhet = await getEnhet(data.organisasjonsnummer, 'underenhet')

    const result = enhet || underenhet
    const code = result ? 200 : 404

    send(response, code, result || {})
  } else {
    const readme = readFileSync('./README.md', 'utf-8')
    const html = marked(readme)
    send(response, 200, html)
  }
}
