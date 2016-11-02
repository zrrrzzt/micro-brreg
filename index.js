'use strict'

const { parse } = require('url')
const { send } = require('micro')
const brreg = require('brreg')

module.exports = (request, response) => {
  const { query } = parse(request.url, true)

  if (!query.query) {
    const error = new Error('Missing required input: query')
    error.statusCode = 400
    throw error
  } else {
    brreg({query: query.query}, (error, data) => {
      if (error) {
        send(response, 500, error)
      } else {
        send(response, 200, data.entries)
      }
    })
  }
}
