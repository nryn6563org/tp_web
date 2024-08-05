<template>
  <div class="content rassiBg">
    <CategoryNav :categoryIndex="categoryIndex" :activeIndex="selectedIndex" class="rassiBg"></CategoryNav>
    <SafeKeeperServices></SafeKeeperServices>
  </div>
</template>

<script>
export default {
  layout: 'default',
  data() {
    return{
      categoryIndex: 2,
      selectedIndex: 14,
    }
  }
}
</script>

<style scoped>
  .rassiBg{
    @apply bg-[#EFF2FB];
  }
</style>