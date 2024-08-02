<template>
  <div class="section">
    <div class="landingPatent" @click="goToPatent">
      <div class="txt ko">
        씽크풀은 <span>99</span>건의 등록 특허와 <br />
        <span>6</span>건의 상표권을 보유하고 있으며 <br />
        <span>20</span>건의 특허 출원을 <br />
        진행 중인 지식기업입니다.

        <p>(2024.05.31. 현재)</p>
      </div>
      <div class="txt en">
        ThinkPool has a total of <span>97</span> issued patents and
        <span>11</span> <br />
        pending patent applications.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToPatent(){
      this.$router.push('/about/patent')
    }
  }
}
</script>

<style scoped>
.landingPatent {
  @apply w-full text-center;
}

.txt {
  @apply text-[#141414] text-[48px] font-normal leading-[70px];
}

.txt span {
  @apply text-[#5368ff] font-bold;
}
.txt p{
  @apply block w-full text-center pt-[95px] text-[16px] text-[#141414] font-light tracking-[-0.176px]
}
</style>
