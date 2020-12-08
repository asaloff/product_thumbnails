<template>
  <div id="app">
    <navigation />
    <div class="content-container">
      <manufacturer-header v-bind="{ products }" />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import ManufacturerHeader from "@/components/ManufacturerHeader.vue";
import products from "@/fixtures/products.json";

export default {
  name: "App",
  components: {
    Navigation,
    ManufacturerHeader
  },
  data() {
    return {
      products
    };
  }
};
</script>

<style lang="scss">
#app {
  font-family: Helvetica, Arial, sans-serif;
  color: $main-gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
}

body {
  box-sizing: border-box;
  margin: 0;
}

a {
  color: $color-secondary;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

.content-container {
  width: 100%;
  max-width: 1200px;
}
</style>
