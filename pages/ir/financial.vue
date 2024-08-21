<template>
  <div class="content">
    <CategoryNav
      :categoryIndex="categoryIndex"
      :activeIndex="selectedIndex"
    ></CategoryNav>
    <div class="fin">
      <div class="finTitle">
        <strong class="en">Financials</strong>
        <strong class="ko">재무정보</strong>
      </div>
      <!-- // -->
      <div class="finContent">
        <div class="billTable">
          <strong>
            <span class="ko">재무상태표</span>
            <span class="en">Statement of financial position</span>
            <em>(단위:원)</em>
          </strong>
          
          <table width="100%">
            <colgroup>
              <col width="155">
              <col width="295">
              <col width="300">
              <col width="300">
              <col width="*">
            </colgroup>
            <thead>
              <tr>
                <th scope="col" colspan="2">과목</th>
                <th scope="col">2023</th>
                <th scope="col">2022</th>
                <th scope="col">2021</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th rowspan="3">자산</th>
                <td class="!text-start">유동자산</td>
                <td>10,888,888,666</td>
                <td>10,888,888,666</td>
                <td>10,888,888,666</td>
              </tr>
              <tr>
                <td class="!text-start">비유동자산</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr class="gubun">
                <td class="!text-start">자산총계</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th rowspan="3">부채</th>
                <td class="!text-start">유동부채</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td class="!text-start">비유동부채</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr class="gubun">
                <td class="!text-start">부채총계</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th rowspan="6">자본</th>
                <td class="!text-start">자본금</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td class="!text-start">자본잉여금</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td class="!text-start">기타자본항목</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td class="!text-start">기타포괄손익누계액</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td class="!text-start">이익잉여금(결손금)</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr class="gubun">
                <td class="!text-start">자본총계</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr class="gubun">
                <th></th>
                <td class="!text-start">부채와 자본총계</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- // -->

        
        <div class="billTable">
          <strong>
            <span class="ko">포괄손익계산서</span>
            <span class="en">Statement of comprehensive income</span>
            <em>(단위:원)</em>
          </strong>
          <table width="100%">
            <colgroup>
              <col width="*">
              <col width="300">
              <col width="300">
              <col width="300">
            </colgroup>
            <thead>
              <tr>
                <th scope="col">과목</th>
                <th scope="col">2023</th>
                <th scope="col">2022</th>
                <th scope="col">2021</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th class="text-start bNormal">영업수익</th>
                <td>10,888,888,666</td>
                <td>10,888,888,666</td>
                <td>10,888,888,666</td>
              </tr>
              <tr>
                <th class="text-start bNormal">영업비용</th>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th class="text-start bNormal">영업이익(손실)</th>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th class="text-start bNormal">금융수익</th>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th class="text-start bNormal">금융원가</th>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th class="text-start bNormal">영업외수익</th>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th class="text-start bNormal">영업외비용</th>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th class="text-start bNormal">관계기업 투자관련 이익(손실)</th>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th class="text-start bNormal">법인세비용차감전순이익(손실)</th>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th class="text-start bNormal">법인세비용(수익)</th>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th class="text-start bNormal">당기순이익(손실)</th>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th class="text-start bNormal">기타포괄손익</th>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th class="text-start bNormal">확정급여제도의 재측정요소</th>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th class="text-start bNormal">기타포괄손익 공정가치측정 금융자산</th>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr class="">
                <th class="text-start bNormal">총포괄손익</th>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- // -->

        <div class="dnw">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect width="24" height="24" fill="white"/>
              <path d="M21 14C20.7348 14 20.4804 14.1054 20.2929 14.2929C20.1054 14.4804 20 14.7348 20 15V19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V15C4 14.7348 3.89464 14.4804 3.70711 14.2929C3.51957 14.1054 3.26522 14 3 14C2.73478 14 2.48043 14.1054 2.29289 14.2929C2.10536 14.4804 2 14.7348 2 15V19C2 19.7957 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7957 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7957 22 19V15C22 14.7348 21.8946 14.4804 21.7071 14.2929C21.5196 14.1054 21.2652 14 21 14ZM11.29 15.71C11.3851 15.801 11.4972 15.8724 11.62 15.92C11.7397 15.9729 11.8691 16.0002 12 16.0002C12.1309 16.0002 12.2603 15.9729 12.38 15.92C12.5028 15.8724 12.6149 15.801 12.71 15.71L16.71 11.71C16.8983 11.5217 17.0041 11.2663 17.0041 11C17.0041 10.7337 16.8983 10.4783 16.71 10.29C16.5217 10.1017 16.2663 9.99591 16 9.99591C15.7337 9.99591 15.4783 10.1017 15.29 10.29L13 12.59V3C13 2.73478 12.8946 2.48043 12.7071 2.29289C12.5196 2.10536 12.2652 2 12 2C11.7348 2 11.4804 2.10536 11.2929 2.29289C11.1054 2.48043 11 2.73478 11 3V12.59L8.71 10.29C8.61676 10.1968 8.50607 10.1228 8.38425 10.0723C8.26243 10.0219 8.13186 9.99591 8 9.99591C7.86814 9.99591 7.73757 10.0219 7.61575 10.0723C7.49393 10.1228 7.38324 10.1968 7.29 10.29C7.19676 10.3832 7.1228 10.4939 7.07234 10.6158C7.02188 10.7376 6.99591 10.8681 6.99591 11C6.99591 11.1319 7.02188 11.2624 7.07234 11.3843C7.1228 11.5061 7.19676 11.6168 7.29 11.71L11.29 15.71Z" fill="#B5B5B6"/>
            </svg>
            결산공고.PDF
          </button>
        </div>
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
      categoryIndex: 6,
      selectedIndex: 24
    }
  }
}
</script>

<style scoped>
.rassiBg {
  @apply bg-[#EFF2FB];
}
.finTitle {
  @apply flex w-full flex-col items-center gap-2 pt-[54px];
}
.finTitle em {
  @apply text-[#9395a1] text-[16px] leading-5;
}
.finTitle strong {
  @apply text-[#141414] text-[48px] leading-[60px];
}
.finContent{
  @apply w-full flex flex-col items-center pb-[100px]
}
.finContent .txt{
  @apply w-[989px] mx-auto pt-[45px] flex flex-col gap-[56px]
}
.finContent .txt div{
  @apply flex flex-col gap-4 w-full
}
.finContent .txt div strong{
  @apply pb-4 text-[18px] leading-6 text-[#141414] font-bold
}
.dnw{
  @apply w-[1353px] m-[100px_auto_100px] p-[0_32px] h-[70px] border-[1px] border-[#e6e6eb] rounded-[6px] flex items-center
}
.dnw button{
  @apply flex gap-4 text-[18px] text-[#141414] border-0 bg-transparent
}
</style>
