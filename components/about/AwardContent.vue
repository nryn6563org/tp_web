<template>
  <div class="AwardContent">
    <div class="categoryContent">
      <div class="awardImg">
        <div>
          <span><img src="" alt="상장 이미지" /></span>
          <span>벤처창업진흥 유공포상<br />국무총리상 수상</span>
        </div>
        <!-- // -->

        <div>
          <span><img src="" alt="상장 이미지" /></span>
          <span class="ko">전자ICT 특허경영대상<br />금상 수상</span>
          <span class="en">asfdasdfsadfadsfas<br />afasdfasdfadsfadsfdsafadsd</span>
        </div>
        <!-- // -->

        <div>
          <span><img src="" alt="상장 이미지" /></span>
          <span>인터넷기술선도부문<br />미래창조과학부장관상 수상</span>
        </div>
        <!-- // -->

        <div>
          <span><img src="" alt="상장 이미지" /></span>
          <span>방통위 중소벤처유망LBS<br />공모전 최우수상 수상</span>
        </div>
        <!-- // -->

        <div>
          <span><img src="" alt="상장 이미지" /></span>
          <span>인터넷기술선도부문<br />미래창조과학부장관상 수상</span>
        </div>
        <!-- // -->

        <div>
          <span><img src="" alt="상장 이미지" /></span>
          <span>벤처창업진흥 유공포상<br />국무총리상 수상</span>
        </div>
        <!-- // -->

        <div>
          <span><img src="" alt="상장 이미지" /></span>
          <span>전자ICT 특허경영대상<br />금상 수상</span>
        </div>
        <!-- // -->

        <div>
          <span><img src="" alt="상장 이미지" /></span>
          <span>방통위 중소벤처유망LBS<br />공모전 최우수상 수상</span>
        </div>
        <!-- // -->
      </div>
      <!-- // -->

      <div class="awardList">
        <strong>수상</strong>

        <div class="aw-list-w">
          <div class="aw-list">
            <div class="year">
              <span>2022</span>
            </div>
            <!-- // -->

            <div class="mday">
              <div>
                <span>12월</span>
                <span>벤처창업진흥 유공포상 국무총리상 수상</span>
              </div>
            </div>
            <!-- // -->
          </div>
          <!-- // -->

          <div class="aw-list">
            <div class="year">
              <span>2016</span>
            </div>
            <div class="mday">
              <div>
                <span>12월</span>
                <span>전자ICT 특허경영대상 금상 수상</span>
              </div>
              <!-- // -->
              <div>
                <span>11월</span>
                <span>제4회 대한민국 사랑받는 기업 표창</span>
              </div>
              <!-- // -->
            </div>
          </div>
          <!-- // -->
          <div class="aw-list">
            <div class="year">
              <span>2013</span>
            </div>
            <div class="mday">
              <div>
                <span>12월</span>
                <span class="ko">인터넷기술선도부문 미래창조과학부장관상 수상</span>
                <span class="en">afdsafdsfasdfsadfadsfsdafsadfdsafadsfasdfadsfasd</span>
              </div>
            </div>
          </div>
          <!-- // -->
          <div class="aw-list">
            <div class="year">
              <span>2012</span>
            </div>
            <div class="mday">
              <div>
                <span>12월</span>
                <span>방통위 중소벤처유망LBS공모전 최우수상 수상</span>
              </div>
            </div>
          </div>
          <!-- // -->
          <div class="aw-list">
            <div class="year">
              <span>2011</span>
            </div>
            <div class="mday">
              <div>
                <span>12월</span>
                <span>벤처창업진흥 유공포상 국무총리상 수상</span>
              </div>
            </div>
          </div>
          <!-- // -->
          <div class="aw-list">
            <div class="year">
              <span>2010</span>
            </div>
            <div class="mday">
              <div>
                <span>12월</span>
                <span>전자ICT 특허경영대상 금상 수상</span>
              </div>
              <div>
                <span>11월</span>
                <span>제4회 대한민국 사랑받는 기업 표창</span>
              </div>
            </div>
          </div>
          <!-- // -->
          <div class="aw-list">
            <div class="year">
              <span>2009</span>
            </div>
            <div class="mday">
              <div>
                <span>12월</span>
                <span>인터넷기술선도부문 미래창조과학부장관상 수상</span>
              </div>
            </div>
          </div>
          <!-- // -->
          <div class="aw-list">
            <div class="year">
              <span>2007</span>
            </div>
            <div class="mday">
              <div>
                <span>12월</span>
                <span>방통위 중소벤처유망LBS공모전 최우수상 수상</span>
              </div>
            </div>
          </div>
        </div>

        <button>더보기</button>
      </div>
      <!-- // -->
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.categoryContent {
  @apply !gap-[0] !items-center pt-0 flex-col;
}

