<template lang="html">
  <div class="">
    <h1 class="header">Preview</h1>
    <div class="item active">
      <div class="item-header row">
        <div class="col-xs-6 item-main">
          <div class="box">
            <h4 class="job-title">{{position.title}}</h4>
            <p class="job-type">{{position.type}}</p>
            <p class="job-salary">{{position.salary}}</p>
            <p class="job-category">{{position.category}}</p>
          </div>
        </div>
        <div class="col-xs-3 item-sub">
          <div class="box">
            <h4 class="company">{{company.name}}</h4>
            <p class="location">{{company.location}}</p>
          </div>
        </div>
        <div class="col-xs-2 item-meta">
          <div class="box">
            <span>{{position.createdAt}}</span>
          </div>
        </div>
        <div class="col-xs-1 item-action">
          <div class="box">
          </div>
        </div>
      </div>
      <div class="job-detail">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>Contact:</h6>
            <ul class='job-contact'>
              <li><a v-bind:href="'mailto:' + company.email">{{company.email}}</a></li>
              <li><a v-bind:href="'http://' + company.website">{{company.website}}</a></li>
            </ul>
          </div>
          <div class="col-sm-12 col-md-6">
            <div class="description">
              <MarkdownView v-bind:rawMarkdown="position.description"></MarkdownView>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import MarkdownView from '../positions/PositionMarkdownView'

export default {
  props: ['position', 'company'],
  components: {
    MarkdownView
  }
}
</script>

<style lang="scss">
$base-color: rgb(0,0,0);
$alt-color: rgb(255, 255, 255);
$gray-color-hover: rgba(191, 191, 191, 0.5);
$sm-display: 48rem;
$line-height: 6rem;

.item {
  border-bottom: 1px solid $base-color;
  padding: 1rem $line-height;
  pointer-events: auto;

  &:hover {
    background-color: $base-color;
    color: $alt-color;
    .item-action .item-button {
      color: $alt-color;
    }
  }

  a {
    color: $alt-color;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  .item-header {
    cursor: pointer;
  }

  .company,
  .job-title {
    transition: font-size 0.2s ease-in;
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .item-sub .location,
  .job-category,
  .job-salary,
  .job-type {
    transition: font-size 0.2s ease-in;
    margin: 0;
    font-size: 1.3rem;
  }

  .item-meta {
    font-size: 1.2rem;
    line-height: $line-height;
  }

  .job-category,
  .job-salary {
    display: none;
  }

  .item-action {
    text-align: center;

    .item-button {
      line-height: $line-height;
      cursor: pointer;
      background: transparent;
      border: none;
      font-size: 2rem;

      &:hover {
        font-weight: bold;
      }

      &:focus {
        outline: none;
      }
    }
  }

  .item-button-expand {
    display: inherit;
  }

  .item-button-narrow {
    display: none;
  }

  .job-detail {
    display: none;
    padding-top: 10rem;

    .job-contact {
      list-style: none;
      font-size: 1.3rem;
      -webkit-margin-before: 0;
      -webkit-margin-after: 0;
      -webkit-margin-start: 0;
      -webkit-margin-end: 0;
      -webkit-padding-start: 0;
    }

    .description {
      font-size: 1.5 rem;
    }
  }
}
// When Activated

.item.active {
  background-color: $base-color;
  color: $alt-color;
  padding-top: 10rem;
  padding-bottom: 10rem;

  .company,
  .job-title {
    font-size: 2.5rem;
  }

  .item-sub .location,
  .job-category,
  .job-salary,
  .job-type {
    font-size: 1.5rem;
  }

  .item-meta {
    font-size: 1.3rem;
  }


  .job-category,
  .job-salary {
    display: inherit;
  }

  .item-button {
    color: $alt-color;
  }

  .item-button-expand {
    display: none;
  }

  .item-button-narrow {
    display: inherit;
  }
  .job-detail {
    display: inherit;
  }
}

// Responsive
@media (max-width: $sm-display) {
  .item {
    padding: 3rem;

    .company,
    .job-title {
      font-size: 1.5em;
    }

    .item-sub .location,
    .job-category,
    .job-salary,
    .job-type {
      margin: 0;
      font-size: 1.1rem;
    }
  }

  .item.active {
    padding: 3rem;

    .company,
    .job-title {
      font-size: 1.7em;
    }

    .job-detail {
      padding-top: 1rem;
    }

    .item-sub .location,
    .job-category,
    .job-salary,
    .job-type {
      font-size: 1.2rem;
    }

    .job-apply {
      width: 100%;
    }

    .item-meta {
      line-height: inherit;
    }
  }
}
</style>
