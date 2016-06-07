# middleware-express-mbtiles
[MBTiles](https://github.com/mapbox/mbtiles-spec) middleware for express

[![stability-experimental](https://img.shields.io/badge/stability-experimental-orange.svg)][stability]
[![circleci](https://circleci.com/gh/orangemug/middleware-express-mbtiles.png?style=shield)][circleci]
[![Dependency Status](https://david-dm.org/orangemug/middleware-express-mbtiles.svg)][dm-prod]
[![Dev Dependency Status](https://david-dm.org/orangemug/middleware-express-mbtiles/dev-status.svg)][dm-dev]

[stability]: https://github.com/orangemug/stability-badges#experimental
[circleci]:  https://circleci.com/gh/orangemug/middleware-express-mbtiles
[dm-prod]:   https://david-dm.org/orangemug/middleware-express-mbtiles
[dm-dev]:    https://david-dm.org/orangemug/middleware-express-mbtiles#info=devDependencies

If you need some tiles for testing / production I recommend [osm2vectortiles](http://osm2vectortiles.org/downloads/)


## Install
To install

    npm install orangemug/middleware-express-mbtiles


## Usage
Add to an existing express app

    app.use("/tiles", require("middleware-express-mbtiles")(__dirname+"/path/to/dir"));

Where `path/to/dir` is the directory containing your mbtiles files.


## Licence
[MIT](LICENCE)
