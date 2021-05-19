import {
  ApolloServer,
  gql,
  makeExecutableSchema,
  Config,
} from 'apollo-server-micro'

const typeDefs: Config['typeDefs'] = gql`
  type Query {
    users: [User!]!
    user(username: String): User
  }
  type User {
    name: String
    username: String
  }
`

const users = [
  { name: 'Leeroy Jenkins', username: 'leeroy' },
  { name: 'Foo Bar', username: 'foobar' },
]

const resolvers: Config['resolvers'] = {
  Query: {
    users() {
      return users
    },
    user(_parent, { username }) {
      return users.find((user) => user.username === username)
    },
  },
}

export const schema = makeExecutableSchema({ typeDefs, resolvers })

export const config = {
  api: {
    bodyParser: false,
  },
}

export default new ApolloServer({ schema }).createHandler({
  path: '/api/graphql',
})
