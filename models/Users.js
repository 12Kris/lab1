const {Schema, model} = require('mongoose');

const UsersSchema = new Schema ({
    name: {type: String},
    email: {type: String},
    password: {type: String},
})

const User = new model("users", UsersSchema, "users")

module.exports = {User}