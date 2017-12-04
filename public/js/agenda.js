var events = {
        1: {
            title: 'Appointment with Jeff',
            start: '2017-12-03T13:00:00',
            constraint: 'businessHours'
        },
        2: {
            title: 'Meeting with Team',
            start: '2017-12-13T11:00:00',
            constraint: 'availableForMeeting', // defined below
            color: '#257e4a'
        },
        3: {
            title: 'Conference @ La Jolla',
            start: '2017-12-18',
            end: '2017-11-20'
        },
        4: {
            title: 'Christmas Vacation',
            start: '2017-12-25T00:00:00'
        },
        5: {
            title: 'New Years',
            start: '2017-12-31T23:59:00'
        }
    }

    // areas where "Meeting" must be dropped
    // {
    //     id: 'availableForMeeting',
    //     start: '2017-10-11T10:00:00',
    //     end: '2017-10-11T16:00:00',
    //     rendering: 'background'
    // },
    // {
    //     id: 'availableForMeeting',
    //     start: '2017-11-13T10:00:00',
    //     end: '2017-11-13T16:00:00',
    //     rendering: 'background'
    // },

    // // red areas where no events can be dropped
    // {
    //     start: '2017-11-24',
    //     end: '2017-11-28',
    //     overlap: false,
    //     rendering: 'background',
    //     color: '#ff9f89'
    // },
    // {
    //     start: '2017-11-06',
    //     end: '2017-11-08',
    //     overlap: false,
    //     rendering: 'background',
    //     color: '#ff9f89'
    // }


var selected_agenda = undefined;
function initAgenda() {
    if (getAgenda() == undefined) {
        localStorage.setItem("agenda", JSON.stringify(events));
    }
}

function getAgenda() {
    var agenda = localStorage.getItem("agenda");
    // check for undefined notes
    if (agenda != undefined)
        return JSON.parse(agenda);
}

function populateAgenda() {
    var agenda = getAgenda();
    document.getElementById("agenda").innerHTML = "";


    for( ev in agenda) {
        console.log(agenda[ev]);
        // only add events with titles to today's agenda.
        // todo: find a better way to handle
        if (agenda[ev]["title"] != undefined) {
            var div = document.createElement("div");
            div.className = "event";
            div.value = ev;

            // title of the event
            var title = document.createElement("div");
            title.className = 'agenda-title';
            title.innerHTML = agenda[ev]["title"];
            div.appendChild(title);

            var date = new Date(agenda[ev]["start"]);

            // date
            var cal_date = document.createElement("div");
            cal_date.className = "agenda-date";
            cal_date.innerHTML = (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear();
            div.appendChild(cal_date);

            // time
            var time = document.createElement("div");
            time.className = "agenda-time";
            time.innerHTML = date.getHours() +  ":" + (date.getMinutes().length > 1 ? date.getMinutes() : '0' + date.getMinutes());
            div.appendChild(time);

            // dialog box functionality
            var dialog = $( "#dialog" ).dialog({
                dialogClass: "agendaPopup",
                autoOpen: false,
                height: 400,
                width: 350,
                modal: true,
                buttons: {
                    Delete:{
                        text: "Delete",
                        class: "btn btn-primary btn-rounded waves-effect waves-light text-center",
                        click: function() {

                            console.log(agenda[selected_agenda]);
                            delete agenda[selected_agenda];
                            localStorage.setItem("agenda", JSON.stringify(agenda));
                            dialog.dialog( "close" );
                            selected_agenda = undefined;
                            populateAgenda();
                        }
                    },
                    Ok:{
                        text: "Ok",
                        class: "btn btn-primary btn-rounded waves-effect waves-light text-center",
                        click: function() {
                            dialog.dialog( "close" );
                            selected_agenda = undefined;

                        }
                    }
                }
            });
            div.onclick = function() {
                document.getElementById('dialog-title').innerHTML = this.getElementsByClassName('agenda-title')[0].innerHTML;
                document.getElementById('dialog-date').value = this.getElementsByClassName('agenda-date')[0].innerHTML;
                document.getElementById('dialog-time').value = this.getElementsByClassName('agenda-time')[0].innerHTML;
                selected_agenda = this.value;
                dialog.dialog( "open" );
                
            };
            document.getElementById("agenda").appendChild(div);
        }
    }
}

$(document).ready(function(){
    $('#agenda_widget').load('agenda.html', function(){
        initAgenda();
        populateAgenda();
    });
});
