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
    events: [] 
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
      if (confirm(`イベント '${event.name}' を削除しますか？`)) {
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