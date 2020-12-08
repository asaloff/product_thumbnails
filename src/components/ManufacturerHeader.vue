<template>
  <div class="manufacturer-header__wrapper">
    <div class="manufacturer-header__logo">
      <img :src="logo" :alt="products.CompanyName" />
    </div>
    <div class="manufacturer-header__section">
      <span class="manufacturer-header__section-heading">
        {{ products.CompanyName }}
      </span>
      <span class="manufacturer-header__section-text">
        {{ products.SalesRep.Phone }}
      </span>
      <span class="manufacturer-header__section-text">
        <a :href="`mailto:${products.EmailAddress}`">
          {{ products.EmailAddress }}
        </a>
      </span>
    </div>
    <div class="manufacturer-header__section">
      <span class="manufacturer-header__section-heading">Your Rep</span>
      <span class="manufacturer-header__section-text">
        {{ products.SalesRep.FirstName }} {{ products.SalesRep.LastName }}
      </span>
      <span class="manufacturer-header__section-text">
        <a :href="`mailto:${products.SalesRep.EmailAddress}`">
          {{ products.SalesRep.EmailAddress }}
        </a>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Manufacturerheader",
  props: {
    products: { type: Object, required: true }
  },
  computed: {
    logo() {
      const { ManufacturerID } = this.products;
      return `http://images.repzio.com/productimages/${ManufacturerID}/logo${ManufacturerID}_lg.jpg?height=60`;
    }
  }
};
</script>

<style lang="scss" scoped>
.manufacturer-header {
  &__wrapper {
    padding: 1rem;
    border-bottom: $border;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    @media only screen and (max-width: 750px) {
      justify-content: space-around;
    }
  }

  &__logo {
    display: flex;
    align-items: center;
    margin-right: 2rem;
    @media only screen and (max-width: 750px) {
      margin-left: 1rem;
    }
  }

  &__section {
    font-size: 0.8rem;
    display: flex;
    flex-direction: column;
    padding: 0.5rem 1.5rem 0 1.5rem;
    border-left: $border;
  }

  &__section-heading {
    font-weight: 600;
    color: lighten($main-gray, 5%);
    text-transform: uppercase;
    margin-bottom: 0.3rem;
  }

  &__section-text {
    color: lighten($main-gray, 5%);
    margin-bottom: 3px;
  }
}
</style>
