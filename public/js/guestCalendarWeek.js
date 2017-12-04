function eventModal(event){

    $("#startTime").html(moment(event.start).format('MMM Do h:mm A'));
    $("#endTime").html(moment(event.end).format('MMM Do h:mm A'));
    $("#eventInfo").html(event.description);
    //$("#eventLink").attr('href', event.url);
    $("#eventContentModal").dialog({ modal: true, title: event.title, width:350});

}

function gaddAppointment(){
    alert("Add Appointment Form Submitted!");
    $("#mygwModal").modal('hide');

    //console.log($('#datepicker').val())
    console.log($('#gstarts-at').val());
    console.log($('#gends-at').val());

    $("#gcalendar").fullCalendar('renderEvent',
        {
            title: $('#gdefaultForm-firstName').val() +', ' + $('#gdefaultForm-lastName').val() + ', ' + $('#gcomment').val(),
            start: new Date($('#gstarts-at').val()),
            end: new Date($('#gends-at').val()),
            allDay: ($('#gapptAllDay').val() == "Yes"),
            description: 'First Name: ' + $('#gdefaultForm-firstName').val() + '<br />' +
                        'Last Name: ' + $('#gdefaultForm-lastName').val() + '<br />' +
                        'Email: ' + $('#gdefaultForm-email').val() + '<br />' +
                        'Phone Number: ' + $('#gdefaultForm-number').val() + '<br />' +
                        'Comment: ' + $('#gcomment').val(),

        },
    true);

    $("#gweekCalendar").fullCalendar('renderEvent',
        {
            title: $('#gdefaultForm-firstName').val() +', ' + $('#gdefaultForm-lastName').val() + ', ' + $('#gcomment').val(),
            start: new Date($('#gstarts-at').val()),
            end: new Date($('#gends-at').val()),
            allDay: ($('#gapptAllDay').val() == "Yes"),
            description: 'First Name: ' + $('#gdefaultForm-firstName').val() + '<br />' +
                        'Last Name: ' + $('#gdefaultForm-lastName').val() + '<br />' +
                        'Email: ' + $('#gdefaultForm-email').val() + '<br />' +
                        'Phone Number: ' + $('#gdefaultForm-number').val() + '<br />' +
                        'Comment: ' + $('#gcomment').val(),
        },
    true);

    $('#gcalendar').fullCalendar('unselect');
    $('#gweekCalendar').fullCalendar('unselect');
    
}

$(document).ready(function(){

    $('#gaddBtn').on('click', function() {
        $('#gweekCalendar').fullCalendar('select');
    }); 

    $('#gweekCalendar').fullCalendar({
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
        defaultDate: '2017-12-03',
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
            $('#mygwModal').modal('show');
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
                start: '2017-12-01'
            },
            {
                title: 'Long Event',
                start: '2017-12-07',
                end: '2017-12-10'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2017-12-09T16:00:00'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2017-12-16T16:00:00'
            },
            {
                title: 'Conference',
                start: '2017-12-12',
                end: '2017-12-13'
            },
            {
                title: 'Meeting',
                start: '2017-12-12T10:30:00',
                end: '2017-12-12T12:30:00'
            },
            {
                title: 'Lunch',
                start: '2017-12-12T12:00:00'
            },
            {
                title: 'Appointment with Peter',
                start: '2017-12-12T14:30:00'
            },
            {
                title: 'Appointment with Harry',
                start: '2017-12-12T17:30:00'
            },
            {
                title: 'Dinner with John',
                start: '2017-12-12T20:00:00'
            },
            {
                title: 'Appointment with Joseph',
                start: '2017-12-13T07:00:00'
            },
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2017-12-28'
            },
            {
                title: 'All Day Event on the 19th',
                start: '2017-12-19',
                description: 'Comment is working'
            },
            {
                title: '3-Day Event',
                start: '2017-12-20',
                end: '2017-12-22',
                description: 'Comment is working'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2017-12-21T16:00:00'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2017-12-25T16:00:00',
                description: 'Comment is working'
            },
            {
                title: 'Meeting',
                start: '2017-12-19T10:30:00',
                end: '2017-12-19T12:30:00'
            },
            {
                title: 'Lunch',
                start: '2017-12-20T12:00:00'
            },
            {
                title: 'Meeting on the 20th',
                start: '2017-12-20T14:30:00',
                description: 'Comment is working'
            },
            {
                title: 'Happy Hour @ Bistro',
                start: '2017-12-21T17:30:00',
                description: 'WAIT BISTRO HAS HAPPY HOUR WHAT THE F!?'
            },
            {
                title: 'Late Dinner with CFO',
                start: '2017-12-22T20:00:00',
                description: 'BECAUSE CS STUDENTS DONT GET TO EAT REGULARLY'
            },
            {
                title: 'Santas Birthday Party',
                start: '2017-12-23T07:00:00',
                description: 'Chicken Nugget Christmas tree'
            },
            // areas where "Meeting" must be dropped
            {
                id: 'availableForAppointment',
                start: '2017-12-11T10:00:00',
                end: '2017-12-11T16:00:00',
                rendering: 'background'
            },
            {
                id: 'availableForAppointment',
                start: '2017-12-13T10:00:00',
                end: '2017-12-13T16:00:00',
                rendering: 'background'
            },

            // red areas where no events can be dropped
            {
                id: 'Christmas Break',
                start: '2017-12-23',
                end: '2017-12-28',
                description: 'Background is red because it is holiday',
                overlap: false,
                rendering: 'background',
                color: '#ff9f89'
            },
            {
                start: '2017-12-06',
                end: '2017-12-08',
                overlap: false,
                description: 'Background is red because it is holiday',
                rendering: 'background',
                color: '#ff9f89'
            }
        ]
    });

    // Bind the dates to datetimepicker.
        // You should pass the options you need
    $("#gstarts-at, #gends-at").datetimepicker();

    $('#gbtnAdd').on('click', function(e){
        // We don't want this to act as a link so cancel the link action
        e.preventDefault();
        gaddAppointment();
    });

});