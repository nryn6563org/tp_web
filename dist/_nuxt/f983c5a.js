(window.webpackJsonp=window.webpackJsonp||[]).push([[70,6,42],{322:function(t,e,n){var content=n(324);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("168cd3a9",content,!0,{sourceMap:!1})},323:function(t,e,n){"use strict";n(322)},324:function(t,e,n){var r=n(49)((function(i){return i[1]}));r.push([t.i,".categoryNav[data-v-6442eb0a]{align-items:center;display:flex;gap:5px;justify-content:flex-start;margin-top:80px;padding-left:250px;padding-top:13px;width:100%}.categoryMenu[data-v-6442eb0a],.categoryName[data-v-6442eb0a]{font-size:14px;font-weight:400;line-height:21px;--tw-text-opacity:1;color:#b5b5b6;color:rgba(181,181,182,var(--tw-text-opacity))}.categoryMenu.active[data-v-6442eb0a]{font-weight:700;--tw-text-opacity:1;color:#141414;color:rgba(20,20,20,var(--tw-text-opacity))}",""]),r.locals={},t.exports=r},325:function(t,e,n){"use strict";n.r(e);n(207);var r={props:{categoryIndex:{type:Number,default:0},activeIndex:{type:Number,default:0}},data:function(){return{categorys:[{ko:"회사소개",en:"About Us"},{ko:"ThinkPool AI",en:"ThinkPool AI"},{ko:"위치기반서비스",en:"LBS"},{ko:"리스크관리솔루션",en:"RMS"},{ko:"기업부설연구소",en:"R&D Center"},{ko:"홍보센터",en:"PR"},{ko:"IR",en:"IR"},{ko:"채용정보",en:"Careers"}],menus:[{ko:"회사개요",en:"Corporate Overview"},{ko:"CEO메시지",en:"CEO Message"},{ko:"비전",en:"VISION"},{ko:"연혁",en:"Milestones"},{ko:"특허",en:"Patent"},{ko:"수상",en:"Awards"},{ko:"인증",en:"Certification"},{ko:"복지제도",en:"Welfare System"},{ko:"인재상",en:"Our Values"},{ko:"오시는길",en:"Contact"},{ko:"AX RASSI",en:"AX RASSI"},{ko:"ThinkPool AI Algorithm",en:"ThinkPool AI Algorithm"},{ko:"로그인보호서비스",en:"Login Protection Services"},{ko:"안심키퍼서비스",en:"SafeKeeper Service"},{ko:"RMS통제시스템",en:"RMS System"},{ko:"국가R&D",en:"National R&D"},{ko:"병역특례",en:"Technical Research Personnel"},{ko:"공지사항",en:"Notice"},{ko:"NEWS",en:"NEWS"},{ko:"IR",en:"IR"},{ko:"채용공고",en:"Recruit"}]}}},o=(n(323),n(25)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"categoryNav"},[e("div",{staticClass:"home"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"}},[e("path",{attrs:{d:"M8.306 1.10674C8.21728 1.03756 8.108 1 7.9955 1C7.883 1 7.77372 1.03756 7.685 1.10674L0.5 6.70924L1.1215 7.49524L2 6.81024V12.9997C2.00053 13.2648 2.10606 13.5188 2.29348 13.7063C2.4809 13.8937 2.73495 13.9992 3 13.9997H13C13.2651 13.9992 13.5191 13.8937 13.7065 13.7063C13.8939 13.5188 13.9995 13.2648 14 12.9997V6.81474L14.8785 7.49974L15.5 6.71374L8.306 1.10674ZM9 12.9997H7V8.99974H9V12.9997ZM10 12.9997V8.99974C9.99973 8.7346 9.89429 8.4804 9.70681 8.29292C9.51934 8.10544 9.26513 8 9 7.99974H7C6.73486 8 6.48066 8.10544 6.29319 8.29292C6.10571 8.4804 6.00026 8.7346 6 8.99974V12.9997H3V6.03074L8 2.13574L13 6.03574V12.9997H10Z",fill:"#B5B5B6"}})])]),t._v(" "),e("div",{staticClass:"arrow"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",viewBox:"0 0 10 10",fill:"none"}},[e("g",{attrs:{"clip-path":"url(#clip0_136_7031)"}},[e("path",{attrs:{d:"M3.30779 8.97716C3.19062 8.85996 3.1248 8.70102 3.1248 8.53529C3.1248 8.36956 3.19062 8.21062 3.30779 8.09341L6.40154 4.99967L3.30779 1.90591C3.19394 1.78804 3.13094 1.63016 3.13237 1.46629C3.13379 1.30242 3.19952 1.14566 3.3154 1.02978C3.43128 0.913898 3.58804 0.848168 3.75191 0.846744C3.91579 0.84532 4.07366 0.908316 4.19154 1.02216L7.72717 4.55779C7.84433 4.67499 7.91016 4.83394 7.91016 4.99967C7.91016 5.16539 7.84433 5.32434 7.72717 5.44154L4.19154 8.97716C4.07433 9.09433 3.91539 9.16016 3.74966 9.16016C3.58394 9.16016 3.42499 9.09433 3.30779 8.97716Z",fill:"#D9D9D9"}})]),t._v(" "),e("defs",[e("clipPath",{attrs:{id:"clip0_136_7031"}},[e("rect",{attrs:{width:"10",height:"10",fill:"white",transform:"translate(10 10) rotate(-180)"}})])])])]),t._v(" "),t._l(t.categorys,(function(n,r){return e("div",{key:"category_"+r,class:{categoryName:!0,active:r===t.categoryIndex,hidden:r!==t.categoryIndex}},[e("span",{staticClass:"ko"},[t._v("\n    "+t._s(n.ko)+"\n  ")]),t._v(" "),e("span",{staticClass:"en"},[t._v("\n    "+t._s(n.en)+"\n  ")])])})),t._v(" "),e("div",{staticClass:"arrow"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",viewBox:"0 0 10 10",fill:"none"}},[e("g",{attrs:{"clip-path":"url(#clip0_136_7031)"}},[e("path",{attrs:{d:"M3.30779 8.97716C3.19062 8.85996 3.1248 8.70102 3.1248 8.53529C3.1248 8.36956 3.19062 8.21062 3.30779 8.09341L6.40154 4.99967L3.30779 1.90591C3.19394 1.78804 3.13094 1.63016 3.13237 1.46629C3.13379 1.30242 3.19952 1.14566 3.3154 1.02978C3.43128 0.913898 3.58804 0.848168 3.75191 0.846744C3.91579 0.84532 4.07366 0.908316 4.19154 1.02216L7.72717 4.55779C7.84433 4.67499 7.91016 4.83394 7.91016 4.99967C7.91016 5.16539 7.84433 5.32434 7.72717 5.44154L4.19154 8.97716C4.07433 9.09433 3.91539 9.16016 3.74966 9.16016C3.58394 9.16016 3.42499 9.09433 3.30779 8.97716Z",fill:"#D9D9D9"}})]),t._v(" "),e("defs",[e("clipPath",{attrs:{id:"clip0_136_7031"}},[e("rect",{attrs:{width:"10",height:"10",fill:"white",transform:"translate(10 10) rotate(-180)"}})])])])]),t._v(" "),t._l(t.menus,(function(menu,n){return e("div",{key:"menu_"+n,class:{categoryMenu:!0,active:n===t.activeIndex,hidden:n!==t.activeIndex}},[e("span",{staticClass:"ko"},[t._v("\n      "+t._s(menu.ko)+"\n    ")]),t._v(" "),e("span",{staticClass:"en"},[t._v("\n      "+t._s(menu.en)+"\n    ")])])}))],2)}),[],!1,null,"6442eb0a",null);e.default=component.exports},345:function(t,e,n){var content=n(427);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("2bb67212",content,!0,{sourceMap:!1})},425:function(t,e,n){t.exports=n.p+"img/personnelImg.a166add.png"},426:function(t,e,n){"use strict";n(345)},427:function(t,e,n){var r=n(49)((function(i){return i[1]}));r.push([t.i,".NationalRd[data-v-58337464]{align-items:center;display:flex;justify-content:center}",""]),r.locals={},t.exports=r},460:function(t,e,n){var content=n(521);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("00a22046",content,!0,{sourceMap:!1})},495:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"NationalRd"},[e("div",{staticClass:"rdWrap"},[e("div",{staticClass:"titleSpan ko"},[t._v("병역특례")]),t._v(" "),e("div",{staticClass:"titleSpan en"},[t._v("Technical Research Personnel")]),t._v(" "),e("div",{staticClass:"title ko"},[t._v("기업부설 연구소 전문 연구요원")]),t._v(" "),e("div",{staticClass:"title en"},[t._v("Technical Research Personnel")]),t._v(" "),e("div",{staticClass:"rdContent"},[e("div",{staticClass:"imgWrap"},[e("div",{staticClass:"img"},[e("img",{attrs:{src:n(425),alt:""}})])]),t._v(" "),e("div",{staticClass:"txtWrap"},[e("div",[e("div",{staticClass:"title ko"},[t._v("\n            씽크풀은 금융권서비스 분야에서 유일 "),e("br"),t._v("\n            하게 "),e("span",[t._v("병역특례 AI기술연구소")]),t._v("를 가지고 "),e("br"),t._v("\n            있는 지식기업입니다.\n          ")]),t._v(" "),e("div",{staticClass:"title en"},[t._v("\n            Military service as a research and "),e("br"),t._v("\n            development activity national "),e("br"),t._v("\n            technological competitiveness!\n          ")]),t._v(" "),e("div",{staticClass:"subTitle ko"},[t._v("\n            전문연구요원제도란? "),e("br"),t._v("\n            군복무 대체프로그램인 전문연구요원 제도는 자연계 석박사 졸업생들이 "),e("br"),t._v("\n            군복무기간을 대체하여 연구기관에서 연구개발활동을 수행하는 제도입니다.\n          ")]),t._v(" "),e("div",{staticClass:"subTitle en"},[t._v("\n            What is the Specialized Research Service? "),e("br"),t._v("\n            As an alternative to military service, the Professional Research Staff "),e("br"),t._v("\n            Program is a program for natural science graduates to perform research "),e("br"),t._v("\n            and development activities at research institutions as an alternative to "),e("br"),t._v(" military service.\n          ")]),t._v(" "),e("div",{staticClass:"shortcutBtn"},[e("button",{staticClass:"ko"},[t._v("전문연구요원 채용공고 바로가기")]),t._v(" "),e("button",{staticClass:"en"},[t._v("View open positions")])])]),t._v(" "),e("div",[e("div",{staticClass:"txtTitle ko"},[t._v("병역 특례 지정업체 정보")]),t._v(" "),e("div",{staticClass:"txtTitle en"},[t._v("Military Service Designee Information ")]),t._v(" "),e("div",{staticClass:"txtFlex"},[e("div",{staticClass:"txt ko"},[e("strong",[t._v("업체명")]),t._v(" "),e("br"),t._v("\n              (주)씽크풀 기업부설연구소 "),e("br"),e("br"),t._v(" "),e("strong",[t._v("주소")]),e("br"),t._v("\n              서울특별시 영등포구 국제금융로70 16층 "),e("br"),t._v("\n              1501호(여의도동, 미원빌딩) "),e("br"),e("br"),t._v(" "),e("strong",[t._v("전화번호")]),e("br"),t._v("\n              02-2174-6401"),e("br"),e("br"),t._v(" "),e("strong",[t._v("팩스번호")]),e("br"),t._v("\n              02-2174-6306\n            ")]),t._v(" "),e("div",{staticClass:"txt en"},[e("strong",[t._v("Company name")]),t._v(" "),e("br"),t._v("\n              Thinkpool Corporate Research Center"),e("br"),e("br"),t._v(" "),e("strong",[t._v("Address")]),e("br"),t._v("\n              70, Gukje Financial Road, "),e("br"),t._v("\n              Yeongdeungpo-gu, Seoul, Korea, "),e("br"),t._v(" \n              15F, Room 1501 (Yeouido-dong,  "),e("br"),t._v("\n              Mi-won Building) "),e("br"),e("br"),t._v(" "),e("strong",[t._v("Tel ")]),e("br"),t._v("\n              82-2-2174-6401"),e("br"),e("br"),t._v(" "),e("strong",[t._v("Fax")]),e("br"),t._v("\n              82-2-2174-6306\n            ")]),t._v(" "),e("div",{staticClass:"txt ko"},[e("strong",[t._v("업종")]),t._v(" "),e("br"),t._v("\n              벤처기업부설연구소 "),e("br"),e("br"),t._v(" "),e("strong",[t._v("기업규모")]),t._v(" "),e("br"),t._v("\n              중소기업 "),e("br"),e("br"),t._v(" "),e("strong",[t._v("연구분야")]),t._v(" "),e("br"),t._v("\n              지식서비스\n            ")]),t._v(" "),e("div",{staticClass:"txt en"},[e("strong",[t._v("Industry")]),t._v(" "),e("br"),t._v("\n              Venture Business Institute "),e("br"),e("br"),t._v(" "),e("strong",[t._v("Enterprise size")]),t._v(" "),e("br"),t._v("\n              Small and medium-sized businesses "),e("br"),e("br"),t._v(" "),e("strong",[t._v("Enterprise size")]),t._v(" "),e("br"),t._v("\n              Knowledge Services\n            ")])])])])])])])}],o={},l=(n(426),n(25)),component=Object(l.a)(o,(function(){this._self._c;return this._m(0)}),r,!1,null,"58337464",null);e.default=component.exports},520:function(t,e,n){"use strict";n(460)},521:function(t,e,n){var r=n(49)((function(i){return i[1]}));r.push([t.i,".rassiBg[data-v-5b0de901]{--tw-bg-opacity:1;background-color:#eff2fb;background-color:rgba(239,242,251,var(--tw-bg-opacity))}",""]),r.locals={},t.exports=r},572:function(t,e,n){"use strict";n.r(e);var r={layout:"default",data:function(){return{categoryIndex:4,selectedIndex:16}}},o=(n(520),n(25)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"content"},[e("CategoryNav",{attrs:{categoryIndex:t.categoryIndex,activeIndex:t.selectedIndex}}),t._v(" "),e("PersonnelContent")],1)}),[],!1,null,"5b0de901",null);e.default=component.exports;installComponents(component,{CategoryNav:n(325).default,PersonnelContent:n(495).default})}}]);