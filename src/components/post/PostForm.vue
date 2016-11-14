<template lang="html">
  <div class="">
    <h1 class="header">Post a Job</h1>
    <form class="" v-on:submit="validateBeforeSubmit" class="post-job">
      <!-- Company Name -->
      <div class="row">
        <div class="col-sm-12 form-field">
          <div class="row">
            <div class="col-xs-12 col-sm-3 form-label">
              <label for="company-name">Company</label>
            </div>
            <div class="col-xs-12 col-sm-9 form-control">
              <input
                type="text"
                id="company-name"
                name="company-name"
                v-model="company.name"
                v-validate
                data-rules="required"
                placeholder="Yet Another Good Company"
              >
            </div>
          </div>
          <div class="row hint-row">
            <div class="col-xs-12 col-sm-offset-3 col-sm-9">
              <transition name="fade">
                <p v-show="errors.has('company-name')">{{errors.first('company-name')}}</p>
              </transition>
            </div>
          </div>
        </div>
      </div>
      <!-- Job Title -->
      <div class="row">
        <div class="col-sm-12 form-field">
          <div class="row">
            <div class="col-xs-12 col-sm-3 form-label">
              <label for="job-title">Job Title</label>
            </div>
            <div class="col-xs-12 col-sm-9 form-control">
              <input
                type="text"
                id="job-title"
                name="job-title"
                v-model="position.title"
                v-validate
                data-rules="required"
                placeholder="Savior"
              >
            </div>
          </div>
          <div class="row hint-row">
            <div class="col-xs-12 col-sm-offset-3 col-sm-9">
              <transition name="fade">
              <p v-show="errors.has('job-title')">{{errors.first('job-title')}}</p>
              </transition>
            </div>
          </div>
        </div>
      </div>
      <!-- Job Salary -->
      <div class="row">
        <div class="col-sm-12 form-field">
          <div class="row">
            <div class="col-xs-12 col-sm-3 form-label">
              <label for="job-salary">Salary</label>
            </div>
            <div class="col-xs-12 col-sm-9 form-control">
              <input
                type="text"
                id="job-salary"
                name="job-salary"
                v-model="position.salary"
                v-validate
                data-rules="required"
                placeholder=":)"
              >
            </div>
          </div>
          <div class="row hint-row">
            <div class="col-xs-12 col-sm-offset-3 col-sm-9">
              <transition name="fade">
              <p v-show="errors.has('job-salary')">{{errors.first('job-salary')}}</p>
              </transition>
            </div>
          </div>
        </div>
      </div>
      <!-- Company Location -->
      <div class="row">
        <div class="col-sm-12 form-field">
          <div class="row">
            <div class="col-xs-12 col-sm-3 form-label">
              <label for="company-location">Location</label>
            </div>
            <div class="col-xs-12 col-sm-9 form-control">
              <input
                type="text"
                id="company-location"
                name="company-location"
                v-model="company.location"
                v-validate
                data-rules="required"
                placeholder="Somewhere"
              >
            </div>
          </div>
          <div class="row hint-row">
            <div class="col-xs-12 col-sm-offset-3 col-sm-9">
              <transition name="fade">
                <p v-show="errors.has('company-location')">{{errors.first('company-location')}}</p>
              </transition>
            </div>
          </div>
        </div>
      </div>
      <!-- Job Type -->
      <div class="row">
        <div class="col-sm-12 form-field">
          <div class="row">
            <div class="col-xs-12 col-sm-3 form-label">
              <label for="position-type">Type</label>
            </div>
            <div class="col-xs-12 col-sm-9 form-control">
              <select class="" id="position-type" name="position-type" v-model="position.type">
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Intern">Intern</option>
              </select>
            </div>
          </div>
          <div class="row hint-row">
            <div class="col-xs-12 col-sm-offset-3 col-sm-9">
              <!-- Need Validation -->
            </div>
          </div>
        </div>
      </div>
      <!-- Job Category -->
      <div class="row">
        <div class="col-sm-12 form-field">
          <div class="box">
            <div class="row">
              <div class="col-xs-12 col-sm-3 form-label">
                <label for="position-category">Category</label>
              </div>
              <div class="col-xs-12 col-sm-9 form-control">
                <input
                  type="text"
                  id="position-category"
                  name="position-category"
                  v-model="position.category"
                  v-validate
                  data-rules="required"
                  placeholder="Art Director, Project Manager... anything"
                >
              </div>
            </div>
            <div class="row hint-row">
              <div class="col-xs-12 col-sm-offset-3 col-sm-9">
                <transition name="fade">
                  <p v-show="errors.has('position-category')">{{errors.first('position-category')}}</p>
                </transition>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Job Description -->
      <div class="row">
        <div class="col-sm-12 form-field">
          <div class="box">
            <div class="row">
              <div class="col-xs-12 col-sm-3 form-label">
                <label for="job-description">Description</label>
              </div>
              <div class="col-xs-12 col-sm-9 form-control">
                <textarea
                  id="job-description"
                  name="job-description"
                  rows="8"
                  v-validate
                  data-rules="required"
                  v-model="position.description"
                  placeholder="Can use Markdown !!"
                >
                </textarea>
              </div>
            </div>
            <div class="row hint-row">
              <div class="col-xs-12 col-sm-offset-3 col-sm-9">
                <transition name="fade">
                  <p v-show="errors.has('job-description')">{{errors.first('job-description')}}</p>
                </transition>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Company Email -->
      <div class="row">
        <div class="col-sm-12 form-field">
          <div class="row">
            <div class="col-xs-12 col-sm-3 form-label">
              <label for="company-email">Email</label>
            </div>
            <div class="col-xs-12 col-sm-9 form-control">
              <input
                type="text"
                id="company-email"
                name="company-email"
                v-model="company.email"
                v-validate
                data-rules="required|email"
                placeholder="owner@myjob.com"
              >
            </div>
          </div>
          <div class="row hint-row">
            <div class="col-xs-12 col-sm-offset-3 col-sm-9">
              <transition name="fade">
                <p v-show="errors.has('company-email')">{{errors.first('company-email')}}</p>
              </transition>
            </div>
          </div>
        </div>
      </div>
      <!-- Company Website -->
      <div class="row">
        <div class="col-sm-12 form-field">
          <div class="box">
            <div class="row">
              <div class="col-xs-12 col-sm-3 form-label">
                <label for="company-website">Website</label>
              </div>
              <div class="col-xs-12 col-sm-9 form-control">
                <input
                  type="text"
                  id="company-website"
                  name="company-website"
                  v-model="company.website"
                  v-validate
                  data-rules="required"
                  placeholder="company-website.com"
                >
              </div>
            </div>
            <div class="row hint-row">
              <div class="col-xs-12 col-sm-offset-3 col-sm-9">
                <transition name="fade">
                  <p v-show="errors.has('company-website')">{{errors.first('company-website')}}</p>
                </transition>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Preview Button -->
      <div class="row">
        <div class="col-sm-12 form-field">
          <button class="post-button" type="submit">Preview</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ['position', 'company'],
  methods: {
    validateBeforeSubmit (e) {
      e.preventDefault()
      this.$validator.validateAll()

      if (this.errors.any()) {

      } else {
        this.$emit('preview')
      }
    }
  }
}
</script>

