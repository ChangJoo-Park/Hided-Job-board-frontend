<template lang="html">
  <div class="" v-if="position">
    <h1>Edit Form</h1>
    <form class="">
      <h2>Company Infomation</h2>
      <div class="">
        <div class="form-group">
          <label for="company-name">Name : </label>
          <input id="company-name" type="text" name="company" v-model="position.company.name">
        </div>
        <div class="form-group">
          <label for="company-location">Location : </label>
          <input id="company-location" type="text" name="category" v-model="position.company.location">
        </div>
        <div class="form-group">
          <label for="company-email">Contact Email : </label>
          <input id="company-email" type="text" name="category" v-model="position.company.email">
        </div>
        <div class="form-group">
          <label for="company-website">Website : </label>
          <input id="company-website" type="text" name="category" v-model="position.company.website">
        </div>
      </div>

      <hr>

      <h2>Position Infomation</h2>
      <div class="form-group">
        <label for="position-title">Title : </label>
        <input id="position-title" type="text" name="title" v-model="position.title">
      </div>
      <div class="form-group">
        <label for="position-type">Type : </label>
        <select id="position-type" class="" name="type" v-model="position.type">
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
          <option value="Intern">Intern</option>
        </select>
      </div>
      <div class="form-group">
        <label for="position-category">Category : </label>
        <input id="position-category" type="text" name="category" v-model="position.category">
      </div>
      <div class="form-group">
        <label for="position-description">Description : </label>
        <textarea id="position-description" type="text" name="category" v-model="position.description"></textarea>
      </div>
      <slot name="actions"></slot>
    </form>
  </div>
</template>

<script>
export default {
  props: ['position']
}
</script>

<style lang="scss">
</style>
