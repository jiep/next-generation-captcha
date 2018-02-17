<template lang="pug">
section.hero.is-fullheight
  div.hero-head
    Navbar/

  div.hero-body
    div.container.has-text-centered
      div.columns
        div.column.is-10.is-offset-1
          div.columns
            Painting(:painting="paintings[0]")
            Painting(:painting="paintings[1]")
            Painting(:painting="paintings[2]")
          div.columns
            Painting(:painting="paintings[3]")
            Painting(:painting="paintings[4]")
            Painting(:painting="paintings[5]")
</template>

<script>
import axios from '~/plugins/axios'

import Navbar from '../components/Navbar'
import Painting from '../components/Painting'

export default {
  components: {
    Navbar,
    Painting
  },
  async asyncData () {
    let { data } = await axios.get('/api/paintings')
    return { paintings: data }
  },
  head () {
    return {
      title: 'Paintings'
    }
  }
}
</script>

<style scoped>

</style>
