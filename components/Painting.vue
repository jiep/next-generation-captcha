<template lang="pug">
  div.column(id="container")
    figure.image.is3by4
      img.img(:src="returnImage(painting)")
      div.overlay
        div.field.is-grouped
          p.control
            a.button.is-primary.is-outlined.is-inverted Real
          p.control
            a.button.is-primary.is-outlined.is-inverted Generated
</template>

<script>
  const BASE_IMAGES = '/images'

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
    width: auto;
    height: auto;
  }

  .overlay {
    position: absolute;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
    transition: 0.5s ease;
    opacity: 0;
    text-align: center;
    padding-top: 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #container:hover .overlay {
    opacity: 1;
  }
</style>
