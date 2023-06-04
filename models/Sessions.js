const {Schema, model} = require('mongoose');

const sessionsSchema = new Schema ({
    user_id: { type: String },
    jwt: {type: String},
});

const Session = new model("sessions", sessionsSchema);

module.exports = { Session };