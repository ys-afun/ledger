import { ApolloServer, gql } from 'apollo-server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const typeDefs = gql`
  type Query {
    hello: String!
  }
`
const resolvers = {
  Query: {
    hello: () => 'baby',
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    prisma,
  },
})

server.listen().then(({ url }) => console.log(`Server is running on ${url}`))
