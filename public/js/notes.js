function initNotes() {
    if (retrieveNotes() == undefined) {
        localStorage.setItem("notes", JSON.stringify({}));
    }
}

function addNote(){
    var notes = retrieveNotes();
    var timestamp = Math.round((new Date()).getTime() / 1000);
    notes[timestamp] = "";

    saveNote(timestamp, "");
    populateNotesSummary();
    populateNoteContent(timestamp);
}

function saveNote(note, content) {
    var notes = retrieveNotes();

    notes[note] = content;
    localStorage.setItem("notes", JSON.stringify(notes));
}

function saveCurrentNote() {
    var note = document.getElementById("notes_summary").value;
    var content = document.getElementById("notes_content").value;
    saveNote(note, content);
}


function retrieveNotes() {
    var notes = localStorage.getItem("notes");
    if (notes != undefined) {
        return JSON.parse(notes);
    }
    return undefined;
}

// todo
function populateNotesSummary() {
    var notes = retrieveNotes();
    document.getElementById("notes_summary").innerHTML = "";
    // todo: error check for undefined notes
    for(const note in notes) {
        var note_summary = document.createElement("option");
        note_summary.style="border-width:1"
        note_summary.innerHTML = note;
        document.getElementById("notes_summary").appendChild(note_summary);
    }
    document.getElementById("notes_summary").onclick = function(){
        console.log('changed to ' + this.value);
        populateNoteContent(this.value);
    }
}

function populateNoteContent(note) {
    var notes = retrieveNotes();
    // todo: error check for undefined notes
    document.getElementById("notes_content").value = notes[note];
}

function deleteNote() {
    var notes = retrieveNotes();
    // todo: error check for undefined notes
    var note = document.getElementById("notes_summary").value;
    if ((note != undefined) && (note != "") && (note in notes)) {
        // todo: add a warning
        if(confirm("Are you sure you want to delete the current note?")) {
            delete notes[note];
            localStorage.setItem("notes", JSON.stringify(notes));
            populateNotesSummary();
            document.getElementById("notes_content").value = "";
        }
    }
}


$(document).ready(function(){
    initNotes();
    populateNotesSummary();
});