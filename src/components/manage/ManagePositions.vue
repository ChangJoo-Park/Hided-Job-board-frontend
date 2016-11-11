<template lang="html">
  <div class="">
    <div class="" v-if="!isNew">
      <button type="button" name="button" v-on:click="createSaveForm">Create Save Form</button>
    </div>
    <!-- Save Form -->
    <SaveForm
      :isNew='isNew'
      :newPosition='newPosition'
      :newCompany='newCompany'
    >
      <div class="form-group" slot="actions">
        <button type="button" name="button" v-on:click="createPosition()">Save</button>
        <button type="button" name="button" v-on:click="resetSelectedPosition()">Cancel</button>
      </div>
    </SaveForm>
    <!-- Edit Form -->
    <EditForm v-bind:position="selectedPosition">
      <div class="form-group" slot="actions">
        <button type="button" name="button" v-if="selectedPosition" v-on:click="updatePosition(selectedPosition)">Update</button>
        <button type="button" name="button" v-on:click="resetSelectedPosition()">Cancel</button>
      </div>
    </EditForm>
    <hr>
    <h1>Position Lists</h1>
    <PositionTable
      :positions="positions"
      :selectPosition="selectPosition"
      :selectedPosition="selectedPosition"
      :resetSelectedPosition="resetSelectedPosition"
      >
      </PositionTable>
  </div>
</template>

<script>
import SaveForm from './PositionSaveForm.vue'
import EditForm from './PositionEditForm.vue'
import PositionTable from './PositionTable.vue'

import { mapGetters } from 'vuex'

export default {
  components: {
    SaveForm,
    EditForm,
    PositionTable
  },

  computed: mapGetters({
    positions: 'allPositions'
  }),

  data () {
    return {
      selectedPosition: '',
      isNew: false,
      newPosition: {
        title: '',
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
    createSaveForm () {
      this.isNew = true
      this.selectedPosition = ''
    },
    selectPosition (position) {
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
      .then((data) => {
        console.log('after create position')
        console.dir(data)
      })
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
</style>
