// Polling + basic backoff
const fetch = require("node-fetch");
const EventEmitter = require("events");
const emitter = new EventEmitter();
let backoff = 1000;
async function poll(symbols){
  try{ /* fetch batched data, handle 429, emit 'update' per stock */ }
  catch(e){ backoff = Math.min(backoff*2, 60000); }
  setTimeout(()=>poll(symbols), backoff);
}
module.exports = { emitter, poll };
