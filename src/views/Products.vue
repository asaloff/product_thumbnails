<template>
  <div>
    <breadcrumbs
      :links="[{ text: 'Home', to: '/' }]"
      :current="products.CompanyName"
    />
    <div class="products__wrapper">
      <product-thumbnail
        v-for="item in products.items"
        :key="item.ProductID"
        :product="item"
      />
    </div>
  </div>
</template>

<script>
import Breadcrumbs from "../components/Breadcrumbs.vue";
import ProductThumbnail from "../components/ProductThumbnail.vue";
import products from "@/fixtures/products";

export default {
  name: "Products",
  components: {
    Breadcrumbs,
    ProductThumbnail
  },
  data() {
    return {
      products
    };
  }
};
</script>

<style lang="scss" scoped>
.products {
  &__wrapper {
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
}
</style>
