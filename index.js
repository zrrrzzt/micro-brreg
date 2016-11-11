'use strict'

const { parse } = require('url')
const { send } = require('micro')
const brreg = require('brreg')

module.exports = async (request, response) => {
  const { query } = parse(request.url, true)
  const q = query.query || ''

  return await brreg({query: q})
    .then(data => {
      response.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'})
      response.write(JSON.stringify(data.entries))
      response.end()
    })
    .catch(error => {
      send(response, 500, error.message)
    })
}
