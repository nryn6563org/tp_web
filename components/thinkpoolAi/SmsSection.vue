<template>
  <div class="section">
    <div class="pmsContent">
      <div>
        <img src="~/assets/img/smsContent.png" alt="인간특집" width="622">
      </div>
      <!-- // -->
       
      <div>        
        <div class="tit">
          <span>AXR 2</span>
          <strong>SMS</strong>
        </div>
        <!-- // -->
         
        <div class="txt">
          <span class="ko">
            국내 전종목 및 ETF를 대상으로 최적의 매매 타이밍을 잡아주는 <br>
            종목별 AI시그널 생성 및 운영 시스템 <br>
            SBS 2021년 신년특집 “AI vs. 인간” 주식 AI대표로 출연 <br>
            (주식시장 대비 연율 42% 초과수익 달성) <br>
            투자자문사 등 맞춤형 투자 시스템 제공 <br>
            (웰스투자자문 2021년부터 2023년말까지 운용수익 92% 달성) <br>
            NH자산운용 AI엔진 운용 사모펀드 출시 (100억원, 2024.03)
          </span>
          <span class="en">
            Created and operated stock-specific AI signals that provide <br>
            optimal trading timing for all domestic stocks and ETFs<br>
            Appeared as a stock AI representative on SBS's 2021 New <br>
            Year's special "AI vs. Humans" (achieved 42% annualized<br>
            outperformance compared to the stock market) <br>
            “RASSI Trading Assistant” No. 1 in sales in the financial sector<br>
            of Google Android Market (February 2024) <br>
            Provided customized investment system for investment <br>
            advisory firms <br>
            (Achieved 92% return on investment from 2021 to the end of <br>
            2023 for Wealth Investment Advisory) <br>
            Launched NH Asset Management AI engine-managed private <br>
            equity fund (KRW 10 billion, March 2024)
          </span>
          <span>*SMS( Signal Management System)</span>
        </div>
        <!-- // -->

        <div class="cnc">
          <a href="#">
            <img src="~/assets/img/cnc/cnc5.png" alt="넘버스" width="72">
          </a>
          <a href="#">
            <img src="~/assets/img/cnc/cnc6.png" alt="웰스" width="104">
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
