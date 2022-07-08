const UserDAO = require("../dao/user-dao");
const CONSTANT = require("../utils/constant");
const UserService = {
  registerUser: (payload) => {
    // if we want to upload to image locally not base64 string
    // if(payload.profileImage){
    //     // upload the file with hep of multer and than return
    //     //the path of the file to payload.profileImage
    // }
    return new Promise((resolve, reject) => {
      UserDAO.registerUser(payload)
        .then((result) => {
          resolve({
            status: CONSTANT.HTTP_STATUS_CODE.CREATED,
            message: CONSTANT.MESSAGE.USER.CREATED,
            data: result,
          });
        })
        .catch((error) => {
          reject({
            status: CONSTANT.HTTP_STATUS_CODE.SERVER_ERROR,
            message: error,
          });
        });
    });
  },
  isUserExist: (payload) => {
    return new Promise((resolve, reject) => {
      UserDAO.isUserExist(payload)
        .then((result) => {
          resolve({
            status: CONSTANT.HTTP_STATUS_CODE.SUCCESS,
            message: CONSTANT.MESSAGE.USER.USER_ALREADY_REGISTERED,
            data: result,
          });
        })
        .catch((error) => {
          reject({
            status: CONSTANT.HTTP_STATUS_CODE.SERVER_ERROR,
            message: error,
          });
        });
    });
  },
  List: (orgId = null) => {
    return new Promise((resolve, reject) => {
      UserDAO.List(orgId)
        .then((result) => {
          resolve({
            status: CONSTANT.HTTP_STATUS_CODE.SUCCESS,
            message: CONSTANT.MESSAGE.COMMON.DATA_FOUND,
            data: result,
          });
        })
        .catch((error) => {
          reject({
            status: CONSTANT.HTTP_STATUS_CODE.SERVER_ERROR,
            message: error,
          });
        });
    });
  },
  Detail: (payload) => {
    return new Promise((resolve, reject) => {
      UserDAO.Detail(payload)
        .then((result) => {
          resolve({
            status: CONSTANT.HTTP_STATUS_CODE.SUCCESS,
            message: CONSTANT.MESSAGE.COMMON.DATA_FOUND,
            data: result,
          });
        })
        .catch((error) => {
          reject({
            status: CONSTANT.HTTP_STATUS_CODE.SERVER_ERROR,
            message: error,
          });
        });
    });
  },
};

module.exports = UserService;
