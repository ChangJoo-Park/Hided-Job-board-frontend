<template lang="html">
  <div class="">
    <PositionForm
      v-if="isNew"
      v-bind:position="newPosition"
      v-bind:company="newCompany"
    >
      <h1 slot="title">Save Position</h1>
      <div class="form-group button-wrapper" slot="actions">
        <button type="button" name="button" v-on:click="$emit('create')">Save</button>
        <button type="button" name="button" v-on:click="$emit('cancel')">Cancel</button>
      </div>    </PositionForm>
  </div>
</template>
<script>
import PositionForm from './PositionForm'

export default {
  props: ['isNew', 'newPosition', 'newCompany'],
  components: {
    PositionForm
  }
}
</script>

<style lang="scss">
</style>
