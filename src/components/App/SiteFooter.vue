<template>
  <footer id="site-footer">
    <template v-if="$route.name==='homePage'">
      <div v-for="pane in panes"
           :key="pane.id"
           :id="pane.id"
           class="pane"
           @click="$router.push(pane.url)">
        {{ pane.title }}
      </div>
    </template>
    <p class="copyright-text">Copyright© 2018 Gentry Way Co., Ltd.</p>
  </footer>
</template>

<script>
export default {
  name: 'SiteFooter',
  data () {
    return {
      panes: [
        {
          id: 'product-pane',
          url: '/products',
          title: 'OUR PRODUCTS',
        },
        {
          id: 'contact-pane',
          url: '/contacts',
          title: 'CONTACT US',
        },
        {
          id: 'customer-pane',
          url: '/customer',
          title: 'CUSTOMER LOGIN',
        },
      ],
    }
  },
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Open+Sans:700");

#site-footer {
  flex-shrink: 0 1 auto;
  background-color: rgb(21, 46, 49);
  padding-top: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
}

.pane {
  cursor: pointer;
  text-align: center;
  font-family: "Open Sans";
  font-size: 16px;
  background-color: rgb(20, 73, 76);
  border: 1px solid white;
  color: white;
}

.contact-text {
  font-family: "Open Sans";
  font-size: 12px;
  color: white;
  width: 100%;
}

.copyright-text {
  font-family: "Open Sans";
  font-size: 12px;
  color: white;
  width: 100%;
}

@media screen and (min-width: 1024px) {
  .pane {
    padding-top: 5px;
    padding-bottom: 5px;
    height: 200px;
    width: 32%;
  }

  .copyright-text {
    padding: 15px 5px 5px 5px;
    text-align: right;
  }
}

@media screen and (max-width: 1024px) and (min-width: 480px) {
  .pane {
    padding-top: 5px;
    padding-bottom: 5px;
    width: 32%;
  }

  .copyright-text {
    padding: 15px 5px 5px 5px;
    text-align: right;
  }
}

@media screen and (max-width: 480px) {
  .pane {
    padding-top: 5px;
    padding-bottom: 5px;
    margin: 1px;
    width: 98%;
  }

  .copyright-text {
    padding: 5px 5px 5px 5px;
    text-align: center;
  }
}
</style>
