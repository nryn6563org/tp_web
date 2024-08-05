<template>
  <div class="content rassiBg">
    <CategoryNav :categoryIndex="categoryIndex" :activeIndex="selectedIndex" class="rassiBg"></CategoryNav>
    <rmsSystemContent></rmsSystemContent>
  </div>
</template>

<script>
export default {
  layout: 'default',
  data() {
    return{
      categoryIndex: 3,
      selectedIndex: 15,
    }
  }
}
</script>

<style scoped>
  .rassiBg{
    @apply bg-[#EFF2FB];
  }
</style>