<template>
  <div class="section landingLbsBg">
    <div class="landingLbs">
      <!-- <div class="titleSpan ko">위치기반서비스</div> -->
      <!-- <div class="titleSpan en">Location-based services</div> -->
      <div class="sectionTitle ko">
        <NuxtLink to="/">위치기반솔루션</NuxtLink>
      </div>
      <div class="sectionTitle en">
        <NuxtLink to="/">Location-based Solution</NuxtLink>
      </div>
      <!-- // -->

      <div class="sectionSubTitle ko">
        위치기반솔루션을 통해 고객의 정보를 보호하고 편의성을 추구합니다.
      </div>
      <div class="sectionSubTitle en">
        We use location-based services to protect your information and provide
        convenience.
      </div>
      <!-- // -->

      <div class="sectionContent">
        <div class="contentBox">
          <NuxtLink to="/">
            <div class="img"><div class="img01"></div></div>
            <div class="boxTitle ko">로그인 보호 서비스</div>
            <div class="boxTitle en">Login Identity Protection Services</div>
            <div class="boxTxt ko">
              PC위치와 휴대폰 위치 비교를 통해 <br />
              부정로그인을 판별하고 해킹을 방지합니다.
            </div>
            <div class="boxTxt en">
              Detect fraudulent logins and prevent <br />
              hacking by comparing PC and phone <br />
              locations.
            </div>
          </NuxtLink>
        </div>
        <!-- // -->

        <div class="contentBox">
          <NuxtLink to="/">
            <div class="img"><div class="img02"></div></div>
            <div class="boxTitle ko">안심키퍼 서비스</div>
            <div class="boxTitle en">SafeKeeper Service</div>
            <div class="boxTxt ko">
              PC의 부정접속을 차단하고 <br />
              자녀의 과다한 PC사용을 통제합니다.
            </div>
            <div class="boxTxt en">
              Block unauthorized access to <br />
              your PC and control your <br />
              child’s excessive PC use.
            </div>
          </NuxtLink>
        </div>
        <!-- // -->
      </div>
      <!-- // -->
       
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.landingLbsBg {
  @apply bg-[#DEE3EA] w-full h-[1080px];
}

.landingLbs {
  @apply w-full text-center;
}

.sectionContent {
  @apply flex justify-center items-center gap-[350px] pt-[220px];
}

.img {
  @apply flex justify-center items-center mb-[40px];
}

.boxTitle {
  @apply text-[#141414] text-[28px] font-bold leading-[24px] mb-[35px];
}

.boxTxt {
  @apply text-[#141414] text-[20px] font-[300] leading-[30px];
}
</style>
