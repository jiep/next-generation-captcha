<template lang="pug">
section.hero.is-fullheight
  div.hero-head
    header.navbar
      div.container
        div.navbar-brand
          a.navbar-item
            h1 Brand
        div.navbar-burger.burger
          span
          span
          span
        div.navbar-menu
          a.navbar-item.is-active Home
          a.navbar-item Examples
          a.navbar-item Documentation
          span.navbar-item
            a.button.is-warning.is-inverted
              span Download

  div.hero-body
    div.container.has-text-centered
      div.columns
        div.column.is-10.is-offset-1
          div.columns
            div.column.is-info
              figure.image.is3by4
                img(:src="returnImage(paintings[0])")
            div.column.is-info
              figure.image.is3by4
                img(:src="returnImage(paintings[1])")
            div.column.is-info
              figure.image.is3by4
                img(:src="returnImage(paintings[2])")
          div.columns
            div.column.is-info
              figure.image.is3by4
                img(:src="returnImage(paintings[3])")
            div.column.is-info
              figure.image.is3by4
                img(:src="returnImage(paintings[4])")
            div.column.is-info
              figure.image.is3by4
                img(:src="returnImage(paintings[5])")
</template>

<script>
import axios from '~/plugins/axios'

const BASE_IMAGES = '/images/'

export default {
  async asyncData () {
    let { data } = await axios.get('/api/paintings')
    return { paintings: data }
  },
  head () {
    return {
      title: 'Paintings'
    }
  },
  methods: {
    returnImage (painting) {
      return `${BASE_IMAGES}/${painting.img}`
    }
  }
}
</script>

<style scoped>

</style>
