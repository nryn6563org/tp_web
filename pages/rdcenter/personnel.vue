<template>
  <div class="content">
    <CategoryNav :categoryIndex="categoryIndex" :activeIndex="selectedIndex"></CategoryNav>
    <div class="rnd">
      <div class="rndTitle">
        <em>Technical Research Personnel</em>
        <strong>병역특례</strong>
      </div>
      <!-- // -->
       
      <div class="rndContent">
        <div>
          <img src="~/assets/img/pers.png" alt="rnd" width="446">
        </div>
        <!-- // -->
         
        <div>
          <div class="tit">
            <strong>
              씽크풀은 금융권서비스 분야에서 유일하게<br>
              <em>병역특례 AI기술연구소</em>를 보유한<br>
              지식기업입니다.
            </strong>
            <span>
              전문연구요원제도란? <br>
              군복무 대체프로그램인 전문연구요원 제도는 자연계 석박사 졸업생들이 <br>
              군복무기간을 대체하여 연구기관에서 연구개발활동을 수행하는 제도입니다.
            </span>

            <button>전문연구요원 채용공고 바로가기</button>
          </div>
          <!-- // -->
           
          <div class="info">
            <strong>병역 특례 지정업체 정보</strong>
            <div>
              <strong>업체명</strong>
              <span>(주)씽크풀 기업부설연구소</span>
            </div>
            
            <div>
              <strong>업종</strong>
              <span>벤처기업부설연구소</span>
            </div>
            
            <div>              
              <strong>주소</strong>
              <span>서울특별시 영등포구 국제금융로70 16층 <br>1501호(여의도동,미원빌딩)</span>
            </div>
            
            <div>
              <strong>기업규모</strong>
              <span>중소기업</span>
            </div>
            
            <div>
              <strong>전화번호</strong>
              <span>02-2174-5401</span>
            </div>
            
            <div>
              <strong>팩스번호</strong>
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