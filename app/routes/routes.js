var Note = require('../models/note.js');

module.exports = function(app) {
    app.get('/api/notes', function(req, res) {
        Note.find({emailName: req.query.emailName})
        .sort({ creationDate: -1})
        .exec(function(err, notes) {
            if(err) {
                res.send(err);
            }

            res.json(notes)
        })
    });

    app.get('/api/notes/:id', function(req, res) {
        Note.find({ _id: req.params.id }, function(err, note) {
            if(err) {
                res.send(err);
            }

            res.json(note);
        })
    });

    app.get('/api/notes/latest', function(req, res) {
        Note.find({emailName: req.query.emailName})
            .sort({creationDate: -1})
            .limit(1)
            .exec(function(err, note) {
                if(err) {
                    res.send(err);
                }

                res.json(note);
            });
    });

    app.post('/api/note', function(req, res) {
        var reqNote = req.body;
        if(reqNote._id) {
            Note.findOneAndUpdate(
                { _id: reqNote._id},
                {
                    title: reqNote.title,
                    value: reqNote.value,
                    emailName: reqNote.email,
                    modifiedDate: new Date()
                },
                { upsert: true },
                function(err, note) {
                    if(err) {
                        res.send(err);
                    }
                }
            )
        } else {
            Note.create({
                title: reqNote.title,
                value: reqNote.value,
                emailName: reqNote.email,
                modifiedDate: new Date()
            }, function(err) {
                if(err) {
                    res.send(err);
                }
            });
        }

    });

    app.delete('/api/note/:noteId', function(req, res) {
        Note.remove({ _id: req.params.noteId }, function(err, note) {
            if(err) {
                res.send(err);
            }
        })
    });
}
