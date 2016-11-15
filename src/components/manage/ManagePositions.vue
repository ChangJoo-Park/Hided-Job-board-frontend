<template lang="html">
  <div class="">
    <div class="button-wrapper" v-if="!isNew">
      <button type="button" name="button" v-on:click="createSaveForm">New Position</button> |
    </div>
    <!-- Fake -->
    <div class="button-wrapper">
      <input type="number" name="dummy" min="1" max="100" v-model="dummyNumber">
      <button type="button" name="button" v-on:click="createDummy">Generate Dummy</button>
    </div>
    <div class="container">
      <!-- Save Form -->
      <SaveForm
        :isNew='isNew'
        :newPosition='newPosition'
        :newCompany='newCompany'
        v-on:update="createPosition()"
        v-on:cancel="resetSelectedPosition()"
      >
      </SaveForm>
      <!-- Edit Form -->
      <EditForm
        v-bind:position="selectedPosition"
        v-on:cancel="resetSelectedPosition()"
        v-on:update="updatePosition(selectedPosition)"
      >
      </EditForm>
    </div>
    <p>

    </p>
    <h1 class="header">Manage Positions</h1>
    <div class="search-wrapper">
      <input type="text" placeholder="Search" class="search-bar" v-model="searchText">
    </div>
    <PositionTable
      :positions="filterPositions"
      v-on:selectPosition="selectPosition"
      v-on:resetSelection="resetSelectedPosition"
      >
      </PositionTable>
  </div>
</template>

<script>
import SaveForm from './PositionSaveForm.vue'
import EditForm from './PositionEditForm.vue'
import PositionTable from './PositionTable.vue'
import faker from 'faker'
import { mapGetters } from 'vuex'

export default {
  components: {
    SaveForm,
    EditForm,
    PositionTable
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
               position.category.includes(filterText) ||
               position.type.includes(filterText)
      })
      return filteredPositions
    }
  },
  data () {
    return {
      searchText: '',
      dummyNumber: 0,
      selectedPosition: '',
      isNew: false,
      newPosition: {
        title: '',
        salary: '',
        type: '',
        category: '',
        description: ''
      },
      newCompany: {
        name: '',
        location: '',
        email: '',
        website: ''
      }
    }
  },

  created () {
    this.$store.dispatch('getAllPositions')
  },

  methods: {
    createDummy () {
      if (this.dummyNumber <= 0) {
        return
      }
      for (let i = 0; i < this.dummyNumber; i++) {
        const currency = faker.finance.currencySymbol()
        const types = ['Full Time', 'Part Time', 'Intern']
        const type = types[Math.floor(Math.random() * types.length)]
        const createdAt = faker.date.past()
        const position = {
          title: faker.name.jobTitle(),
          salary: `${currency}${faker.random.number()} - ${currency}${faker.random.number()}`,
          type: type,
          category: faker.name.jobType(),
          description: faker.lorem.paragraphs(),
          company: {
            name: faker.company.companyName(),
            location: `${faker.address.city()}, ${faker.address.country()}`,
            email: faker.internet.email(),
            website: faker.internet.url()
          },
          createdAt: createdAt
        }
        this.$store.dispatch('createPosition', position)
      }

      this.dummyNumber = 0
    },
    createSaveForm () {
      this.isNew = true
      this.selectedPosition = ''
    },
    selectPosition (position) {
      this.isNew = false
      this.selectedPosition = position
    },
    resetSelectedPosition () {
      this.selectedPosition = ''
      this.isNew = false
    },
    createPosition () {
      const position = this.newPosition
      position.company = this.newCompany
      this.$store.dispatch('createPosition', position)
    },
    updatePosition (position) {
      this.$store.dispatch('updatePosition', position)
      .then((data) => {
        this.resetSelectedPosition()
      })
    }
  }
}
</script>

<style lang="scss">
.button-wrapper {
  display: inline-block;
  button {
    border: 1px solid black;
    border-radius: 0;
    background-color: black;
    color: white;
  }

  input[type='number'] {
    background-color: black;
    color: white;
    border: 1px solid black;

  }
}
</style>
