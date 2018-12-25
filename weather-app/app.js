const yargs = require("yargs");
const geocode = require("./yahoo_api/geocode");
const weather = require("./yahoo_api/weather");

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: "address",
      describe: "Address for the weather",
      string: true
    }
  })
  .help()
  .alias("h", "help").argv;

const address = argv.address;

formatData = data => {
  const tempUnit = data.units.temperature;
  const temp = data.condition.temp;
  const text = data.condition.text;
  const lastUpdatedAt = data.updatedAt;
  console.log(`It is ${temp}°${tempUnit} and ${text}.`);
  console.log(`Last Updated at ${lastUpdatedAt}`);
};

geocode
  .geocodeAddress(address)
  .then(data => {
    console.log(data.name);
    return weather.weather(data.woeid);
  })
  .then(data => {
    formatData(data);
  })
  .catch(error => {
    console.log(error);
  });
