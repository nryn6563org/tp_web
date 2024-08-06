<template>
  <div class="content">
    <CategoryNav
      :categoryIndex="categoryIndex"
      :activeIndex="selectedIndex"
    ></CategoryNav>
    <div class="contact">
      <div class="contactTitle">
        <strong class="en">Inquiry</strong>
        <strong class="ko">문의하기</strong>
        <span class="ko">
          씽크풀에 궁금한 점이 있으신가요? <br>
          문의사항을 등록해 주시면, <br>
          담당자 확인 후 안내해 드리겠습니다.
        </span>
        <span class="en">
          Do you have any questions about Thinkpool? <br>
          If you register your inquiry, <br>
          I will check the person in charge and guide you.
        </span>
      </div>
      <!-- // -->
      <div class="contactContent">
        <div class="contact_top">
          <strong class="ko">문의사항 등록하기</strong>
          <strong class="en">Register an inquiry</strong>
          <em class="ko">* 표시는 필수 입력 사항입니다. </em>
          <em class="en">* Required fields </em>
        </div>
        <!-- // -->
        <div class="contact_input">
          <table width="100%">
            <colgroup>
              <col width="215">
              <col width="*">
            </colgroup>
            <tbody>
              <tr>
                <th>
                  <span class="ko">분류</span><span class="en">Category</span><em>*</em>
                </th>
                <td>
                  <div class="cho_class">
                    <label for="choCl1">
                      <input type="radio" name="choCl" id="choCl1" checked>
                      <span class="ko">제휴문의</span>
                      <span class="en">Partnerships</span>
                    </label>

                    <label for="choCl2">
                      <input type="radio" name="choCl" id="choCl2">
                      <span class="ko">IR문의</span>
                      <span class="en">IR</span>
                    </label>

                    <label for="choCl3">
                      <input type="radio" name="choCl" id="choCl3">
                      <span class="ko">채용문의</span>
                      <span class="en">HR</span>
                    </label>

                    <label for="choCl4">
                      <input type="radio" name="choCl" id="choCl4">
                      <span class="ko">서비스문의</span>
                      <span class="en">Service</span>
                    </label>
                  </div>
                </td>
              </tr>
              <tr>
                <th>
                  <span class="ko">성명</span><span class="en">Name</span><em>*</em>
                </th>
                <td>
                  <input type="text" placeholder="성명을 입력해주세요.">
                </td>
              </tr>
              <tr>
                <th>
                  <span class="ko">소속회사</span><span class="en">Company</span><em>*</em>
                </th>
                <td>
                  <input type="text" placeholder="소속회사명(기관명)을 입력해주세요.">
                </td>
              </tr>
              <tr>
                <th>
                  <span class="ko">전화번호</span><span class="en">Phone No.</span><em>*</em>
                </th>
                <td>
                  <input type="text" placeholder="전화번호를 입력해주세요.">
                </td>
              </tr>
              <tr>
                <th>
                  <span class="ko">이메일</span><span class="en">Email</span><em>*</em>
                </th>
                <td>
                  <input type="text" placeholder="답변 받을 메일주소를 입력해주세요. ">
                </td>
              </tr>
              <tr>
                <th>
                  <span class="ko">제목</span><span class="en">Title</span><em>*</em>
                </th>
                <td>
                  <input type="text" placeholder="제목을 입력해주세요. ">
                </td>
              </tr>
              <tr>
                <th>
                  <span class="ko">문의사항</span><span class="en">Inquiries</span><em>*</em>
                </th>
                <td>
                  <textarea name="" id="" cols="30" rows="10" placeholder="문의사항을 입력해주세요."></textarea>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- // -->
        <div class="contact_agree">
          <label for="choAg1">
            <input type="checkbox" name="" id="choAg1">
            <span class="ko">씽크풀의 개인정보 처리방침에 동의 합니다.</span>
            <span class="en">Accept Privacy Policy</span>
            <a href="#">
              <span class="ko">자세히 보기</span>
              <span class="en">In detail</span>
            </a>
          </label>
          <label for="choAg2">
            <input type="checkbox" name="" id="choAg2">
            <span class="ko">[선택] 마케팅 이용 및 뉴스레터 수신에 동의합니다.</span>
            <span class="en">[Optional] I agree to receive marketing and newsletters.</span>
          </label>
        </div>
        <!-- // -->

        <div class="btnbox">
          <button>
            <span class="ko">등록하기</span>
            <span class="en">Register</span>
          </button>
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
      selectedIndex: 23
    }
  }
}
</script>

<style scoped>
.rassiBg {
  @apply bg-[#EFF2FB];
}
.contactTitle {
  @apply flex w-full flex-col items-center gap-2 pt-[54px];
}
.contactTitle em {
  @apply text-[#9395a1] text-[16px] leading-5;
}
.contactTitle strong {
  @apply text-[#141414] text-[48px] leading-[60px];
}
.contactTitle span{
  @apply pt-[90px] text-center text-[24px] text-black leading-[30px] font-normal
}
.contactContent{
  @apply w-full pt-[80px] flex flex-col items-center pb-[100px]
}
.contact_top{
  @apply w-[1355px] mx-auto flex justify-between pl-6
}
.contact_top strong{
  @apply text-[#141414] text-[20px] font-bold
}
.contact_top em{
  @apply text-[#ff1818] text-[16px]
}
.contact_input{
  @apply w-[1355px] m-[30px_auto_0]
}
.contact_agree{
  @apply w-[1355px] m-[50px_auto_0] pt-9 flex flex-col  border-t-[1px] border-t-[#e6e6eb] gap-2.5
}
.contact_agree label{
  @apply flex gap-3 items-center
}
.contact_agree label span{
  @apply text-[#1e1e1e] text-[18px] 
}
.contact_agree label a span{
  @apply underline text-[#9395a1] text-[18px]
}
.btnbox{
  @apply w-full flex justify-center pt-[55px]
}
.btnbox button{
  @apply h-[50px] w-[175px] rounded-[5px] bg-[#5368ff] flex items-center justify-center text-white text-[20px]
}
</style>
