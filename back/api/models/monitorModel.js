'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MonitorModelSchema = new Schema({
    title: {
        type: String,
        required: 'please enter the monitor title'
    },
    owner: {
        type: String,
        required: 'monitor owner required'
    },
    elements: [],
    grid: {
        type: Array,
        default: [
            [0,0,0,0,0,0,0,0], // Row 0
            [0,0,0,0,0,0,0,0], // 1
            [0,0,0,0,0,0,0,0], // 2
            [0,0,0,0,0,0,0,0], // 3
            [0,0,0,0,0,0,0,0], // 4
            [0,0,0,0,0,0,0,0], // 5
            [0,0,0,0,0,0,0,0], // 6
            [0,0,0,0,0,0,0,0]  // 7
        ]
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});

/*
    MonitorModelSchema.virtual('fullName').get(function() {
        return this.name.first + ' ' + this.name.last;
    });
*/

module.exports = mongoose.model('MonitorModel', MonitorModelSchema);
