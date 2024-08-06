<template>
  <div class="LoginProtectionServices">
    <div class="lbsWrap">
      <div class="lbsTitle">
        <strong class="ko">로그인보호서비스</strong>
        <strong class="en">Login Protection Service</strong>
      </div>
      <!-- // -->

      <div class="lbsContent">
        <div>
          <img src="~/assets/img/lbsLogin.png" alt="" width="442" class="ko" />
          <img src="~/assets/img/lbsLogin_en.png" alt="" width="442" class="en" />
        </div>

        <div>
          <div class="txt ko">
            언제든지 발생할 수 있는 부정로그인 및 해킹을 방지하는<br> 위치기반 보안서비스 <br><br>
            디지털 범죄로 인한 금전적 피해발생 시 보상보험 제공<br> (해킹, 피싱, 스미싱, 불법 카드 사용 등) <br><br>
            국내 3대 이통사와 함께 하는 이통사 부가서비스
          </div>
          <div class="txt en">
            Location-based security service that prevents <br>
            unauthorized logins and hacking that can occur at any time <br>
            Compensation insurance for financial damages caused by <br>
            digital crimes (hacking, phishing, smishing, illegal card use, <br>
            etc.) <br>
            Additional carrier services with the top 3 domestic carriers
          </div>
          <div class="minister">
            <strong class="ko">주요 수상</strong>
            <strong class="en">Major Award</strong>
            <a href="#">
              <span><img src="~/assets/img/minister/m1.png" alt="과학기술정보통신부" width="104px"></span>
              <span class="ko">과학기술정보통신부</span>
              <span class="en">Minister of Science and ICT Award</span>
            </a>
            <a href="#">
              <span><img src="~/assets/img/minister/m2.png" alt="방송통신위원회" width="104px"></span>
              <span class="ko">방송통신위원회</span>
              <span class="en"> chairman's Award for Broadcasting and Telecommunications</span>
            </a>
          </div>
          <div class="cnc">
            <strong class="ko">제휴사</strong>
            <strong class="en">제휴사</strong>
            <span class="ko">
              KT / LG U+ / SKT / KB 국민카드 / 코스콤 / KORAIL / 넷마블 /
              하이플러스카드 <br />
              /컬쳐랜드 / 넥슨 / 부산은행 / MBN / SK컴즈 / iMBC /인터파크 /
              OK캐시백 / <br />
              재무교육원 / 조세일보 / 싸이월드 / 부산대학교 / 네이트
              /한국전자인증 / <br />
              바른소프트 / 한국무역정보통신 / 다날 /나이스평가정보 / 서경방송 /
              <br />
              열린사이버대학교 / 아시아경제 / 교보문고 / SBS / 60여 업체 제휴
            </span>
            <span class="en">
              KT / LG U+ / SKT / KB Kookmin Card / KOSKOM / KORAIL / br 
              netmable / Hi-PLUS CARD / CULTURELAND / NEXON / <br>
              BUSAN BANK / MBN / SKcomms / iMBC / INTERPARD / <br>
              OK CASHBACK / Finance Institute / Tax Journal / <br>
              Cyworld / Busan Univ / Nate / Korean Electronic / <br>
              Certificate / barunsoft / KTNET / DANAL /  NICEINFO / <br>
              ISCS / OPEN CYBER UNIV / ASIA ECONOMY / <br>
              KYOBO BOOK / SBS / Parnered with 60+ companies
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.lbsTitle{
  @apply flex w-full flex-col items-center gap-2 pt-[54px]
}
.lbsTitle em{
  @apply text-[#9395a1] text-[16px] leading-5
}
.lbsTitle strong{
  @apply text-[#141414] text-[48px] leading-[60px]
}
.lbsContent{
  @apply p-[60px_0_120px] flex w-full justify-center gap-[220px]
}
.lbsContent div:last-child{
  @apply flex flex-col w-[450px] gap-10
}
.lbsContent div .txt{
  @apply w-full text-[#444] text-[20px] leading-[25px] tracking-[-0.22px]
}
.lbsContent div .txt.en{
  @apply text-[16px]
}
.lbsContent div .minister{
  @apply flex flex-wrap gap-2 w-full pt-2.5
}
.lbsContent div .minister strong{
  @apply w-full text-[20px] leading-5 text-black font-bold
}
.lbsContent div .minister a{
  @apply w-[156px] flex flex-col gap-1 items-center text-center
}
.lbsContent div .minister a span:first-child{
  @apply w-full h-[45px] border-[1px] border-[#f0f0f0] bg-white rounded-[6px] flex justify-center items-center
}
.lbsContent div .minister a span:last-child{
  @apply text-[14px] leading-[18px] text-[#9395a1]
}
.lbsContent div .cnc{
  @apply flex flex-col gap-2 w-full
}
.lbsContent div .cnc strong{
  @apply w-full text-[20px] font-bold text-black
}
.lbsContent div .cnc span{
  @apply text-[14px] text-[#444] leading-6 tracking-[-0.176px]
}
</style>
