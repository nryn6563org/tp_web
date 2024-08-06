<template>
  <div class="rmsSystemContent">
    <div class="rmsTitle">
      <strong class="ko">RMS통제시스템</strong>
      <strong class="en">RMS Control System</strong>
    </div>

    <div class="rmsContent">
      <div>
        <img src="~/assets/img/rms.png" alt="rms통제시스템" width="477" class="ko">
        <img src="~/assets/img/rms_en.png" alt="rms통제시스템" width="477" class="en">
      </div>
      <!-- // -->
       
      <div>
        <div class="txt">
          <span class="en">
            Developed and provided systems to Daewoo Securities <br>
            and KB Savings Bank for the first time in Korea in 2005 <br><br>
            12 securities firms, 22 lenders, 90 products in total<br>
            Expansion of Stock Loan business with '8%', an <br>
            online investment-linked financial service company
          </span>
          
          <span class="ko">
            2005년 국내 최초로 대우증권과 KB저축은행(구, 제일저축은행)에<br>
            RMS 시스템 개발/ 제공 <br>
            <br>
            증권사 12개사, 대출기관 22개사, 총 90개 상품 운영중 <br>
            <br>
            온라인투자연계금융 서비스업체 ‘8퍼센트’와 스탁론<br>
            사업 확장 진행 
          </span>
          
          <span class="ko">
            <em>*RMS (Risk Management System)</em><br>
            증권사와 대출 금융기관이 연계하여 대출하는 연계신용 리스크 관리
          </span>
          
          <span class="en">
            <em>*RMS (Risk Management System)</em><br>
            Linked credit risk management that securities firms and lending <br>
            financial institutions lend in connection with each other
          </span>
        </div>
        <!-- // -->
         
        <div class="cnc">
          <a href="#"><img src="~/assets/img/cnc/cnc8.png" alt="NH투자증권" width="122"></a>
          <a href="#"><img src="~/assets/img/cnc/cnc9.png" alt="미래에셋" width="115"></a>
          <a href="#"><img src="~/assets/img/cnc/cnc10.png" alt="kb증권" width="113"></a>
          <a href="#"><img src="~/assets/img/cnc/cnc2.png" alt="키움증권" width="79"></a>
          <a href="#"><img src="~/assets/img/cnc/cnc11.png" alt="하나증권" width="101"></a>
          <a href="#"><img src="~/assets/img/cnc/cnc3.png" alt="대신증권" width="82"></a>
          <a href="#"><img src="~/assets/img/cnc/cnc12.png" alt="sk증권" width="61"></a>
          <a href="#"><img src="~/assets/img/cnc/cnc13.png" alt="유진투자증권" width="128"></a>
          <a href="#"><img src="~/assets/img/cnc/cnc14.png" alt="한국투자증권" width="128"></a>
          <a href="#"><img src="~/assets/img/cnc/cnc15.png" alt="신한투자증권" width="119"></a>
          <a href="#"><img src="~/assets/img/cnc/cnc16.png" alt="유안타증권" width="106"></a>
          <a href="#"><img src="~/assets/img/cnc/cnc17.png" alt="교보증권" width="99"></a>
        </div>
        <!-- // -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.rmsTitle{
  @apply flex w-full flex-col items-center gap-2 pt-[54px]
}
.rmsTitle em{
  @apply text-[#9395a1] text-[16px] leading-5
}
.rmsTitle strong{
  @apply text-[#141414] text-[48px] leading-[60px]
}
.rmsContent{
  @apply p-[110px_0_120px] flex w-full justify-center gap-[220px]
}
.rmsContent > div:last-child{
  @apply flex flex-col w-[550px] gap-[90px]
}
.rmsContent div .txt{
  @apply flex flex-col w-full gap-5
}
.rmsContent div .txt span{
  @apply w-full text-[#444] text-[20px] leading-[25px] tracking-[-0.22px] font-normal
}
.rmsContent div .txt span.en{
  @apply text-[18px]
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
