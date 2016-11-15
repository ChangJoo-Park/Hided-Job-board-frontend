<template lang="html">
  <div class="">
    <table class="table">
      <thead>
        <tr>
          <th>Job Title</th>
          <th>Type</th>
          <th>Category</th>
          <th>Company</th>
          <th>Location</th>
          <th>Email</th>
          <th>Website</th>
          <th>
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="position in positions" class="position-row">
          <td>{{position.title}}</td>
          <td>{{position.type}}</td>
          <td>{{position.category}}</td>
          <td>{{position.company.name}}</td>
          <td>{{position.company.location}}</td>
          <td>{{position.company.email}}</td>
          <td>{{position.company.website}}</td>
          <td>
            <button type="button" v-on:click="$emit('selectPosition', position)">Edit</button>
            <button type="button" v-on:click="deletePosition(position)">X</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
export default {
  props: ['positions'],
  methods: {
    deletePosition (position) {
      this.$emit('resetSelection')
      // 확인
      this.$store.dispatch('deletePosition', position)
    }
  }
}
</script>

<style lang="scss">
  .table {
    width: 100%;
    font-size: 1.3rem;
    th, td {
        padding: 15px;
        text-align: left;
        border-bottom: 1px solid #ddd;
    }
    th {
      text-align: center;
      height: 50px;
    }
    td {
        height: 50px;
        vertical-align: bottom;
    }

    tbody {

    }
    tr {

    }
  }
</style>
