const yahooRequest = require("./yahooRequest");

geocodeAddress = address => {
  const query = `select * from geo.places(1) where text='${address}'`;

  return yahooRequest.yahooRequest(query).then(response => {
    const body = response.data;
    if (!body.query || !body.query.results) {
      throw new Error("No Results Found");
    }
    const place = body.query.results.place;
    const promiseResult = {
      name: place.name,
      timezone: place.timezone.content,
      lat: place.centroid.latitude,
      lon: place.centroid.longitude,
      woeid: place.woeid
    };
    return promiseResult;
  });
};

module.exports = {
  geocodeAddress
};
