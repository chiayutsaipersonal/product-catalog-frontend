<template>
  <div id="home-page">
    <carousel/>
  </div>
</template>

<script>
import Carousel from './Carousel'

export default {
  name: 'HomePage',
  components: {
    Carousel,
  },
}
</script>

<style scoped>
#home-page {
  flex: 2 0 auto;
  height: min-content;
}
</style>