.awardImg {
  @apply flex flex-wrap gap-x-[60px] gap-y-[55px] w-[1188px] mx-auto;
}
.awardImg div {
  @apply w-[252px] gap-6 flex flex-col;
}
.awardImg div span:first-child {
  @apply w-full h-[336px] bg-[#f8f8f8];
}
.awardImg div span{
  @apply w-full text-center text-[16px] text-[#444] leading-5;
}

.awardList {
  @apply w-[1300px] mt-[100px] mx-auto;
}
.awardList strong {
  @apply w-full text-[24px] font-bold text-[#141414];
}
.awardList .aw-list-w {
  @apply w-full border-t-[1px] border-[#8c8c8c] mt-5;
}
.awardList .aw-list-w .aw-list {
  @apply flex items-center w-full h-fit border-b-[1px] border-b-[#f0f0f0]
}
.awardList .aw-list-w .aw-list .year {
  @apply block w-[150px] h-[80px] text-center leading-[80px] text-[18px]
}
.awardList .aw-list-w .aw-list .mday {
  @apply flex flex-col w-full;
}
.awardList .aw-list-w .aw-list .mday div{
  @apply w-full flex border-b-[1px] border-l-[1px] border-[#f0f0f0] h-[80px] items-center
}
.awardList .aw-list-w .aw-list .mday div:last-child{
  @apply border-b-0
}
.awardList .aw-list-w .aw-list .mday div span{
  @apply flex items-center
}
.awardList .aw-list-w .aw-list .mday div span:first-child{
  @apply w-[350px] h-[80px] border-r-[1px] border-[#f0f0f0] justify-center pl-0
}
.awardList .aw-list-w .aw-list .mday div span{
  @apply pl-[70px]
}

.contentLeft {
  @apply grid grid-cols-2 gap-[40px];
}

.awardBox {
  @apply p-[30px] rounded-[12px] bg-[#fafafc] text-center;
}

.contentRight {
  @apply mt-[225px] w-auto;
}

.awardBox .img img {
  @apply w-[252px];
}
.awardList button{
  @apply w-[175px] h-[40px] rounded-[4px] bg-[#F4F5F6] flex justify-center items-center mt-[30px] text-[#141414] text-[13px] mx-auto
}

.date {
  @apply text-[#141414] text-[16px] font-bold leading-[18px] mb-[24px];
}

.detail {
  @apply mt-[24px] text-[#444] text-[16px] font-normal leading-[20px];
}

.contentRight {
  @apply mt-0 w-auto;
}

.contentList {
  @apply border-none m-0;
}

.list {
  @apply flex-col !items-start !gap-[20px] border-none !px-0;
}

.list strong {
  @apply !text-[20px];
}

.list span {
  @apply !text-[#444] text-[18px] font-normal !leading-[30px];
}

.more {
  @apply mt-[50px];
}

.more button {
  @apply w-[175px] h-[40px] leading-[40px] rounded-[5px] bg-[#f4f5f6] text-[#141414] text-[14px] font-normal;
}
</style>
