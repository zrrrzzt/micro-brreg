const { readFile } = require('fs').promises
const { parse } = require('url')
const md = require('markdown-it')()
const { json, send } = require('micro')
const getEnhet = require('./lib/get-enhet')

module.exports = async (request, response) => {
  const { query } = await parse(request.url, true)
  const data = request.method === 'POST' ? await json(request) : query
  if (data.organisasjonsnummer && data.organisasjonsnummer.length > 0) {
    response.setHeader('Access-Control-Allow-Origin', '*')
    try {
      const [enhet, underenhet] = await Promise.all([getEnhet(data.organisasjonsnummer, 'enhet'), getEnhet(data.organisasjonsnummer, 'underenhet')])
      const result = enhet || underenhet
      const code = result ? 200 : 404

      send(response, code, result || { error: 'Not found' })
    } catch (error) {
      send(response, 500, error)
    }
  } else {
    const readme = await readFile('./README.md', 'utf-8')
    send(response, 200, md.render(readme))
  }
}
