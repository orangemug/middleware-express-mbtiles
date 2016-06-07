var express = require("express");
var MBTiles = require("mbtiles");
var path    = require("path");


module.exports = function(basedir) {
  var router = express.Router();

  router.get("/:s/:z/:x/:y.pbf", function(req, res) {

    var filepath = path.join(basedir, req.params.s + ".mbtiles");
    new MBTiles(filepath, function(err, mbtiles) {
      if (err) {
        res.status(500).send("Err: Failed to connect to database");
        return;
      }

      mbtiles.getTile(req.params.z, req.params.x, req.params.y, function(err, tile, headers) {
        if (err) {
          res.set({"Content-Type": "text/plain"});
          res.status(404).send("Tile rendering error: " + err + "\n");
        } else {
          res.set({
            "Content-Type":     "application/x-protobuf",
            "Content-Encoding": "gzip"
          });
          res.send(tile);
        }
      });
    });
  });

  return router;
}
