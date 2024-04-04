const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    project: {type: String},
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',

    }

}, {
  timestamps: true
});

module.exports = mongoose.model('Project', projectSchema);