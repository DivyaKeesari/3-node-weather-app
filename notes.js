const fs = require('fs')
const getNotes = function(){
    return 'Your Notes...';
}

const addNote = function(title,body){
    const notes = loadNotes()
   
    notes.push({
        title : title,
        body  : body
    })
    saveNotes(notes)

}

const saveNotes = function(notes){
    const data = JSON.stringify(notes)
    fs.writeFileSync('notes1.json',data)
}

const loadNotes = function(){
    try{
    const dataBuffer = fs.readFileSync('notes1.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
}catch(e){
    return []
}

}
module.exports = {
    getNotes : getNotes,
    addNote : addNote
}