const { gql } = require("apollo-server");
const typeDefs = gql`
  type Item {
    id: ID!
    name: String!
    description: String
  }

  type Query {
    getItem(id: ID!): Item
  }
`;

module.exports = typeDefs;
