webpackJsonp([0],[,function(e,t,n){function i(e){n(15)}var r=n(0)(n(18),n(11),i,null,null);e.exports=r.exports},function(e,t){},function(e,t){},,function(e,t,n){function i(e){n(13)}var r=n(0)(n(19),n(9),i,"data-v-53358100",null);e.exports=r.exports},function(e,t,n){function i(e){n(12)}var r=n(0)(n(20),n(8),i,null,null);e.exports=r.exports},function(e,t,n){function i(e){n(14)}var r=n(0)(n(21),n(10),i,"data-v-a0a88fb8",null);e.exports=r.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{attrs:{id:"ResumePreview"}},[e._v("\n  I'm preview\n")])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"ResumeEditor"}},[n("nav",[n("ol",e._l(e.resume.config,function(t,i){return n("li",{class:{active:t.field===e.selected},on:{click:function(n){e.selected=t.field}}},[n("svg",{staticClass:"icon"},[n("use",{attrs:{"xlink:href":"#icon-"+t.icon}})])])}))]),e._v(" "),n("ol",{staticClass:"panels"},e._l(e.resume.config,function(t){return n("li",{directives:[{name:"show",rawName:"v-show",value:t.field===e.selected,expression:"item['field'] === selected"}]},[e.resume[t.field]instanceof Array?n("div",e._l(e.resume[t.field],function(t){return n("div",{staticClass:"subitem"},e._l(t,function(t,i){return n("div",{staticClass:"resumeField"},[n("label",[e._v(e._s(i))]),e._v(" "),n("input",{attrs:{type:"text"},domProps:{value:t}})])}))})):e._l(e.resume[t.field],function(i,r){return n("div",{staticClass:"resumeField"},[n("label",[e._v(e._s(r))]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.resume[t.field][r],expression:"resume[item.field][key]"}],attrs:{type:"text"},domProps:{value:e.resume[t.field][r]},on:{input:function(n){n.target.composing||e.$set(e.resume[t.field],r,n.target.value)}}})])})],2)}))])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"topbar"}},[n("div",{staticClass:"wrapper"},[n("span",{staticClass:"logo"},[e._v("Resumer")]),e._v(" "),n("div",{staticClass:"actions"},[n("button",{staticClass:"primary"},[e._v("保存")]),e._v(" "),n("button",[e._v("预览")])])])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[n("header",[n("Topbar")],1),e._v(" "),n("main",[n("ResumeEditor"),e._v(" "),n("ResumePreview")],1)])},staticRenderFns:[]}},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(7),r=n.n(i),o=n(6),s=n.n(o),c=n(5),a=n.n(c);t.default={name:"app",components:{Topbar:r.a,ResumeEditor:a.a,ResumePreview:s.a}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"ResumeEditor",data:function(){return{selected:"profile",resume:{config:[{field:"profile",icon:"id"},{field:"work history",icon:"work"},{field:"education",icon:"edu"},{field:"projects",icon:"project"},{field:"awards",icon:"award"},{field:"contacts",icon:"contact"}],profile:{name:"DK",city:"LA",title:"id"},"work history":[{company:"AL",content:"我的第一份工作是"},{company:"AL",content:"我的第一份工作是"}],education:[{school:"AL",content:"我的高中"},{school:"AL",content:"我的大学"}],projects:[{project:"projectA",content:"project A"},{project:"projectB",content:"projectB"}],awards:[{award:"name",content:"award1"},{award:"name",content:"award2"}],contacts:[{contact:"wechat",content:"abc123"},{contact:"qq",content:"123456"}]}}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"ResumePreview"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"Topbar"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),r=(n.n(i),n(3)),o=(n.n(r),n(4)),s=n(1),c=n.n(s);o.a.config.productionTip=!1,new o.a({el:"#app",template:"<App/>",components:{App:c.a}})}],[22]);
//# sourceMappingURL=app.f2802b53bd349895b033.js.map