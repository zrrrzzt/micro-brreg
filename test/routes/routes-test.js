'use strict'

const test = require('ava')
const listen = require('test-listen')
const axios = require('axios')
const micro = require('micro')
const srv = require('../../index')

const getUrl = fn => {
  const srv = micro(fn)
  return listen(srv)
}

test('it returns README as frontpage', async t => {
  const url = await getUrl(srv)
  const result = await axios.get(url)
  t.true(result.data.includes('MIT'), 'frontpage ok')
})

test('it returns json for sub entity from GET', async t => {
  const url = await getUrl(srv)
  const result = await axios.get(`${url}?organisasjonsnummer=974760673`)
  t.deepEqual(result.data.organisasjonsnummer, 974760673, 'json ok')
})

test('it returns json for sub entity from POST', async t => {
  const url = await getUrl(srv)
  const result = await axios.post(`${url}`, { organisasjonsnummer: '974760673' })
  t.deepEqual(result.data.organisasjonsnummer, 974760673, 'json ok')
})

test('it returns json for main entity from GET', async t => {
  const url = await getUrl(srv)
  const result = await axios.get(`${url}?organisasjonsnummer=912660680`)
  t.deepEqual(result.data.organisasjonsnummer, 912660680, 'json ok')
})

test('it returns json for main entity from POST', async t => {
  const url = await getUrl(srv)
  const result = await axios.post(`${url}`, { organisasjonsnummer: '912660680' })
  t.deepEqual(result.data.organisasjonsnummer, 912660680, 'json ok')
})
