new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data: () => ({
    focus: '',
    menu: false,
    colorMenu: false,
    newEvent: {
      name: '',
      date: '',
      color: ''
    },
    events: [] // ここを空の配列にします
  }),
  methods: {
    addEvent() {
      if (this.newEvent.name && this.newEvent.date && this.newEvent.color) {
        this.events.push({
          name: this.newEvent.name,
          start: this.newEvent.date,
          end: this.newEvent.date,
          color: this.newEvent.color
        });
        this.newEvent.name = '';
        this.newEvent.date = '';
        this.newEvent.color = '';
      }
    },
    onEventClick({ nativeEvent, event }) {
      if (confirm(`Are you sure you want to delete the event '${event.name}'?`)) {
        this.events = this.events.filter(e => e !== event);
      }
    },
    prevMonth() {
      this.$refs.calendar.prev();
    },
    nextMonth() {
      this.$refs.calendar.next();
    }
  }
});