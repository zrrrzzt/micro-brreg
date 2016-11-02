'use strict'

const { parse } = require('url')
const { send } = require('micro')
const brreg = require('brreg')

module.exports = (request, response) => {
  const { query } = parse(request.url, true)
  const q = query.query || ''

  brreg({query: q}, (error, data) => {
    if (error) {
      send(response, 500, error.message)
    } else {
      send(response, 200, data.entries)
    }
  })
}
