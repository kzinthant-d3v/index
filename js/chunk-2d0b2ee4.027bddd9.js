(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b2ee4"],{"25e0":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",{staticClass:"table is-hoverable"},[s("thead",[s("tr",t._l(t.columns,(function(e,i){return s("th",{key:i,class:e.class,style:e.style},[t._v(" "+t._s(e.name)+" "),t._m(0,!0)])})),0)]),s("tbody",t._l(t.data,(function(e,i){return s("tr",{key:i},[s("td",{attrs:{title:e.name},on:{click:function(s){return s.target!==s.currentTarget?null:t.action(e,"application/vnd.google-apps.folder"!==e.mimeType?"view":"")}}},[s("svg",{staticClass:"iconfont",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":t.icons(e.mimeType)}})]),t._v(" "+t._s(e.name)+" "),t.isShowDesc?s("span",{staticClass:"has-text-grey g2-file-desc",domProps:{innerHTML:t._s(e.description)}}):t._e()]),s("td",{staticClass:"is-hidden-mobile is-hidden-touch"},[t._v(" "+t._s(e.modifiedTime)+" ")]),s("td",{staticClass:"is-hidden-mobile is-hidden-touch"},[t._v(t._s(e.size))]),s("td",{staticClass:"is-hidden-mobile is-hidden-touch"})])})),0)])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"caret-wrapper"},[s("i",{staticClass:"sort-caret ascending"}),s("i",{staticClass:"sort-caret descending"})])}],a={props:{data:{type:Array,default:function(){return[]}},icons:{type:Function},action:{type:Function}},computed:{columns:function(){return[{name:this.$t("list.title.file"),style:""},{name:this.$t("list.title.moditime"),style:"width:20%",class:"is-hidden-mobile is-hidden-touch"},{name:this.$t("list.title.size"),style:"width:10.5%",class:"is-hidden-mobile is-hidden-touch"},{name:this.$t("list.title.operation"),style:"width:13.5%",class:"is-hidden-mobile is-hidden-touch"}]},isShowDesc:function(){return window.themeOptions.render.desc||!1}}},l=a,c=s("2877"),o=Object(c["a"])(l,i,n,!1,null,null,null);e["default"]=o.exports}}]);