(window.webpackJsonp=window.webpackJsonp||[]).push([[68,6,34],{322:function(t,e,n){var content=n(324);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("168cd3a9",content,!0,{sourceMap:!1})},323:function(t,e,n){"use strict";n(322)},324:function(t,e,n){var o=n(49)((function(i){return i[1]}));o.push([t.i,".categoryNav[data-v-6442eb0a]{align-items:center;display:flex;gap:5px;justify-content:flex-start;margin-top:80px;padding-left:250px;padding-top:13px;width:100%}.categoryMenu[data-v-6442eb0a],.categoryName[data-v-6442eb0a]{font-size:14px;font-weight:400;line-height:21px;--tw-text-opacity:1;color:#b5b5b6;color:rgba(181,181,182,var(--tw-text-opacity))}.categoryMenu.active[data-v-6442eb0a]{font-weight:700;--tw-text-opacity:1;color:#141414;color:rgba(20,20,20,var(--tw-text-opacity))}",""]),o.locals={},t.exports=o},325:function(t,e,n){"use strict";n.r(e);n(207);var o={props:{categoryIndex:{type:Number,default:0},activeIndex:{type:Number,default:0}},data:function(){return{categorys:[{ko:"회사소개",en:"About Us"},{ko:"ThinkPool AI",en:"ThinkPool AI"},{ko:"위치기반서비스",en:"LBS"},{ko:"리스크관리솔루션",en:"RMS"},{ko:"기업부설연구소",en:"R&D Center"},{ko:"홍보센터",en:"PR"},{ko:"IR",en:"IR"},{ko:"채용정보",en:"Careers"}],menus:[{ko:"회사개요",en:"Corporate Overview"},{ko:"CEO메시지",en:"CEO Message"},{ko:"비전",en:"VISION"},{ko:"연혁",en:"Milestones"},{ko:"특허",en:"Patent"},{ko:"수상",en:"Awards"},{ko:"인증",en:"Certification"},{ko:"복지제도",en:"Welfare System"},{ko:"인재상",en:"Our Values"},{ko:"오시는길",en:"Contact"},{ko:"AX RASSI",en:"AX RASSI"},{ko:"ThinkPool AI Algorithm",en:"ThinkPool AI Algorithm"},{ko:"로그인보호서비스",en:"Login Protection Services"},{ko:"안심키퍼서비스",en:"SafeKeeper Service"},{ko:"RMS통제시스템",en:"RMS System"},{ko:"국가R&D",en:"National R&D"},{ko:"병역특례",en:"Technical Research Personnel"},{ko:"공지사항",en:"Notice"},{ko:"NEWS",en:"NEWS"},{ko:"IR",en:"IR"},{ko:"채용공고",en:"Recruit"}]}}},r=(n(323),n(25)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"categoryNav"},[e("div",{staticClass:"home"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"}},[e("path",{attrs:{d:"M8.306 1.10674C8.21728 1.03756 8.108 1 7.9955 1C7.883 1 7.77372 1.03756 7.685 1.10674L0.5 6.70924L1.1215 7.49524L2 6.81024V12.9997C2.00053 13.2648 2.10606 13.5188 2.29348 13.7063C2.4809 13.8937 2.73495 13.9992 3 13.9997H13C13.2651 13.9992 13.5191 13.8937 13.7065 13.7063C13.8939 13.5188 13.9995 13.2648 14 12.9997V6.81474L14.8785 7.49974L15.5 6.71374L8.306 1.10674ZM9 12.9997H7V8.99974H9V12.9997ZM10 12.9997V8.99974C9.99973 8.7346 9.89429 8.4804 9.70681 8.29292C9.51934 8.10544 9.26513 8 9 7.99974H7C6.73486 8 6.48066 8.10544 6.29319 8.29292C6.10571 8.4804 6.00026 8.7346 6 8.99974V12.9997H3V6.03074L8 2.13574L13 6.03574V12.9997H10Z",fill:"#B5B5B6"}})])]),t._v(" "),e("div",{staticClass:"arrow"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",viewBox:"0 0 10 10",fill:"none"}},[e("g",{attrs:{"clip-path":"url(#clip0_136_7031)"}},[e("path",{attrs:{d:"M3.30779 8.97716C3.19062 8.85996 3.1248 8.70102 3.1248 8.53529C3.1248 8.36956 3.19062 8.21062 3.30779 8.09341L6.40154 4.99967L3.30779 1.90591C3.19394 1.78804 3.13094 1.63016 3.13237 1.46629C3.13379 1.30242 3.19952 1.14566 3.3154 1.02978C3.43128 0.913898 3.58804 0.848168 3.75191 0.846744C3.91579 0.84532 4.07366 0.908316 4.19154 1.02216L7.72717 4.55779C7.84433 4.67499 7.91016 4.83394 7.91016 4.99967C7.91016 5.16539 7.84433 5.32434 7.72717 5.44154L4.19154 8.97716C4.07433 9.09433 3.91539 9.16016 3.74966 9.16016C3.58394 9.16016 3.42499 9.09433 3.30779 8.97716Z",fill:"#D9D9D9"}})]),t._v(" "),e("defs",[e("clipPath",{attrs:{id:"clip0_136_7031"}},[e("rect",{attrs:{width:"10",height:"10",fill:"white",transform:"translate(10 10) rotate(-180)"}})])])])]),t._v(" "),t._l(t.categorys,(function(n,o){return e("div",{key:"category_"+o,class:{categoryName:!0,active:o===t.categoryIndex,hidden:o!==t.categoryIndex}},[e("span",{staticClass:"ko"},[t._v("\n    "+t._s(n.ko)+"\n  ")]),t._v(" "),e("span",{staticClass:"en"},[t._v("\n    "+t._s(n.en)+"\n  ")])])})),t._v(" "),e("div",{staticClass:"arrow"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",viewBox:"0 0 10 10",fill:"none"}},[e("g",{attrs:{"clip-path":"url(#clip0_136_7031)"}},[e("path",{attrs:{d:"M3.30779 8.97716C3.19062 8.85996 3.1248 8.70102 3.1248 8.53529C3.1248 8.36956 3.19062 8.21062 3.30779 8.09341L6.40154 4.99967L3.30779 1.90591C3.19394 1.78804 3.13094 1.63016 3.13237 1.46629C3.13379 1.30242 3.19952 1.14566 3.3154 1.02978C3.43128 0.913898 3.58804 0.848168 3.75191 0.846744C3.91579 0.84532 4.07366 0.908316 4.19154 1.02216L7.72717 4.55779C7.84433 4.67499 7.91016 4.83394 7.91016 4.99967C7.91016 5.16539 7.84433 5.32434 7.72717 5.44154L4.19154 8.97716C4.07433 9.09433 3.91539 9.16016 3.74966 9.16016C3.58394 9.16016 3.42499 9.09433 3.30779 8.97716Z",fill:"#D9D9D9"}})]),t._v(" "),e("defs",[e("clipPath",{attrs:{id:"clip0_136_7031"}},[e("rect",{attrs:{width:"10",height:"10",fill:"white",transform:"translate(10 10) rotate(-180)"}})])])])]),t._v(" "),t._l(t.menus,(function(menu,n){return e("div",{key:"menu_"+n,class:{categoryMenu:!0,active:n===t.activeIndex,hidden:n!==t.activeIndex}},[e("span",{staticClass:"ko"},[t._v("\n      "+t._s(menu.ko)+"\n    ")]),t._v(" "),e("span",{staticClass:"en"},[t._v("\n      "+t._s(menu.en)+"\n    ")])])}))],2)}),[],!1,null,"6442eb0a",null);e.default=component.exports},343:function(t,e,n){var content=n(422);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("3194e613",content,!0,{sourceMap:!1})},421:function(t,e,n){"use strict";n(343)},422:function(t,e,n){var o=n(49)((function(i){return i[1]}));o.push([t.i,".NewsContent[data-v-1c4ff84e]{align-items:center;display:flex;justify-content:center}.board .list .title[data-v-1c4ff84e]{color:#141414;color:rgba(20,20,20,var(--tw-text-opacity));font-size:20px;font-weight:700;line-height:25px;margin-bottom:10px;text-align:left}.board .list .title[data-v-1c4ff84e],.board .list .txt[data-v-1c4ff84e]{--tw-text-opacity:1}.board .list .txt[data-v-1c4ff84e]{color:#444;color:rgba(68,68,68,var(--tw-text-opacity));font-size:16px;font-weight:400;line-height:24px}",""]),o.locals={},t.exports=o},458:function(t,e,n){var content=n(517);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("c6c3b7a8",content,!0,{sourceMap:!1})},493:function(t,e,n){"use strict";n.r(e);var o={},r=(n(421),n(25)),component=Object(r.a)(o,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"NewsContent"},[e("div",[e("div",{staticClass:"board"},[e("div",{staticClass:"titleSpan"},[t._v("NEWS")]),t._v(" "),e("div",{staticClass:"title ko"},[t._v("NEWS")]),t._v(" "),e("div",{staticClass:"title en"},[t._v("NEWS")]),t._v(" "),e("div",{staticClass:"boardList"},[e("button",{staticClass:"list"},[e("div",[e("div",{staticClass:"title ko text-truncate"},[t._v("2022 벤처창업진흥 유공포상 국무총리 표창 수상")]),t._v(" "),e("div",{staticClass:"title en text-truncate"},[t._v("Received the Prime Minister's Award for Meritorious Achievement in Venture Startup Promotion in 2022  ")]),t._v(" "),e("div",{staticClass:"txt ko text-truncate2"},[t._v("\n              금융 AI 전문기업 '씽크풀'이 '2022 벤처창업진흥 유공 포상 시상식'에서 벤처 활성화 부문의 국무총리 표창을 수상했다.\n              금융 AI 전문기업 '씽크풀'이 '2022 벤처창업진흥 유공 포상 시상식'에서 벤처 활성화 부문의 국무총리 표창을 수상했다.\n            ")]),t._v(" "),e("div",{staticClass:"txt en txt-truncate2"},[t._v("\n              Thinkpool, a financial AI company, won the Prime Minister's Commendation in the Venture Revitalization category at the 2022 Venture Startup Promotion Merit Award Ceremony. \n            ")])]),t._v(" "),e("div",{staticClass:"date"},[t._v("\n            2023-03-10\n          ")])]),t._v(" "),e("button",{staticClass:"list"},[e("div",[e("div",{staticClass:"title ko text-truncate"},[t._v("2022 벤처창업진흥 유공포상 국무총리 표창 수상")]),t._v(" "),e("div",{staticClass:"title en text-truncate"},[t._v("Received the Prime Minister's Award for Meritorious Achievement in Venture Startup Promotion in 2022  ")]),t._v(" "),e("div",{staticClass:"txt ko text-truncate2"},[t._v("\n              금융 AI 전문기업 '씽크풀'이 '2022 벤처창업진흥 유공 포상 시상식'에서 벤처 활성화 부문의 국무총리 표창을 수상했다.\n              금융 AI 전문기업 '씽크풀'이 '2022 벤처창업진흥 유공 포상 시상식'에서 벤처 활성화 부문의 국무총리 표창을 수상했다.\n            ")]),t._v(" "),e("div",{staticClass:"txt en txt-truncate2"},[t._v("\n              Thinkpool, a financial AI company, won the Prime Minister's Commendation in the Venture Revitalization category at the 2022 Venture Startup Promotion Merit Award Ceremony. \n            ")])]),t._v(" "),e("div",{staticClass:"date"},[t._v("\n            2023-03-10\n          ")])]),t._v(" "),e("button",{staticClass:"list"},[e("div",[e("div",{staticClass:"title ko text-truncate"},[t._v("2022 벤처창업진흥 유공포상 국무총리 표창 수상")]),t._v(" "),e("div",{staticClass:"title en text-truncate"},[t._v("Received the Prime Minister's Award for Meritorious Achievement in Venture Startup Promotion in 2022  ")]),t._v(" "),e("div",{staticClass:"txt ko text-truncate2"},[t._v("\n              금융 AI 전문기업 '씽크풀'이 '2022 벤처창업진흥 유공 포상 시상식'에서 벤처 활성화 부문의 국무총리 표창을 수상했다.\n              금융 AI 전문기업 '씽크풀'이 '2022 벤처창업진흥 유공 포상 시상식'에서 벤처 활성화 부문의 국무총리 표창을 수상했다.\n            ")]),t._v(" "),e("div",{staticClass:"txt en txt-truncate2"},[t._v("\n              Thinkpool, a financial AI company, won the Prime Minister's Commendation in the Venture Revitalization category at the 2022 Venture Startup Promotion Merit Award Ceremony. \n            ")])]),t._v(" "),e("div",{staticClass:"date"},[t._v("\n            2023-03-10\n          ")])]),t._v(" "),e("button",{staticClass:"list"},[e("div",[e("div",{staticClass:"title ko text-truncate"},[t._v("2022 벤처창업진흥 유공포상 국무총리 표창 수상")]),t._v(" "),e("div",{staticClass:"title en text-truncate"},[t._v("Received the Prime Minister's Award for Meritorious Achievement in Venture Startup Promotion in 2022  ")]),t._v(" "),e("div",{staticClass:"txt ko text-truncate2"},[t._v("\n              금융 AI 전문기업 '씽크풀'이 '2022 벤처창업진흥 유공 포상 시상식'에서 벤처 활성화 부문의 국무총리 표창을 수상했다.\n              금융 AI 전문기업 '씽크풀'이 '2022 벤처창업진흥 유공 포상 시상식'에서 벤처 활성화 부문의 국무총리 표창을 수상했다.\n            ")]),t._v(" "),e("div",{staticClass:"txt en txt-truncate2"},[t._v("\n              Thinkpool, a financial AI company, won the Prime Minister's Commendation in the Venture Revitalization category at the 2022 Venture Startup Promotion Merit Award Ceremony. \n            ")])]),t._v(" "),e("div",{staticClass:"date"},[t._v("\n            2023-03-10\n          ")])]),t._v(" "),e("button",{staticClass:"list"},[e("div",[e("div",{staticClass:"title ko text-truncate"},[t._v("2022 벤처창업진흥 유공포상 국무총리 표창 수상")]),t._v(" "),e("div",{staticClass:"title en text-truncate"},[t._v("Received the Prime Minister's Award for Meritorious Achievement in Venture Startup Promotion in 2022  ")]),t._v(" "),e("div",{staticClass:"txt ko text-truncate2"},[t._v("\n              금융 AI 전문기업 '씽크풀'이 '2022 벤처창업진흥 유공 포상 시상식'에서 벤처 활성화 부문의 국무총리 표창을 수상했다.\n              금융 AI 전문기업 '씽크풀'이 '2022 벤처창업진흥 유공 포상 시상식'에서 벤처 활성화 부문의 국무총리 표창을 수상했다.\n            ")]),t._v(" "),e("div",{staticClass:"txt en txt-truncate2"},[t._v("\n              Thinkpool, a financial AI company, won the Prime Minister's Commendation in the Venture Revitalization category at the 2022 Venture Startup Promotion Merit Award Ceremony. \n            ")])]),t._v(" "),e("div",{staticClass:"date"},[t._v("\n            2023-03-10\n          ")])])]),t._v(" "),e("div",{staticClass:"more"},[e("button",{staticClass:"ko"},[t._v("더보기")]),t._v(" "),e("button",{staticClass:"en"},[t._v("More")])])])])])}],!1,null,"1c4ff84e",null);e.default=component.exports},516:function(t,e,n){"use strict";n(458)},517:function(t,e,n){var o=n(49)((function(i){return i[1]}));o.push([t.i,".rassiBg[data-v-63fd0f30]{--tw-bg-opacity:1;background-color:#eff2fb;background-color:rgba(239,242,251,var(--tw-bg-opacity))}",""]),o.locals={},t.exports=o},570:function(t,e,n){"use strict";n.r(e);var o={layout:"default",data:function(){return{categoryIndex:5,selectedIndex:18}}},r=(n(516),n(25)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"content"},[e("CategoryNav",{attrs:{categoryIndex:t.categoryIndex,activeIndex:t.selectedIndex}}),t._v(" "),e("NewsContent")],1)}),[],!1,null,"63fd0f30",null);e.default=component.exports;installComponents(component,{CategoryNav:n(325).default,NewsContent:n(493).default})}}]);