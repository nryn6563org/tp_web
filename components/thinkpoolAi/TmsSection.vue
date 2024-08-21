<template>
  <div class="section">
    <div class="pmsContent">
      <div>
        <img src="~/assets/img/tms.png" alt="tms" width="481" class="ko">
        <img src="~/assets/img/tms_en.png" alt="tms" width="481" class="en">
      </div>
      <!-- // -->
       
      <div>        
        <div class="tit">
          <span>AXR 3</span>
          <strong>TMS</strong>
        </div>
        <!-- // -->
         
        <div class="txt">
          <span class="ko">
            종목별 호가, 체결 상태 등 주식 시장의 힘을 <em>AI가 학습하여 싸게 사고<br>
            비싸게 팔 수 있도록 지원하는 시스템 </em><br>
            고객 주문에 대해, 시황/종목 변동을 실시간 반영한 <em>AI기반 최적 주문<br>
            전략을 수립 하고, 주문시간, 분할횟수, 주문 가격을 자동으로 관리</em><br>
            AI 반응형 최적 주문전략 외 미체결 처리, 추격매매 방지, 주문상황 실<br>
            시간 보고 등의 다양한 주문 처리 기술 탑재
          </span>
          <span class="en">
            A system that enables AI to learn stock market forces such as <br>
            stock quotes and execution status to buy low and sell high. <br>
            For customer orders, establish AI-based optimal order <br>
            strategies that reflect market/stock fluctuations in real time, <br>
            and automatically manage order time, number of divisions, <br>
            and order price. <br>
            Equipped with various order processing technologies such as <br>
            open order processing, prevention of chasing trading, and <br>
            real-time order status reporting in addition to AI responsive <br>
            optimal order strategy
          </span>
          <span>*TMS( Trading Management System)</span>
        </div>
        <!-- // -->

        <div class="cnc">
          <a href="#">
            <img src="~/assets/img/cnc/cnc7.png" alt="이베스트" width="75">
          </a>
          <a href="#">
            <img src="~/assets/img/cnc/cnc2.png" alt="키움" width="79">
          </a>
        </div>
      </div>
      <!-- // -->
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
.pmsContent > div:first-child{
  @apply pl-[108px]
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
