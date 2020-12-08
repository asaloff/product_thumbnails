<template>
  <div class="product__wrapper">
    <breadcrumbs
      v-if="product"
      :links="[
        { text: 'Home', to: '/' },
        { text: products.CompanyName, to: '/' }
      ]"
      :current="product.ItemName"
    />
    <div class="product__content">
      <div class="product__img-container">
        <img :src="`${product.PhotoName}?height=250`" :alt="product.ItemName" />
      </div>
      <div class="product__information">
        <span class="product__id">{{ product.ItemID }}</span>
        <h3 class="product__name">{{ product.ItemName }}</h3>
        <span class="product__price">{{ product.BasePrice | toCurrency }}</span>
        <h4 class="product__description-heading">Description</h4>
        <p class="product__description">{{ product.Description }}</p>
        <span class="product__dimensions">
          Dimensions: {{ product.Dimensions }}
        </span>

        <div class="product__actions-section">
          <div class="product__quantity-picker">
            <input
              type="number"
              id="quantity"
              name="quantity"
              class="product__quantity-input"
              v-model="quantity"
            />
            <div class="product__quantity-controls">
              <span class="product__quantity-control" @click="quantity++">
                +
              </span>
              <span
                class="product__quantity-control"
                @click="quantity && quantity--"
              >
                -
              </span>
            </div>
          </div>

          <div class="product__actions">
            <fa-icon :icon="['far', 'heart']" class="product__like-icon" />
            <button class="product__cart-btn">
              <span>Add to Cart</span>
              <fa-icon icon="shopping-cart" class="product__cart-btn-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import products from "@/fixtures/products";
import Breadcrumbs from "../components/Breadcrumbs.vue";
import { toCurrency } from "@/utilities/helpers";

export default {
  name: "Product",
  components: {
    Breadcrumbs
  },
  filters: {
    toCurrency
  },
  data() {
    return {
      products,
      quantity: 1
    };
  },
  computed: {
    product() {
      return this.products.items.find(
        i => i.ProductID === parseInt(this.$route.params.id)
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.product {
  &__content {
    margin-top: 3rem;
    display: flex;

    @media only screen and (max-width: 750px) {
      flex-direction: column;
    }
  }

  &__img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
    margin-right: 5rem;
    margin-left: 1rem;
    width: 80%;

    @media only screen and (max-width: 750px) {
      margin: 1rem auto 2rem;
    }
  }

  &__information {
    margin: 0 2rem 2rem;
  }

  &__id {
    font-weight: 200;
    color: lighten($main-gray, 10%);
  }

  &__name {
    margin: 0.25rem 0 0.5rem;
    font-weight: 400;
    font-size: 24px;
  }
  &__price {
    font-weight: 600;
    color: $dark-gray;
    font-size: 30px;
    display: block;
  }

  &__description-heading {
    margin-bottom: 0.5rem;
    font-size: 0.8rem;
    font-weight: 700;
  }

  &__description {
    margin-top: 0.5rem;
    font-size: 0.9rem;
  }

  &__dimensions {
    display: inline-block;
    font-size: 0.8rem;
  }

  &__actions-section {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: $border;
    display: flex;
  }

  &__quantity-picker {
    display: flex;
    margin-right: auto;
  }

  &__quantity-input {
    border: 2px solid lighten($main-gray, 40%);
    border-radius: 3px;
    width: 3rem;
    text-align: center;
    padding: 0.5rem;
  }

  &__quantity-controls {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__quantity-control {
    &:first-of-type {
      margin-bottom: 3px;
    }
    margin-left: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: lighten($main-gray, 20%);
    color: #fff;
    width: 1.25rem;
    cursor: pointer;
  }

  &__actions {
    display: flex;
    align-items: center;
  }

  &__like-icon {
    font-size: 1.2rem;
    margin-right: 1rem;
  }

  &__cart-btn {
    padding: 0.5rem 1rem;
    text-transform: uppercase;
    border: 2px solid lighten($main-gray, 40%);
    border-radius: 3px;
    background: #fff;
    color: $main-gray;
    cursor: pointer;
  }

  &__cart-btn-icon {
    margin-left: 0.5rem;
  }
}

// Hide number input arrows
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
