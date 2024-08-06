<template>
  <div class="section">
    <div class="landingRassi">
      <div class="sectionTitle">
        <NuxtLink to="/thinkpoolAi/axRassi" class="ko">AX 라씨</NuxtLink>
        <NuxtLink to="/thinkpoolAi/axRassi" class="en">AX RASSI</NuxtLink>
      </div>
      <!-- // -->

      <div class="sectionSubTitle ko">
        AI증권사를 위한 씽크풀의 AI통합지원 시스템
      </div>
      <!-- // -->

      <div class="sectionSubTitle en">
        ThinkPool's AI Integration Support System for AI Securities Firms
      </div>
      <!-- // -->

      <div class="sectionContent">
        <div class="txtBox">
          <div class="text-right txt">
            <NuxtLink to="/thinkpoolAi/axRassi">
              <div class="boxTitle">SMS</div>
              <div class="boxSubTitle">Signal Management System</div>
              <div class="boxTxt ko">
                국내 전종목 및 ETF를 대상으로 <br />
                최적의 매매타이밍을 잡아주는 종목별 <br />
                AI시그널 시스템
              </div>
              <div class="boxTxt en">
                AI signals system for optimal <br />
                trade timing for all domestic <br />
                stocks and ETFs by sector
              </div>
            </NuxtLink>
          </div>
        </div>
        <!-- // -->

        <div class="rassiImg">
          <img src="~/assets/img/landingRassiImg.png" alt="섹션 라씨 이미지" />

          <span class="ri_txt1">
            <NuxtLink to="/thinkpoolAi/axRassi">AX<br />라씨</NuxtLink>
          </span>
          <span class="ri_txt2">
            <NuxtLink to="/thinkpoolAi/axRassi">AXR1</NuxtLink>
          </span>
          <span class="ri_txt3">
            <NuxtLink to="/thinkpoolAi/axRassi">AXR2</NuxtLink>
          </span>
          <span class="ri_txt4">
            <NuxtLink to="/thinkpoolAi/axRassi">AXR3</NuxtLink>
          </span>
        </div>
        <!-- // -->

        <div class="txtBox">
          <div class="text-left txt">
            <div class="boxTitle">
              <NuxtLink to="/thinkpoolAi/axRassi">PMS</NuxtLink>
            </div>
            <div class="boxSubTitle">Picking & Portfolio Management System</div>
            <div class="boxTxt ko">
              투자자가 종목 또는 포트폴리오를 <br />
              선택할 수 있도록 지원하는 시스템
            </div>
            <div class="boxTxt en">
              Systems that allow investors to <br />
              select stocks or portfolios
            </div>
          </div>
          <div class="text-left txt">
            <div class="boxTitle">
              <NuxtLink to="/thinkpoolAi/axRassi">TMS</NuxtLink>
            </div>
            <div class="boxSubTitle">Trading Management System</div>
            <div class="boxTxt ko">
              종목별 호가, 체결 상태 등 <br />
              주식 시장의 힘을 AI가 학습하여 <br />
              싸게 사고 비싸게 팔 수 있도록 지원하는 시스템
            </div>
            <div class="boxTxt en">
              A system that enables AI to learn <br />
              stock market forces, such as quotes <br />and execution status, to
              buy low and sell high.
            </div>
          </div>
        </div>
        <!-- // -->
      </div>
      <!-- // -->


      <div class="sectionBotTxt">
        <span>AX RASSI : AI Transformation by RASSI </span> (Robot Assembly
        System on Stock Investment)
      </div>
      <!-- // -->

    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.landingRassi {
  @apply w-full text-center;
}

.sectionContent {
  @apply flex justify-center items-center gap-[52px] pt-[100px];
}

.txtBox {
  @apply flex flex-col gap-[90px] w-[430px];
}

.boxTitle {
  @apply text-[#5368ff] text-[36px] font-bold leading-[45px] mb-[6px];
}

.boxSubTitle {
  @apply text-[#444] text-[20px] font-bold leading-[25px] mb-[15px];
}

.boxTxt {
  @apply text-[#444] text-[20px] font-normal leading-[25px];
}

.rassiImg{
  @apply relative
}
.rassiImg img {
  @apply w-[568px];
}
.rassiImg span.ri_txt1{
  @apply absolute w-[350px] h-[350px] z-20 top-2.5 left-[155px] flex justify-center items-center text-[40px] text-white font-bold leading-[150%] tracking-[-0.44px]
}
.rassiImg span.ri_txt2{
  @apply absolute w-[90px] h-[90px] text-center pt-[47px] top-[7px] right-[78px] text-[#141414] tracking-[-0.22px] text-[20px] z-30
}
.rassiImg span.ri_txt3{
  @apply absolute w-[233px] h-[233px] pt-[132px] text-center text-[28px] text-[#141414] tracking-[-0.308px] leading-[35px] top-[60px] left-2 z-30
}
.rassiImg span.ri_txt4{
  @apply absolute w-[138px] h-[138px] pt-[80px] text-center bottom-3 right-[10px] text-[28px] text-[#141414] tracking-[-0.308px] leading-[35px] z-30
}

.sectionBotTxt {
  @apply text-[#000] text-[20px] font-normal leading-[25px] mt-[80px];
}

.sectionBotTxt span {
  @apply text-[#5368ff];
}
</style>
