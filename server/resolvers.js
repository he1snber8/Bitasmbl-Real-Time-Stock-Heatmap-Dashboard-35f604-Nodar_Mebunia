const { emitter, poll } = require("./dataFetcher");
const cache = new Map();
// kickoff polling for default universe
poll(["AAPL","MSFT","GOOG"]);
module.exports = {
  Query: { stocks: (_, {filter})=> Array.from(cache.values()) },
  Subscription: { stockUpdated: { subscribe: (_, {symbol}) => emitter.on.bind(emitter, 'update') } }
};
