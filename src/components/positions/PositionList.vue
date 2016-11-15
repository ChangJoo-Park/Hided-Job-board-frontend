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
    <div class="loadCompleted" v-if="loadCompleted">
      <p>
        This is our all positions.
      </p>
    </div>
    <div class="loadMore" v-else>
      <button type="button" name="button" class="post-button btn-sm" v-on:click="loadMore" v-show="!loadCompleted">Load More</button>
    </div>
    <div class="row list-footer">
      <div class="col-sm-3">
        <router-link to="/" class="brand-logo-footer">HIDED</router-link>
      </div>
      <div class="col-sm-offset-6 col-sm-3">
        <router-link to="/manage-positions" class="link-footer">Manage Positions</router-link>
      </div>
    </div>
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
      positions: 'allPositions',
      loadCompleted: 'loadCompleted'
    }),
    filterPositions: function () {
      const filterText = this.searchText
      const filteredPositions = this.positions.filter(function (position) {
        return position.title.includes(filterText) ||
               position.company.name.includes(filterText) ||
               position.category.includes(filterText)
      })
      return filteredPositions
    },
    checkLoadAll: function () {
      console.log(this.loadCompleted)
      return this.$store.state.loadCompleted
    }
  },
  created () {
    this.$store.dispatch('getInitialPositions')
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
    },
    loadMore () {
      this.$store.dispatch('getNextPositions')
    }
  }
}
</script>

<style lang="scss">
$base-color: rgb(0,0,0);
$alt-color: rgb(255, 255, 255);
$sm-display: 48rem;
$transition-duration: 0.1s;

.post-wrapper {
  height: 10rem;
  background-color: $alt-color;
  padding-left: 6rem;
  border-bottom: 1px solid black;
  cursor: pointer;
  transition-duration: 0.1s;
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
  transition-duration: $transition-duration;
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
    transition-duration: $transition-duration;
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

.list-footer {
  border-top: 1px solid $base-color;
  margin: 0;
  padding: 0;
  margin-top: 2rem;
  padding-top: 2rem;
  margin-bottom: 2rem;

  .brand-logo-footer {
    padding-left: 6rem;
    font-size: 2rem;
    color: $base-color;
    text-decoration: none;
  }

  .link-footer {
    color: $base-color;
    text-decoration: none;
    font-size: 1.3rem;

    &:hover {
      text-decoration: underline;
    }
  }
}
.loadCompleted {
  font-size: 2rem;
  text-align: center;
}

.loadMore {
  text-align: center;
}
.post-button.btn-sm {
  width: inherit;
  padding: 1rem 2rem;
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
