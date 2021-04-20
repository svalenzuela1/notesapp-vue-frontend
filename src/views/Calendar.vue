<template>
  <div class="calendar">
    <span>
        <b-field>
            <b-switch v-model="bars">Bars</b-switch>
        </b-field>
        <b-datepicker
            inline
            v-model="date"
            :events="events"
            :indicators="indicators"
        >
        </b-datepicker>
    </span>
  </div>
</template>

<script>
const thisMonth = new Date().getMonth()

export default{
  name: 'Calendar',
  //data for calendar
  computed: {
    indicators() {
      return this.bars ? 'bars' : 'dots'
    }
  },
  data() {
    return {
      date: new Date(2021, thisMonth, 1),
      events: [
        new Date(2021, thisMonth, 2),
        new Date(2021, thisMonth, 6),
        {
          date: new Date(2021, thisMonth, 6),
          type: 'is-info'
        },
        {
          date: new Date(2021, thisMonth, 8),
          type: 'is-danger'
        },
        {
          date: new Date(2021, thisMonth, 10),
          type: 'is-success'
        },
        {
          date: new Date(2021, thisMonth, 10),
          type: 'is-link'
        },
        new Date(2021, thisMonth, 12),
        {
          date: new Date(2021, thisMonth, 12),
          type: 'is-warning'
        },
        {
          date: new Date(2021, thisMonth, 16),
          type: 'is-danger'
        },
        new Date(2021, thisMonth, 20),
        {
          date: new Date(2021, thisMonth, 29),
          type: 'is-success'
        },
        {
          date: new Date(2021, thisMonth, 29),
          type: 'is-warning'
        },
        {
          date: new Date(2021, thisMonth, 29),
          type: 'is-info'
        }
      ],
      bars: false
    }
  }
}
</script>

<style>
.calendar{
  margin-bottom: 50px;
}

</style>
