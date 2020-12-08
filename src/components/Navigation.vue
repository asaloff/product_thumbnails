<template>
  <div class="navigation__wrapper">
    <div class="navigation__content">
      <div class="navigation__logo-wrapper">
        <router-link :to="{ name: 'products' }">
          <img
            src="../assets/shopzio-logo.png"
            alt="ShopZio logo"
            class="navigation__logo"
          />
        </router-link>
        <span class="navigation__tagline">
          Empowering the Wholesale Business Marketplace
        </span>
      </div>
      <div class="navigation__cart-information">
        <span class="navigation__cart-amount">$3,224.32</span>
        <div class="navigation__cart-icon">
          <fa-icon icon="shopping-cart" />
          <span class="navigation__cart-badge">
            <span>2</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation"
};
</script>

<style lang="scss" scoped>
.navigation {
  &__wrapper {
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    padding: 1rem 0;
    border-bottom: $border;
  }

  &__content {
    width: 100%;
    max-width: 1250px;
    display: flex;
    align-items: center;

    @media only screen and (max-width: 750px) {
      justify-content: center;
      flex-direction: column;
    }
  }

  &__logo-wrapper {
    margin-right: auto;
    display: flex;
    align-items: center;

    @media only screen and (max-width: 750px) {
      margin: auto;
      flex-direction: column;
      margin-bottom: 1rem;
    }
  }

  &__logo {
    width: 15rem;

    @media only screen and (max-width: 750px) {
      margin-left: -2rem;
    }
  }

  &__tagline {
    padding-left: 1rem;
    height: 30px;
    display: flex;
    align-items: center;
    border-left: $border;
    font-size: 0.8rem;

    @media only screen and (max-width: 750px) {
      margin-top: -1rem;
      border-left: none;
      padding-left: 0;
    }
  }

  &__cart-information {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
  }

  &__cart-amount {
    font-weight: 700;
    color: $dark-gray;
    padding-right: 1rem;
    margin-right: 1rem;
    border-right: $border;
  }

  &__cart-icon {
    position: relative;
    margin-right: 2rem; // Allow space for the cart badge
  }

  &__cart-badge {
    position: absolute;
    top: -12px;
    right: -12px;
    border-radius: 100%;
    padding: 2px 5px;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $color-primary;
    color: #fff;
  }
}
</style>
