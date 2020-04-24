// The User schema.
//
import User from "../../../models/User";

export default {
  Query: {
    user: (root, args) => {
      return new Promise((resolve, reject) => {
        User.findOne(args).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    users: () => {
      return new Promise((resolve, reject) => {
        User.find({})
          .populate()
          .exec((err, res) => {
            err ? reject(err) : resolve(res);
          });
      });
    }
  },
  Mutation: {
    addUser: (root, { name, email,address,userId }) => {
      const newUser = new User({  name, email,address,userId });

      return new Promise((resolve, reject) => {
        newUser.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    editUser: (root, { userId, name, email,address }) => {
      return new Promise((resolve, reject) => {
        User.findOneAndUpdate({ name}, { $set: { userId,name, email,address } }).exec(
          (err, res) => {
            err ? reject(err) : resolve(res);
          }
        );
      });
    },
    deleteUser: (root, {name}) => {
      return new Promise((resolve, reject) => {
        User.findOneAndRemove({name}).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    }
  }
};
