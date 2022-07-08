const userModel = require("../model/user-model");

const UserDAO = {
  registerUser: (payload) => {
    return new userModel({
      ...payload,
    }).save();
  },
  findOneByEmailOrUsername: (emailOrUsername) => {
    return userModel.findOne({
      $or: [{ email: emailOrUsername }, { userName: emailOrUsername }],
    });
  },
  isUserExist: (payload) => {
    return userModel.findOne({ email: payload.email });
  },
  comparePassword: (reqPassword, UserPassword) => {
    return reqPassword == UserPassword;
  },
  List: (orgId) => {
    return userModel.find();
  },
  getById: (data) => {
    return userModel.findOne({ _id: data });
  },
};
module.exports = UserDAO;
