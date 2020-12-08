<template>
  <div class="breadcrumbs__wrapper">
    <template v-for="link in links">
      <router-link
        :key="`${link.text}-link`"
        :to="link.to"
        class="breadcrumbs__link"
      >
        {{ link.text }}
      </router-link>
      <span :key="`${link.text}-seperator`" class="breadcrumbs__seperator"
        >/</span
      >
    </template>
    <span>{{ current }}</span>
  </div>
</template>

<script>
export default {
  name: "Breadcrumbs",
  props: {
    links: { type: Array, required: true },
    current: { type: String, required: true }
  }
};
</script>

<style lang="scss" scoped>
.breadcrumbs {
  &__wrapper {
    font-size: 0.9rem;
    margin-left: 1rem;
  }

  &__link {
    display: inline-flex;
  }

  &__seperator {
    margin: 0 0.3rem;
    color: lighten($main-gray, 20%);
  }
}
</style>
