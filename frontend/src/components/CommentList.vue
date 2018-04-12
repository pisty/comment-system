<template lang="pug">
  div
    .row.align-items-center.mt-5.mb-3
      .col
        nav
          ol.breadcrumb.m-0
            li.breadcrumb-item
              router-link(:to="{name: 'Home'}") Home
            li.breadcrumb-item.active Comments list
      .col-auto
        router-link(:to="{name: 'CommentItem'}").btn.btn-info add comment
    template(v-if="loading")
      .loader
        .loader-inner.ball-scale-multiple
          div
          div
          div
    template(v-else)
      .card.bg-light.mb-3(v-for="c in comments")
        h5.card-header.d-flex.justify-content-between.align-items-center
          router-link(:to="{name: 'CommentItem', params: { commentId: c._id}}") {{ c.name }}
          small.ml-3.mr-auto {{c.location}}
          button.btn.btn-sm.text-danger.btn-link(@click="remove(c._id)")
            .fas.fa-times
        .card-body
          .card-text {{ c.comment }}
</template>

<script>
  export default {
    name: 'CommentList',
    data () {
      return {
        loading: false,
        comments: []
      }
    },
    created () {
      this.load()
    },
    methods: {
      load () {
        this.loading = true
        this.axios.get(`/comments`).then(response => {
          this.comments = response.data
          setTimeout(() => {
            this.loading = false
          }, 1000)
        })
          .catch(error => {
            console.log(error)
            this.loading = false
          })
      },
      remove (commentId) {
        this.axios.delete(`/comments/${commentId}`).then(() => {
          setTimeout(() => {
            this.load()
          }, 1000)
          this.$router.push({name: 'CommentList'})
        })
      }
    }
  }
</script>

<style>
    h5 small {
        font-size: 13px;
    }
    .loader {
        height: 40vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .ball-scale-multiple {
        height: 60px;
        position: relative;
    }

    .ball-scale-multiple > div:nth-child(2) {
        animation-delay: -0.4s;
    }

    .ball-scale-multiple > div:nth-child(3) {
        animation-delay: -0.2s;
    }

    .ball-scale-multiple > div {
        background-color: var(--info);
        border-radius: 100%;
        animation-fill-mode: both;
        position: absolute;
        left: -30px;
        top: 0;
        opacity: 0;
        margin: 0;
        width: 60px;
        height: 60px;
        animation: ball-scale-multiple 1300ms 0s linear infinite;
    }

    @keyframes ball-scale-multiple {
        0% {
            transform: scale(0);
            opacity: 0;
        }
        5% {
            opacity: 1;
        }
        100% {
            transform: scale(1);
            opacity: 0;
        }
    }
</style>
