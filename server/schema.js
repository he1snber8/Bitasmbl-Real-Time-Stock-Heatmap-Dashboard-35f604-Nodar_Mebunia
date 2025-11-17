const { gql } = require("apollo-server");
module.exports = gql`
  type Stock { symbol: String!, price: Float, changePct: Float, sector: String }
  type Query { stocks(filter: String): [Stock!] }
  type Subscription { stockUpdated(symbol: String): Stock }
`;
