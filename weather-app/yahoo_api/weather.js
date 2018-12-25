const yahooRequest = require("./yahooRequest");

weather = woeid => {
  const query = `select * from weather.forecast where woeid = ${woeid} and u='c'`;

  return yahooRequest.yahooRequest(query).then(response => {
    const body = response.data;
    if (!body.query || !body.query.results) {
      throw new Error("No Results Found");
    }
    const channel = body.query.results.channel;
    const promiseResult = {
      units: channel.units,
      updatedAt: channel.lastBuildDate,
      atronomy: channel.astronomy,
      condition: channel.item.condition,
      forecast: channel.item.forecast
    };
    return promiseResult;
  });
};

module.exports = {
  weather
};
