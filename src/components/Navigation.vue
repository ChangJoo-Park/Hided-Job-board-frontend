<template lang="html">
  <div class="">
    <div class="logo-wrapper">
      <router-link to="/" class="brand-logo">HIDED</router-link>
      <p>Find your position</p>
    </div>
    <div class="admin-only" v-show="isAdmin">
      <router-link to="/manage-positions">Manage Positions</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isAdmin: false
    }
  }
}
</script>

<style lang="scss">
</style>
