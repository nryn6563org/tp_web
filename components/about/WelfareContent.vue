<template>
  <div class="WelfareContent">
    <div class="categoryContent">
      <div class="detail ko">경력과 성과에 따른 합리적인 평가, 씽크풀의 복지제도를 안내합니다.</div>
      <div class="detail en">Reasonable evaluations based on experience and performance, as well as ThinkPool's welfare
        system. </div>
      <div class="welfareList">
        <img src="~/assets/img/walfare.png" alt="복지제도" width="1358" class="ko">
        <img src="~/assets/img/walfare_en.png" alt="복지제도" width="1358" class="en">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.categoryContent{
  @apply m-[0_auto] p-0 w-[1358px] flex flex-col justify-center gap-0
}
.detail{
  @apply text-[20px] text-black text-center w-full
}
.welfareList{
  @apply w-full mt-[115px] pb-[300px]
}
</style>
