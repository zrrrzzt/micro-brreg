'use strict'

const { get } = require('got')

module.exports = (orgnummer, type) => {
  return new Promise((resolve, reject) => {
    get(`http://data.brreg.no/enhetsregisteret/${type}/${orgnummer}.json`, {json: true})
      .then((data) => {
        resolve(data.body)
      }).catch((error) => {
        console.error(error)
        resolve(false)
      })
  })
}
