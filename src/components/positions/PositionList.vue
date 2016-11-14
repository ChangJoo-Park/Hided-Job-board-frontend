<template lang="html">
  <div class="position-list">
    <div class="search-wrapper">
      <input type="text" placeholder="Search" class="search-bar" v-model="searchText">
    </div>
    <div class="post-wrapper" v-on:click="routeToPostJob()">
      <router-link to="/post-a-job" class="post-link">Post a Job</router-link>
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
import { mapGetters } from 'vuex'

export default {
  components: {
    PositionItem
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
    routeToPostJob () {
      this.$router.push('/post-a-job')
    },
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
$sm-display: 48rem;

.post-wrapper {
  height: 10rem;
  background-color: $alt-color;
  padding-left: 6rem;
  border-bottom: 1px solid black;
  cursor: pointer;
  transition-duration: 0.2s;
  transition-property: all;
  transition-timing-function: ease-in;

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

.search-wrapper {
  height: 10rem;
  width: 100%;
  background-color: $base-color;
  cursor: text;
  transition-duration: 0.2s;
  transition-property: all;
  transition-timing-function: ease-in;

  .search-bar {
    cursor: text;
    width: 100%;
    height: 100%;
    line-height: 80%;
    padding-left: 6rem;
    font-size: 4rem;
    border: none;
    border-bottom: 1px solid $base-color;
    color: white;
    transition-duration: 0.2s;
    transition-property: all;
    transition-timing-function: ease-in;
    background-color: black;

    &:focus {
      cursor: text;
      background-color: $alt-color;
      color: $base-color;
      outline: none;
    }

    &:focus + .form-icon {
      color: $base-color;
    }
  }

  .search-bar::-webkit-input-placeholder {
    color: $alt-color;
  }
}
@media (max-width: $sm-display) {
  .search-wrapper, .post-wrapper {
      height: 6rem;

      font-size: 2rem;
  }

  .search-wrapper .search-bar {
    height: 6rem;
    padding-left: 3rem;
    font-size: 2rem;
  }


  .post-wrapper {
    padding-left: 3rem;
    line-height: 6rem;
    .post-link {
      height: 3rem;
      font-size: 2rem;
      line-height: 3rem;
    }
  }
}
</style>
