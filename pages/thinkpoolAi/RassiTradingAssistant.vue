<template>
  <div class="content">
    <CategoryNav
      :categoryIndex="categoryIndex"
      :activeIndex="selectedIndex"
      class="rassiBg"
    ></CategoryNav>
    <!-- // -->

    <div class="section rassiBg">
      <div class="landingRassi">
        <div class="titleSpan">RASSI Trading Assistant</div>
        <div class="sectionTitle">
          <NuxtLink to="/thinkpoolAi/axRassi" class="ko">라씨매매비서</NuxtLink>
          <NuxtLink to="/thinkpoolAi/axRassi" class="en"
            >RASSI Trading Assistant</NuxtLink
          >
        </div>
        <div class="sectionSubTitle ko">
          수익은 극대화, 손실은 최소화 ‘AI매매신호’
        </div>
        <div class="sectionSubTitle en">
          'AI trading signal' to maximize profits and minimize losses
        </div>
      </div>
      <!-- // -->

      <div class="rassiContent">
        <img src="~/assets/img/rassiAss.png" alt="" width="1369" class="ko">
        <img src="~/assets/img/rassiAss_en.png" alt="" width="1369" class="en">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'default',
  data() {
    return {
      categoryIndex: 1,
      selectedIndex: 11,
    }
  }
}
</script>
<style>
.rassiBg{
  @apply bg-[#EFF2FB];
}
.landingRassi {
  @apply w-full text-center;
}
.sectionTitle{
  @apply mt-2
}
.section{
  @apply flex-col gap-[50px]
}
</style>
