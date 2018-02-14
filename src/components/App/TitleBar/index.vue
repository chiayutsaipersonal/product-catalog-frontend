<template>
  <nav id="title-bar"
       class="navbar is-transparent">
    <div class="navbar-brand">
      <a class="navbar-item"
         @click="$router.push('/home')">
        <img src="../../../assets/logo.png"
             alt="Gentry Way Co., Ltd.">
      </a>
      <div class="navbar-burger burger"
           :class="{'is-active':mobileMenu}"
           data-target="navbar-menu"
           @click="mobileMenu=!mobileMenu">
        <span/>
        <span/>
        <span/>
      </div>
    </div>
    <div id="navbar-menu"
         class="navbar-menu"
         :class="{'is-active':mobileMenu}"
         :style="navStyle">
      <tab-menu :mobile-menu="mobileMenu"
                @switchView="mobileMenu=false" />
    </div>
  </nav>
</template>

<script>
import TabMenu from './TabMenu'

export default {
  name: 'TitleBar',
  components: { TabMenu },
  data () {
    return {
      mobileMenu: false,
    }
  },
  computed: {
    navStyle () {
      return this.mobileMenu ? {
        position: 'absolute',
        width: '100%',
      } : {}
    },
  },
  watch: {
    $mq (newVal, oldVal) {
      if ((newVal === 'lg') && (oldVal === 'md')) {
        this.mobileMenu = false
      }
    },
  },
}
</script>

<style scoped>
nav.navbar {
  flex: 1 0 1;
}
</style>
