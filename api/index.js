const getEnhet = require('../lib/get-enhet')

module.exports = async (request, response) => {
  const query = await request.query
  const data = query || await request.body
  const { organisasjonsnummer } = data
  try {
    const [enhet, underenhet] = await Promise.all([getEnhet(organisasjonsnummer, 'enheter'), getEnhet(organisasjonsnummer, 'underenheter')])
    const result = enhet || underenhet
    const code = result ? 200 : 404
    response.status(code)
    response.json(result || { error: 'Not found' })
  } catch (error) {
    response.status(500)
    response.send(error)
  }
}
