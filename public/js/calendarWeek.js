function eventModal(event){

    $("#startTime").html(moment(event.start).format('MMM Do h:mm A'));
    $("#endTime").html(moment(event.end).format('MMM Do h:mm A'));
    $("#eventInfo").html(event.description);
    //$("#eventLink").attr('href', event.url);
    $("#eventContentModal").dialog({ modal: true, title: event.title, width:350});

}

function eventRemoveModal(event, element, view){
    
    element.attr('href', 'javascript:void(0);');
    element.click(function() {
      //set the modal values and open
      $('#eventTitle').html(event.title);
  
      // Rebind the Remove button click handler
      $("#removeBtn").off('click').on('click', function(e) {
          $('#weekCalendar').fullCalendar('removeEvents', event._id);
          $("#eventContentModal").dialog('destroy');
          //$("#eventContentModal").siblings('.ui-dialog-titlebar').remove();
          console.log('delete event');
      });
  
      $('#modalRemove').modal();
    });
}

$(document).ready(function(){
    
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
        defaultDate: '2017-11-15',
        navLinks: true, // can click day/week names to navigate views
        businessHours: true, // display business hours
        selectable: true,
        selectHelper: true,
        select: function(start, end) {
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
            
            if (view.name == 'listDay') {
                element.find(".fc-list-item-time").append("<div class='ibox-tools'><a style='background-color: transparent; margin-right: 10px' class='pull-left'><i class='fa fa-times delBtn'></i></a></div>");
            } else {
                element.find(".fc-content").prepend("<div class='ibox-tools'><a style='background-color: transparent; margin-right: 10px' class='pull-left'><i class='fa fa-times delBtn'></i></a></div>");
            }

            element.find(".delBtn").on('click', function() {
                eventRemoveModal(event, element, view);
                /*
                $('#calendar').fullCalendar('removeEvents',event._id);
                console.log('delete event');
                */
            });
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
                start: '2017-11-24',
                end: '2017-11-28',
                overlap: false,
                rendering: 'background',
                color: '#ff9f89'
            },
            {
                start: '2017-11-06',
                end: '2017-11-08',
                overlap: false,
                rendering: 'background',
                color: '#ff9f89'
            }
        ]
    });

});