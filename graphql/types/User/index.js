
import Int32 from "mongoose-int32";
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
    
    userId:String
    name: String
    email: String
    address: Addr
    
  }
  type Query {
    user(name:String,userId:String): User
    users: [User]
  }
  type Mutation {
    addUser(userId:String, name: String!, email: String!,address:inputAddr): User
    editUser(userId:String, name: String, email: String,address:inputAddr): User
    deleteUser(userId:String, name: String, email: String,address:inputAddr,userId:String): User
  }
`;
