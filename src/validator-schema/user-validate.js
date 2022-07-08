const Joi = require("joi");
const CONSTANT = require("../utils/constant");
const UserValidateSchema = Joi.object({
  fullName: Joi.string().required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
  phoneNumber: Joi.number().required(),
  DOB: Joi.date().required(),
  profileImage: Joi.string(),
  userName: Joi.string().required(),
});

module.exports = UserValidateSchema;
