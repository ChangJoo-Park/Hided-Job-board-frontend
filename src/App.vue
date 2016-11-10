<template>
  <div id="app">
    <Navigation></Navigation>
    <SearchForm></SearchForm>
    <PositionList></PositionList>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import SearchForm from './components/SearchForm'
import PositionList from './components/positions/PositionList'

export default {
  name: 'app',
  components: {
    Navigation,
    SearchForm,
    PositionList
  }
}
</script>

<style>
#app {}
</style>
