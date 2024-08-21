<template>
  <div class="content">
    <CategoryNav :categoryIndex="categoryIndex" :activeIndex="selectedIndex"></CategoryNav>
    <div class="rnd">
      <div class="rndTitle">
        <strong class="ko">국가R&D</strong>
        <strong class="en">National R&D</strong>
      </div>
      <!-- // -->
       
      <div class="rndContent">
        <div>
          <img src="~/assets/img/rnd.png" alt="rnd" width="446">
        </div>
        <!-- // -->
         
        <div>
          <div class="tit">
            <strong>
              2023 <br>
              산업통상자원부 <br>
              지식서비스 개발과제 수행기관 선정
            </strong>
            <span>
              액티브 시니어 생애설계와<br>
              자기계발 지원을 위한 런케이션서비스 개발
            </span>
          </div>
          <!-- // -->
           
          <div class="info">
            <div>
              <strong>개발기간</strong>
              <span>2023년  5월 ~ 2025년 11월</span>
            </div>
            <div>
              <strong>개발예산</strong>
              <span>30억원 투자</span>
            </div>
            <div>              
              <span>주관기관</span>
              <span>㈜씽크풀</span>
            </div>
            <div>
              <strong>참여기관</strong>
              <span>(사)금융과 행복 네트워크</span>
              <span>(주)프로눔</span>
              <span>한국전기통신연구원</span>
              <span>상명대 (시니어 휴먼 팩터 연구기관)</span>
            </div>
          </div>
          <!-- // -->
          <div class="cnc">
            <a href="#"><img src="~/assets/img/cnc/cnc21.png" alt="씽크풀" width="89"></a>
            <a href="#"><img src="~/assets/img/cnc/cnc22.png" alt="금융과행복네트워크" width="82"></a>
            <a href="#"><img src="~/assets/img/cnc/cnc23.png" alt="상명대학교" width="17"></a>
            <a href="#"><img src="~/assets/img/cnc/cnc24.png" alt="pronum" width="58"></a>
            <a href="#"><img src="~/assets/img/cnc/cnc25.png" alt="한국전자통신연구원" width="58"></a>
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
      selectedIndex: 17,
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
  @apply flex flex-col w-[700px] h-[899px] justify-center bg-[#fbfbfb] rounded-[20px] p-[0_60px] gap-[5px]
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
.rndContent div  >.info{
  @apply flex flex-col gap-[22px]
}
.rndContent > div .info div{
  @apply flex flex-col w-full
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