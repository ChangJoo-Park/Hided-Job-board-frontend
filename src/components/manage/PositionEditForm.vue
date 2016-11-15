<template lang="html">
  <div class="">
    <PositionForm
      v-bind:position="position"
      v-bind:company="position.company"
    >
      <h1 slot="title">Update Position</h1>
      <div class="form-group button-wrapper" slot="actions">
        <button type="button" name="button" v-if="position" v-on:click="$emit('update',position)">Update</button>
        <button type="button" name="button" v-on:click="$emit('cancel')">Cancel</button>
      </div>
    </PositionForm>
  </div>
</template>

<script>
import PositionForm from './PositionForm'

export default {
  props: ['position'],
  components: {
    PositionForm
  }
}
</script>

<style lang="scss">
</style>
