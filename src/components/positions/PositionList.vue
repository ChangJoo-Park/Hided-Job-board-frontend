<template lang="html">
  <div class="position-list">
    <div class="search-wrapper">
      <input type="text" placeholder="Search" class="search-bar" v-model="searchText">
    </div>
    <div class="post-wrapper">
      <router-link to="/post-a-job" class="post-link">Post A Job</router-link>
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
  computed: {
    ...mapGetters({
      positions: 'allPositions'
    }),
    filterPositions: function () {
      const filterText = this.searchText
      const filteredPositions = this.positions.filter(function (position) {
        return position.title.includes(filterText) ||
               position.company.name.includes(filterText) ||
               position.category.includes(filterText)
      })
      return filteredPositions
    }
  },
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
$base-color: rgb(0,0,0);
$alt-color: rgb(255, 255, 255);

.post-wrapper {
  height: 10rem;
  background-color: $alt-color;
  padding-left: 6rem;
  border-bottom: 1px solid black;

  .post-link {
    line-height: 10rem;
    color: $base-color;
    text-decoration: none;
    font-size: 4rem;
  }

  &:hover {
    background-color: $base-color;

    .post-link {
      color: $alt-color;
    }
  }
}
</style>
