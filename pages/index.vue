<template lang="pug">
section.hero.is-fullheight
  div.hero-head
    Navbar/

  div.hero-body
    div.container.has-text-centered
      PaintingList(:paintings="paintings")
</template>

<script>
import axios from '~/plugins/axios'

import Navbar from '../components/Navbar'
import PaintingList from '../components/PaintingList'

export default {
  components: {
    Navbar,
    PaintingList
  },
  async asyncData () {
    let { data } = await axios.get('/api/paintings')
    const paintings = data.map(painting => {
      painting['isGenerated'] = false
      return painting
    })
    return { paintings }
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
