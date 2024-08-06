<template>
  <div class="webHeader">
    <header>
      <div class="headerLogo">
        <nuxt-link to="/">
          <img src="~/assets/img/logo.png" alt="헤더 로고" />
        </nuxt-link>
      </div>

      <div class="headerNav">
        <div class="navList">
          <NuxtLink to="/about/corporateOverview" class="ko list01"
            >회사소개</NuxtLink
          >
          <NuxtLink to="/about/corporateOverview" class="en list01"
            >About Us</NuxtLink
          >
          <NuxtLink to="/thinkpoolAi/axRassi" class="list02">AI</NuxtLink>
          <NuxtLink to="/lbs/loginProtection" class="ko list03"
            >위치기반솔루션</NuxtLink
          >
          <NuxtLink to="/lbs/loginProtection" class="en list03">LBS</NuxtLink>
          <NuxtLink to="/rms/rmsSystem" class="ko list04"
            >리스크관리솔루션</NuxtLink
          >
          <NuxtLink to="/rms/rmsSystem" class="en list04">RMS</NuxtLink>
          <NuxtLink to="/rdcenter/rdNational01" class="ko list05"
            >기업부설연구소</NuxtLink
          >
          <NuxtLink to="/rdcenter/rdNational01" class="en list05"
            >R&D Center</NuxtLink
          >
          <NuxtLink to="/pr/notice" class="ko list06">홍보센터</NuxtLink>
          <NuxtLink to="/pr/notice" class="en list06">PR</NuxtLink>
          <NuxtLink to="/ir/ir" class="list07">IR</NuxtLink>
          <NuxtLink to="/ir/ir" class="ko list08">채용정보</NuxtLink>
          <NuxtLink to="/careers/recrui" class="en list08">Careers</NuxtLink>
        </div>

        <div class="invisible opacity-0 headerNavCon">
          <div class="menuList_w">
            <div class="menuList list01">
              <nuxt-link to="/about/corporateOverview" class="ko"
                >회사개요</nuxt-link
              >
              <nuxt-link to="/about/corporateOverview" class="en"
                >Corporate Overview</nuxt-link
              >
              <nuxt-link to="/about/ceoMessage" class="ko">CEO메시지</nuxt-link>
              <nuxt-link to="/about/ceoMessage" class="en"
                >CEO Message</nuxt-link
              >
              <nuxt-link to="/about/ourVision" class="ko">비전</nuxt-link>
              <nuxt-link to="/about/ourVision" class="en">VISION</nuxt-link>
              <nuxt-link to="/about/milestones03" class="ko">연혁</nuxt-link>
              <nuxt-link to="/about/milestones03" class="en"
                >Milestones</nuxt-link
              >
              <nuxt-link to="/about/patent" class="ko">지식재산권</nuxt-link>
              <nuxt-link to="/about/patent" class="en">Patent</nuxt-link>
              <nuxt-link to="/about/award" class="ko">수상</nuxt-link>
              <nuxt-link to="/about/award" class="en">Award</nuxt-link>
              <nuxt-link to="/about/certification" class="ko">인증</nuxt-link>
              <nuxt-link to="/about/certification" class="en"
                >Certification</nuxt-link
              >
              <nuxt-link to="/about/contact" class="ko">오시는 길</nuxt-link>
              <nuxt-link to="/about/contact" class="en">Contact</nuxt-link>
            </div>

            <div class="menuList list02">
              <nuxt-link to="/thinkpoolAi/axRassi" class="ko">AX 라씨</nuxt-link>
              <nuxt-link to="/thinkpoolAi/axRassi" class="en">AX RASSI</nuxt-link>
              <nuxt-link to="/thinkpoolAi/RassiTradingAssistant" class="ko">라씨매매비서</nuxt-link>
              <nuxt-link to="/thinkpoolAi/RassiTradingAssistant" class="en">RASSI Trading Assistant</nuxt-link>
              <nuxt-link to="/thinkpoolAi/aiAlgorithms" class="ko">알고리즘 협업</nuxt-link>
              <nuxt-link to="/thinkpoolAi/aiAlgorithms" class="en">Algorithmic Collaboration</nuxt-link>
            </div>

            <div class="menuList list03">
              <nuxt-link to="/lbs/loginProtection" class="ko"
                >로그인보호서비스</nuxt-link
              >
              <nuxt-link to="/lbs/loginProtection" class="en"
                >Login Protection<br />
                Services</nuxt-link
              >
              <nuxt-link to="/lbs/safeKeeper" class="ko"
                >안심키퍼서비스</nuxt-link
              >
              <nuxt-link to="/lbs/safeKeeper" class="en"
                >SafeKeeper <br />
                Service</nuxt-link
              >
            </div>

            <div class="menuList list04">
              <nuxt-link to="/rms/rmsSystem" class="ko"
                >RMS통제시스템</nuxt-link
              >
              <nuxt-link to="/rms/rmsSystem" class="en">RMS System</nuxt-link>
              <nuxt-link to="/rms/OnToUp" class="ko">온투업RMS시스템</nuxt-link>
              <nuxt-link to="/rms/OnToUp" class="en">P2P RMS System</nuxt-link>
            </div>

            <div class="menuList list05">
              <nuxt-link to="/rdcenter/rdNational01" class="ko"
                >국가R&D</nuxt-link
              >
              <nuxt-link to="/rdcenter/rdNational01" class="en"
                >National R&D</nuxt-link
              >
              <nuxt-link to="/rdcenter/personnel" class="ko"
                >병역특례</nuxt-link
              >
              <nuxt-link to="/rdcenter/personnel" class="en"
                >Technical Research <br />
                Personnel</nuxt-link
              >
            </div>

            <div class="menuList list06">
              <nuxt-link to="/pr/notice" class="ko">공지사항</nuxt-link>
              <nuxt-link to="/pr/news">NEWS</nuxt-link>
              <nuxt-link to="/pr/social">소셜미디어</nuxt-link>
              <nuxt-link to="/pr/csr">사회공헌활동</nuxt-link>
              <nuxt-link to="/pr/contact">문의하기</nuxt-link>
            </div>

            <div class="menuList list07">
              <nuxt-link to="/ir/financial">재무정보</nuxt-link>
              <nuxt-link to="/ir/ir">공시정보</nuxt-link>
            </div>

            <div class="menuList list08">
              <nuxt-link to="/about/ourValues" class="ko">인재상</nuxt-link>
              <nuxt-link to="/about/ourValues" class="en">Our Values</nuxt-link>
              <nuxt-link to="/about/welfare" class="ko">복지제도</nuxt-link>
              <nuxt-link to="/about/welfare" class="en"
                >Welfare System</nuxt-link
              >
              <nuxt-link to="/careers/recruit" class="ko">채용공고</nuxt-link>
              <nuxt-link to="/careers/recruit" class="en">Recruit</nuxt-link>
            </div>
          </div>
        </div>
      </div>

      <div class="changeLang">
        <button :class="{ active: isKorActive }" @click="changeKor">KR</button>
        <button :class="{ active: isEngActive }" @click="changeEng">EN</button>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isKorActive: true,
      isEngActive: false,
    }
  },
  mounted() {
    const headerNav = this.$el.querySelector('.headerNav')
    const headerNavCon = this.$el.querySelector('.headerNavCon')
    const nuxtLinks = this.$el.querySelectorAll('.menuList a')

    headerNav.addEventListener('mouseover', () => {
      headerNavCon.classList.toggle('opacity-100', true)
      headerNavCon.classList.toggle('visible', true)
      headerNavCon.classList.toggle('opacity-0', false)
      headerNavCon.classList.toggle('invisible', false)
    })

    headerNav.addEventListener('mouseleave', () => {
      headerNavCon.classList.toggle('opacity-100', false)
      headerNavCon.classList.toggle('visible', false)
      headerNavCon.classList.toggle('opacity-0', true)
      headerNavCon.classList.toggle('invisible', true)
    })

    nuxtLinks.forEach((link) => {
      link.addEventListener('click', this.hideMenu)
    })
  },
  methods: {
    changeKor() {
      this.isKorActive = !this.isKorActive
      if (this.isKorActive) {
        this.isEngActive = false
        document.body.classList.toggle('eng')
        document.body.classList.toggle('kor')
      }
    },
    changeEng() {
      this.isEngActive = !this.isEngActive
      if (this.isEngActive) {
        this.isKorActive = false
        document.body.classList.toggle('kor')
        document.body.classList.toggle('eng')
      }
    },
    hideMenu() {
      const headerNavCon = this.$el.querySelector('.headerNavCon')
      if (headerNavCon) {
        headerNavCon.classList.toggle('opacity-0', true)
        headerNavCon.classList.toggle('invisible', true)
        headerNavCon.classList.toggle('opacity-100', false)
        headerNavCon.classList.toggle('visible', false)
      }
    },
  },
}
</script>

