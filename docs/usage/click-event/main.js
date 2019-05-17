new Vue({
    el: '#app',
    data: () => ({
        timezones: [
            '-12:00', '-11:00', '-10:00', '-09:00', '-08:00', '-07:00',
            '-06:00', '-05:00', '-04:00', '-03:30', '-03:00', '-02:00',
            '-01:00', '±00:00', '+01:00', '+02:00', '+03:00', '+03:30',
            '+04:00', '+04:30', '+05:00', '+05:30', '+05:45', '+06:00',
            '+06:30', '+07:00', '+08:00', '+08:30', '+09:00', '+09:30',
            '+10:00', '+11:00', '+11:30', '+12:00', '+12:45', '+13:00', '+14:00',
        ],
    
        timezone: '+08:00',
        datetime: 'Today @ 17:30 PM',
        reminder: '3 Minutes Before',
    }),
    methods: {
        getTriggerTime() {
            return 'timezone=' + this.timezone + '; datetime=' + this.datetime + '; reminder=' + this.reminder;
        },
    },
});
