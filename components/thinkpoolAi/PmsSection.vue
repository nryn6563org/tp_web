<template>
  <div class="section">
    <div class="pmsContent">
      <div>
        <img src="~/assets/img/pmsContent.png" alt="pms" width="708" class="ko">
        <img src="~/assets/img/pmsContent_en.png" alt="pms" width="708" class="en">
      </div>
      <div>
        <div class="tit">
          <span>AXR 1</span>
          <strong>PMS</strong>
        </div>
        <!-- // -->
         
        <div class="txt">
          <span class="ko">
            투자자가 <em>종목 또는 포트폴리오를 선택할 수 있도록 지원하는 시스템</em> <br>
            개인별 투자 성향이나 투자 목표에 따라 다양한 형태로 구성 가능 <br>
            기본적 분석 기반의 알고리즘, 차트/수급 기술적 분석 기반의 알고리 <br>
            즘, 다양한 형태의 AI알고리즘까지 수용 가능한 <em>오픈형 시스템</em>
          </span>
          <span class="en">
            A system that allows investors to choose <br>
            stocks or portfolios <br>
            Can be configured in a variety of ways to suit <br>
            individual investment preferences and investment goals <br>
            An open system that can accommodate <br>
            algorithms based on fundamental <br>
            analysis,algorithms based on technical <br>
            analysis,and various types of AI algorithms.
          </span>
          <span>*PMS( Picking & Portfolio Management System)</span>
        </div>
        <!-- // -->

        <div class="cnc">
          <a href="#">
            <img src="~/assets/img/cnc/cnc1.png" alt="현대차증권" width="80">
          </a>
          <a href="#">
            <img src="~/assets/img/cnc/cnc2.png" alt="키움증권" width="79">
          </a>
          <a href="#">
            <img src="~/assets/img/cnc/cnc3.png" alt="대신증권" width="88">
          </a>
          <a href="#">
            <img src="~/assets/img/cnc/cnc4.png" alt="DB금융투자" width="90">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.section{
  @apply min-h-fit h-auto py-[150px]
}
.pmsContent{
  @apply flex w-full justify-between
}
.pmsContent > div:last-child{
  @apply flex flex-col gap-[30px] w-[555px]
}
.pmsContent div .tit{
  @apply flex w-full flex-col gap-2
}
.pmsContent div .tit span{
  @apply text-[#9395a1] text-[16px]
}
.pmsContent div .tit strong{
  @apply text-[#141414] text-[48px] font-bold leading-[60px]
}
.pmsContent div .txt{
  @apply text-[#444] text-[20px] leading-[25px] flex w-full flex-col gap-5
}
.pmsContent div .txt em{
  @apply text-[#5368ff]
}
.pmsContent .cnc{
  @apply pt-[60px] w-[332px] flex flex-wrap gap-x-2.5 gap-y-2
}
.pmsContent .cnc a{
  @apply w-[156px] h-[45px] border-[1px] border-[#f0f0f0] rounded-[6px] flex justify-center items-center
}
</style>
