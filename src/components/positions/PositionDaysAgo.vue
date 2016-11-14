<template lang="html">
  <span>{{createdFromNow()}}</span>
</template>

<script>
import moment from 'moment'

export default {
  props: ['createdAt'],
  methods: {
    createdFromNow () {
      return moment(this.createdAt).fromNow()
    }
  }
}
</script>

<style lang="css">
</style>
