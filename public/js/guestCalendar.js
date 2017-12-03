function eventInfoModal(event){
    //element.attr('href', 'javascript:void(0);');

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
    $('#weekCalendar').fullCalendar('unselect');
    
}

$(document).ready(function(){
    
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month, listMonth'
        },
        buttonText: {
            today: 'Back to Today',
            month: 'Month View',
            listMonth: 'Month List View'
        }, 
        defaultDate: '2017-12-03',
        navLinks: true, // can click day/week names to navigate views
        businessHours: true, // display business hours
        selectable: true,
        selectHelper: true,
        select: function(start, end, allDay) {
            $('#myModal').modal('show');
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

});