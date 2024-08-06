<template>
  <div class="content">
    <CategoryNav
      :categoryIndex="categoryIndex"
      :activeIndex="selectedIndex"
    ></CategoryNav>
    <div class="social">
      <div class="socialTitle">
        <strong class="en">Social Media</strong>
        <strong class="ko">소셜미디어</strong>
      </div>
      <!-- // -->
      <div class="socialContent">
        <div class="tab">
          <button @click="showTab('tab1')" :class="{active: activeTab === 'tab1'}">
            <span class="ko">유튜브</span>
            <span class="en">Youtube</span>
          </button>
          <button @click="showTab('tab2')" :class="{active: activeTab === 'tab2'}">
            <span class="ko">블로그</span>
            <span class="en">Blog</span>
          </button>
          <button @click="showTab('tab3')" :class="{active: activeTab === 'tab3'}">
            <span class="ko">텔레그램</span>
            <span class="en">Telegram</span>
          </button>
        </div>
        <!-- // -->
         
        <div class="tabContent">
          <div v-if="activeTab === 'tab1'" class="tabCont">
            <div class="list-w">
              <a href="#" class="list">
                <img src="~/assets/img/demoThumb.png" alt="썸네일">
                <span>주도주를 알아야 시장의 흐름이 보인다!</span>
                <em>2024-05-31</em>
              </a>
              <a href="#" class="list">
                <img src="~/assets/img/demoThumb.png" alt="썸네일">
                <span>주도주를 알아야 시장의 흐름이 보인다!</span>
                <em>2024-05-31</em>
              </a>
              <a href="#" class="list">
                <img src="~/assets/img/demoThumb.png" alt="썸네일">
                <span>주도주를 알아야 시장의 흐름이 보인다!</span>
                <em>2024-05-31</em>
              </a>
              <a href="#" class="list">
                <img src="~/assets/img/demoThumb.png" alt="썸네일">
                <span>주도주를 알아야 시장의 흐름이 보인다!</span>
                <em>2024-05-31</em>
              </a>
              <a href="#" class="list">
                <img src="~/assets/img/demoThumb.png" alt="썸네일">
                <span>주도주를 알아야 시장의 흐름이 보인다!</span>
                <em>2024-05-31</em>
              </a>
              <a href="#" class="list">
                <img src="~/assets/img/demoThumb.png" alt="썸네일">
                <span>주도주를 알아야 시장의 흐름이 보인다!</span>
                <em>2024-05-31</em>
              </a>
            </div>
            <button>더보기</button>
          </div>
          <!-- // -->
           
          <div v-if="activeTab === 'tab2'" class="tabCont">
            <div class="list-w">
              <a href="#" class="list">
                <img src="~/assets/img/demoThumb.png" alt="썸네일">
                <span>주도주를 알아야 시장의 흐름이 보인다!</span>
                <em>2024-05-31</em>
              </a>
              <a href="#" class="list">
                <img src="~/assets/img/demoThumb.png" alt="썸네일">
                <span>주도주를 알아야 시장의 흐름이 보인다!</span>
                <em>2024-05-31</em>
              </a>
              <a href="#" class="list">
                <img src="~/assets/img/demoThumb.png" alt="썸네일">
                <span>주도주를 알아야 시장의 흐름이 보인다!</span>
                <em>2024-05-31</em>
              </a>
              <a href="#" class="list">
                <img src="~/assets/img/demoThumb.png" alt="썸네일">
                <span>주도주를 알아야 시장의 흐름이 보인다!</span>
                <em>2024-05-31</em>
              </a>
              <a href="#" class="list">
                <img src="~/assets/img/demoThumb.png" alt="썸네일">
                <span>주도주를 알아야 시장의 흐름이 보인다!</span>
                <em>2024-05-31</em>
              </a>
              <a href="#" class="list">
                <img src="~/assets/img/demoThumb.png" alt="썸네일">
                <span>주도주를 알아야 시장의 흐름이 보인다!</span>
                <em>2024-05-31</em>
              </a>
            </div>
            <button>더보기</button>
          </div>
          <!-- // -->
           
          <div v-if="activeTab === 'tab3'" class="tabCont">
            <div class="list-w">
              <a href="#" class="list">
                <img src="~/assets/img/demoThumb.png" alt="썸네일">
                <span>주도주를 알아야 시장의 흐름이 보인다!</span>
                <em>2024-05-31</em>
              </a>
              <a href="#" class="list">
                <img src="~/assets/img/demoThumb.png" alt="썸네일">
                <span>주도주를 알아야 시장의 흐름이 보인다!</span>
                <em>2024-05-31</em>
              </a>
              <a href="#" class="list">
                <img src="~/assets/img/demoThumb.png" alt="썸네일">
                <span>주도주를 알아야 시장의 흐름이 보인다!</span>
                <em>2024-05-31</em>
              </a>
              <a href="#" class="list">
                <img src="~/assets/img/demoThumb.png" alt="썸네일">
                <span>주도주를 알아야 시장의 흐름이 보인다!</span>
                <em>2024-05-31</em>
              </a>
              <a href="#" class="list">
                <img src="~/assets/img/demoThumb.png" alt="썸네일">
                <span>주도주를 알아야 시장의 흐름이 보인다!</span>
                <em>2024-05-31</em>
              </a>
              <a href="#" class="list">
                <img src="~/assets/img/demoThumb.png" alt="썸네일">
                <span>주도주를 알아야 시장의 흐름이 보인다!</span>
                <em>2024-05-31</em>
              </a>
            </div>
            <button>더보기</button>
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
    return {
      categoryIndex: 5,
      selectedIndex: 21,
      activeTab: 'tab1'
    }
  },
  methods : {
    showTab(tab) {
      this.activeTab = tab
    }
  }
}
</script>

<style scoped>
.rassiBg {
  @apply bg-[#EFF2FB];
}
.socialTitle {
  @apply flex w-full flex-col items-center gap-2 pt-[54px];
}
.socialTitle em {
  @apply text-[#9395a1] text-[16px] leading-5;
}
.socialTitle strong {
  @apply text-[#141414] text-[48px] leading-[60px];
}
.socialContent{
  @apply w-full pt-[80px] flex flex-col items-center
}
.tab{
  @apply flex
}
.tab button{
  @apply w-[250px] h-[70px] flex items-center justify-center text-[24px] text-[#9295a1]
}
.tab button.active{
  @apply border-b-[1px] border-black text-[#141414]
}
.tabContent{
  @apply w-full min-h-[1000px] bg-[#FCFAFA] py-[100px] flex justify-center
}
.tabCont{
  @apply w-[1353px]
}
.tabCont .list-w{
  @apply flex flex-wrap w-full justify-between gap-y-[60px]
}
.tabCont .list-w .list{
  @apply w-[422px] flex flex-col gap-4
}
.tabCont .list-w .list span{
  @apply text-[#141414] text-[24px] leading-[24px] pt-[5px]
} 
.tabCont .list-w .list em{
  @apply w-full text-[16px] text-[#9395a1]
}
.tabCont button{
  @apply w-[175px] h-[45px] flex justify-center items-center rounded-[5px] text-[14px] text-[#141414] bg-[#ededed] m-[60px_auto_0]
}
</style>
