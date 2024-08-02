<template>
  <div id="wrap">
    <WebHeader />
    <div ref="Top"></div>
    <Nuxt />
    <WebFooter />
  </div>
</template>

<script>
export default{
  watch: {
    '$route' () {
      this.scrollToTop();
    }
  },
  methods: {
    scrollToTop() {
      this.$refs.Top.scrollIntoView();
    }
  }
}
</script>

<style scoped>
#wrap {
  @apply w-full min-w-[1920px]
}
</style>