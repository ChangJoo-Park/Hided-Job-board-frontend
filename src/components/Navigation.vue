<template lang="html">
  <div class="">
    <div class="logo-wrapper">
      <router-link to="/" class="brand-logo">HIDED</router-link><br>
      <span class="brand-slogan">Find your position</span>
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
.logo-wrapper {
  padding-left: 60px;
  margin-top: 100px;
  margin-bottom: 100px;
  .brand-logo {
    font-family: 'Dosis';
    font-size: 5rem;
    text-decoration: none;
    color: black;
    line-height: 50px;
    display: inline-block;
  }

  .brand-slogan {
    font-family: 'Open Sans';
    font-size: 1.4rem;
    text-decoration: none;
    color: black;
    line-height: 10px;
    padding-left: 1px;
    display: inline-block;
  }
}
</style>
