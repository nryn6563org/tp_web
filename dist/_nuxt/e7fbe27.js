(window.webpackJsonp=window.webpackJsonp||[]).push([[58,6,28,29],{322:function(t,e,n){var content=n(324);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("168cd3a9",content,!0,{sourceMap:!1})},323:function(t,e,n){"use strict";n(322)},324:function(t,e,n){var v=n(49)((function(i){return i[1]}));v.push([t.i,".categoryNav[data-v-6442eb0a]{align-items:center;display:flex;gap:5px;justify-content:flex-start;margin-top:80px;padding-left:250px;padding-top:13px;width:100%}.categoryMenu[data-v-6442eb0a],.categoryName[data-v-6442eb0a]{font-size:14px;font-weight:400;line-height:21px;--tw-text-opacity:1;color:#b5b5b6;color:rgba(181,181,182,var(--tw-text-opacity))}.categoryMenu.active[data-v-6442eb0a]{font-weight:700;--tw-text-opacity:1;color:#141414;color:rgba(20,20,20,var(--tw-text-opacity))}",""]),v.locals={},t.exports=v},325:function(t,e,n){"use strict";n.r(e);n(207);var v={props:{categoryIndex:{type:Number,default:0},activeIndex:{type:Number,default:0}},data:function(){return{categorys:[{ko:"회사소개",en:"About Us"},{ko:"ThinkPool AI",en:"ThinkPool AI"},{ko:"위치기반서비스",en:"LBS"},{ko:"리스크관리솔루션",en:"RMS"},{ko:"기업부설연구소",en:"R&D Center"},{ko:"홍보센터",en:"PR"},{ko:"IR",en:"IR"},{ko:"채용정보",en:"Careers"}],menus:[{ko:"회사개요",en:"Corporate Overview"},{ko:"CEO메시지",en:"CEO Message"},{ko:"비전",en:"VISION"},{ko:"연혁",en:"Milestones"},{ko:"특허",en:"Patent"},{ko:"수상",en:"Awards"},{ko:"인증",en:"Certification"},{ko:"복지제도",en:"Welfare System"},{ko:"인재상",en:"Our Values"},{ko:"오시는길",en:"Contact"},{ko:"AX RASSI",en:"AX RASSI"},{ko:"ThinkPool AI Algorithm",en:"ThinkPool AI Algorithm"},{ko:"로그인보호서비스",en:"Login Protection Services"},{ko:"안심키퍼서비스",en:"SafeKeeper Service"},{ko:"RMS통제시스템",en:"RMS System"},{ko:"국가R&D",en:"National R&D"},{ko:"병역특례",en:"Technical Research Personnel"},{ko:"공지사항",en:"Notice"},{ko:"NEWS",en:"NEWS"},{ko:"IR",en:"IR"},{ko:"채용공고",en:"Recruit"}]}}},o=(n(323),n(25)),component=Object(o.a)(v,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"categoryNav"},[e("div",{staticClass:"home"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"}},[e("path",{attrs:{d:"M8.306 1.10674C8.21728 1.03756 8.108 1 7.9955 1C7.883 1 7.77372 1.03756 7.685 1.10674L0.5 6.70924L1.1215 7.49524L2 6.81024V12.9997C2.00053 13.2648 2.10606 13.5188 2.29348 13.7063C2.4809 13.8937 2.73495 13.9992 3 13.9997H13C13.2651 13.9992 13.5191 13.8937 13.7065 13.7063C13.8939 13.5188 13.9995 13.2648 14 12.9997V6.81474L14.8785 7.49974L15.5 6.71374L8.306 1.10674ZM9 12.9997H7V8.99974H9V12.9997ZM10 12.9997V8.99974C9.99973 8.7346 9.89429 8.4804 9.70681 8.29292C9.51934 8.10544 9.26513 8 9 7.99974H7C6.73486 8 6.48066 8.10544 6.29319 8.29292C6.10571 8.4804 6.00026 8.7346 6 8.99974V12.9997H3V6.03074L8 2.13574L13 6.03574V12.9997H10Z",fill:"#B5B5B6"}})])]),t._v(" "),e("div",{staticClass:"arrow"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",viewBox:"0 0 10 10",fill:"none"}},[e("g",{attrs:{"clip-path":"url(#clip0_136_7031)"}},[e("path",{attrs:{d:"M3.30779 8.97716C3.19062 8.85996 3.1248 8.70102 3.1248 8.53529C3.1248 8.36956 3.19062 8.21062 3.30779 8.09341L6.40154 4.99967L3.30779 1.90591C3.19394 1.78804 3.13094 1.63016 3.13237 1.46629C3.13379 1.30242 3.19952 1.14566 3.3154 1.02978C3.43128 0.913898 3.58804 0.848168 3.75191 0.846744C3.91579 0.84532 4.07366 0.908316 4.19154 1.02216L7.72717 4.55779C7.84433 4.67499 7.91016 4.83394 7.91016 4.99967C7.91016 5.16539 7.84433 5.32434 7.72717 5.44154L4.19154 8.97716C4.07433 9.09433 3.91539 9.16016 3.74966 9.16016C3.58394 9.16016 3.42499 9.09433 3.30779 8.97716Z",fill:"#D9D9D9"}})]),t._v(" "),e("defs",[e("clipPath",{attrs:{id:"clip0_136_7031"}},[e("rect",{attrs:{width:"10",height:"10",fill:"white",transform:"translate(10 10) rotate(-180)"}})])])])]),t._v(" "),t._l(t.categorys,(function(n,v){return e("div",{key:"category_"+v,class:{categoryName:!0,active:v===t.categoryIndex,hidden:v!==t.categoryIndex}},[e("span",{staticClass:"ko"},[t._v("\n    "+t._s(n.ko)+"\n  ")]),t._v(" "),e("span",{staticClass:"en"},[t._v("\n    "+t._s(n.en)+"\n  ")])])})),t._v(" "),e("div",{staticClass:"arrow"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",viewBox:"0 0 10 10",fill:"none"}},[e("g",{attrs:{"clip-path":"url(#clip0_136_7031)"}},[e("path",{attrs:{d:"M3.30779 8.97716C3.19062 8.85996 3.1248 8.70102 3.1248 8.53529C3.1248 8.36956 3.19062 8.21062 3.30779 8.09341L6.40154 4.99967L3.30779 1.90591C3.19394 1.78804 3.13094 1.63016 3.13237 1.46629C3.13379 1.30242 3.19952 1.14566 3.3154 1.02978C3.43128 0.913898 3.58804 0.848168 3.75191 0.846744C3.91579 0.84532 4.07366 0.908316 4.19154 1.02216L7.72717 4.55779C7.84433 4.67499 7.91016 4.83394 7.91016 4.99967C7.91016 5.16539 7.84433 5.32434 7.72717 5.44154L4.19154 8.97716C4.07433 9.09433 3.91539 9.16016 3.74966 9.16016C3.58394 9.16016 3.42499 9.09433 3.30779 8.97716Z",fill:"#D9D9D9"}})]),t._v(" "),e("defs",[e("clipPath",{attrs:{id:"clip0_136_7031"}},[e("rect",{attrs:{width:"10",height:"10",fill:"white",transform:"translate(10 10) rotate(-180)"}})])])])]),t._v(" "),t._l(t.menus,(function(menu,n){return e("div",{key:"menu_"+n,class:{categoryMenu:!0,active:n===t.activeIndex,hidden:n!==t.activeIndex}},[e("span",{staticClass:"ko"},[t._v("\n      "+t._s(menu.ko)+"\n    ")]),t._v(" "),e("span",{staticClass:"en"},[t._v("\n      "+t._s(menu.en)+"\n    ")])])}))],2)}),[],!1,null,"6442eb0a",null);e.default=component.exports},327:function(t,e,n){"use strict";n.r(e);var v={},o=n(25),component=Object(o.a)(v,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"MilestonesMain"},[e("div",{staticClass:"categoryIntro"},[e("div",{staticClass:"titieSpan"},[t._v("Milestones")]),t._v(" "),e("div",{staticClass:"title ko"},[t._v("연혁")]),t._v(" "),e("div",{staticClass:"title en"},[t._v("Milestones")])])])}],!1,null,"441fe968",null);e.default=component.exports},481:function(t,e,n){"use strict";n.r(e);var v={},o=n(25),component=Object(o.a)(v,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"MilestonesContent"},[e("div",{staticClass:"milestonesNav"},[e("nuxt-link",{staticClass:"ko",attrs:{to:"milestones01"}},[t._v("현재 ~ 2019")]),t._v(" "),e("nuxt-link",{staticClass:"en",attrs:{to:"milestones01"}},[t._v("Now ~ 2019")]),t._v(" "),e("nuxt-link",{staticClass:"ko",attrs:{to:"milestones02"}},[t._v("2018 ~ 2016")]),t._v(" "),e("nuxt-link",{staticClass:"en",attrs:{to:"milestones02"}},[t._v("2018 ~ 2016")]),t._v(" "),e("nuxt-link",{staticClass:"active ko",attrs:{to:"milestones03"}},[t._v("2015 ~ 창립")]),t._v(" "),e("nuxt-link",{staticClass:"active en",attrs:{to:"milestones03"}},[t._v("2015 ~ Establish")])],1),t._v(" "),t._m(0)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"milestonesBox"},[e("div",{staticClass:"navTxt"},[t._v("2015 "),e("br"),t._v(" ~ 창립")]),t._v(" "),e("div",{staticClass:"milestonesList"},[e("div",{staticClass:"yearsList"},[e("div",{staticClass:"years"},[t._v("2015")]),t._v(" "),e("div",{staticClass:"monthTxt"},[e("div",{staticClass:"list"},[e("div",{staticClass:"month"},[t._v("11")]),t._v(" "),e("div",{staticClass:"txt ko"},[t._v("전자ICT특허경영대상 은상 수상")]),t._v(" "),e("div",{staticClass:"txt en"},[t._v("\n              Silver Award for Electronic ICT Patent Management Award \n            ")])]),t._v(" "),e("div",{staticClass:"list"},[e("div",{staticClass:"month"},[t._v("10")]),t._v(" "),e("div",{staticClass:"txt ko"},[t._v("\n              기술혁신형 중소기업(INNO-BIZ) 인증\n            ")]),t._v(" "),e("div",{staticClass:"txt en"},[t._v("\n              INNO-BIZ Certification\n            ")])]),t._v(" "),e("div",{staticClass:"list"},[e("div",{staticClass:"month"},[t._v("07")]),t._v(" "),e("div",{staticClass:"txt ko"},[t._v("\n              ETRI 1실1기업 맞춤형 기술지원 기업 선정 특허청 직무발명보상 우수기업 인증\n            ")]),t._v(" "),e("div",{staticClass:"txt en"},[t._v("\n              ETRI one-on-one customized technical support for companies Patent and Trademark Office Job Invention Reward Certification \n            ")])]),t._v(" "),e("div",{staticClass:"list"},[e("div",{staticClass:"month"},[t._v("05")]),t._v(" "),e("div",{staticClass:"txt ko"},[t._v("\n              AQT(오토퀀트트레이딩) 대우증권 등 오픈\n            ")]),t._v(" "),e("div",{staticClass:"txt en"},[t._v("\n              AQT (Auto Quantitative Trading) Open for Daewoo Securities, etc. \n            ")])])])]),t._v(" "),e("div",{staticClass:"yearsList"},[e("div",{staticClass:"years"},[t._v("2014")]),t._v(" "),e("div",{staticClass:"monthTxt"},[e("div",{staticClass:"list"},[e("div",{staticClass:"month"},[t._v("10")]),t._v(" "),e("div",{staticClass:"txt ko"},[t._v("연구개발기업으로 벤처기업 등록")]),t._v(" "),e("div",{staticClass:"txt en"},[t._v("Registering a venture as an R&D company")])])])]),t._v(" "),e("div",{staticClass:"yearsList"},[e("div",{staticClass:"years"},[t._v("2013")]),t._v(" "),e("div",{staticClass:"monthTxt"},[e("div",{staticClass:"list"},[e("div",{staticClass:"month"},[t._v("12")]),t._v(" "),e("div",{staticClass:"txt ko"},[t._v("\n              벤처활성화유공 산업통상자원부장관 수상 "),e("br"),t._v("\n              인터넷기술선도부문 미래창조과학부장관상 수상\n            ")]),t._v(" "),e("div",{staticClass:"txt en"},[t._v("Minister of Trade, Industry and Energy Award for Venture Promotion ")])]),t._v(" "),e("div",{staticClass:"list"},[e("div",{staticClass:"month"},[t._v("06")]),t._v(" "),e("div",{staticClass:"txt ko"},[t._v("병역특례지정업체 선정")]),t._v(" "),e("div",{staticClass:"txt en"},[t._v("Selecting a Military Preferred Contractor")])])])]),t._v(" "),e("div",{staticClass:"yearsList"},[e("div",{staticClass:"years"},[t._v("2012")]),t._v(" "),e("div",{staticClass:"monthTxt"},[e("div",{staticClass:"list"},[e("div",{staticClass:"month"},[t._v("12")]),t._v(" "),e("div",{staticClass:"txt ko"},[t._v("\n              방통위 중소벤처유망LBS공모전 최우수상 수상\n            ")]),t._v(" "),e("div",{staticClass:"txt en"},[t._v("\n              Won the Grand Prize at the Korea Communications Commission's SME LBS Competition  \n            ")])]),t._v(" "),e("div",{staticClass:"list"},[e("div",{staticClass:"month"},[t._v("04")]),t._v(" "),e("div",{staticClass:"txt ko"},[t._v("기업부설연구소 설립")]),t._v(" "),e("div",{staticClass:"txt en"},[t._v("Establishment of a corporate research center ")])])])]),t._v(" "),e("div",{staticClass:"yearsList"},[e("div",{staticClass:"years"},[t._v("2011")]),t._v(" "),e("div",{staticClass:"monthTxt"},[e("div",{staticClass:"list"},[e("div",{staticClass:"month"},[t._v("09")]),t._v(" "),e("div",{staticClass:"txt ko"},[t._v("\n              Log-in(로그인)도용방지 사업 진출(LBS기반 개인정보보호)\n            ")]),t._v(" "),e("div",{staticClass:"txt en"},[t._v("\n              Entering the login theft prevention business (LBS-based personal information protection) \n            ")])])])]),t._v(" "),e("div",{staticClass:"yearsList"},[e("div",{staticClass:"years"},[t._v("2005")]),t._v(" "),e("div",{staticClass:"monthTxt"},[e("div",{staticClass:"list"},[e("div",{staticClass:"month"},[t._v("09")]),t._v(" "),e("div",{staticClass:"txt ko"},[t._v("\n              RMS(금융위험관리)시스템 국내최초 개발 및 사업 진출(위험관리)\n            ")]),t._v(" "),e("div",{staticClass:"txt en"},[t._v("\n              Developed RMS (Financial Risk Management) system for the first time in Korea and entered the business (Risk Management) \n            ")])])])]),t._v(" "),e("div",{staticClass:"yearsList"},[e("div",{staticClass:"years"},[t._v("2002")]),t._v(" "),e("div",{staticClass:"monthTxt"},[e("div",{staticClass:"list"},[e("div",{staticClass:"month"},[t._v("08")]),t._v(" "),e("div",{staticClass:"txt ko"},[t._v("\n              라이브 방송사업 개시\n            ")]),t._v(" "),e("div",{staticClass:"txt en"},[t._v("\n              Launching a live broadcast business \n            ")])])])]),t._v(" "),e("div",{staticClass:"yearsList"},[e("div",{staticClass:"years"},[t._v("2000")]),t._v(" "),e("div",{staticClass:"monthTxt"},[e("div",{staticClass:"list"},[e("div",{staticClass:"month"},[t._v("03")]),t._v(" "),e("div",{staticClass:"txt ko"},[t._v("\n              ㈜씽크풀 상호변경 (Thinkpool)\n            ")]),t._v(" "),e("div",{staticClass:"txt en"},[t._v("\n              Name change from KTP to Thinkpool Inc. \n            ")])])])]),t._v(" "),e("div",{staticClass:"yearsList"},[e("div",{staticClass:"years"},[t._v("1999")]),t._v(" "),e("div",{staticClass:"monthTxt"},[e("div",{staticClass:"list"},[e("div",{staticClass:"month"},[t._v("09")]),t._v(" "),e("div",{staticClass:"txt ko"},[t._v("\n              증권/경제 정보 온라인 서비스 개시 (증권정보)\n            ")]),t._v(" "),e("div",{staticClass:"txt en"},[t._v("\n              Securities/economic information on-hand service launched (Securities Information) \n            ")])])])]),t._v(" "),e("div",{staticClass:"yearsList"},[e("div",{staticClass:"years"},[t._v("1994")]),t._v(" "),e("div",{staticClass:"monthTxt"},[e("div",{staticClass:"list"},[e("div",{staticClass:"month"},[t._v("01")]),t._v(" "),e("div",{staticClass:"txt ko"},[t._v("\n              ㈜KTP(Korea Think pool) 설립\n            ")]),t._v(" "),e("div",{staticClass:"txt en"},[t._v("\n              Established KTP(Korea Think Pool), Inc.\n            ")])])])])])])}],!1,null,"3aeeb76b",null);e.default=component.exports},570:function(t,e,n){"use strict";n.r(e);var v={layout:"default",data:function(){return{categoryIndex:0,selectedIndex:3}}},o=n(25),component=Object(o.a)(v,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"content"},[e("CategoryNav",{attrs:{categoryIndex:t.categoryIndex,activeIndex:t.selectedIndex}}),t._v(" "),e("MilestonesMain"),t._v(" "),e("MilestonesContent03")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CategoryNav:n(325).default,MilestonesMain:n(327).default,MilestonesContent03:n(481).default})}}]);