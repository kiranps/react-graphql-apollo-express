import { makeExecutableSchema } from 'graphql-tools';
import faker from 'faker'

const typeDefs = `
  type Transaction {
    amount: String
    date: String
    business: String
    name: String
    type: String
    account: String
  }

  type Query {
    transactions(count: Int): [Transaction]
  }
`;

const resolvers = {
  Query: {
    transactions: (_, {count}) => transactions(count),
  }
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});


const transactions = (length=10) => {
  faker.seed(2)
  return Array.from({length}, faker.helpers.createTransaction)
} 

export default schema
