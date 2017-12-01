function eventModal(event){

    $("#startTime").html(moment(event.start).format('MMM Do h:mm A'));
    $("#endTime").html(moment(event.end).format('MMM Do h:mm A'));
    $("#eventInfo").html(event.description);
    //$("#eventLink").attr('href', event.url);
    $("#eventContentModal").dialog({ modal: true, title: event.title, width:350});

}

function addAppointment(){
    alert("Add Appointment Form Submitted!");
    $("#myModal").modal('hide');

    //console.log($('#datepicker').val())
    console.log($('#starts-at').val());
    console.log($('#ends-at').val());

    $("#calendar").fullCalendar('renderEvent',
        {
            title: $('#defaultForm-firstName').val() +', ' + $('#defaultForm-lastName').val() + ', ' + $('#comment').val(),
            start: new Date($('#starts-at').val()),
            end: new Date($('#ends-at').val()),
            allDay: ($('#apptAllDay').val() == "Yes"),
            description: 'First Name: ' + $('#defaultForm-firstName').val() + '<br />' +
                        'Last Name: ' + $('#defaultForm-lastName').val() + '<br />' +
                        'Email: ' + $('#defaultForm-email').val() + '<br />' +
                        'Phone Number: ' + $('#defaultForm-number').val() + '<br />' +
                        'Comment: ' + $('#comment').val(),

        },
    true);

    $("#weekCalendar").fullCalendar('renderEvent',
        {
            title: $('#defaultForm-firstName').val() + $('#defaultForm-lastName').val() + $('#comment').val(),
            start: new Date($('#starts-at').val()),
            end: new Date($('#ends-at').val()),
            allDay: ($('#apptAllDay').val() == "Yes"),
            description: 'First Name: ' + $('#defaultForm-firstName').val() + '<br />' +
                        'Last Name: ' + $('#defaultForm-lastName').val() + '<br />' +
                        'Email: ' + $('#defaultForm-email').val() + '<br />' +
                        'Phone Number: ' + $('#defaultForm-number').val() + '<br />' +
                        'Comment: ' + $('#comment').val(),
        },
    true);

    $('#calendar').fullCalendar('unselect');
    
}

$(document).ready(function(){

    $('#addBtn').on('click', function() {
        $('#weekCalendar').fullCalendar('select');
    }); 

    $('#weekCalendar').fullCalendar({
        header: {
            left: 'prev,next',
            center: 'title',
            right: 'agendaWeek,agendaDay'
        },
        buttonText: {
            agendaWeek: 'Week View',
            agendaDay: 'Day View'
        },    
        defaultView: 'agendaWeek',
        defaultDate: '2017-11-22',
        contentHeight: 565,
        timeFormat: 'h:mm A', 
        navLinks: true, // can click day/week names to navigate views
        businessHours: true, // display business hours
        selectable: true,
        selectHelper: true,
        select: function(start, end, allDay) {
            /*
            endtime = $.fullCalendar.formatDate(end,'h:mm A');
            starttime = $.fullCalendar.formatDate(start,'h:mm A');
            var duration = starttime + ' - ' + endtime;
            $('#myModal #timepicker').val(start);
            $('#myModal #endtimepicker').val(end);
            $('#myModal #apptAllDay').val(allDay);
            $('#myModal #when').text(duration);
            */
            $('#myModal').modal('show');
            /*
            var title = prompt('Event Title:');
            var eventData;
            if (title) {
                eventData = {
                    title: title,
                    start: start,
                    end: end
                };
                $('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
                //hacking to sync both calendars
                $('#weekCalendar').fullCalendar('renderEvent', eventData, true); // stick? = true
            }
            $('#calendar').fullCalendar('unselect');
            //hacking to sync both calendars
            $('#weekCalendar').fullCalendar('unselect');
            */
        },
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        views: {
            agenda: {
                eventLimit: 6 // adjust to 6 only for agendaWeek/agendaDay
            }
        },
        eventClick: function(event) {
            eventInfoModal(event);
        },
        eventRender: function(event, element, view) {

        },
        events: [
            {
                title: 'All Day Event',
                start: '2017-11-01'
            },
            {
                title: 'Long Event',
                start: '2017-11-07',
                end: '2017-11-10'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2017-11-09T16:00:00'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2017-11-16T16:00:00'
            },
            {
                title: 'Conference',
                start: '2017-11-11',
                end: '2017-11-13'
            },
            {
                title: 'Meeting',
                start: '2017-11-12T10:30:00',
                end: '2017-11-12T12:30:00'
            },
            {
                title: 'Lunch',
                start: '2017-11-12T12:00:00'
            },
            {
                title: 'Meeting',
                start: '2017-11-12T14:30:00'
            },
            {
                title: 'Happy Hour',
                start: '2017-11-12T17:30:00'
            },
            {
                title: 'Dinner',
                start: '2017-11-12T20:00:00'
            },
            {
                title: 'Birthday Party',
                start: '2017-11-13T07:00:00'
            },
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2017-11-28'
            },
            {
                title: 'All Day Event on the 19th',
                start: '2017-11-19',
                description: 'Comment is working'
            },
            {
                title: '3-Day Event',
                start: '2017-11-20',
                end: '2017-11-22',
                description: 'Comment is working'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2017-11-21T16:00:00'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2017-11-25T16:00:00',
                description: 'Comment is working'
            },
            {
                title: 'Meeting',
                start: '2017-11-19T10:30:00',
                end: '2017-11-19T12:30:00'
            },
            {
                title: 'Lunch',
                start: '2017-11-20T12:00:00'
            },
            {
                title: 'Meeting on the 20th',
                start: '2017-11-20T14:30:00',
                description: 'Comment is working'
            },
            {
                title: 'Happy Hour @ Bistro',
                start: '2017-11-21T17:30:00',
                description: 'WAIT BISTRO HAS HAPPY HOUR WHAT THE F!?'
            },
            {
                title: 'Late Dinner',
                start: '2017-11-22T20:00:00',
                description: 'BECAUSE CS STUDENTS DONT GET TO EAT REGULARLY'
            },
            {
                title: 'Turkeys Birthday Party',
                start: '2017-11-23T07:00:00',
                description: 'Obv thats why we eat turkey to celebrate'
            },
            // areas where "Meeting" must be dropped
            {
                id: 'availableForMeeting',
                start: '2017-10-11T10:00:00',
                end: '2017-10-11T16:00:00',
                rendering: 'background'
            },
            {
                id: 'availableForMeeting',
                start: '2017-11-13T10:00:00',
                end: '2017-11-13T16:00:00',
                rendering: 'background'
            },

            // red areas where no events can be dropped
            {
                id: 'Thanksgiving Break',
                start: '2017-11-23',
                end: '2017-11-28',
                description: 'Background is red because it is holiday',
                overlap: false,
                rendering: 'background',
                color: '#ff9f89'
            },
            {
                start: '2017-11-06',
                end: '2017-11-08',
                overlap: false,
                description: 'Background is red because it is holiday',
                rendering: 'background',
                color: '#ff9f89'
            }
        ]
    });

    // Bind the dates to datetimepicker.
        // You should pass the options you need
    $("#starts-at, #ends-at").datetimepicker();

    $('#btnAdd').on('click', function(e){
        // We don't want this to act as a link so cancel the link action
        e.preventDefault();
        addAppointment();
    });

});