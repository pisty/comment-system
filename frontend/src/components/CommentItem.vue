<template lang="pug">
  div
    form
      .row.align-items-center.mt-5.mb-3
        .col
          nav
            ol.breadcrumb.m-0
              li.breadcrumb-item
                router-link(:to="{name: 'Home'}") Home
              li.breadcrumb-item.active
                router-link(:to="{name: 'CommentList'}") Comments list
              li.breadcrumb-item.active Add comment
        .col-auto
          template(v-if="comment._id")
            .btn.btn-info(@click="update()") change
          template(v-else)
            .btn.btn-info(@click="add()") save
      template
        .form-group
          label Name
          input.form-control(v-model="comment.name", required)
        .form-group
          label Email
          input.form-control(v-model="comment.email", required)
        .form-group
          label Phone
          input.form-control(v-model="comment.phone")
        .form-group
          label Comment
          textarea.form-control(v-model="comment.comment", required)
</template>

<script>
export default {
  name: 'CommentItem',
  data () {
    return {
      commentId: this.$route.params.commentId,
      comment: {
        name: '',
        comment: '',
        email: '',
        phone: ''
      }
    }
  },
  created () {
    if (this.$route.params.commentId) {
      this.get()
    }
  },
  methods: {
    add () {
      this.axios.post('/comments', {
        name: this.comment.name,
        comment: this.comment.comment,
        email: this.comment.email,
        phone: this.comment.phone
      }).then(response => {
        this.$router.push({name: 'CommentItem', params: {commentId: response.data._id}})
      })
    },
    get () {
      this.axios.get(`/comments/${this.$route.params.commentId}`).then(response => {
        this.comment = response.data
      })
    },
    update () {
      this.axios.put(`/comments/${this.$route.params.commentId}`, {
        name: this.comment.name,
        comment: this.comment.comment,
        email: this.comment.email,
        phone: this.comment.phone
      }).then(response => {
        this.comment = response.data
      })
    }
  }
}
</script>
