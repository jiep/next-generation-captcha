<template lang="pug">
  div.column.is-info
    figure.image.is3by4
      img(:src="returnImage(painting)")
</template>

<script>
  const BASE_IMAGES = '/images/'

  export default {
    props: {
      painting: {
        type: Object,
        required: true
      }
    },
    methods: {
      returnImage (painting) {
        return `${BASE_IMAGES}/${painting.img}`
      }
    }
  }
</script>
