<template>
  <div class="content">
    <CategoryNav :categoryIndex="categoryIndex" :activeIndex="selectedIndex"></CategoryNav>
    <div class="rnd">
      <div class="rndTitle">
        <strong class="ko">병역특례</strong>
        <strong class="en">Technical Research Personnel</strong>
      </div>
      <!-- // -->
       
      <div class="rndContent">
        <div>
          <img src="~/assets/img/pers.png" alt="rnd" width="446">
        </div>
        <!-- // -->
         
        <div>
          <div class="tit">
            <strong class="ko">
              씽크풀은 금융권서비스 분야에서 유일하게<br>
              <em>병역특례 AI기술연구소</em>를 보유한<br>
              지식기업입니다.
            </strong>
            <strong class="en">
              Military service as a research and <br>
              development activity national <br>
              technological competitiveness!
            </strong>
            <span class="ko">
              전문연구요원제도란? <br>
              군복무 대체프로그램인 전문연구요원 제도는 자연계 석박사 졸업생들이 <br>
              군복무기간을 대체하여 연구기관에서 연구개발활동을 수행하는 제도입니다.
            </span>
            <span class="en">
              What is the Specialized Research Service? <br>
              As an alternative to military service, the Professional Research Staff <br>
              Program is a program for natural science graduates to perform research <br>
              and development activities at research institutions as an alternative to <br>
              military service.
            </span>

            <button class="ko">전문연구요원 채용공고 바로가기</button>
            <button class="en">View open posiiton</button>
          </div>
          <!-- // -->
           
          <div class="info">
            <strong class="ko">병역 특례 지정업체 정보</strong>
            <strong class="en">Military Service Designee Information</strong>
            <div>
              <strong class="ko">업체명</strong>
              <strong class="en">Company name </strong>
              <span class="ko">(주)씽크풀 기업부설연구소</span>
              <span class="en">Thinkpool Corporate Research Center</span>
            </div>
            
            <div>
              <strong class="ko">업종</strong>
              <strong class="e">Industry</strong>
              <span class="ko">벤처기업부설연구소</span>
              <strong class="en">Venture Business Institute</strong>
            </div>
            
            <div>              
              <strong class="ko">주소</strong>
              <strong class="en">Address</strong>
              <span class="ko">서울특별시 영등포구 국제금융로70 16층 <br>1501호(여의도동,미원빌딩)</span>
              <span class="en">70, Gukje Financial Road, <br>Yeongdeungpo-gu, Seoul, Korea, <br>15F, Room 1501 (Yeouido-dong, <br>Mi-won Building)</span>
            </div>
            
            <div>
              <strong class="ko">기업규모</strong>
              <strong class="en">Enterprise size</strong>
              <span class="ko">중소기업</span>
              <span class="en">Small and medium-sized businesses</span>
            </div>
            
            <div>
              <strong class="ko">전화번호</strong>
              <strong class="en">TEL</strong>
              <span>02-2174-5401</span>
            </div>
            
            <div>
              <strong class="ko">팩스번호</strong>
              <strong class="en">FAX</strong>
              <span>02-2174-6306</span>
            </div>
          </div>
          <!-- // -->
        </div>
        <!-- // -->
      </div>
      <!-- // -->
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
  data() {
    return{
      categoryIndex: 4,
      selectedIndex: 18,
    }
  }
}
</script>

<style scoped>
  .rassiBg{
    @apply bg-[#EFF2FB];
  }

.rndTitle{
  @apply flex w-full flex-col items-center gap-2 pt-[54px]
}
.rndTitle em{
  @apply text-[#9395a1] text-[16px] leading-5
}
.rndTitle strong{
  @apply text-[#141414] text-[48px] leading-[60px]
}
.rndContent{
  @apply p-[90px_0_120px] flex w-full justify-center items-center gap-[65px]
}
.rndContent > div:last-child{
  @apply flex flex-col w-[700px] h-[899px] justify-center bg-[#fbfbfb] rounded-[20px] p-[60px]
}
.rndContent > div .tit{
  @apply flex flex-col w-full gap-5
}
.rndContent > div .tit strong{
  @apply text-[28px] leading-[36px] text-[#141414] font-bold
}
.rndContent > div .tit span{
  @apply text-[16px] leading-[25px] text-black
}
.rndContent > div .tit button{
  @apply w-[234px] h-[46px] flex justify-center items-center rounded-[6px] bg-[#5368FF] text-white text-[14px] font-bold mt-2.5
}
.rndContent div  >.info{
  @apply flex flex-wrap w-[600px] gap-5 mt-[190px] justify-between
}
.rndContent > div .info strong{
  @apply w-full text-[16px] text-[#141414] font-bold
}
.rndContent > div .info div{
  @apply flex flex-col w-[245px]
}
.rndContent > div .info div strong{
  @apply text-[14px] text-[#141414] leading-[22px]
}
.rndContent > div .info div span{
  @apply text-[#444] text-[14px] leading-[22px]
}
.rndContent div .cnc{
  @apply flex gap-4 w-full pt-[35px]
}
.rndContent div .cnc a{
  @apply w-[105px] h-[32px] border-[1px] border-[#f0f0f0] rounded-[6px] flex justify-center items-center bg-white
}
</style>