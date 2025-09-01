<template>
  <div class="content">
    <LandingMain></LandingMain>
    <LandingRassi></LandingRassi>
    <LandingLbs></LandingLbs>
    <LandingRms></LandingRms>
    <LandingRdc></LandingRdc>
    <LandingNews></LandingNews>
    <LandingNotice></LandingNotice>
    <LandingPatent></LandingPatent>
    <LandingAsk></LandingAsk>
    <MkModal></MkModal>
  </div>
</template>

<script>
import MkModal from '~/components/modal/MkModal.vue';
export default {
  components: {
    MkModal
  }
}
</script>
<style scoped>
</style>