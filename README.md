# generator-edu-front-common-module [![Build Status][travis-image]][travis-url]

## Structure

```
.
├── CHANGELOG.md
├── CONTRIBUTING.md
├── LICENSE
├── README.md
├── bower.json
├── package.json
├── res
│   └── module-{{args.module}}
├── src
│   ├── config.js
│   ├── setting.js
│   └── {{args.name}}
│       ├── index.html
│       ├── index.js
│       ├── index.scss
│       ├── module.htm
│       └── module.js
├── test
│   ├── app
│   │   ├── app.html
│   │   └── setting.json
│   ├── meta
│   ├── mock.js
│   ├── test.html
│   ├── test.js
│   ├── util.js
│   └── {{args.name}}
│       ├── cases.js
│       ├── test.html
│       └── test.js
└── tutorials
    └── {{args.name}}
        └── demo.html
```

## Installation

First, install [Yeoman](http://yeoman.io) and generator-edu-front-common-module using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-edu-front-common-module
```

Then generate your new project:

```bash
yo edu-front-common-module
```

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [dong.wang]()


[npm-image]: https://badge.fury.io/js/generator-edu-front-common-module.svg
[npm-url]: https://npmjs.org/package/generator-edu-front-common-module
[travis-image]: https://travis-ci.org/techbirds/generator-edu-front-common-module.svg?branch=master
[travis-url]: https://travis-ci.org/techbirds/generator-edu-front-common-module
[daviddm-image]: https://david-dm.org/techbirds/generator-edu-front-common-module.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/techbirds/generator-edu-front-common-module
[coveralls-image]: https://coveralls.io/repos/techbirds/generator-edu-front-common-module/badge.svg
[coveralls-url]: https://coveralls.io/r/techbirds/generator-edu-front-common-module
