[![Build Status](https://travis-ci.org/zrrrzzt/micro-brreg.svg?branch=master)](https://travis-ci.org/zrrrzzt/micro-brreg)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Greenkeeper badge](https://badges.greenkeeper.io/zrrrzzt/micro-brreg.svg)](https://greenkeeper.io/)

# micro-brreg

Microservice for checking organization number by the Norwegian Enity Registry.

The service checks main- and subunits and returns the result.

This is just a wrapper for the official [API](https://confluence.brreg.no/display/DBNPUB/API).

## API

### GET

```
$ curl -v https://organisasjonsnummer.mikrotjeneste.win?organisasjonsnummer=974760673
```

### POST

```sh
$ curl -d '{"organisasjonsnummer": "974760673"}' -v https://organisasjonsnummer.mikrotjeneste.win
```

### Returns

```JavaScript
{
  "organisasjonsnummer": 974760673,
  "navn": "REGISTERENHETEN I BRØNNØYSUND",
  "registreringsdatoEnhetsregisteret": "1995-08-09",
  "organisasjonsform": "ORGL",
  "hjemmeside": "www.brreg.no",
  "registrertIFrivillighetsregisteret": "N",
  "registrertIMvaregisteret": "N",
  "registrertIForetaksregisteret": "N",
  "registrertIStiftelsesregisteret": "N",
  "antallAnsatte": 555,
  "institusjonellSektorkode": {
    "kode": "6100",
    "beskrivelse": "Statsforvaltningen"
  },
  "naeringskode1": {
    "kode": "84.110",
    "beskrivelse": "Generell offentlig administrasjon"
  },
  "postadresse": {
    "adresse": "Postboks 900",
    "postnummer": "8910",
    "poststed": "BRØNNØYSUND",
    "kommunenummer": "1813",
    "kommune": "BRØNNØY",
    "landkode": "NO",
    "land": "Norge"
  },
  "forretningsadresse": {
    "adresse": "Havnegata 48",
    "postnummer": "8900",
    "poststed": "BRØNNØYSUND",
    "kommunenummer": "1813",
    "kommune": "BRØNNØY",
    "landkode": "NO",
    "land": "Norge"
  },
  "konkurs": "N",
  "underAvvikling": "N",
  "underTvangsavviklingEllerTvangsopplosning": "N",
  "overordnetEnhet": 912660680,
  "links": [
    {
      "rel": "self",
      "href": "http://data.brreg.no/enhetsregisteret/enhet/974760673"
    },
    {
      "rel": "overordnetEnhet",
      "href": "http://data.brreg.no/enhetsregisteret/enhet/912660680"
    }
  ]
}
```

## License

[MIT](LICENSE)

![micro-brreg](https://robots.kebabstudios.party/micro-brreg.png "Robohash image of micro-brreg")