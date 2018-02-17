<template lang="pug">
  div.column.is-info(id="container")
    figure.image.is3by4
      img.img(:src="returnImage(painting)")
      div.info
        a.button.is-primary.is-outlined.is-inverted Real
        a.button.is-primary.is-outlined.is-inverted Generated
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

<style scoped>
  #container {
    position: relative;
    width: 50%;
  }

  .img {
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    transition: background .5s ease;
  }

  .info {
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
  }

  #container:hover .img {
    opacity: 0.3;
  }

  #container:hover .info {
    opacity: 1;
  }
</style>
