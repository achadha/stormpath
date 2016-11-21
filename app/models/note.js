var mongoose = require('mongoose');

var noteSchema = new mongoose.Schema({
        emailName: { type: String, trim: true, lowercase: true },
        title: { type: String, trim: true },
        value: { type: String, trim: true },
        createdDate: { type: Date, default: Date.now },
        modifiedDate: { type: Date, default: Date.now }
    },
    { collection: 'note' }
);

noteSchema.index({createdDate: -1}, {unique: false});
noteSchema.index({userEmail: 1}, {unique: false});

var noteModel = mongoose.model('Note', noteSchema);

module.exports = noteModel;
