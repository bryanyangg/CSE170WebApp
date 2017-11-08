$(document).ready(function(){
    // Data Picker Initialization
    $('.datepicker').pickadate({

        // Strings and translations
        monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        weekdaysFull: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        showMonthsShort: true,
        showWeekdaysShort: true,

        // Buttons
        today: 'Today',
        clear: 'Clear',
        close: 'Close',

        // Accessibility labels
        labelMonthNext: 'Next month',
        labelMonthPrev: 'Previous month',
        labelMonthSelect: 'Select a month',
        labelYearSelect: 'Select a year',

        // Formats
        format: 'd mmmm, yyyy',
        formatSubmit: 'yyyy/mm/dd',
        hiddenPrefix: 'prefix__',
        hiddenSuffix: '_submit',
        hiddenName: '__suffix',

        // Editable input
        editable: true,

        // Dropdown selectors
        selectYears: true,
        selectMonths: true,

        // First day of the week
        firstDay: undefined,

        // Date limits
        min: new Date(2000,3,20),
        max: new Date(2999,7,25),

        // Disable dates
        disable: undefined,

        // Root picker container
        container: undefined,

        // Hidden input container
        containerHidden: false,

        // Close on a user action
        closeOnSelect: true,
        closeOnClear: true,

        // Events
        onStart: function() {
            console.log('Hello there :)')
        },
        onRender: function() {
            console.log('Whoa.. rendered anew')
        },
        onOpen: function() {
            console.log('Opened up')
        },
        onClose: function() {
            console.log('Closed now')
        },
        onStop: function() {
            console.log('See ya.')
        },
        onSet: function(context) {
            console.log('Just set stuff:', context)
        },

        // Classes
        klass: {

            // The element states
            input: 'picker__input',
            active: 'picker__input--active',

            // The root picker and states *
            picker: 'picker',
            opened: 'picker--opened',
            focused: 'picker--focused',

            // The picker holder
            holder: 'picker__holder',

            // The picker frame, wrapper, and box
            frame: 'picker__frame',
            wrap: 'picker__wrap',
            box: 'picker__box',

            // The picker header
            header: 'picker__header',

            // Month navigation
            navPrev: 'picker__nav--prev',
            navNext: 'picker__nav--next',
            navDisabled: 'picker__nav--disabled',

            // Month & year labels
            month: 'picker__month',
            year: 'picker__year',

            // Month & year dropdowns
            selectMonth: 'picker__select--month',
            selectYear: 'picker__select--year',

            // Table of dates
            table: 'picker__table',

            // Weekday labels
            weekdays: 'picker__weekday',

            // Day states
            day: 'picker__day',
            disabled: 'picker__day--disabled',
            selected: 'picker__day--selected',
            highlighted: 'picker__day--highlighted',
            now: 'picker__day--today',
            infocus: 'picker__day--infocus',
            outfocus: 'picker__day--outfocus',

            // The picker footer
            footer: 'picker__footer',

            // Today, clear, & close buttons
            buttonClear: 'picker__button--clear',
            buttonClose: 'picker__button--close',
            buttonToday: 'picker__button--today'
        }

    });
});