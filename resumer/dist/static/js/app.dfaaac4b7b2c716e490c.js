webpackJsonp([0],[,,,function(e,t,n){function s(e){n(16)}var o=n(0)(n(19),n(12),s,null,null);e.exports=o.exports},function(e,t){},function(e,t){},function(e,t,n){function s(e){n(14)}var o=n(0)(n(20),n(10),s,"data-v-53358100",null);e.exports=o.exports},function(e,t,n){function s(e){n(13)}var o=n(0)(n(21),n(9),s,null,null);e.exports=o.exports},function(e,t,n){function s(e){n(15)}var o=n(0)(n(22),n(11),s,"data-v-a0a88fb8",null);e.exports=o.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"ResumePreview"}},[n("section",{directives:[{name:"show",rawName:"v-show",value:e.resume.profile,expression:"resume.profile"}],attrs:{"data-name":"profile"}},[n("h1",[e._v(e._s(e.resume.profile.name))]),e._v(" "),n("h2",[e._v(e._s(e.resume.profile.title))]),e._v(" "),n("p",[n("small",[e._v(e._s(e.resume.profile.city))]),e._v(" "),n("small",[e._v(e._s(e.resume.profile.birthday))])])]),e._v(" "),n("section",{directives:[{name:"show",rawName:"v-show",value:e.resume.education,expression:"resume.education"}],attrs:{"data-name":"projects"}},[n("h2",[e._v("项目经历")]),e._v(" "),n("ol",e._l(e.resume.projects,function(t){return n("li",[n("h3",[e._v(e._s(t.name))]),e._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:t.content,expression:"item.content"}]},[e._v(" "+e._s(t.content)+" ")])])}))]),e._v(" "),n("section",{directives:[{name:"show",rawName:"v-show",value:e.resume.workHistory,expression:"resume.workHistory"}],attrs:{"data-name":"workHistory"}},[n("h2",[e._v("工作经历")]),e._v(" "),n("ol",e._l(e.resume.workHistory,function(t){return n("li",[n("h3",[e._v(e._s(t.company))]),e._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:t.content,expression:"item.content"}]},[e._v(e._s(t.content))])])}))]),e._v(" "),n("section",{directives:[{name:"show",rawName:"v-show",value:e.resume.awards,expression:"resume.awards"}],attrs:{"data-name":"awards"}},[n("h2",[e._v("获奖情况")]),e._v(" "),n("ol",e._l(e.resume.awards,function(t){return n("li",[n("h3",[e._v(e._s(t.name))]),e._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:t.content,expression:"item.content"}]},[e._v(" "+e._s(t.content)+" ")])])}))]),e._v(" "),n("section",{directives:[{name:"show",rawName:"v-show",value:e.resume.contacts,expression:"resume.contacts"}],attrs:{"data-name":"contacts"}},[n("h2",[e._v("联系方式")]),e._v(" "),n("table",e._l(e.resume.contacts,function(t){return n("tr",[n("td",[e._v(e._s(t.contact))]),e._v(" "),n("td",{directives:[{name:"show",rawName:"v-show",value:t.content,expression:"item.content"}]},[e._v(" "+e._s(t.content)+" ")])])}))]),e._v(" "),n("section",{directives:[{name:"show",rawName:"v-show",value:e.resume.education,expression:"resume.education"}],attrs:{"data-name":"education"}},[n("h2",[e._v("毕业院校")]),e._v(" "),n("ol",e._l(e.resume.education,function(t){return n("li",[n("h3",[e._v(e._s(t.school)+"\n          "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.content,expression:"item.content"}]},[e._v("-"+e._s(t.content))])])])}))])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"ResumeEditor"}},[n("nav",[n("ol",e._l(e.resume.config,function(t,s){return n("li",{class:{active:t.field===e.selected},on:{click:function(n){e.selected=t.field}}},[n("svg",{staticClass:"icon"},[n("use",{attrs:{"xlink:href":"#icon-"+t.icon}})])])}))]),e._v(" "),n("ol",{staticClass:"panels"},e._l(e.resume.config,function(t){return n("li",{directives:[{name:"show",rawName:"v-show",value:t.field===e.selected,expression:"item['field'] === selected"}]},[e.resume[t.field]instanceof Array?n("div",e._l(e.resume[t.field],function(t){return n("div",{staticClass:"subitem"},e._l(t,function(s,o){return n("div",{staticClass:"resumeField"},[n("label",[e._v(e._s(o))]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t[o],expression:"subitem[key]"}],attrs:{type:"text"},domProps:{value:t[o]},on:{input:function(n){n.target.composing||e.$set(t,o,n.target.value)}}})])}))})):e._l(e.resume[t.field],function(s,o){return n("div",{staticClass:"resumeField"},[n("label",[e._v(e._s(o))]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.resume[t.field][o],expression:"resume[item.field][key]"}],attrs:{type:"text"},domProps:{value:e.resume[t.field][o]},on:{input:function(n){n.target.composing||e.$set(e.resume[t.field],o,n.target.value)}}})])})],2)}))])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"topbar"}},[n("div",{staticClass:"wrapper"},[n("span",{staticClass:"logo"},[e._v("Resumer")]),e._v(" "),n("div",{staticClass:"actions"},[n("button",{staticClass:"primary"},[e._v("保存")]),e._v(" "),n("button",[e._v("预览")])])])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[n("header",[n("Topbar")],1),e._v(" "),n("main",[n("ResumeEditor"),e._v(" "),n("ResumePreview")],1)])},staticRenderFns:[]}},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(8),o=n.n(s),r=n(7),i=n.n(r),a=n(6),c=n.n(a),u=n(24);t.default={name:"app",store:u.a,components:{Topbar:o.a,ResumeEditor:c.a,ResumePreview:i.a}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"ResumeEditor",computed:{selected:{get:function(){return this.$store.state.selected},set:function(e){return this.$store.commit("switchTab",e)}},resume:function(){return this.$store.state.resume}},methods:{add:function(){this.$store.commit("increment")}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"ResumePreview",computed:{resume:function(){return this.$store.state.resume}},created:function(){console.log(this.resume)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"Topbar"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(4),o=(n.n(s),n(5)),r=(n.n(o),n(2)),i=n(1),a=n(3),c=n.n(a);r.a.config.productionTip=!1,r.a.use(i.a),new r.a({el:"#app",template:"<App/>",components:{App:c.a}})},function(e,t,n){"use strict";var s=n(1);n(2).a.use(s.a),t.a=new s.a.Store({state:{selected:"profile",resume:{config:[{field:"profile",icon:"id"},{field:"workHistory",icon:"work"},{field:"education",icon:"edu"},{field:"projects",icon:"project"},{field:"awards",icon:"award"},{field:"contacts",icon:"contact"}],profile:{name:"DK",city:"LA",title:"id"},workHistory:[{company:"AL",content:"我的第一份工作是"},{company:"AL",content:"我的第一份工作是"}],education:[{school:"AL",content:"我的高中"},{school:"AL",content:"我的大学"}],projects:[{project:"projectA",content:"project A"},{project:"projectB",content:"projectB"}],awards:[{award:"你以为呢你以为呢你以为呢你以为呢你以为呢",content:"我以为我以为我以为我以为我以为我以为我以为我以为"},{award:"你好吗你好吗你好吗你好吗你好吗",content:"好好哈哈哈哈哈哈哈哈哈哈哈哈"}],contacts:[{contact:"wechat",content:"abc123"},{contact:"qq",content:"123456"}]}},mutations:{switchTab:function(e,t){e.selected=t}}})}],[23]);
//# sourceMappingURL=app.dfaaac4b7b2c716e490c.js.map