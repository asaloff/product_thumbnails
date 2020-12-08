<template>
  <div class="product-thumbnail__wrapper">
    <img
      :src="`${product.PhotoName}?height=120`"
      :alt="product.ItemName"
      class="product-thumbnail__img"
    />
    <div class="product-thumbnail__price-section">
      <span class="product-thumbnail__price">
        {{ product.BasePrice | toCurrency }}
      </span>
      <div class="product-thumbnail__actions">
        <fa-icon :icon="['far', 'heart']" />
        <fa-icon icon="shopping-cart" class="product-thumbnail__cart-action" />
      </div>
    </div>
    <p class="product-thumbnail__name">{{ product.ItemName }}</p>
    <router-link
      :to="{ name: 'product', params: { id: product.ProductID } }"
      class="product-thumbnail__link"
    >
      {{ product.ItemName }} {{ product.Dimensions }}
    </router-link>
    <span class="product-thumbnail__on-hand">
      On Hand: {{ product.OnHandQuantity }}
    </span>
  </div>
</template>

<script>
import { toCurrency } from "@/utilities/helpers";

export default {
  name: "ProductThumbnail",
  filters: {
    toCurrency
  },
  props: {
    product: { type: Object, required: true }
  }
};
</script>

<style lang="scss" scoped>
.product-thumbnail {
  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 16rem;
    padding: 1rem;
    margin-top: 3rem;
  }

  &__img {
    margin-bottom: 1rem;
  }

  &__price-section {
    min-width: 65%;
    display: flex;
  }

  &__price {
    color: $dark-gray;
  }

  &__actions {
    margin-left: auto;
    margin-bottom: 0.75rem;
  }

  &__cart-action {
    margin-left: 0.5rem;
    padding-left: 0.5rem;
    border-left: $border;
  }

  &__name {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  &__link {
    color: $color-tertiary;
    text-align: center;
    font-size: 0.7rem;
    margin-bottom: 5px;
  }

  &__on-hand {
    font-size: 0.7rem;
    color: lighten($main-gray, 20%);
  }
}
</style>
