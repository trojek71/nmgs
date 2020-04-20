import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";
//import { UniqueDirectiveNamesRule } from "graphql";
//import Int32 from "mongoose-int32";
const Schema = mongoose.Schema;
autoIncrement.initialize(mongoose.connection);
// Create the User Schema.
const UserSchema = new Schema({
 
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  address:{
    city: {type: String},
    street:{type: String}
  }
});

UserSchema.plugin(autoIncrement.plugin,{
  model :"User",
  field: "userId",
  startAt:0,
  incrementBy:1
});
const User = mongoose.model("User", UserSchema);

export default User;
