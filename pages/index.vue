<template lang="pug">
  section.section
    div.container
      h1.title Hello World
      p.subtitle My first website with
        strong Bulma
</template>

<script>
// import axios from '~/plugins/axios'

export default {
  // async asyncData () {
  //   let { data } = await axios.get('/api/paintings')
  //   return { users: data }
  // },
  head () {
    return {
      title: 'Paintings'
    }
  }
}
</script>

<style scoped>

</style>
