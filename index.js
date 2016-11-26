'use strict'

const { json, send } = require('micro')
const brreg = require('brreg')

module.exports = async (request, response) => {
  const data = await json(request)
  const result = await brreg(data)
  send(response, 200, result.entries)
}
