<template lang="pug">
  div.columns
    div.column.is-10.is-offset-1
      div.columns
        Painting(:painting="paintings[0]", @generated="update(0, true)", @real="update(0, false)")
        Painting(:painting="paintings[1]", @generated="update(1, true)", @real="update(1, false)")
        Painting(:painting="paintings[2]", @generated="update(2, true)", @real="update(2, false)")
      div.columns
        Painting(:painting="paintings[3]", @generated="update(3, true)", @real="update(3, false)")
        Painting(:painting="paintings[4]", @generated="update(4, true)", @real="update(4, false)")
        Painting(:painting="paintings[5]", @generated="update(5, true)", @real="update(5, false)")
      a.button.is-primary(@click.prevent="send(paintings)") Send
</template>

<script>
import Painting from './Painting'
import axios from '~/plugins/axios'

export default {
  components: {
    Painting
  },
  props: {
    paintings: {
      required: true
    }
  },
  methods: {
    update (id, value) {
      this.paintings[id].isGenerated = value
    },
    send (paintings) {
      axios.post('/api/paintings/check', {paintings})
        .then(({data}) => console.log(data))
    }
  }
}
</script>
