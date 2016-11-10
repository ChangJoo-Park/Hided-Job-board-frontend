<template lang="html">
  <div class="">
    <h1>Position List</h1>
    {{positions}}
    <PositionItem></PositionItem>
  </div>
</template>

<script>
import PositionItem from './PositionItem'
import { mapGetters } from 'vuex'

export default {
  components: {
    PositionItem
  },
  computed: mapGetters({
    positions: 'allPositions'
  }),
  created () {
    this.$store.dispatch('getAllPositions')
  }
}
</script>

<style lang="scss">
</style>
