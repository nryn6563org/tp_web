<template>
  <div class="mkModal" v-if="isVisible">
    <img
      src="~/assets/img/modal/nv_cloud.png"
      alt="씽크풀X네이버클라우드"
      usemap="#mkUrl"
    />
    <map name="mkUrl">
      <area
        shape="rect"
        coords="211,432,490,514"
        href="https://www.mk.co.kr/news/it/11406060"
        alt="자세히보기"
        target="_blank"
      />
    </map>

     <div class="todayClose">
      <button @click="closeModalToday">오늘하루 그만보기</button>
      <button @click="closeModal">&times; 닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: true, // 모달의 표시 상태를 관리하는 데이터
    }
  },
  mounted() {
    // 페이지가 로드될 때 로컬 스토리지(localStorage)를 확인하여 '오늘하루 그만보기' 상태인지 확인합니다.
    const hideUntil = localStorage.getItem('hide-modal-until')

    // 로컬 스토리지에 값이 있고, 현재 시간이 저장된 시간보다 이전이라면 모달을 숨깁니다.
    if (hideUntil && new Date().getTime() < Number(hideUntil)) {
      this.isVisible = false
    }
  },
  methods: {
    // '닫기' 버튼 클릭 시 모달을 숨깁니다.
    closeModal() {
      this.isVisible = false
    },
    // '오늘하루 그만보기' 버튼 클릭 시 모달을 숨기고, 24시간 동안 보이지 않도록 로컬 스토리지에 정보를 저장합니다.
    closeModalToday() {
      const oneDay = 24 * 60 * 60 * 1000 // 24시간(밀리초)
      const hideUntil = new Date().getTime() + oneDay
      localStorage.setItem('hide-modal-until', hideUntil)
      this.isVisible = false
    },
  }
}
</script>

<style scoped>
.mkModal {
  @apply fixed top-1/2 left-1/2 ml-[-353px] mt-[-289px] z-30 w-[705px] flex flex-col gap-1;
}
.todayClose {
  @apply w-full flex justify-end gap-5 px-[10px];
}
.todayClose button {
  @apply text-white text-[20px] h-[32px] flex items-center;
}
</style>
