<template lang="html">
  <div class="">
    <!-- Post A Job -->
    <PostForm
      v-if="isEdit"
      v-bind:position="newPosition"
      v-bind:company="newCompany"
      v-on:preview="showPreview"
    >
    </Postform>
    <div class="" v-if="!isEdit">
      <PreviewPost
        v-bind:position="newPosition"
        v-bind:company="newCompany"
      ></PreviewPost>
      <div class="row actions-row">
        <div class="col-xs-12 col-sm-6">
          <div class="box">
            <input type="submit" name="name" value="Edit" class="post-button" v-on:click="isEdit= true">
          </div>
        </div>
        <div class="col-xs-12 col-sm-6">
          <div class="box">
            <input type="submit" name="name" value="Submit" class="post-button" v-on:click="saveJob">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostForm from './PostForm'
import PreviewPost from './PreviewPost'

export default {
  components: {
    PostForm,
    PreviewPost
  },
  data () {
    return {
      isEdit: true,
      newPosition: {
        title: '',
        type: 'Full Time',
        category: '',
        description: ''
      },
      newCompany: {
        name: '',
        location: '',
        email: '',
        website: ''
      }
    }
  },
  methods: {
    showPreview () {
      this.isEdit = false
    },
    saveJob (e) {
      e.preventDefault()
      console.log('start Save Job')
      const position = this.newPosition
      position.company = this.newCompany

      this.$store.dispatch('createPosition', position)
      .then((data) => {
        // Change Route
        this.$router.push('/')
      })
    }
  }
}
</script>

<style lang="scss">
.actions-row {
  margin: 0;
  padding: 0;
}
</style>
