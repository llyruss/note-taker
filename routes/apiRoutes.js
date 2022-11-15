const fs =require("fs")
const { v4: uuidv4 } = require('uuid');

module.exports = (app) => {

app.get('/api/notes', (req, res) => {
     //return notes from the json

    const db = JSON.parse(fs.readFileSync('./db/db.json'))
    res.json(db)
    
});

app.post('/api/notes', (req, res) => {
    const db = JSON.parse(fs.readFileSync('./db/db.json'))
    const note = req.body

    note.id = uuidv4();

    db.push(note)

    fs.writeFileSync('./db/db.json', JSON.stringify(db))

    console.log(db)

    res.json({"message": "note added"})
}
);

// app.delete('/api/notes:id', (req, res) => {

// }
// );
}