<template>
  <div id="tab-menu"
       class="navbar-end">
    <template v-if="$mq==='lg'">
      <ul class="tabs is-right navbar-item">
        <li :class="{'is-active':$route.name==='homePage'}">
          <router-link to="/"> Home </router-link>
        </li>
        <li :class="{'is-active':$route.name==='productPage'}">
          <router-link to="/products"> Products </router-link>
        </li>
        <li :class="{'is-active':$route.name==='contactPage'}">
          <router-link to="/contacts"> Contact Us </router-link>
        </li>
        <li :class="{'is-active':$route.name==='customerPage'}">
          <router-link to="/customer"> Login </router-link>
        </li>
      </ul>
    </template>
    <template v-else>
      <ul class="is-right navbar-item has-text-right">
        <li :class="{'is-active':$route.name==='homePage'}"
            @click="switchView('/')">
          <router-link to="/"> Home </router-link>
        </li>
        <li :class="{'is-active':$route.name==='productPage'}"
            @click="switchView('/products')">
          <router-link to="/products"> Products </router-link>
        </li>
        <li :class="{'is-active':$route.name==='contactPage'}"
            @click="switchView('/contacts')">
          <router-link to="/contacts"> Contact Us </router-link>
        </li>
        <li :class="{'is-active':$route.name==='customerPage'}"
            @click="switchView('/customer')">
          <router-link to="/customer"> Login </router-link>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
export default {
  name: 'TabMenu',
  props: {
    mobileMenu: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    switchView (path) {
      this.$emit('switchView')
      this.$router.push(path)
    },
  },
}
</script>

<style scoped>
/* ul:not(.tabs) {
  background-color: white;
  z-index: 10;
  position: absolute;
  width: 100%;
} */

ul.tabs {
  margin-right: 0px;
  padding-right: 0px;
}

ul.tabs > li {
  margin-left: 10px;
}

a {
  cursor: default;
  text-decoration: none;
  background-color: default;
  font-family: "Open Sans";
  font-size: 16px;
}

.navbar-item {
  border-bottom: none;
}

@media screen and (max-width: 1024px) {
  li {
    padding-top: 5px;
    padding-bottom: 5px;
    margin: 3px;
  }

  li:hover {
    border: 1px solid black;
    border-radius: 5px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-right: 5px;
    margin: 3px;
  }

  li > a {
    color: #ccc;
  }

  li.is-active {
    border-radius: 5px;
    background-color: black;
    width: 100%;
  }

  li.is-active > a {
    padding-right: 5px;
    color: white;
  }
}

.is-active {
  pointer-events: none;
}
</style>
