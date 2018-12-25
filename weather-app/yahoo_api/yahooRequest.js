const axios = require("axios");

yahooRequest = query => {
  const encodedQuery = encodeURIComponent(query);
  return axios({
    method: "get",
    url: `https://query.yahooapis.com/v1/public/yql?q=${encodedQuery}&format=json`
  });
};

module.exports = {
  yahooRequest
};
