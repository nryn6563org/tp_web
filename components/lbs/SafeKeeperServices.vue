<template>
  <div class="SafeKeeperServices">
    <div class="lbsWrap">
        <div class="lbsTitle">
          <em>Safe Keeper Service</em>
          <strong>안심키퍼서비스</strong>
        </div>
        <!-- // -->
         
      <div class="lbsContent">
        <img src="~/assets/img/safeKeeper.png" alt="안심키퍼서비스" width="1213">
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
