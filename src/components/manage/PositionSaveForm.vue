<template lang="html">
  <div class="" v-if="isNew">
    <h1>Save Form</h1>
    <form class="" action="index.html" method="post">
      <h2>Company Infomation</h2>
      <div class="">
        <div class="form-group">
          <label for="">Name : </label>
          <input type="text" name="company" v-model="newCompany.name">
        </div>
        <div class="form-group">
          <label for="">Location : </label>
          <input type="text" name="category" v-model="newCompany.location">
        </div>
        <div class="form-group">
          <label for="">Contact Email : </label>
          <input type="text" name="category" v-model="newCompany.email">
        </div>
        <div class="form-group">
          <label for="">Website : </label>
          <input type="text" name="category" v-model="newCompany.website">
        </div>
      </div>

      <hr>
      <h2>Position Infomation</h2>
      <div class="form-group">
        <label for="">Title : </label>
        <input type="text" name="title" v-model="newPosition.title">
      </div>
      <div class="form-group">
        <label for="">Type : </label>
        <select class="" name="type" v-model="newPosition.type">
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
          <option value="Intern">Intern</option>
        </select>
      </div>
      <div class="form-group">
        <label for="">Category : </label>
        <input type="text" name="category" v-model="newPosition.category">
      </div>
      <div class="form-group">
        <label for="">Description : </label>
        <input type="text" name="category" v-model="newPosition.description">
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
