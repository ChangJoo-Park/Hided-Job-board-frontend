<template lang="html">
  <div class="" v-if="isNew">
    <h1>Save Form</h1>
    <form class="">
      <h2>Company Infomation</h2>
      <div class="">
        <div class="form-group">
          <label for="company-name">Name : </label>
          <input id="company-name" type="text" name="company" v-model="newCompany.name">
        </div>
        <div class="form-group">
          <label for="company-location">Location : </label>
          <input id="company-location" type="text" name="category" v-model="newCompany.location">
        </div>
        <div class="form-group">
          <label for="company-email">Contact Email : </label>
          <input id="company-email" type="text" name="category" v-model="newCompany.email">
        </div>
        <div class="form-group">
          <label for="company-website">Website : </label>
          <input id="company-website" type="text" name="category" v-model="newCompany.website">
        </div>
      </div>

      <hr>

      <h2>Position Infomation</h2>
      <div class="form-group">
        <label for="position-title">Title : </label>
        <input id="position-title" type="text" name="title" v-model="newPosition.title">
      </div>
      <div class="form-group">
        <label for="position-type">Type : </label>
        <select id="position-type" class="" name="type" v-model="newPosition.type">
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
          <option value="Intern">Intern</option>
        </select>
      </div>
      <div class="form-group">
        <label for="position-category">Category : </label>
        <input id="position-category" type="text" name="category" v-model="newPosition.category">
      </div>
      <div class="form-group">
        <label for="position-description">Description : </label>
        <textarea id="position-description" type="text" name="category" v-model="newPosition.description"></textarea>
      </div>
      <slot name="actions"></slot>
    </form>
  </div>
</template>

<script>
export default {
  props: ['isNew', 'newPosition', 'newCompany']
}
</script>

<style lang="scss">
</style>
