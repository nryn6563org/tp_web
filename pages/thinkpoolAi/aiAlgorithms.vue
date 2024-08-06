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
        <div class="sectionTitle">
          <NuxtLink to="/thinkpoolAi/axRassi" class="ko">알고리즘 협업</NuxtLink>
          <NuxtLink to="/thinkpoolAi/axRassi" class="en"
            >Collaborate on Algorithms</NuxtLink
          >
        </div>
        <div class="sectionSubTitle ko">
          AI 시장 예측력, 퀀트의 종목 선별을 통한 알고리즘 간 시너지 도모
        </div>
        <div class="sectionSubTitle en">
          AI Market Prediction & Quant's Stock Picking to Create Synergy Between Algorithms
        </div>
      </div>
      <!-- // -->

      <div class="rassiContent">
        <img src="~/assets/img/c_algorithms.png" alt="" width="1093" class="ko">
        <img src="~/assets/img/c_algorithms_en.png" alt="" width="1093" class="en">
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
      selectedIndex: 12,
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