<style lang="scss">
.header {
  background-color: black;
  color: white;
  padding: 3rem;
}
.post-job {
  .row {
    margin: 0;
  }

  .form-field {
    .form-label {
      line-height: 10rem;
      padding-left: 5rem;
      font-size: 3rem;
    }

    .form-control {
      input, textarea {
        width: 100%;
        height: 100%;
        padding-left: 1rem;
        border: none;
        border-bottom: 1px solid black;
        font-size: 3rem;
        &:focus {
          outline: none;
        }
      }
      textarea {
        padding-top: 2rem;
      }

      select {
        padding-left: 1rem;
        width: 100%;
        height: 100%;
        font-size: 3rem;
        background: none;
        border: none;
        border-bottom: 1px solid black;
        border-radius: 0;
        -webkit-appearance: none;
        outline: none;
      }
    }
  }

  .hint-row {
    font-size: 2rem;
    color: red;
    p {
      margin-top: 0rem;
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition-duration: .5s;
  transition-property: opacity;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
.post-button {
  font-size: 3rem;
  background: white;
  color: black;
  border: 1px solid black;
  width: 100%;
  margin-top: 3rem;
  margin-bottom: 3rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  cursor: pointer;

  &:hover {
    background: black;
    color: white;
  }

  outline: none;
}
</style>
