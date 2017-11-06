function initNotes() {
    if (getNotes() == undefined) {
        localStorage.setItem("notes", JSON.stringify({}));
    }
}

function addNote(){
    var timestamp = Math.round((new Date()).getTime() / 1000);
    saveNote(timestamp, "");
    populateNotesSummary();
    populateNoteContent(timestamp);
}

function saveNote(note, content) {
    var notes = getNotes();
    if (!(note in notes)){
        notes[note] = {};
        notes[note]["identifier"] = "New Note";
    }
    notes[note]["content"] = content;
    localStorage.setItem("notes", JSON.stringify(notes));
}

function saveCurrentNote() {
    var note = document.getElementById("notes_identifier").value;
    var content = document.getElementById("notes_content").value;
    saveNote(note, content);
}

function changeFontSize(size) {
    // $("#notes_identifier").css("font-size", size); // todo: do we want to change font size for the id as well?
    $("#notes_content").css("font-size", size);
}

function getNotes() {
    var notes = localStorage.getItem("notes");
    // check for undefined notes
    if (notes != undefined) 
        return JSON.parse(notes);
}

// todo
function populateNotesSummary() {
    var notes = getNotes();
    document.getElementById("notes_identifier").innerHTML = "";

    for(const note in notes) {
        var note_option = document.createElement("option");
        note_option.value = note;
        note_option.innerHTML = notes[note]["identifier"];
        document.getElementById("notes_identifier").appendChild(note_option);
    }

    document.getElementById("notes_identifier").onclick = function(){
        populateNoteContent(this.value);
    }
}

function populateNoteContent(note) {
    var notes = getNotes();
    document.getElementById("notes_content").value = notes[note]["content"];
}

function deleteNote() {
    var notes = getNotes();
    var note = document.getElementById("notes_identifier").value;
    if ((note != undefined) && (note != "") && (note in notes)) {
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

    // todo: think of better way to handle this
    document.getElementById("notes_content").onchange = saveCurrentNote;
});