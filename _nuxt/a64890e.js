(window.webpackJsonp=window.webpackJsonp||[]).push([[61,6,40,41],{322:function(t,e,n){var content=n(324);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("168cd3a9",content,!0,{sourceMap:!1})},323:function(t,e,n){"use strict";n(322)},324:function(t,e,n){var o=n(49)((function(i){return i[1]}));o.push([t.i,".categoryNav[data-v-6442eb0a]{align-items:center;display:flex;gap:5px;justify-content:flex-start;margin-top:80px;padding-left:250px;padding-top:13px;width:100%}.categoryMenu[data-v-6442eb0a],.categoryName[data-v-6442eb0a]{font-size:14px;font-weight:400;line-height:21px;--tw-text-opacity:1;color:#b5b5b6;color:rgba(181,181,182,var(--tw-text-opacity))}.categoryMenu.active[data-v-6442eb0a]{font-weight:700;--tw-text-opacity:1;color:#141414;color:rgba(20,20,20,var(--tw-text-opacity))}",""]),o.locals={},t.exports=o},325:function(t,e,n){"use strict";n.r(e);n(207);var o={props:{categoryIndex:{type:Number,default:0},activeIndex:{type:Number,default:0}},data:function(){return{categorys:[{ko:"회사소개",en:"About Us"},{ko:"ThinkPool AI",en:"ThinkPool AI"},{ko:"위치기반서비스",en:"LBS"},{ko:"리스크관리솔루션",en:"RMS"},{ko:"기업부설연구소",en:"R&D Center"},{ko:"홍보센터",en:"PR"},{ko:"IR",en:"IR"},{ko:"채용정보",en:"Careers"}],menus:[{ko:"회사개요",en:"Corporate Overview"},{ko:"CEO메시지",en:"CEO Message"},{ko:"비전",en:"VISION"},{ko:"연혁",en:"Milestones"},{ko:"특허",en:"Patent"},{ko:"수상",en:"Awards"},{ko:"인증",en:"Certification"},{ko:"복지제도",en:"Welfare System"},{ko:"인재상",en:"Our Values"},{ko:"오시는길",en:"Contact"},{ko:"AX RASSI",en:"AX RASSI"},{ko:"ThinkPool AI Algorithm",en:"ThinkPool AI Algorithm"},{ko:"로그인보호서비스",en:"Login Protection Services"},{ko:"안심키퍼서비스",en:"SafeKeeper Service"},{ko:"RMS통제시스템",en:"RMS System"},{ko:"국가R&D",en:"National R&D"},{ko:"병역특례",en:"Technical Research Personnel"},{ko:"공지사항",en:"Notice"},{ko:"NEWS",en:"NEWS"},{ko:"IR",en:"IR"},{ko:"채용공고",en:"Recruit"}]}}},r=(n(323),n(25)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"categoryNav"},[e("div",{staticClass:"home"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"}},[e("path",{attrs:{d:"M8.306 1.10674C8.21728 1.03756 8.108 1 7.9955 1C7.883 1 7.77372 1.03756 7.685 1.10674L0.5 6.70924L1.1215 7.49524L2 6.81024V12.9997C2.00053 13.2648 2.10606 13.5188 2.29348 13.7063C2.4809 13.8937 2.73495 13.9992 3 13.9997H13C13.2651 13.9992 13.5191 13.8937 13.7065 13.7063C13.8939 13.5188 13.9995 13.2648 14 12.9997V6.81474L14.8785 7.49974L15.5 6.71374L8.306 1.10674ZM9 12.9997H7V8.99974H9V12.9997ZM10 12.9997V8.99974C9.99973 8.7346 9.89429 8.4804 9.70681 8.29292C9.51934 8.10544 9.26513 8 9 7.99974H7C6.73486 8 6.48066 8.10544 6.29319 8.29292C6.10571 8.4804 6.00026 8.7346 6 8.99974V12.9997H3V6.03074L8 2.13574L13 6.03574V12.9997H10Z",fill:"#B5B5B6"}})])]),t._v(" "),e("div",{staticClass:"arrow"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",viewBox:"0 0 10 10",fill:"none"}},[e("g",{attrs:{"clip-path":"url(#clip0_136_7031)"}},[e("path",{attrs:{d:"M3.30779 8.97716C3.19062 8.85996 3.1248 8.70102 3.1248 8.53529C3.1248 8.36956 3.19062 8.21062 3.30779 8.09341L6.40154 4.99967L3.30779 1.90591C3.19394 1.78804 3.13094 1.63016 3.13237 1.46629C3.13379 1.30242 3.19952 1.14566 3.3154 1.02978C3.43128 0.913898 3.58804 0.848168 3.75191 0.846744C3.91579 0.84532 4.07366 0.908316 4.19154 1.02216L7.72717 4.55779C7.84433 4.67499 7.91016 4.83394 7.91016 4.99967C7.91016 5.16539 7.84433 5.32434 7.72717 5.44154L4.19154 8.97716C4.07433 9.09433 3.91539 9.16016 3.74966 9.16016C3.58394 9.16016 3.42499 9.09433 3.30779 8.97716Z",fill:"#D9D9D9"}})]),t._v(" "),e("defs",[e("clipPath",{attrs:{id:"clip0_136_7031"}},[e("rect",{attrs:{width:"10",height:"10",fill:"white",transform:"translate(10 10) rotate(-180)"}})])])])]),t._v(" "),t._l(t.categorys,(function(n,o){return e("div",{key:"category_"+o,class:{categoryName:!0,active:o===t.categoryIndex,hidden:o!==t.categoryIndex}},[e("span",{staticClass:"ko"},[t._v("\n    "+t._s(n.ko)+"\n  ")]),t._v(" "),e("span",{staticClass:"en"},[t._v("\n    "+t._s(n.en)+"\n  ")])])})),t._v(" "),e("div",{staticClass:"arrow"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",viewBox:"0 0 10 10",fill:"none"}},[e("g",{attrs:{"clip-path":"url(#clip0_136_7031)"}},[e("path",{attrs:{d:"M3.30779 8.97716C3.19062 8.85996 3.1248 8.70102 3.1248 8.53529C3.1248 8.36956 3.19062 8.21062 3.30779 8.09341L6.40154 4.99967L3.30779 1.90591C3.19394 1.78804 3.13094 1.63016 3.13237 1.46629C3.13379 1.30242 3.19952 1.14566 3.3154 1.02978C3.43128 0.913898 3.58804 0.848168 3.75191 0.846744C3.91579 0.84532 4.07366 0.908316 4.19154 1.02216L7.72717 4.55779C7.84433 4.67499 7.91016 4.83394 7.91016 4.99967C7.91016 5.16539 7.84433 5.32434 7.72717 5.44154L4.19154 8.97716C4.07433 9.09433 3.91539 9.16016 3.74966 9.16016C3.58394 9.16016 3.42499 9.09433 3.30779 8.97716Z",fill:"#D9D9D9"}})]),t._v(" "),e("defs",[e("clipPath",{attrs:{id:"clip0_136_7031"}},[e("rect",{attrs:{width:"10",height:"10",fill:"white",transform:"translate(10 10) rotate(-180)"}})])])])]),t._v(" "),t._l(t.menus,(function(menu,n){return e("div",{key:"menu_"+n,class:{categoryMenu:!0,active:n===t.activeIndex,hidden:n!==t.activeIndex}},[e("span",{staticClass:"ko"},[t._v("\n      "+t._s(menu.ko)+"\n    ")]),t._v(" "),e("span",{staticClass:"en"},[t._v("\n      "+t._s(menu.en)+"\n    ")])])}))],2)}),[],!1,null,"6442eb0a",null);e.default=component.exports},338:function(t,e,n){var content=n(407);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("3e7f0cd8",content,!0,{sourceMap:!1})},404:function(t,e,n){t.exports=n.p+"img/PatentImg.cb3c4a8.png"},405:function(t,e,n){t.exports=n.p+"img/patentImg2.d2539db.png"},406:function(t,e,n){"use strict";n(338)},407:function(t,e,n){var o=n(49)((function(i){return i[1]}));o.push([t.i,".categoryContent[data-v-d4c8d47e]{gap:200px!important}.contentLeft[data-v-d4c8d47e]{gap:100px}.contentTitle[data-v-d4c8d47e]:before{left:-20px;top:-12px}.contentTitle[data-v-d4c8d47e]:after{bottom:-2px;left:98px}.contentTitle.en[data-v-d4c8d47e]:after{left:310px}.contentTitle span[data-v-d4c8d47e]{--tw-text-opacity:1;color:#5368ff;color:rgba(83,104,255,var(--tw-text-opacity))}.contentImg img[data-v-d4c8d47e]{width:511px}.detail[data-v-d4c8d47e]{font-size:16px;font-weight:400;line-height:18px;margin-top:20px;text-align:center;--tw-text-opacity:1;color:#9395a1;color:rgba(147,149,161,var(--tw-text-opacity))}.contentRight[data-v-d4c8d47e]{margin-top:83px;width:auto}.contentList[data-v-d4c8d47e]{margin:0}.contentList[data-v-d4c8d47e],.list[data-v-d4c8d47e]{border-style:none}.list[data-v-d4c8d47e]{align-items:flex-start!important;flex-direction:column;gap:20px!important}.list strong[data-v-d4c8d47e]{font-size:20px!important}.list span[data-v-d4c8d47e]{font-size:18px;font-weight:400;line-height:30px!important;--tw-text-opacity:1!important;color:#444!important;color:rgba(68,68,68,var(--tw-text-opacity))!important}",""]),o.locals={},t.exports=o},486:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"PatentMain"},[e("div",{staticClass:"categoryIntro"},[e("div",{staticClass:"titieSpan"},[t._v("Patent")]),t._v(" "),e("div",{staticClass:"title ko"},[t._v("특허")]),t._v(" "),e("div",{staticClass:"title en"},[t._v("Patent")]),t._v(" "),e("div",{staticClass:"introImg"},[e("img",{attrs:{src:n(404),alt:""}})])])])}],r={},c=n(25),component=Object(c.a)(r,(function(){this._self._c;return this._m(0)}),o,!1,null,"23de5d4c",null);e.default=component.exports},487:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"PatentContent"},[e("div",{staticClass:"categoryContent"},[e("div",{staticClass:"contentLeft"},[e("div",{staticClass:"contentTitle ko"},[t._v("\n        씽크풀은 총 "),e("span",[t._v("97")]),t._v("건의 등록특허와 "),e("br"),t._v(" "),e("span",[t._v("11")]),t._v("건의 특허출원을 보유하고 "),e("br"),t._v("\n        있습니다.\n      ")]),t._v(" "),e("div",{staticClass:"contentTitle en"},[t._v("\n        ThinkPool has a total of "),e("br"),t._v(" "),e("span",[t._v("97")]),t._v(" registered patents and "),e("br"),t._v(" "),e("span",[t._v("11")]),t._v(" patent applications. \n      ")]),t._v(" "),e("div",{staticClass:"contentImg"},[e("img",{attrs:{src:n(405),alt:""}}),t._v(" "),e("div",{staticClass:"detail ko"},[t._v("특허경영대상 수상")]),t._v(" "),e("div",{staticClass:"detail en"},[t._v("Patent Management Award Winner")])])]),t._v(" "),e("div",{staticClass:"contentRight"},[e("div",{staticClass:"contentList"},[e("div",{staticClass:"list"},[e("strong",[t._v("RASSI")]),t._v(" "),e("span",{staticClass:"ko"},[t._v("\n            ㆍ인공지능 기반의 종목연관 키워드 결정방법 및 그 시스템 "),e("br"),t._v("\n            ㆍ주문전략 제공방법 및 그 시스템"),e("br"),t._v("\n            ㆍ지능형 이벤트 정보 제공방법 및 그 시스템"),e("br"),t._v("\n            ㆍ혼합 포트폴리오 관리 시스템 및 그 제공방법 "),e("br"),t._v("\n            ㆍ투자 어드바이스 제공 방법 및 투자 어드바이스 제공 서버\n          ")]),t._v(" "),e("span",{staticClass:"en"},[t._v("\n            ㆍMethod for determining keywords related to stocks based on artificial intelligence and its system "),e("br"),t._v("\n            ㆍOrder strategy delivery methods and systems "),e("br"),t._v("\n            ㆍMethods and systems for providing intelligent event information "),e("br"),t._v("\n            ㆍBlended portfolio management systems and how they are delivered  "),e("br"),t._v("\n            ㆍHow investment advice is delivered and where it is delivered \n          ")])]),t._v(" "),e("div",{staticClass:"list"},[e("strong",{staticClass:"ko"},[t._v("로그인도용방지")]),t._v(" "),e("strong",{staticClass:"en"},[t._v("Login Abuse Prevention System ")]),t._v(" "),e("span",{staticClass:"ko"},[t._v("\n            ㆍ지능형 로그인 인증 시스템 및 그 방법 "),e("br"),t._v("\n            ㆍ스마트폰 도용방지 서비스 방법 및 시스템"),e("br"),t._v("\n            ㆍ위치기반의 서비스 보안 시스템 및 그 방법\n          ")]),t._v(" "),e("span",{staticClass:"en"},[t._v("\n            ㆍIntelligent login authentication systems and how they work "),e("br"),t._v("\n            ㆍSmartphone anti-theft service methods and systems "),e("br"),t._v("\n            ㆍServices security systems for location devices and how they work \n          ")])]),t._v(" "),e("div",{staticClass:"list"},[e("strong",[t._v("RMS")]),t._v(" "),e("span",{staticClass:"ko"},[t._v("\n            ㆍ온라인 주식 거래 및 대출을 위한 실시간 리스크 관리/통제 시스템 및 그 방법"),e("br"),t._v("\n            ㆍ반대매매 관리 시스템, 계좌운영 시스템 및 그 방법\n          ")]),t._v(" "),e("span",{staticClass:"en"},[t._v("\n            ㆍReal-time risk management/control system for online stock trading and lending, and method thereof  "),e("br"),t._v("\n            ㆍCountertrade management system, account management system, and method thereof \n          ")])])])])])])}],r={},c=(n(406),n(25)),component=Object(c.a)(r,(function(){this._self._c;return this._m(0)}),o,!1,null,"d4c8d47e",null);e.default=component.exports},564:function(t,e,n){"use strict";n.r(e);var o={layout:"default",data:function(){return{categoryIndex:0,selectedIndex:4}}},r=n(25),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"content"},[e("CategoryNav",{attrs:{categoryIndex:t.categoryIndex,activeIndex:t.selectedIndex}}),t._v(" "),e("PatentMain"),t._v(" "),e("PatentContent")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CategoryNav:n(325).default,PatentMain:n(486).default,PatentContent:n(487).default})}}]);