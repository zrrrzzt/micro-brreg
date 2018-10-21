const axios = require('axios')

module.exports = (orgnummer, type) => {
  return new Promise((resolve, reject) => {
    axios.get(`http://data.brreg.no/enhetsregisteret/${type}/${orgnummer}.json`)
      .then(result => resolve(result.data))
      .catch((error) => {
        if (!/404/.test(error.message)) {
          console.error(error.message)
        }
        resolve(false)
      })
  })
}
