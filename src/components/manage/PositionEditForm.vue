<template lang="html">
  <div class="" v-if="position">
    <h1>Edit Form</h1>
    <form class="" action="index.html" method="post">
      <h2>Company Infomation</h2>
      <div class="">
        <div class="form-group">
          <label for="">Name : </label>
          <input type="text" name="company" value="" v-model="position.company.name">
        </div>
        <div class="form-group">
          <label for="">Location : </label>
          <input type="text" name="category" value="" v-model="position.company.location">
        </div>
        <div class="form-group">
          <label for="">Contact Email : </label>
          <input type="text" name="category" value="" v-model="position.company.email">
        </div>
        <div class="form-group">
          <label for="">Website : </label>
          <input type="text" name="category" value="" v-model="position.company.website">
        </div>
      </div>

      <hr>
      <h2>Position Infomation</h2>
      <div class="form-group">
        <label for="">Title : </label>
        <input type="text" name="title" v-model="position.title">
      </div>
      <div class="form-group">
        <label for="">Type : </label>
        <select class="" name="type" v-model="position.type">
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
          <option value="Intern">Intern</option>
        </select>
      </div>
      <div class="form-group">
        <label for="">Category : </label>
        <input type="text" name="category" value="" v-model="position.category">
      </div>
      <div class="form-group">
        <label for="">Description : </label>
        <input type="text" name="category" value="" v-model="position.description">
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
