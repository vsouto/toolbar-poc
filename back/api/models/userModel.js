'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserModelSchema = new Schema({
    name: {
        type: String,
        required: 'please enter the user name'
    },
    email: {
        type: String,
        required: 'email required'
    },
    cpf: {
        type: String,
        required: 'cpf required'
    },
    address: {
        type: String,
        required: 'address required'
    },
    debts: [],
    birthdate: {
        type: Date,
        default: Date.now
    },
    assets: [],
    revenues: [],
    createdDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('UserModel', UserModelSchema);
