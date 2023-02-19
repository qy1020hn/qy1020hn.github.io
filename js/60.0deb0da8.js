"use strict";(self["webpackChunkweb"]=self["webpackChunkweb"]||[]).push([[60],{8951:function(t,e,n){n.d(e,{Z:function(){return s}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"apiBox"},[e("h3",{staticClass:"fontNav"},[t._v("props")]),t._m(0),t._l(t.api,(function(n,i){return e("div",{key:i,staticClass:"api"},[e("div",{staticStyle:{width:"200px"}},[t._v(t._s(n.name))]),e("div",{staticStyle:{width:"400px"}},[t._v(t._s(n.introduction))]),e("div",{staticStyle:{width:"200px"}},[t._v(t._s(n.type))]),e("div",{staticStyle:{width:"200px"}},[t._v(t._s(n.default))])])}))],2)},o=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"title"},[e("div",{staticStyle:{width:"200px"}},[t._v("参数")]),e("div",{staticStyle:{width:"400px"}},[t._v("说明")]),e("div",{staticStyle:{width:"200px"}},[t._v("类型")]),e("div",{staticStyle:{width:"200px"}},[t._v("默认值(可选)")])])}],a={props:{count:Number,api:[]}},r=a,c=n(1001),l=(0,c.Z)(r,i,o,!1,null,"1b4b2cc1",null),s=l.exports},2661:function(t,e,n){n.d(e,{Z:function(){return s}});var i=function(){var t=this,e=t._self._c;return e("div",[e("pre",{staticClass:"codeField"},[t._t("default",(function(){return[t._v("默认代码块")]}))],2)])},o=[],a={},r=a,c=n(1001),l=(0,c.Z)(r,i,o,!1,null,"6432b6d8",null),s=l.exports},7142:function(t,e,n){n.d(e,{Z:function(){return s}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"contentBox"},[e("h3",{staticClass:"fontNav"},[t._t("nav",(function(){return[t._v("标题")]}))],2),e("div",{staticClass:"fontContent"},[t._t("content")],2),t.hasCode?e("div",[t._t("code",(function(){return[t._v("插入codeField代码块")]}))],2):t._e()])},o=[],a={props:{hasCode:Number}},r=a,c=n(1001),l=(0,c.Z)(r,i,o,!1,null,"7c6f2016",null),s=l.exports},381:function(t,e,n){n.d(e,{Z:function(){return d}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"cpntContent"},[e("h1",{staticClass:"fontCPNT"},[t._t("cpnt",(function(){return[t._v("组件英文名称")]})),t._t("name",(function(){return[t._v("组件中文名称")]}))],2),e("contentBox",{attrs:{hasCode:0}},[e("template",{slot:"nav"},[t._v("介绍")]),e("template",{slot:"content"},[t._t("introduction",(function(){return[t._v("组件介绍")]}))],2)],2),e("contentBox",{attrs:{hasCode:1}},[e("template",{slot:"nav"},[t._v("引入")]),e("template",{slot:"content"},[t._v("通过以下方式来全局按需导入组件")]),e("template",{slot:"code"},[e("codeField",[t._t("injection",(function(){return[t._v(" //main.js"),e("br"),t._v(" import Vue from 'vue'"),e("br"),t._v(" import {"),t._t("cpnt"),t._v("} from 'frontend1080-ui'"),e("br"),t._v(" import 'frontend1080-ui/lib/index.css'"),e("br"),t._v(" Vue.use("),t._t("cpnt"),t._v(")"),e("br")]}))],2)],1)],2),t._t("more")],2)},o=[],a=n(2661),r=n(7142),c={components:{codeField:a.Z,contentBox:r.Z}},l=c,s=n(1001),u=(0,s.Z)(l,i,o,!1,null,"738f2b5c",null),d=u.exports},9060:function(t,e,n){n.r(e),n.d(e,{default:function(){return _}});var i=function(){var t=this,e=t._self._c;return e("div",[e("cpntContent",[e("template",{slot:"cpnt"},[t._v("LuoDateTimePicker")]),e("template",{slot:"name"},[t._v("时间选择")]),e("template",{slot:"introduction"},[t._v("时间选择器")]),e("template",{slot:"more"},[e("h1",{staticClass:"fontTitle"},[t._v("代码演示")]),e("contentBox",{attrs:{hasCode:2}},[e("template",{slot:"nav"},[t._v("基础用法")]),e("template",{slot:"content"},[t._v("自定义时间格式和输入框样式")]),e("template",{slot:"code"},[e("codeField",[t._v(" <luo-date-time-picker"),e("br"),t._v(' v-model="selectData"'),e("br"),t._v(' :is-allow-select-area="true"'),e("br"),t._v(' :is-need-time="true"'),e("br"),t._v(' :min-date="1675267200"'),e("br"),t._v(' :max-date="1676822400"'),e("br"),t._v(' :format="formatData"'),e("br"),t._v(' @change="changeDate"'),e("br"),t._v(" /> ")]),e("codeField",[t._v(" <script>"),e("br"),t._v(" export default {"),e("br"),t._v(" name: 'App',"),e("br"),t._v(" data () {"),e("br"),t._v(" return {"),e("br"),t._v(" selectData: ['2023-01-11 22:22:22', '2023-01-15 22:22:22'],"),e("br"),t._v(" formatData: 'yyyy-MM-dd HH:mm:ss'"),e("br"),t._v(" }"),e("br"),t._v(" },"),e("br"),t._v(" methods: {"),e("br"),t._v(" changeDate (startTime, endTime) {"),e("br"),t._v(" console.log(startTime, endTime)"),e("br"),t._v(" }"),e("br"),t._v(" }"),e("br"),t._v(" }"),e("br"),t._v(" <\/script>"),e("br")])],1)],2),e("apiBox",{attrs:{count:10,api:[{name:"value",introduction:"传入的时间",type:"Array",default:"-"},{name:"is-allow-select-area",introduction:"是否支持范围选择",type:"boolean",default:"true"},{name:"is-need-time",introduction:"是否支持时间选择",type:"boolean",default:"true"},{name:"min-date",introduction:"最小可选择时间",type:"Number",default:"0"},{name:"max-date",introduction:"最大可选择时间",type:"Number",default:"0"},{name:"format",introduction:"时间格式化形式",type:"String",default:"yyyy-MM-dd"},{name:"width",introduction:"输入框宽度",type:"String",default:"343px"},{name:"height",introduction:"输入框高度",type:"String",default:"-"},{name:"font-size",introduction:"输入框字号",type:"String",default:"-"},{name:"font-color",introduction:"输入框字体颜色",type:"String",default:"-"}]}}),e("eventBox",{attrs:{count:1,api:[{name:"changeDate",introduction:"选择日期后的回调",parm:"两个时间（startTime, endTime）, 如无范围选择，则endTime为空"}]}})],1)],2)],1)},o=[],a=n(381),r=n(7142),c=n(2661),l=n(8951),s={name:"fileUploadView",components:{cpntContent:a.Z,contentBox:r.Z,codeField:c.Z,apiBox:l.Z},created(){console.log("started")}},u=s,d=n(1001),v=(0,d.Z)(u,i,o,!1,null,null,null),_=v.exports}}]);
//# sourceMappingURL=60.0deb0da8.js.map