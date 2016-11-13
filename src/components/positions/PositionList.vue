<template lang="html">
  <div class="position-list">
    {{searchText}}
    <!-- <SearchForm v-bind:searchText="searchText"></SearchForm> -->
    <div class="search-wrapper">
      <input type="text" placeholder="Search" class="search-bar" v-model="searchText">
    </div>
    <PositionItem
      v-for="position in filterPositions"
      v-bind:position="position"
      v-bind:removeActive="removeActive"
    >
    </PositionItem>
  </div>
</template>

<script>
import PositionItem from './PositionItem'
import SearchForm from './SearchForm'
import { mapGetters } from 'vuex'

export default {
  components: {
    PositionItem,
    SearchForm
  },
  data () {
    return {
      searchText: ''
    }
  },
  computed: mapGetters({
    positions: 'allPositions'
  }),
  created () {
    this.$store.dispatch('getAllPositions')
  },
  methods: {
    removeActive () {
      const activatedItem = this.$el.querySelector('.item.active')
      if (activatedItem) {
        activatedItem.classList.remove('active')
      }
    }
  }
}
</script>

<style lang="scss">
</style>