<style scoped>
.webHeader {
  @apply min-w-[1920px] w-full h-[80px] leading-[80px] border-b-[1px] border-[#d9d9d9] z-[999] sticky top-0 bg-[#fff];
}
header{
  @apply w-[1920px] mx-auto  flex items-center justify-between
}
.headerLogo img {
  @apply w-[272px];
}

.headerNav {
  @apply relative z-[999];
}

.navList {
  @apply flex justify-between items-center w-[1280px];
}

.navList a {
  @apply text-center w-[160px] h-[80px] leading-[80px] text-[#141414] text-[20px] font-normal;
}
.navList a.list03,
.navList a.list04,
.navList a.list05 {
  @apply w-[180px];
}
.navList a.list07,
.navList a.list08 {
  @apply w-[130px];
}

.headerNavCon {
  @apply fixed w-full flex justify-center left-0 bg-[#fff] overflow-hidden duration-[0.4s];
}
.menuList_w {
  @apply w-[1388px] flex pl-[108px] justify-center;
}
.menuList {
  @apply w-[160px] flex flex-col pt-[13px] pb-[40px];
}
.menuList.list03,
.menuList.list04,
.menuList.list05 {
  @apply w-[180px];
}
.menuList.list07,
.menuList.list08 {
  @apply w-[130px];
}

.menuList a {
  @apply text-[#000] text-[14px] leading-[18px] font-normal text-center py-[6px];
}

.changeLang {
  @apply flex justify-center items-center w-[164px] gap-2.5;
}

.changeLang button {
  @apply p-[5px_18px] leading-[16px] bg-[#f6f6f6] border border-[#d9d9d9] rounded-[13px] text-[#c9c9c9] text-[13px] font-normal;
}

.changeLang button.active {
  @apply bg-[#fff] text-[#141414];
}
</style>
