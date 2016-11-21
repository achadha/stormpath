var notes = [];

if(notes.length == 0) {
    for(var i = 0; i<5; i++) {
        notes.push({
            id: ''+i,
            title: "title" + i,
            value: "note" + i
        });
    }
}

module.exports = function(app) {
    app.get('/api/notes', function(req, res) {
        res.json(notes);
    });

    app.post('/api/note', function(req, res) {
        var changed = false;
        var reqNote = req.body;
        console.log(reqNote);
        for(var j = 0; j < 5; j++) {
            if(notes[j].id === reqNote.id) {
                notes[j].title = reqNote.title;
                notes[j].value = reqNote.value;
                changed = true;
            }
        }

        if(!reqNote.id) {
            notes.unshift({
                id: notes.length+1,
                title: reqNote.title,
                value: reqNote.value
            })
        }
        console.log(notes);
    });

    app.delete('/api/note/:noteId', function(req, res) {
        var newNotes = [];
        var noteId = req.params.noteId;
        for(var k = 0; k < notes.length; k++) {
            if(notes[k].id !== noteId) {
                newNotes.push(notes[k]);
            }
        }
        debugger;
        notes = newNotes;
    });
}
