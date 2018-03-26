const express = require("express");
const app = express();
const request = require("request");
const config = require("./config");

// https://developer.foursquare.com/docs/api/endpoints
app.get("/", function(req, res) {
  res.send("GET request to homepage");
});

app.get("/api/foursquare/explore/:query-:location", function(req, res) {
  const endpoint_res = res;
  request(
    {
      url: "https://api.foursquare.com/v2/venues/explore",
      method: "GET",
      qs: {
        client_id: config.foursquareAPI.client_id,
        client_secret: config.foursquareAPI.client_secret,
        near: req.params.location,
        query: req.params.query,
        venuePhotos: 1,
        v: "20170801",
        limit: 50
      }
    },
    function(err, res, body) {
      if (err) {
        console.error(err);
      } else {
        endpoint_res.send(body);
      }
    }
  );
});

app.get("/api/foursquare/search/:query-:location", function(req, res) {
  const endpoint_res = res;
  request(
    {
      url: "https://api.foursquare.com/v2/venues/search",
      method: "GET",
      qs: {
        client_id: config.foursquareAPI.client_id,
        client_secret: config.foursquareAPI.client_secret,
        near: req.params.location,
        query: req.params.query,
        v: "20170801",
        limit: 50
      }
    },
    function(err, res, body) {
      if (err) {
        console.error(err);
      } else {
        endpoint_res.send(body);
      }
    }
  );
});

app.get("*", function(req, res) {
  res.send("404 - the endpoint requested does not exist");
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
