// lightweight pubsub wrapper
const EventEmitter = require("events");
const pub = new EventEmitter();
module.exports = { pub };
