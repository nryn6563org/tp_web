(window.webpackJsonp=window.webpackJsonp||[]).push([[53,6,9,10],{322:function(t,e,n){var content=n(324);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("168cd3a9",content,!0,{sourceMap:!1})},323:function(t,e,n){"use strict";n(322)},324:function(t,e,n){var o=n(49)((function(i){return i[1]}));o.push([t.i,".categoryNav[data-v-6442eb0a]{align-items:center;display:flex;gap:5px;justify-content:flex-start;margin-top:80px;padding-left:250px;padding-top:13px;width:100%}.categoryMenu[data-v-6442eb0a],.categoryName[data-v-6442eb0a]{font-size:14px;font-weight:400;line-height:21px;--tw-text-opacity:1;color:#b5b5b6;color:rgba(181,181,182,var(--tw-text-opacity))}.categoryMenu.active[data-v-6442eb0a]{font-weight:700;--tw-text-opacity:1;color:#141414;color:rgba(20,20,20,var(--tw-text-opacity))}",""]),o.locals={},t.exports=o},325:function(t,e,n){"use strict";n.r(e);n(207);var o={props:{categoryIndex:{type:Number,default:0},activeIndex:{type:Number,default:0}},data:function(){return{categorys:[{ko:"회사소개",en:"About Us"},{ko:"ThinkPool AI",en:"ThinkPool AI"},{ko:"위치기반서비스",en:"LBS"},{ko:"리스크관리솔루션",en:"RMS"},{ko:"기업부설연구소",en:"R&D Center"},{ko:"홍보센터",en:"PR"},{ko:"IR",en:"IR"},{ko:"채용정보",en:"Careers"}],menus:[{ko:"회사개요",en:"Corporate Overview"},{ko:"CEO메시지",en:"CEO Message"},{ko:"비전",en:"VISION"},{ko:"연혁",en:"Milestones"},{ko:"특허",en:"Patent"},{ko:"수상",en:"Awards"},{ko:"인증",en:"Certification"},{ko:"복지제도",en:"Welfare System"},{ko:"인재상",en:"Our Values"},{ko:"오시는길",en:"Contact"},{ko:"AX RASSI",en:"AX RASSI"},{ko:"ThinkPool AI Algorithm",en:"ThinkPool AI Algorithm"},{ko:"로그인보호서비스",en:"Login Protection Services"},{ko:"안심키퍼서비스",en:"SafeKeeper Service"},{ko:"RMS통제시스템",en:"RMS System"},{ko:"국가R&D",en:"National R&D"},{ko:"병역특례",en:"Technical Research Personnel"},{ko:"공지사항",en:"Notice"},{ko:"NEWS",en:"NEWS"},{ko:"IR",en:"IR"},{ko:"채용공고",en:"Recruit"}]}}},r=(n(323),n(25)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"categoryNav"},[e("div",{staticClass:"home"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"}},[e("path",{attrs:{d:"M8.306 1.10674C8.21728 1.03756 8.108 1 7.9955 1C7.883 1 7.77372 1.03756 7.685 1.10674L0.5 6.70924L1.1215 7.49524L2 6.81024V12.9997C2.00053 13.2648 2.10606 13.5188 2.29348 13.7063C2.4809 13.8937 2.73495 13.9992 3 13.9997H13C13.2651 13.9992 13.5191 13.8937 13.7065 13.7063C13.8939 13.5188 13.9995 13.2648 14 12.9997V6.81474L14.8785 7.49974L15.5 6.71374L8.306 1.10674ZM9 12.9997H7V8.99974H9V12.9997ZM10 12.9997V8.99974C9.99973 8.7346 9.89429 8.4804 9.70681 8.29292C9.51934 8.10544 9.26513 8 9 7.99974H7C6.73486 8 6.48066 8.10544 6.29319 8.29292C6.10571 8.4804 6.00026 8.7346 6 8.99974V12.9997H3V6.03074L8 2.13574L13 6.03574V12.9997H10Z",fill:"#B5B5B6"}})])]),t._v(" "),e("div",{staticClass:"arrow"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",viewBox:"0 0 10 10",fill:"none"}},[e("g",{attrs:{"clip-path":"url(#clip0_136_7031)"}},[e("path",{attrs:{d:"M3.30779 8.97716C3.19062 8.85996 3.1248 8.70102 3.1248 8.53529C3.1248 8.36956 3.19062 8.21062 3.30779 8.09341L6.40154 4.99967L3.30779 1.90591C3.19394 1.78804 3.13094 1.63016 3.13237 1.46629C3.13379 1.30242 3.19952 1.14566 3.3154 1.02978C3.43128 0.913898 3.58804 0.848168 3.75191 0.846744C3.91579 0.84532 4.07366 0.908316 4.19154 1.02216L7.72717 4.55779C7.84433 4.67499 7.91016 4.83394 7.91016 4.99967C7.91016 5.16539 7.84433 5.32434 7.72717 5.44154L4.19154 8.97716C4.07433 9.09433 3.91539 9.16016 3.74966 9.16016C3.58394 9.16016 3.42499 9.09433 3.30779 8.97716Z",fill:"#D9D9D9"}})]),t._v(" "),e("defs",[e("clipPath",{attrs:{id:"clip0_136_7031"}},[e("rect",{attrs:{width:"10",height:"10",fill:"white",transform:"translate(10 10) rotate(-180)"}})])])])]),t._v(" "),t._l(t.categorys,(function(n,o){return e("div",{key:"category_"+o,class:{categoryName:!0,active:o===t.categoryIndex,hidden:o!==t.categoryIndex}},[e("span",{staticClass:"ko"},[t._v("\n    "+t._s(n.ko)+"\n  ")]),t._v(" "),e("span",{staticClass:"en"},[t._v("\n    "+t._s(n.en)+"\n  ")])])})),t._v(" "),e("div",{staticClass:"arrow"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",viewBox:"0 0 10 10",fill:"none"}},[e("g",{attrs:{"clip-path":"url(#clip0_136_7031)"}},[e("path",{attrs:{d:"M3.30779 8.97716C3.19062 8.85996 3.1248 8.70102 3.1248 8.53529C3.1248 8.36956 3.19062 8.21062 3.30779 8.09341L6.40154 4.99967L3.30779 1.90591C3.19394 1.78804 3.13094 1.63016 3.13237 1.46629C3.13379 1.30242 3.19952 1.14566 3.3154 1.02978C3.43128 0.913898 3.58804 0.848168 3.75191 0.846744C3.91579 0.84532 4.07366 0.908316 4.19154 1.02216L7.72717 4.55779C7.84433 4.67499 7.91016 4.83394 7.91016 4.99967C7.91016 5.16539 7.84433 5.32434 7.72717 5.44154L4.19154 8.97716C4.07433 9.09433 3.91539 9.16016 3.74966 9.16016C3.58394 9.16016 3.42499 9.09433 3.30779 8.97716Z",fill:"#D9D9D9"}})]),t._v(" "),e("defs",[e("clipPath",{attrs:{id:"clip0_136_7031"}},[e("rect",{attrs:{width:"10",height:"10",fill:"white",transform:"translate(10 10) rotate(-180)"}})])])])]),t._v(" "),t._l(t.menus,(function(menu,n){return e("div",{key:"menu_"+n,class:{categoryMenu:!0,active:n===t.activeIndex,hidden:n!==t.activeIndex}},[e("span",{staticClass:"ko"},[t._v("\n      "+t._s(menu.ko)+"\n    ")]),t._v(" "),e("span",{staticClass:"en"},[t._v("\n      "+t._s(menu.en)+"\n    ")])])}))],2)}),[],!1,null,"6442eb0a",null);e.default=component.exports},333:function(t,e,n){var content=n(391);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("51228b46",content,!0,{sourceMap:!1})},385:function(t,e,n){t.exports=n.p+"img/CertificationImg.948e525.png"},386:function(t,e,n){t.exports=n.p+"img/certification01.2371efa.png"},387:function(t,e,n){t.exports=n.p+"img/certification02.7855231.png"},388:function(t,e,n){t.exports=n.p+"img/certification03.9a40e7d.png"},389:function(t,e,n){t.exports=n.p+"img/certification04.d3117a1.png"},390:function(t,e,n){"use strict";n(333)},391:function(t,e,n){var o=n(49)((function(i){return i[1]}));o.push([t.i,".categoryContent[data-v-fb2d140e]{align-items:center!important;gap:230px!important}.contentLeft[data-v-fb2d140e]{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-gap:40px;gap:40px}.awardBox[data-v-fb2d140e]{border-radius:12px;--tw-bg-opacity:1;background-color:#fafafc;background-color:rgba(250,250,252,var(--tw-bg-opacity));padding:30px;text-align:center}.contentRight[data-v-fb2d140e]{margin-top:225px}.awardBox .img img[data-v-fb2d140e]{width:252px}.date[data-v-fb2d140e]{color:#141414;color:rgba(20,20,20,var(--tw-text-opacity));font-weight:700;line-height:18px;margin-bottom:24px}.date[data-v-fb2d140e],.detail[data-v-fb2d140e]{font-size:16px;--tw-text-opacity:1}.detail[data-v-fb2d140e]{color:#444;color:rgba(68,68,68,var(--tw-text-opacity));font-weight:400;line-height:20px;margin-top:24px}.contentRight[data-v-fb2d140e]{margin-top:0;width:auto}.contentList[data-v-fb2d140e]{margin:0}.contentList[data-v-fb2d140e],.list[data-v-fb2d140e]{border-style:none}.list[data-v-fb2d140e]{align-items:flex-start!important;flex-direction:column;gap:20px!important;padding-left:0!important;padding-right:0!important}.list strong[data-v-fb2d140e]{font-size:20px!important}.list span[data-v-fb2d140e]{font-size:18px;font-weight:400;line-height:30px!important;--tw-text-opacity:1!important;color:#444!important;color:rgba(68,68,68,var(--tw-text-opacity))!important}.more[data-v-fb2d140e]{margin-top:50px}.more button[data-v-fb2d140e]{border-radius:5px;height:40px;width:175px;--tw-bg-opacity:1;background-color:#f4f5f6;background-color:rgba(244,245,246,var(--tw-bg-opacity));font-size:14px;font-weight:400;line-height:40px;--tw-text-opacity:1;color:#141414;color:rgba(20,20,20,var(--tw-text-opacity))}",""]),o.locals={},t.exports=o},473:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"CertificationMain"},[e("div",{staticClass:"categoryIntro"},[e("div",{staticClass:"titieSpan"},[t._v("Certification")]),t._v(" "),e("div",{staticClass:"title ko"},[t._v("인증")]),t._v(" "),e("div",{staticClass:"title en"},[t._v("Certification")]),t._v(" "),e("div",{staticClass:"introImg"},[e("img",{attrs:{src:n(385),alt:""}})])])])}],r={},c=n(25),component=Object(c.a)(r,(function(){this._self._c;return this._m(0)}),o,!1,null,"549d5904",null);e.default=component.exports},474:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"CertificationContent"},[e("div",{staticClass:"categoryContent"},[e("div",{staticClass:"contentLeft"},[e("div",{staticClass:"awardBox"},[e("div",{staticClass:"date"},[t._v("2015.07")]),t._v(" "),e("div",{staticClass:"img"},[e("img",{attrs:{src:n(386),alt:""}})]),t._v(" "),e("div",{staticClass:"detail ko"},[t._v("기술혁신형 중소기업"),e("br"),t._v("(INNO-BIZ) 인증")]),t._v(" "),e("div",{staticClass:"detail en"})]),t._v(" "),e("div",{staticClass:"awardBox"},[e("div",{staticClass:"date"},[t._v("2015.07")]),t._v(" "),e("div",{staticClass:"img"},[e("img",{attrs:{src:n(387),alt:""}})]),t._v(" "),e("div",{staticClass:"detail ko"},[t._v("ETRI 1실1기업 맞춤형 "),e("br"),t._v(" 기술지원 기업 선정")]),t._v(" "),e("div",{staticClass:"detail en"})]),t._v(" "),e("div",{staticClass:"awardBox"},[e("div",{staticClass:"date"},[t._v("2014.10")]),t._v(" "),e("div",{staticClass:"img"},[e("img",{attrs:{src:n(388),alt:""}})]),t._v(" "),e("div",{staticClass:"detail ko"},[t._v("연구개발기업으로 벤처 "),e("br"),t._v("기업 등록")]),t._v(" "),e("div",{staticClass:"detail en"})]),t._v(" "),e("div",{staticClass:"awardBox"},[e("div",{staticClass:"date"},[t._v("2012.12")]),t._v(" "),e("div",{staticClass:"img"},[e("img",{attrs:{src:n(389),alt:""}})]),t._v(" "),e("div",{staticClass:"detail ko"},[t._v("기업부설연구소 "),e("br"),t._v(" 인정")]),t._v(" "),e("div",{staticClass:"detail en"})])]),t._v(" "),e("div",{staticClass:"contentRight"},[e("div",{staticClass:"contentList"},[e("div",{staticClass:"list"},[e("strong",[t._v("2015.07")]),t._v(" "),e("span",{staticClass:"ko"},[t._v("\n            기술혁신형 중소기업(INNO-BIZ) 인증\n          ")]),t._v(" "),e("span",{staticClass:"en"},[t._v("\n            Technologically Innovative Small Business (INNO-BIZ) Certification \n          ")])]),t._v(" "),e("div",{staticClass:"list"},[e("strong",[t._v("2015.07")]),t._v(" "),e("span",{staticClass:"ko"},[t._v("\n            ETRI 1실1기업 맞춤형 기술지원 기업 선정\n          ")]),t._v(" "),e("span",{staticClass:"en"},[t._v("\n            ETRI One-on-One Personalized Technical Support Enterprise Line\n          ")])]),t._v(" "),e("div",{staticClass:"list"},[e("strong",[t._v("2014.10")]),t._v(" "),e("span",{staticClass:"ko"},[t._v("\n            연구개발기업으로 벤처기업 등록\n          ")]),t._v(" "),e("span",{staticClass:"en"},[t._v("\n            Registered venture as an R&D company \n          ")])]),t._v(" "),e("div",{staticClass:"list"},[e("strong",[t._v("2012.12")]),t._v(" "),e("span",{staticClass:"ko"},[t._v("\n            기업부설연구소 인정\n          ")]),t._v(" "),e("span",{staticClass:"en"},[t._v("\n            Recognition of Corporate Research Centers \n          ")])])]),t._v(" "),e("div",{staticClass:"more"},[e("button",[t._v("더보기")])])])])])}],r={},c=(n(390),n(25)),component=Object(c.a)(r,(function(){this._self._c;return this._m(0)}),o,!1,null,"fb2d140e",null);e.default=component.exports},556:function(t,e,n){"use strict";n.r(e);var o={layout:"default",data:function(){return{categoryIndex:0,selectedIndex:6}}},r=n(25),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"content"},[e("CategoryNav",{attrs:{categoryIndex:t.categoryIndex,activeIndex:t.selectedIndex}}),t._v(" "),e("CertificationMain"),t._v(" "),e("CertificationContent")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CategoryNav:n(325).default,CertificationMain:n(473).default,CertificationContent:n(474).default})}}]);