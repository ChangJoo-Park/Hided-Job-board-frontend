<template>
  <div id="app">
    <Navigation></Navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from './components/Navigation'

export default {
  name: 'app',
  components: {
    Navigation
  }
}
</script>

<style lang="scss">
@import url('../node_modules/flexboxgrid/dist/flexboxgrid.css');
$logo-font-family: 'Dosis', serif;
$base-font-family: 'Open Sans', sans-serif;
$base-font-size: 10px;
$base-color: rgb(0,0,0);
$alt-color: rgb(255, 255, 255);
$gray-color: rgb(191, 191, 191);
$gray-color-hover: rgba(191, 191, 191, 0.5);
$light-gray-color: rgb(155, 155, 155);

* {
  box-sizing: border-box;
}

html {
  font-size: $base-font-size;
  color: $base-color;
  font-family: $base-font-family;
}

body {
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

h1 {
  font-size: 5rem;
}

h2 {
  font-size: 4.2rem;
}

h3 {
  font-size: 3.6rem;
}

h4 {
  font-size: 3.0rem;
}

h5 {
  font-size: 2.4rem;
}

h6 {
  font-size: 1.5rem;
}

#app {
}
</style>
