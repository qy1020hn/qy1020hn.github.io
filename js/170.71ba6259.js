"use strict";(self["webpackChunkweb"]=self["webpackChunkweb"]||[]).push([[170],{8951:function(t,e,n){n.d(e,{Z:function(){return c}});var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"apiBox"},[e("h3",{staticClass:"fontNav"},[t._v("props")]),t._m(0),t._l(t.api,(function(n,o){return e("div",{key:o,staticClass:"api"},[e("div",{staticStyle:{width:"200px"}},[t._v(t._s(n.name))]),e("div",{staticStyle:{width:"400px"}},[t._v(t._s(n.introduction))]),e("div",{staticStyle:{width:"200px"}},[t._v(t._s(n.type))]),e("div",{staticStyle:{width:"200px"}},[t._v(t._s(n.default))])])}))],2)},a=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"title"},[e("div",{staticStyle:{width:"200px"}},[t._v("参数")]),e("div",{staticStyle:{width:"400px"}},[t._v("说明")]),e("div",{staticStyle:{width:"200px"}},[t._v("类型")]),e("div",{staticStyle:{width:"200px"}},[t._v("默认值(可选)")])])}],i={props:{count:Number,api:[]}},l=i,r=n(1001),s=(0,r.Z)(l,o,a,!1,null,"1b4b2cc1",null),c=s.exports},2661:function(t,e,n){n.d(e,{Z:function(){return c}});var o=function(){var t=this,e=t._self._c;return e("div",[e("pre",{staticClass:"codeField"},[t._t("default",(function(){return[t._v("默认代码块")]}))],2)])},a=[],i={},l=i,r=n(1001),s=(0,r.Z)(l,o,a,!1,null,"6432b6d8",null),c=s.exports},7142:function(t,e,n){n.d(e,{Z:function(){return c}});var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"contentBox"},[e("h3",{staticClass:"fontNav"},[t._t("nav",(function(){return[t._v("标题")]}))],2),e("div",{staticClass:"fontContent"},[t._t("content")],2),t.hasCode?e("div",[t._t("code",(function(){return[t._v("插入codeField代码块")]}))],2):t._e()])},a=[],i={props:{hasCode:Number}},l=i,r=n(1001),s=(0,r.Z)(l,o,a,!1,null,"7c6f2016",null),c=s.exports},381:function(t,e,n){n.d(e,{Z:function(){return v}});var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"cpntContent"},[e("h1",{staticClass:"fontCPNT"},[t._t("cpnt",(function(){return[t._v("组件英文名称")]})),t._t("name",(function(){return[t._v("组件中文名称")]}))],2),e("contentBox",{attrs:{hasCode:0}},[e("template",{slot:"nav"},[t._v("介绍")]),e("template",{slot:"content"},[t._t("introduction",(function(){return[t._v("组件介绍")]}))],2)],2),e("contentBox",{attrs:{hasCode:1}},[e("template",{slot:"nav"},[t._v("引入")]),e("template",{slot:"content"},[t._v("通过以下方式来全局按需导入组件")]),e("template",{slot:"code"},[e("codeField",[t._t("injection",(function(){return[t._v(" //main.js"),e("br"),t._v(" import Vue from 'vue'"),e("br"),t._v(" import {"),t._t("cpnt"),t._v("} from 'frontend1080-ui'"),e("br"),t._v(" import 'frontend1080-ui/lib/index.css'"),e("br"),t._v(" Vue.use("),t._t("cpnt"),t._v(")"),e("br")]}))],2)],1)],2),t._t("more")],2)},a=[],i=n(2661),l=n(7142),r={components:{codeField:i.Z,contentBox:l.Z}},s=r,c=n(1001),u=(0,c.Z)(s,o,a,!1,null,"738f2b5c",null),v=u.exports},9170:function(t,e,n){n.r(e),n.d(e,{default:function(){return d}});var o=function(){var t=this,e=t._self._c;return e("div",[e("cpntContent",[e("template",{slot:"cpnt"},[t._v("YftDropdown")]),e("template",{slot:"name"},[t._v("下拉菜单")]),e("template",{slot:"introduction"},[t._v("向下弹出的菜单列表。")]),e("template",{slot:"more"},[e("h1",{staticClass:"fontTitle"},[t._v("代码演示")]),e("contentBox",{attrs:{hasCode:2}},[e("template",{slot:"nav"},[t._v("基础用法")]),e("template",{slot:"content"},[t._v("有单选、多选和联级功能")]),e("template",{slot:"code"},[e("codeField",[t._v(' <yft-dropdown :options="options" placehoder="-------请选择-------" :multiple = "false" :isInput = "false" :cascade = "false" /> ')]),e("codeField",[t._v(" <script>"),e("br"),t._v(" export default {"),e("br"),t._v(" name: 'App',"),e("br"),t._v(" data () {"),e("br"),t._v(" return {"),e("br"),t._v(" options: ["),e("br"),t._v(" {"),e("br"),t._v(" label: 'Fruits',"),e("br"),t._v(" options: ['Apple', 'Banana', 'Mango']"),e("br"),t._v(" },"),e("br"),t._v(" {"),e("br"),t._v(" label: 'Vegetables',"),e("br"),t._v(" options: ['Carrot', 'Potato', 'Tomato']"),e("br"),t._v(" }"),e("br"),t._v(" ],"),e("br"),t._v(" }"),e("br"),t._v(" }"),e("br"),t._v(" }"),e("br"),t._v(" <\/script>"),e("br")])],1)],2),e("contentBox",{attrs:{hasCode:0}},[e("template",{slot:"nav"},[t._v("关于options参数：")]),e("template",{slot:"content"},[t._v("1.若使用单选/多选功能：label: 为分组,options:为选项"),e("br"),t._v(" 2.若使用级联功能：label: 为一级选项,options:为二级选项")])],2),e("apiBox",{attrs:{count:5,api:[{name:"options",introduction:"选项内容",type:"Array",default:"-"},{name:"placeholder",introduction:"默认显示内容",type:"String",default:"------请选择------"},{name:"multiple",introduction:"是否支持多选",type:"Boolean",default:"false(true、false)"},{name:"isInput",introduction:"搜索下拉框",type:"Boolean",default:"false(true、false)"},{name:"cascade",introduction:"是否支持级联",type:"Boolean",default:"false(true、false)"}]}})],1)],2)],1)},a=[],i=n(381),l=n(7142),r=n(2661),s=n(8951),c={name:"fileUploadView",components:{cpntContent:i.Z,contentBox:l.Z,codeField:r.Z,apiBox:s.Z},created(){console.log("started")}},u=c,v=n(1001),p=(0,v.Z)(u,o,a,!1,null,null,null),d=p.exports}}]);
//# sourceMappingURL=170.71ba6259.js.map