'use strict'

const { get } = require('got')

module.exports = (orgnummer) => {
  return new Promise((resolve, reject) => {
    get(`http://data.brreg.no/enhetsregisteret/underenhet/${orgnummer}.json`, {json: true})
      .then((data) => {
        resolve(data.body)
      }).catch((error) => {
        console.error(error)
        resolve(false)
      })
  })
}
