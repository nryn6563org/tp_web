<template>
  <div class="content rassiBg">
    <CategoryNav
      :categoryIndex="categoryIndex"
      :activeIndex="selectedIndex"
      class="rassiBg"
    ></CategoryNav>
    <div class="rmsSystemContent">
      <div class="rmsTitle">
        <strong class="ko">온투업RMS시스템</strong>
        <strong class="en">Online Investment-Linked <br>Financial Business RMS System</strong>
      </div>
      <!-- // -->

      <div class="rmsContent">
        <div>
          <img src="~/assets/img/ontoup.png" alt="온투업RMS시스템" width="500" class="ko" />
          <img src="~/assets/img/ontoup_en.png" alt="온투업RMS시스템" width="500" class="en" />
        </div>
        <div>
          <div class="txt">
            <span class=ko>
              온라인연계신용대출상품의 기관투자자를 대상으로 채권(대출)투자<br>
              를 안정적으로 관리할 수 있도록 도와주는 Fin-Tech 시스템<br>
              대형 신용평가사보다 우수한 성능의 자체 신용평가모델 보유
            </span>
            <span class="en">
              A fintech system that helps institutional investors in online-linked credit <br>
              loan products manage bond (loan) investments in a stable manner.
            </span>
            <span class="ko">
              * 온투업 (온라인투자연계금융업, 옛 P2P)
            </span>
            <span class="en">
              Own proprietary credit models that outperform the major credit bureaus
            </span>
          </div>
          <!-- // -->

          <div class="cnc">
            <a href="#"><img src="~/assets/img/cnc/cnc18.png" alt="동양저축은행" width="103"></a>
            <a href="#"><img src="~/assets/img/cnc/cnc19.png" alt="다올저축은행" width="115"></a>
            <a href="#"><img src="~/assets/img/cnc/cnc20.png" alt="OK저축은행" width="125"></a>
          </div>
          <!-- // -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
  data() {
    return {
      categoryIndex: 3,
      selectedIndex: 16,
    }
  },
}
</script>

<style scoped>
.rassiBg {
  @apply bg-[#EFF2FB];
}

.rmsTitle{
  @apply flex w-full flex-col items-center gap-2 pt-[54px] text-center
}
.rmsTitle em{
  @apply text-[#9395a1] text-[16px] leading-5
}
.rmsTitle strong{
  @apply text-[#141414] text-[48px] leading-[60px]
}
.rmsContent{
  @apply p-[110px_0_120px] flex w-full justify-center items-center gap-[220px]
}
.rmsContent > div:last-child{
  @apply flex flex-col w-[550px] gap-[160px]
}
.rmsContent div .txt{
  @apply flex flex-col w-full gap-5
}
.rmsContent div .txt span{
  @apply w-full text-[#444] text-[20px] leading-[25px] tracking-[-0.22px] font-normal
}
.rmsContent div .txt span em{
  @apply font-bold
}
.rmsContent div .cnc{
  @apply flex flex-wrap gap-2.5 w-[488px]
}
.rmsContent div .cnc a{
  @apply w-[156px] h-[45px] border-[1px] border-[#f0f0f0] rounded-[6px] flex justify-center items-center bg-white
}
</style>
