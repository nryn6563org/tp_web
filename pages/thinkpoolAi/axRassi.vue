<template>
  <div class="content">
    <CategoryNav
      :categoryIndex="categoryIndex"
      :activeIndex="selectedIndex"
      class="rassiBg"
    ></CategoryNav>
    <LandingRassi class="rassiBg"></LandingRassi>

    <div class="rassiw">
      <div class="rassiTab">
        <button @click="showTab('tab1')" :class="{active: activeTab === 'tab1'}">PMS</button>
        <button @click="showTab('tab2')" :class="{active: activeTab === 'tab2'}">SMS</button>
        <button @click="showTab('tab3')" :class="{active: activeTab === 'tab3'}">TMS</button>
      </div>
      
      <div class="rassiTabContent">
        <div v-if="activeTab === 'tab1'" class="tCont">
          <pmsSection></pmsSection>
        </div>
        <!-- // -->

        <div v-if="activeTab === 'tab2'" class="tCont">
          <smsSection></smsSection>
        </div>
        <!-- // -->

        <div v-if="activeTab === 'tab3'" class="tCont">
          <tmsSection></tmsSection>
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
      categoryIndex: 1,
      selectedIndex: 10,
      activeTab : 'tab1',
    }
  },
  methods: {
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

.rassiw {
  @apply w-[1360px] pt-[105px] mx-auto
}
.rassiw .rassiTab{
  @apply w-full flex
}
.rassiw .rassiTab button{
  @apply border-b-[2px] border-[#000] h-[70px] text-[24px] text-[#9395a1] w-1/3
}
.rassiw .rassiTab button.active{
  @apply border-[2px] border-b-0 text-[#000] font-bold
}
</style>
