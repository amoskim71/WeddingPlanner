const express = require("express");
const app = express();
const request = require("request");
const config = require("./config");
const path = require("path");

// https://developer.foursquare.com/docs/api/endpoints
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./index.html"));
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
        console.log(res);
        let results = JSON.parse(body);
        endpoint_res.send(results["response"]);
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
        let results = JSON.parse(body)["response"]["venues"];
        let summary = "";
        for (let i = 0; i < results.length; i++) {
          let venue = results[i];
          summary +=
            venue.name +
            ", id=" +
            venue.id +
            ", " +
            venue.contact.formattedPhone +
            ", " +
            venue.location.formattedAddress +
            "<br>";
        }
        endpoint_res.send(summary);
      }
    }
  );
});

app.get("*", function(req, res) {
  res.send("404 - the endpoint requested does not exist");
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
