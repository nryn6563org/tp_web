(window.webpackJsonp=window.webpackJsonp||[]).push([[55,6,13,14],{322:function(t,e,n){var content=n(324);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("168cd3a9",content,!0,{sourceMap:!1})},323:function(t,e,n){"use strict";n(322)},324:function(t,e,n){var o=n(49)((function(i){return i[1]}));o.push([t.i,".categoryNav[data-v-6442eb0a]{align-items:center;display:flex;gap:5px;justify-content:flex-start;margin-top:80px;padding-left:250px;padding-top:13px;width:100%}.categoryMenu[data-v-6442eb0a],.categoryName[data-v-6442eb0a]{font-size:14px;font-weight:400;line-height:21px;--tw-text-opacity:1;color:#b5b5b6;color:rgba(181,181,182,var(--tw-text-opacity))}.categoryMenu.active[data-v-6442eb0a]{font-weight:700;--tw-text-opacity:1;color:#141414;color:rgba(20,20,20,var(--tw-text-opacity))}",""]),o.locals={},t.exports=o},325:function(t,e,n){"use strict";n.r(e);n(207);var o={props:{categoryIndex:{type:Number,default:0},activeIndex:{type:Number,default:0}},data:function(){return{categorys:[{ko:"회사소개",en:"About Us"},{ko:"ThinkPool AI",en:"ThinkPool AI"},{ko:"위치기반서비스",en:"LBS"},{ko:"리스크관리솔루션",en:"RMS"},{ko:"기업부설연구소",en:"R&D Center"},{ko:"홍보센터",en:"PR"},{ko:"IR",en:"IR"},{ko:"채용정보",en:"Careers"}],menus:[{ko:"회사개요",en:"Corporate Overview"},{ko:"CEO메시지",en:"CEO Message"},{ko:"비전",en:"VISION"},{ko:"연혁",en:"Milestones"},{ko:"특허",en:"Patent"},{ko:"수상",en:"Awards"},{ko:"인증",en:"Certification"},{ko:"복지제도",en:"Welfare System"},{ko:"인재상",en:"Our Values"},{ko:"오시는길",en:"Contact"},{ko:"AX RASSI",en:"AX RASSI"},{ko:"ThinkPool AI Algorithm",en:"ThinkPool AI Algorithm"},{ko:"로그인보호서비스",en:"Login Protection Services"},{ko:"안심키퍼서비스",en:"SafeKeeper Service"},{ko:"RMS통제시스템",en:"RMS System"},{ko:"국가R&D",en:"National R&D"},{ko:"병역특례",en:"Technical Research Personnel"},{ko:"공지사항",en:"Notice"},{ko:"NEWS",en:"NEWS"},{ko:"IR",en:"IR"},{ko:"채용공고",en:"Recruit"}]}}},r=(n(323),n(25)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"categoryNav"},[e("div",{staticClass:"home"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"}},[e("path",{attrs:{d:"M8.306 1.10674C8.21728 1.03756 8.108 1 7.9955 1C7.883 1 7.77372 1.03756 7.685 1.10674L0.5 6.70924L1.1215 7.49524L2 6.81024V12.9997C2.00053 13.2648 2.10606 13.5188 2.29348 13.7063C2.4809 13.8937 2.73495 13.9992 3 13.9997H13C13.2651 13.9992 13.5191 13.8937 13.7065 13.7063C13.8939 13.5188 13.9995 13.2648 14 12.9997V6.81474L14.8785 7.49974L15.5 6.71374L8.306 1.10674ZM9 12.9997H7V8.99974H9V12.9997ZM10 12.9997V8.99974C9.99973 8.7346 9.89429 8.4804 9.70681 8.29292C9.51934 8.10544 9.26513 8 9 7.99974H7C6.73486 8 6.48066 8.10544 6.29319 8.29292C6.10571 8.4804 6.00026 8.7346 6 8.99974V12.9997H3V6.03074L8 2.13574L13 6.03574V12.9997H10Z",fill:"#B5B5B6"}})])]),t._v(" "),e("div",{staticClass:"arrow"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",viewBox:"0 0 10 10",fill:"none"}},[e("g",{attrs:{"clip-path":"url(#clip0_136_7031)"}},[e("path",{attrs:{d:"M3.30779 8.97716C3.19062 8.85996 3.1248 8.70102 3.1248 8.53529C3.1248 8.36956 3.19062 8.21062 3.30779 8.09341L6.40154 4.99967L3.30779 1.90591C3.19394 1.78804 3.13094 1.63016 3.13237 1.46629C3.13379 1.30242 3.19952 1.14566 3.3154 1.02978C3.43128 0.913898 3.58804 0.848168 3.75191 0.846744C3.91579 0.84532 4.07366 0.908316 4.19154 1.02216L7.72717 4.55779C7.84433 4.67499 7.91016 4.83394 7.91016 4.99967C7.91016 5.16539 7.84433 5.32434 7.72717 5.44154L4.19154 8.97716C4.07433 9.09433 3.91539 9.16016 3.74966 9.16016C3.58394 9.16016 3.42499 9.09433 3.30779 8.97716Z",fill:"#D9D9D9"}})]),t._v(" "),e("defs",[e("clipPath",{attrs:{id:"clip0_136_7031"}},[e("rect",{attrs:{width:"10",height:"10",fill:"white",transform:"translate(10 10) rotate(-180)"}})])])])]),t._v(" "),t._l(t.categorys,(function(n,o){return e("div",{key:"category_"+o,class:{categoryName:!0,active:o===t.categoryIndex,hidden:o!==t.categoryIndex}},[e("span",{staticClass:"ko"},[t._v("\n    "+t._s(n.ko)+"\n  ")]),t._v(" "),e("span",{staticClass:"en"},[t._v("\n    "+t._s(n.en)+"\n  ")])])})),t._v(" "),e("div",{staticClass:"arrow"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",viewBox:"0 0 10 10",fill:"none"}},[e("g",{attrs:{"clip-path":"url(#clip0_136_7031)"}},[e("path",{attrs:{d:"M3.30779 8.97716C3.19062 8.85996 3.1248 8.70102 3.1248 8.53529C3.1248 8.36956 3.19062 8.21062 3.30779 8.09341L6.40154 4.99967L3.30779 1.90591C3.19394 1.78804 3.13094 1.63016 3.13237 1.46629C3.13379 1.30242 3.19952 1.14566 3.3154 1.02978C3.43128 0.913898 3.58804 0.848168 3.75191 0.846744C3.91579 0.84532 4.07366 0.908316 4.19154 1.02216L7.72717 4.55779C7.84433 4.67499 7.91016 4.83394 7.91016 4.99967C7.91016 5.16539 7.84433 5.32434 7.72717 5.44154L4.19154 8.97716C4.07433 9.09433 3.91539 9.16016 3.74966 9.16016C3.58394 9.16016 3.42499 9.09433 3.30779 8.97716Z",fill:"#D9D9D9"}})]),t._v(" "),e("defs",[e("clipPath",{attrs:{id:"clip0_136_7031"}},[e("rect",{attrs:{width:"10",height:"10",fill:"white",transform:"translate(10 10) rotate(-180)"}})])])])]),t._v(" "),t._l(t.menus,(function(menu,n){return e("div",{key:"menu_"+n,class:{categoryMenu:!0,active:n===t.activeIndex,hidden:n!==t.activeIndex}},[e("span",{staticClass:"ko"},[t._v("\n      "+t._s(menu.ko)+"\n    ")]),t._v(" "),e("span",{staticClass:"en"},[t._v("\n      "+t._s(menu.en)+"\n    ")])])}))],2)}),[],!1,null,"6442eb0a",null);e.default=component.exports},332:function(t,e,n){var content=n(382);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("1bd4354c",content,!0,{sourceMap:!1})},380:function(t,e,n){t.exports=n.p+"img/corporateImg.6a35ec0.png"},381:function(t,e,n){"use strict";n(332)},382:function(t,e,n){var o=n(49)((function(i){return i[1]}));o.push([t.i,".contentTitle[data-v-60938d36]:before{left:-20px;top:-12px}.contentTitle[data-v-60938d36]:after{bottom:-2px;left:98px}.contentTitle.en[data-v-60938d36]:after{left:360px}.date[data-v-60938d36]{font-size:14px;font-weight:400;line-height:18px;text-align:right;--tw-text-opacity:1;color:#999;color:rgba(153,153,153,var(--tw-text-opacity))}",""]),o.locals={},t.exports=o},477:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"corporateMain"},[e("div",{staticClass:"categoryIntro"},[e("div",{staticClass:"titieSpan"},[t._v("Corporate Overview")]),t._v(" "),e("div",{staticClass:"title ko"},[t._v("회사 개요")]),t._v(" "),e("div",{staticClass:"title en"},[t._v("Corporate Overview")]),t._v(" "),e("div",{staticClass:"introImg"},[e("img",{attrs:{src:n(380),alt:""}})])])])}],r={},l=n(25),component=Object(l.a)(r,(function(){this._self._c;return this._m(0)}),o,!1,null,"6d2ebe80",null);e.default=component.exports},478:function(t,e,n){"use strict";n.r(e);var o={},r=(n(381),n(25)),component=Object(r.a)(o,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"corporateContent"},[e("div",{staticClass:"categoryContent"},[e("div",{staticClass:"contentLeft"},[e("div",{staticClass:"contentTitle ko"},[t._v("\n        데이터와 AI시대, "),e("br"),t._v("\n        초지능형 과학적 의사결정을 지원하는 "),e("br"),t._v("\n        지식기업\n      ")]),t._v(" "),e("div",{staticClass:"contentTitle en"},[t._v("\n        ‘In the age of data and AI, knowledge "),e("br"),t._v("\n        machines enable superintelligent "),e("br"),t._v("\n        scientific decision-making’\n      ")]),t._v(" "),e("div",{staticClass:"contentTxt ko"},[t._v("\n        투자금융과 마이데이터 분야에서는 씽크풀만의 독자적인 "),e("br"),t._v("\n        기술을 더욱 발전시켜 글로벌 경쟁력을 갖추고 "),e("br"),t._v("\n        글로벌 기업으로 성장해 나가겠습니다.\n      ")]),t._v(" "),e("div",{staticClass:"contentTxt en"},[t._v("\n        We will grow into a globally competitive "),e("br"),t._v(" \n        company by further developing Thinkpool's "),e("br"),t._v("\n        unique technology in the fields of investment "),e("br"),t._v("\n        finance and big data.\n      ")])]),t._v(" "),e("div",{staticClass:"contentRight"},[e("div",{staticClass:"contentList"},[e("div",{staticClass:"list"},[e("strong",{staticClass:"ko"},[t._v("회사명")]),t._v(" "),e("strong",{staticClass:"en"},[t._v("Company Name")]),t._v(" "),e("span",{staticClass:"ko"},[t._v("㈜ 씽크풀 (ThinkPool.co.Ltd.)")]),t._v(" "),e("span",{staticClass:"en"},[t._v("ThinkPool.co., Ltd.")])]),t._v(" "),e("div",{staticClass:"list"},[e("strong",{staticClass:"ko"},[t._v("대표이사")]),t._v(" "),e("strong",{staticClass:"en"},[t._v("C E O")]),t._v(" "),e("span",{staticClass:"ko"},[t._v("김 동 진")]),t._v(" "),e("span",{staticClass:"en"},[t._v("Kim Dong-jin")])]),t._v(" "),e("div",{staticClass:"list"},[e("strong",{staticClass:"ko"},[t._v("설립연월")]),t._v(" "),e("strong",{staticClass:"en"},[t._v("Founded")]),t._v(" "),e("span",{staticClass:"ko"},[t._v("1994년 1월")]),t._v(" "),e("span",{staticClass:"en"},[t._v("Jan. 1994")])]),t._v(" "),e("div",{staticClass:"list"},[e("strong",{staticClass:"ko"},[t._v("자본금")]),t._v(" "),e("strong",{staticClass:"en"},[t._v("Capital Stock")]),t._v(" "),e("span",{staticClass:"ko"},[t._v("35.7억 원 [자본총계 170억원]")]),t._v(" "),e("span",{staticClass:"en"},[t._v("35.7 billion")])]),t._v(" "),e("div",{staticClass:"list"},[e("strong",{staticClass:"ko"},[t._v("종업원수")]),t._v(" "),e("strong",{staticClass:"en"},[t._v("Number of employees")]),t._v(" "),e("span",{staticClass:"ko"},[t._v("71명")]),t._v(" "),e("span",{staticClass:"en"},[t._v("71")])]),t._v(" "),e("div",{staticClass:"list"},[e("strong",{staticClass:"ko"},[t._v("사업분야")]),t._v(" "),e("strong",{staticClass:"en"},[t._v("Business Area "),e("br"),t._v("/ Number of members")]),t._v(" "),e("span",{staticClass:"ko"},[t._v("빅데이터ㆍAI  기반의 투자금융 부문등 컨텐츠 생산/ 알고리즘 ")]),t._v(" "),e("span",{staticClass:"en"},[t._v("Produce content for big data, AI-powered investment banking, etc. / Algorithm development  / Build and operate platforms, decision support systems  /  600K members")])]),t._v(" "),e("div",{staticClass:"list"},[e("strong",{staticClass:"ko"},[t._v("특허현황")]),t._v(" "),e("strong",{staticClass:"en"},[t._v("Patents")]),t._v(" "),e("span",{staticClass:"ko"},[t._v("등록 97건 출원 11건")]),t._v(" "),e("span",{staticClass:"en"},[t._v("Registered Patents 95, Patent applications 70 "),e("br"),t._v("( As of the end of 2022 )")])]),t._v(" "),e("div",{staticClass:"list"},[e("strong",{staticClass:"ko"},[t._v("회사위치")]),t._v(" "),e("strong",{staticClass:"en"},[t._v("Location")]),t._v(" "),e("span",{staticClass:"ko"},[t._v("서울시 영등포구 국제금융로 70 15층 (여의도동 미원빌딩)")]),t._v(" "),e("span",{staticClass:"en"},[t._v("15F, 70, Gukje Finance-ro, Yeongdeungpo-gu, Seoul, Korea(Yeouido-dong, Mi-won Building)")])]),t._v(" "),e("div",{staticClass:"list"},[e("strong",{staticClass:"ko"},[t._v("기타")]),t._v(" "),e("strong",{staticClass:"en"},[t._v("Others")]),t._v(" "),e("span",{staticClass:"ko"},[t._v("기술벤처기업(스타벤처) 이노비즈 기업부설연구소")]),t._v(" "),e("span",{staticClass:"en"},[t._v("Tech startups (Star Ventures), Innobiz, Corporate Research Center (Selected as an ATC+ Excellent Company Research Center by the Ministry of Trade, Industry and Energy, AI Division)")])])]),t._v(" "),e("div",{staticClass:"date ko"},[t._v("기준일 : 2024.02")]),t._v(" "),e("div",{staticClass:"date en"},[t._v("Reference date : 02. 2024")])])])])}],!1,null,"60938d36",null);e.default=component.exports},567:function(t,e,n){"use strict";n.r(e);var o={layout:"default",data:function(){return{categoryIndex:0,selectedIndex:0}}},r=n(25),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"content"},[e("CategoryNav",{attrs:{categoryIndex:t.categoryIndex,activeIndex:t.selectedIndex}}),t._v(" "),e("CorporateMain"),t._v(" "),e("CorporateContent")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CategoryNav:n(325).default,CorporateMain:n(477).default,CorporateContent:n(478).default})}}]);