(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["09765828"],{"0960":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("hero",[n("div",{staticStyle:{"padding-top":"260px"},attrs:{id:"padding"}}),n("q-markdown",[t._v("\nYou can add markdown to your page by surrounding it with `q-markdown` tag.\nBe aware, markdown is sensitive to being on left side, otherwise will wrap it in blocks (indented).\n    ")]),t._v("\n\n    Here is the imported Markdown:\n    "),n("q-markdown",{attrs:{src:t.markdown,toc:""},on:{data:t.onToc}}),n("example-title",{attrs:{title:"Basic"}}),n("example-card",{attrs:{title:"Tauri - Basic",name:"TauriBasic","tag-parts":t.getTagParts(a("5a74").default)}}),n("example-card",{attrs:{title:"Tauri - Advanced",name:"TauriAdvanced","tag-parts":t.getTagParts(a("5f08").default)}})],1)},s=[],i=a("2514"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",{staticClass:"q-markdown--heading-h1 q-markdown--title-heavy example-title",attrs:{id:t.slugifiedTitle},on:{click:function(e){return t.copyHeading(t.slugifiedTitle)}}},[t._v(t._s(t.title))])},r=[],l=a("8669"),c={name:"ExampleTitle",props:{title:{type:String,required:!0}},computed:{slugifiedTitle:function(){return Object(l["c"])(this.title)}},methods:{copyHeading:l["a"]}},d=c,p=a("2877"),u=Object(p["a"])(d,o,r,!1,null,null,null),m=u.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"q-pa-md overflow-auto",attrs:{id:t.slugifiedTitle}},[a("q-card",{staticClass:"no-shadow",attrs:{flat:"",bordered:""}},[a("q-toolbar",[a("q-ribbon",{attrs:{position:"left",color:"rgba(0,0,0,.58)","background-color":"#c0c0c0","leaf-color":"#a0a0a0","leaf-position":"bottom",decoration:"rounded-out"}},[a("q-toolbar-title",{staticClass:"example-title",staticStyle:{padding:"5px 20px"},on:{click:function(e){return t.copyHeading(t.slugifiedTitle)}}},[a("span",{staticClass:"ellipsis"},[t._v(t._s(t.title))])])],1)],1),this.$slots.default?a("q-separator"):t._e(),this.$slots.default?a("q-card-section",[t._t("default")],2):t._e(),a("q-separator"),a("q-expansion-item",{attrs:{group:"someGroup",caption:"Code"}},[a("q-card",[a("q-tabs",{staticClass:"text-grey",attrs:{dense:"","active-color":"primary","indicator-color":"primary",align:"left","narrow-indicator":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[t.parts.template?a("q-tab",{attrs:{name:"template",label:"Template"}}):t._e(),t.parts.script?a("q-tab",{attrs:{name:"script",label:"Script"}}):t._e(),t.parts.style?a("q-tab",{attrs:{name:"style",label:"Style"}}):t._e()],1),a("q-separator"),a("q-tab-panels",{attrs:{animated:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[t.parts.template?a("q-tab-panel",{attrs:{name:"template"}},[a("q-markdown",{attrs:{src:t.parts.template}})],1):t._e(),t.parts.script?a("q-tab-panel",{attrs:{name:"script"}},[a("q-markdown",{attrs:{src:t.parts.script}})],1):t._e(),t.parts.style?a("q-tab-panel",{attrs:{name:"style"}},[a("q-markdown",{attrs:{src:t.parts.style}})],1):t._e()],1)],1)],1),a("q-separator"),a(t.name,{tag:"component",staticStyle:{overflow:"hidden"}})],1)],1)},g=[],b=(a("ac6a"),a("cadf"),a("06db"),a("456d"),{name:"ExampleCard",components:{TauriBasic:function(){return a.e("41b4ae5e").then(a.bind(null,"76d6"))},TauriAdvanced:function(){return a.e("4e8dcd81").then(a.bind(null,"1be3"))}},props:{title:{type:String,required:!0},name:{type:String,required:!0},tagParts:{type:Object,default:function(){}}},data:function(){return{tab:"template",parts:{}}},mounted:function(){this.updateParts()},computed:{slugifiedTitle:function(){return Object(l["c"])(this.title)}},methods:{copyHeading:l["a"],updateParts:function(){var t=this;this.parts={},Object.keys(this.tagParts).forEach((function(e){""!==t.tagParts[e]&&(t.parts[e]="```\n"+t.tagParts[e]+"\n```")}))}}}),f=b,y=Object(p["a"])(f,h,g,!1,null,null,null),w=y.exports,v=function(t){var e,a={},n=q(t);n&&n.length>0&&(a.template=n);var s=document.createElement("html");return s.innerHTML=t,e=s.getElementsByTagName("script"),e.length>0&&(a.script=e[0].outerHTML),e=s.getElementsByTagName("style"),e.length>0&&(a.style=e[0].outerHTML),a},q=function(t){var e="";if(t&&t.length>0){var a="<template",n="</template>",s=t.indexOf(a),i=t.lastIndexOf(n);s>-1&&i>-1&&(e=t.substring(s,i+n.length))}return e},x="## examples\n\n```js\nreturn {\n  stuff: 'wow'\n}\n```\n",k={name:"Examples",components:{Hero:i["a"],ExampleTitle:m,ExampleCard:w},data:function(){return{tempToc:[],markdown:x}},mounted:function(){this.toc=[],this.tempToc=[],this.addToToc("Basic"),this.addToToc("Tauri - Basic",2),this.addToToc("Tauri - Advanced",2),this.toc=this.tempToc},computed:{toc:{get:function(){return this.$store.state.common.toc},set:function(t){this.$store.commit("common/toc",t)}}},methods:{getTagParts:v,addToToc:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=Object(l["c"])(t);this.tempToc.push({children:[],id:a,label:t,level:e})},onToc:function(t){this.toc=t}}},T=k,C=Object(p["a"])(T,n,s,!1,null,null,null);e["default"]=C.exports},2514:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"full-width q-pa-md"},[a("q-page-sticky",{directives:[{name:"scroll",rawName:"v-scroll",value:t.scrolled,expression:"scrolled"}],staticClass:"page-header fixed-top shadow-8 scroll-determined",staticStyle:{position:"fixed!important"},attrs:{expand:""}},[a("q-chip",{staticClass:"claim text-weight-light text-black bg-cyan-1 shadow-8",staticStyle:{top:"84%"},attrs:{outline:"",dense:"",square:"",icon:"star","icon-right":"star"}},[t._v("Build more secure native apps with fast, tiny binaries.")]),a("div",{staticClass:"bg-container scroll-determined q-pa-md q-ml-lg"}),a("div",[a("router-link",{attrs:{to:"/"}},[a("img",{staticClass:"tauri-name scroll-determined",staticStyle:{cursor:"pointer"},attrs:{src:"statics/tauri-wordmark.png"}})]),t.buttons?a("div",{staticClass:"row",staticStyle:{"margin-top":"90px"}},[a("q-btn",{staticClass:"btn",attrs:{dense:"",size:"small",to:"/docs/quickstart",label:"Quick Start","no-caps":"",color:"yellow-2","text-color":"black"}}),a("q-btn",{staticClass:"btn",attrs:{dense:"",size:"small",to:"/docs/patterns",label:"Patterns","no-caps":"",color:"yellow-2","text-color":"black"}}),t.showDocs?a("q-btn",{staticClass:"btn",attrs:{dense:"",size:"small",to:"/docs",label:"Docs","no-caps":"",color:"yellow-2","text-color":"black"}}):t._e()],1):a("div",{staticClass:"absolute-right",staticStyle:{margin:"18px 35px 0 0"}},[a("q-btn-dropdown",{staticClass:"q-mr-lg",attrs:{dense:"",color:"yellow-2",label:t.current,"no-caps":"","text-color":"black"}},[a("q-list",{attrs:{color:"yellow-2"}},[t.showDocs?a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:"",to:"/docs"},on:{click:function(e){t.current="Docs"}}},[a("q-item-section",[a("q-item-label",[t._v("Docs")])],1)],1):t._e(),a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:"",to:"/docs/quickstart"}},[a("q-item-section",[a("q-item-label",[t._v("Quick Start")])],1)],1),a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:"",to:"/docs/patterns"}},[a("q-item-section",[a("q-item-label",[t._v("Patterns")])],1)],1),a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:"",to:"/docs/environment"}},[a("q-item-section",[a("q-item-label",[t._v("Environment")])],1)],1)],1)],1)],1)],1)],1),a("main",{staticClass:"flex flex-start justify-center"},[a("div",{staticClass:"q-pa-sm col-12-sm col-10-md col-8-lg",staticStyle:{"max-width":"1024px",width:"100%"}},[t._t("default")],2)])],1)},s=[],i={name:"Hero",data:function(){return{buttons:!0,current:"Menu",height:270,heightName:140,heightPic:250,heightClaim:100,rightDrawerOpen:this.$q.platform.is.desktop}},mounted:function(){},computed:{showDocs:function(){var t=this.$route.meta.showDocslink;return"undefined"===typeof t||t}},methods:{scrolled:function(t){var e=t/4;this.height=270-e,this.heightName=140-e,this.heightPic=250-e,this.heightClaim=220-e,e>=50&&!1!==this.buttons?(this.buttons=!1,document.getElementsByClassName("scroll-determined")[0].setAttribute("style","height: 70px"),document.getElementsByClassName("scroll-determined")[1].setAttribute("style","height: 55px;width: 55px;transform: rotate(".concat(t,"deg)")),document.getElementsByClassName("tauri-name")[0].setAttribute("style","\n      height: 35px;\n      "),document.getElementsByClassName("q-drawer__content")[0].setAttribute("style","background-color: #FDFADE;margin-top: 60px;padding-top:20px"),document.getElementById("scrollHolder").setAttribute("style","height: calc(100% - 132px)"),document.getElementById("padding").setAttribute("style","height: 40px")):!1===this.buttons?document.getElementsByClassName("scroll-determined")[1].setAttribute("style","height: 55px;width: 55px;transform: rotate(".concat(t,"deg)")):document.getElementsByClassName("scroll-determined")[1].setAttribute("style","transform: rotate(".concat(t,"deg)"))}}},o=i,r=(a("42ef"),a("2877")),l=Object(r["a"])(o,n,s,!1,null,null,null);e["a"]=l.exports},"42ef":function(t,e,a){"use strict";var n=a("efb7"),s=a.n(n);s.a},"5a74":function(t,e,a){"use strict";a.r(e),e["default"]='<template>\n  <div class="q-pa-md">\n    <p>You can put any regular Vue code (SFC) into one of these files.</p>\n    <p>It will be displayed as an example.</p>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      var1: 10,\n      var2: \'string\'\n    }\n  }\n}\n<\/script>\n\n<style lang="stylus">\n.my-class\n  background-color black\n</style>\n'},"5f08":function(t,e,a){"use strict";a.r(e),e["default"]='<template>\n  <div class="q-pa-md">\n    <p>You can put any regular Vue code (SFC) into one of these files.</p>\n    <p>It will be displayed as an example.</p>\n    <p>template, script, and css will be separated out into 3 parts and each will have a tab.</p>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      var1: 10,\n      var2: \'string\'\n    }\n  }\n}\n<\/script>\n\n<style lang="stylus">\n.my-class\n  background-color black\n</style>\n'},8669:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"b",(function(){return i}));a("a481");function n(t){var e=window.location.origin+window.location.pathname+"#"+t,a=document.createElement("textarea");a.className="fixed-top",a.value=e,document.body.appendChild(a),a.focus(),a.select(),document.execCommand("copy"),document.body.removeChild(a),this.$q.notify({message:"Anchor has been copied to clipboard.",color:"white",textColor:"primary",icon:"done",position:"top",timeout:2e3})}function s(t){return encodeURIComponent(String(t).trim().replace(/\s+/g,"-"))}function i(t){window.location=window.location.origin+window.location.pathname+"#"+t}},efb7:function(t,e,a){}}]);