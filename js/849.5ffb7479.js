"use strict";(self["webpackChunkweb"]=self["webpackChunkweb"]||[]).push([[849],{6079:function(t,e,n){n.d(e,{Z:function(){return l}});var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"apiBox"},[e("h3",{staticClass:"fontNav"},[t._v("参数")]),t._m(0),t._l(t.api,(function(n,o){return e("div",{key:o,staticClass:"api"},[e("div",{staticStyle:{width:"200px"}},[t._v(t._s(n.name))]),e("div",{staticStyle:{width:"400px"}},[t._v(t._s(n.introduction))]),e("div",{staticStyle:{width:"200px"}},[t._v(t._s(n.type))]),e("div",{staticStyle:{width:"200px"}},[t._v(t._s(n.default))])])}))],2)},r=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"title"},[e("div",{staticStyle:{width:"200px"}},[t._v("参数")]),e("div",{staticStyle:{width:"400px"}},[t._v("说明")]),e("div",{staticStyle:{width:"200px"}},[t._v("类型")]),e("div",{staticStyle:{width:"200px"}},[t._v("默认值(可选)")])])}],i={props:{count:Number,api:[]}},s=i,a=n(1001),c=(0,a.Z)(s,o,r,!1,null,"81254af2",null),l=c.exports},2661:function(t,e,n){n.d(e,{Z:function(){return l}});var o=function(){var t=this,e=t._self._c;return e("div",[e("pre",{staticClass:"codeField"},[t._t("default",(function(){return[t._v("默认代码块")]}))],2)])},r=[],i={},s=i,a=n(1001),c=(0,a.Z)(s,o,r,!1,null,"6432b6d8",null),l=c.exports},217:function(t,e,n){n.d(e,{Z:function(){return l}});var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"contentBox"},[e("h3",{staticClass:"fontNav"},[t._t("nav",(function(){return[t._v("标题")]}))],2),e("div",{staticClass:"fontContent"},[t._t("content",(function(){return[t._v("内容")]}))],2),t.hasCode?e("div",[t._t("code",(function(){return[t._v("插入codeField代码块")]}))],2):t._e()])},r=[],i={props:{hasCode:Number}},s=i,a=n(1001),c=(0,a.Z)(s,o,r,!1,null,"515959c2",null),l=c.exports},5527:function(t,e,n){n.d(e,{Z:function(){return d}});var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"cpntContent"},[e("h1",{staticClass:"fontCPNT"},[t._t("cpnt",(function(){return[t._v("组件英文名称")]})),t._t("name",(function(){return[t._v("组件中文名称")]}))],2),e("contentBox",{attrs:{hasCode:0}},[e("template",{slot:"nav"},[t._v("介绍")]),e("template",{slot:"content"},[t._t("introduction",(function(){return[t._v("组件介绍")]}))],2)],2),e("contentBox",{attrs:{hasCode:1}},[e("template",{slot:"nav"},[t._v("引入")]),e("template",{slot:"content"},[t._v("通过以下方式来全局注册组件，更多注册方式请参考组件注册。")]),e("template",{slot:"code"},[e("codeField",[t._t("injection",(function(){return[t._v(" import Vue from 'vue'"),e("br"),t._v(" import {"),t._t("cpnt"),t._v("} from 'frontend1080-ui'"),e("br"),t._v(" import 'frontend1080-ui/lib/index.css'"),e("br"),t._v(" Vue.use("),t._t("cpnt"),t._v(")"),e("br")]}))],2)],1)],2),t._t("more")],2)},r=[],i=n(2661),s=n(217),a={components:{codeField:i.Z,contentBox:s.Z}},c=a,l=n(1001),u=(0,l.Z)(c,o,r,!1,null,"0f77a8d8",null),d=u.exports},5849:function(t,e,n){n.r(e),n.d(e,{default:function(){return p}});var o=function(){var t=this,e=t._self._c;return e("div",[e("cpntContent",[e("template",{slot:"cpnt"},[t._v("YftAvator")]),e("template",{slot:"name"},[t._v("头像")]),e("template",{slot:"introduction"},[t._v("介绍")]),e("template",{slot:"more"},[e("h1",{staticClass:"fontTitle"},[t._v("代码演示")]),e("contentBox",{attrs:{hasCode:2}},[e("template",{slot:"nav"},[t._v("基础用法")]),e("template",{slot:"content"}),e("template",{slot:"code"},[e("codeField",[t._v(' <dy-uploader accept="image/png, image/jpeg" :size="500*1024" :multiple="true" :on-success="uploadSuccess" :on-error="uploadError">'),e("br"),t._v(' <div class="uploader-area" slot="uploader-area">'),e("br"),t._v(' <dy-icon> name="icon-test17"></dy-icon>'),e("br"),t._v(' <div class="dy-uploader--text">将文件拖到此处，或<em>点击上传</em></div>'),e("br"),t._v(" </div>"),e("br"),t._v(' <div> class="dy-uploader--tip" slot="tips">'),e("br"),t._v(" 只能上传jpg/png文件，且不超过500kb"),e("br"),t._v(" </div>"),e("br"),t._v(" </dy-uploader>"),e("br")]),e("codeField",[t._v(" <script>"),e("br"),t._v(" import dyIcon from '@/components/dy-icon'"),e("br"),t._v(" export default {"),e("br"),t._v(" components:{dyIcon}"),e("br"),t._v(" methods: {"),e("br"),t._v(" uploadSuccess () {"),e("br"),t._v(" },"),e("br"),t._v(" uploadError (msg) {"),e("br"),t._v(" this.$message({"),e("br"),t._v(" message: msg,"),e("br"),t._v(" autoClose: false,"),e("br"),t._v(" type: 'error'"),e("br"),t._v(" })"),e("br"),t._v(" }"),e("br"),t._v(" }"),e("br"),t._v(" }"),e("br"),t._v(" <\/script>"),e("br")])],1)],2),e("apiBox",{attrs:{count:5,api:[{name:"multiple",introduction:"是否支持多选文件",type:"Boolean",default:"true(true/false)"},{name:"accept",introduction:"接受上传的文件类型",type:"String",default:"-"},{name:"size",introduction:"接受上传的文件最大大小",type:"Number",default:"-"},{name:"on-success\t\t",introduction:"文件上传成功时的钩子",type:"function()",default:"-"},{name:"on-error",introduction:"文件上传失败时的钩子",type:"function()",default:"-"}]}})],1)],2)],1)},r=[],i=n(5527),s=n(217),a=n(2661),c=n(6079),l={name:"fileUploadView",components:{cpntContent:i.Z,contentBox:s.Z,codeField:a.Z,apiBox:c.Z},created(){console.log("started")}},u=l,d=n(1001),v=(0,d.Z)(u,o,r,!1,null,null,null),p=v.exports}}]);
//# sourceMappingURL=849.5ffb7479.js.map