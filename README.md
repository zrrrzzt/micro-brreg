[![Build Status](https://travis-ci.org/zrrrzzt/micro-brreg.svg?branch=master)](https://travis-ci.org/zrrrzzt/micro-brreg)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# micro-brreg
microservice for brreg

## API

### GET

```
$ curl -v http://localhost:3000?organisasjonsnummer=974760673
```

### POST

```sh
$ curl -d '{"organisasjonsnummer": "974760673"}' -v http://localhost:3000
```

## License
[MIT](LICENSE)