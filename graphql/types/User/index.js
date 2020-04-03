
export default `
input inputAddr{
  city:String
  street:String
}
type Addr{
  city:String
  street:String
}

  type User {
    id: String!
    name: String!
    email: String!
    address: Addr
  }
  type Query {
    user(id: String!): User
    users: [User]
  }
  type Mutation {
    addUser(id: String!, name: String!, email: String!,address:inputAddr): User
    editUser(id: String, name: String, email: String,address:inputAddr): User
    deleteUser(id: String, name: String, email: String,address:inputAddr): User
  }
`;
