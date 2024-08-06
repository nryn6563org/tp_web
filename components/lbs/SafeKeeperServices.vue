<template>
  <div class="SafeKeeperServices">
    <div class="lbsWrap">
        <div class="lbsTitle">
          <strong class="ko">안심키퍼서비스</strong>
          <strong class="en">Safe Keeper Service</strong>
        </div>
        <!-- // -->
         
      <div class="lbsContent">
        <img src="~/assets/img/safeKeeper.png" alt="안심키퍼서비스" width="1213" class="ko">
        <img src="~/assets/img/safeKeeper_en.png" alt="안심키퍼서비스" width="1213" class="en">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
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
  @apply p-[80px_0_120px] flex w-full justify-center gap-[220px]
}
</style>
