function initNotes() {
    var notes = getNotes();
    if (notes == undefined || getVersion() == undefined) {
        localStorage.setItem("notes", JSON.stringify({}));
        localStorage.setItem("version", "1234");
    }
    
    if(notes != undefined && Object.keys(notes).length > 0) {
        console.log(Object.keys(notes).length);
        document.getElementById("notes_content").disabled = false;
    } 

}

function addNote(){
    var timestamp = Math.round((new Date()).getTime() / 1000);
    document.getElementById("notes_content").disabled = false;
    saveNote(timestamp, "");
    populateNotesSummary();
    populateNoteContent(timestamp);
    // document.getElementById("notes_identifier").value = timestamp;

    console.log($('input[name=notes_identifier][value=' + timestamp + ']'));
    $('input[name=notes_identifier][value=' + timestamp + ']')[0].checked = true;
    $("label").css("font-weight", "300");
    $('input[name=notes_identifier]:checked').parent().find('label').css("font-weight", "bold");
    document.getElementById("notes_content").focus();

}

function getVersion() {
    return localStorage.getItem("version");
}

function saveNote(note, content) {
    var notes = getNotes();
    if (!(note in notes)){
        notes[note] = {};
        notes[note]["identifier"] = "New Note";
    }
    notes[note]["content"] = content;
    console.log("save note " + notes[note]["identifier"]);
    if($('input[name=notes_identifier][value=' + note + ']').parent().find('label').html() != undefined) {
        notes[note]["identifier"] = $('input[name=notes_identifier][value=' + note + ']').parent().find('label').html();
    }
    localStorage.setItem("notes", JSON.stringify(notes));
}

function saveCurrentNote() {
    console.log($('input[name=notes_identifier]:checked').parent().find('label')[0].value);
    var note = $('input[name=notes_identifier]:checked').parent().find('label')[0].value;
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

    if(notes != undefined && Object.keys(notes).length > 0) {
        for( note in notes) {
            var note_option = document.createElement("div");
            $(note_option).css("padding", "0px 20px");
            
            var note_radio = document.createElement("input");
            note_radio.type = "radio"
            note_radio.value = note;
            note_radio.id = note;
            note_radio.name = "notes_identifier";
            $(note_radio).css("display", "none");
            note_option.appendChild(note_radio);

            var note_label = document.createElement("label");
            note_label.htmlFor = note;
            note_label.value = note;
            note_label.name = "notes_identifier";
            note_label.innerHTML = notes[note]["identifier"];

            note_option.appendChild(note_label);
            note_option.className = "text-left";
            note_option.onclick = function(){
                console.log("note option clicked " + this.childNodes[0].value);
                $("label").css("font-weight", "300");
                $(this.childNodes[1]).css("font-weight", "bold");
                populateNoteContent(this.childNodes[0].value);
            }
            document.getElementById("notes_identifier").appendChild(note_option);
        }

        $('input[name=notes_identifier]')[0].checked = true;
        $($('input[name=notes_identifier]')[0].parentNode.childNodes[1]).css("font-weight", "bold");
        populateNoteContent($('input[name=notes_identifier]')[0].value);
    }
}

function populateNoteContent(note) {
    var notes = getNotes();
    if(notes != undefined && Object.keys(notes).length > 0 ) {
        document.getElementById("notes_content").value = notes[note]["content"];
        document.getElementById("notes_content").focus();
    }
}

function deleteNote() {
    var notes = getNotes();
    var note = $('input[name=notes_identifier]:checked')[0].value;
    if ((note != undefined) && (Object.keys(notes).length > 0) && (note in notes)) {
        var dialog = $( "#notesdialog" ).dialog({
            dialogClass: "notesPopup",
            autoOpen: false,
            height: 400,
            width: 350,
            modal: true,
            buttons: {
                Ok:{
                    text: "Delete",
                    class: "btn btn-danger btn-rounded waves-effect waves-light text-center",
                    click: function() {
                        delete notes[note];
                        localStorage.setItem("notes", JSON.stringify(notes));
                        populateNotesSummary();
                        
                        dialog.dialog( "close" );
                        if(notes == undefined || Object.keys(notes).length == 0) {
                            document.getElementById("notes_content").value = ""
                            document.getElementById("notes_content").disabled = true;
                        } 
                    }
                },
                Cancel:{
                    text: "Not Now",
                    class: "btn btn-outline-danger btn-rounded waves-effect waves-light text-center",
                    click: function() {
                        dialog.dialog( "close" );
                    }
                }
            }
        });

        dialog.dialog( "open" );
    }
}


$(document).ready(function(){
    $('#notes_widget').load('notes.html', function(){
        initNotes();
        populateNotesSummary();
    
        // todo: think of better way to handle this
        // document.getElementById("notes_content").onchange = function(){
        //     console.log(document.getElementById("notes_content").value);
        //     document.getElementById("notes_content").disabled = false;
        //     saveCurrentNote();
        // }
    
        document.getElementById("notes_content").onkeyup = function() {
            if(document.getElementById("notes_content").value.length > 0) {
                $('input[name=notes_identifier]:checked').parent().find('label')
                    .html( document.getElementById("notes_content").value.substr(0, Math.min(10, document.getElementById("notes_content").value.length)));
                
                //$("input[value=\'" + document.getElementById("notes_identifier").value + "\']")
                //    .html( document.getElementById("notes_content").value.substr(0, Math.min(10, document.getElementById("notes_content").value.length)));
            }
            saveCurrentNote();
        }

        $('input[type=radio][name=notes_identifier]').change(function() {
            console.log("populating " + this.value);
            populateNoteContent(this.value);
        });

    });
});