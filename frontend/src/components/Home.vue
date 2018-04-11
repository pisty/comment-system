<template lang="pug">
  div
    h1.display-4.text-center.my-5 {{ msg }}
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Sziasztok'
    }
  }
}
</script>
