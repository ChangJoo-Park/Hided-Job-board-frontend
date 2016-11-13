<template lang="html">
  <div class="search-wrapper">
    <input type="text" placeholder="Search" class="search-bar" v-model="searchText">
  </div>
</template>

<script>
export default {
  props: ['searchText']
}
</script>

<style lang="scss">
$base-color: rgb(0,0,0);
$alt-color: rgb(255, 255, 255);
$sm-display: 48rem;

.search-wrapper {
  height: 10rem;
  width: 100%;
  background-color: $base-color;
  cursor: text;
  transition-duration: 0.2s;
  transition-property: all;
  transition-timing-function: ease-in;

  .search-bar {
    cursor: text;
    width: 100%;
    height: 100%;
    line-height: 80%;
    padding-left: 6rem;
    font-size: 4rem;
    border: none;
    border-bottom: 1px solid $base-color;
    color: white;
    transition-duration: 0.2s;
    transition-property: all;
    transition-timing-function: ease-in;
    background-color: black;

    &:focus {
      cursor: text;
      background-color: $alt-color;
      color: $base-color;
      outline: none;
    }

    &:focus + .form-icon {
      color: $base-color;
    }
  }

  .search-bar::-webkit-input-placeholder {
    color: $alt-color;
  }
}
@media (max-width: $sm-display) {
.search-wrapper .search-bar {
  height: 6rem;
    padding-left: 3rem;
    font-size: 2rem;
  }
}
</style>
