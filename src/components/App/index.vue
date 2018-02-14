<template>
  <div id="app"
       :style="appStyle">
    <title-bar/>
    <router-view/>
    <site-footer/>
  </div>
</template>

<script>
import SiteFooter from './SiteFooter'
import TitleBar from './TitleBar'

export default {
  name: 'App',
  components: {
    'site-footer': SiteFooter,
    'title-bar': TitleBar,
  },
  data () {
    return {
      fullwidth: '100%',
      productPageWidth: '95%',
      standardWidth: '85%',
    }
  },
  computed: {
    appStyle () {
      if ((this.$mq === 'sm') || (this.$mq === 'xs')) return { width: this.fullwidth }
      else if (this.$route.name === 'productPage') return { width: this.productPageWidth }
      else return { width: this.standardWidth }
    },
  },
}
</script>

<style scopes>
#app {
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
