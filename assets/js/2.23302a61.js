(window.webpackJsonp=window.webpackJsonp||[]).push([[2],[,,,,,,,,,,,,function(t,e,i){"use strict";i.d(e,"d",(function(){return s})),i.d(e,"a",(function(){return n})),i.d(e,"i",(function(){return r})),i.d(e,"f",(function(){return c})),i.d(e,"g",(function(){return l})),i.d(e,"h",(function(){return u})),i.d(e,"b",(function(){return d})),i.d(e,"e",(function(){return p})),i.d(e,"k",(function(){return h})),i.d(e,"l",(function(){return v})),i.d(e,"c",(function(){return f})),i.d(e,"j",(function(){return m}));i(112),i(113),i(114),i(32),i(152),i(52),i(153),i(58),i(59);var s=/#.*$/,a=/\.(md|html)$/,n=/\/$/,r=/^[a-z]+:/i;function o(t){return decodeURI(t).replace(s,"").replace(a,"")}function c(t){return r.test(t)}function l(t){return/^mailto:/.test(t)}function u(t){return/^tel:/.test(t)}function d(t){if(c(t))return t;var e=t.match(s),i=e?e[0]:"",a=o(t);return n.test(a)?t:a+".html"+i}function p(t,e){var i=t.hash,a=function(t){var e=t.match(s);if(e)return e[0]}(e);return(!a||i===a)&&o(t.path)===o(e)}function h(t,e,i){if(c(e))return{type:"external",path:e};i&&(e=function(t,e,i){var s=t.charAt(0);if("/"===s)return t;if("?"===s||"#"===s)return e+t;var a=e.split("/");i&&a[a.length-1]||a.pop();for(var n=t.replace(/^\//,"").split("/"),r=0;r<n.length;r++){var o=n[r];".."===o?a.pop():"."!==o&&a.push(o)}""!==a[0]&&a.unshift("");return a.join("/")}(e,i));for(var s=o(e),a=0;a<t.length;a++)if(o(t[a].regularPath)===s)return Object.assign({},t[a],{type:"page",path:d(t[a].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function v(t,e,i,s){var a=i.pages,n=i.themeConfig,r=s&&n.locales&&n.locales[s]||n;if("auto"===(t.frontmatter.sidebar||r.sidebar||n.sidebar))return function(t){var e=f(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}(t);var o=r.sidebar||n.sidebar;if(o){var c=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var i in e)if(0===(s=t,/(\.html|\/)$/.test(s)?s:s+"/").indexOf(encodeURI(i)))return{base:i,config:e[i]};var s;return{}}(e,o),l=c.base,u=c.config;return u?u.map((function(t){return function t(e,i,s){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof e)return h(i,e,s);if(Array.isArray(e))return Object.assign(h(i,e[0],s),{title:e[1]});a>3&&console.error("[vuepress] detected a too deep nested sidebar group.");var n=e.children||[];return 0===n.length&&e.path?Object.assign(h(i,e.path,s),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:n.map((function(e){return t(e,i,s,a+1)})),collapsable:!1!==e.collapsable}}(t,a,l)})):[]}return[]}function f(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function m(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},,,,,,,,,,function(t,e,i){},,function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},,,,function(t,e,i){"use strict";i(59);var s=i(133),a=i.n(s),n=i(12),r={name:"PageEdit",computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink:function(){var t=a()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,e=this.$site.themeConfig,i=e.repo,s=e.docsDir,n=void 0===s?"":s,r=e.docsBranch,o=void 0===r?"master":r,c=e.docsRepo,l=void 0===c?i:c;return t&&l&&this.$page.relativePath?this.createEditLink(i,l,n,o,this.$page.relativePath):null},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,i,s,a){return/bitbucket.org/.test(t)?(n.i.test(e)?e:t).replace(n.a,"")+"/src"+"/".concat(s,"/")+(i?i.replace(n.a,"")+"/":"")+a+"?mode=edit&spa=0&at=".concat(s,"&fileviewer=file-view-default"):(n.i.test(e)?e:"https://github.com/".concat(e)).replace(n.a,"")+"/edit"+"/".concat(s,"/")+(i?i.replace(n.a,"")+"/":"")+a}}},o=(i(220),i(0)),c=Object(o.a)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",{staticClass:"page-edit"},[t.editLink?i("div",{staticClass:"edit-link"},[i("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),i("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?i("div",{staticClass:"last-updated"},[i("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),i("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null).exports,l=i(221),u=i.n(l),d={name:"PageNav",props:["sidebarItems"],computed:{prev:function(){return h(p.PREV,this)},next:function(){return h(p.NEXT,this)}}};var p={NEXT:{resolveLink:function(t,e){return v(t,e,1)},getThemeLinkConfig:function(t){return t.nextLinks},getPageLinkConfig:function(t){return t.frontmatter.next}},PREV:{resolveLink:function(t,e){return v(t,e,-1)},getThemeLinkConfig:function(t){return t.prevLinks},getPageLinkConfig:function(t){return t.frontmatter.prev}}};function h(t,e){var i=e.$themeConfig,s=e.$page,r=e.$route,o=e.$site,c=e.sidebarItems,l=t.resolveLink,d=t.getThemeLinkConfig,p=t.getPageLinkConfig,h=d(i),v=p(s),f=a()(v)?h:v;return!1===f?void 0:u()(f)?Object(n.k)(o.pages,f,r.path):l(s,c)}function v(t,e,i){var s=[];!function t(e,i){for(var s=0,a=e.length;s<a;s++)"group"===e[s].type?t(e[s].children||[],i):i.push(e[s])}(e,s);for(var a=0;a<s.length;a++){var n=s[a];if("page"===n.type&&n.path===decodeURIComponent(t.path))return s[a+i]}}var f=d,m=(i(229),Object(o.a)(f,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.prev||t.next?i("div",{staticClass:"page-nav"},[i("p",{staticClass:"inner"},[t.prev?i("span",{staticClass:"prev"},[t._v("\n      ←\n      "),t.prev?i("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v(t._s(t.prev.title||t.prev.path))]):t._e()],1):t._e(),t._v(" "),t.next?i("span",{staticClass:"next"},[t.next?i("router-link",{attrs:{to:t.next.path}},[t._v(t._s(t.next.title||t.next.path))]):t._e(),t._v("\n      →\n    ")],1):t._e()])]):t._e()}),[],!1,null,null,null).exports),g=i(98),_={},b=(i(230),Object(o.a)(_,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"sidebar"},[i("h4",[t._v("More Information")]),t._v(" "),i("p",[i("router-link",{attrs:{to:"/videos"}},[t._v("Videos")])],1),t._v(" "),i("p",[i("router-link",{attrs:{to:"/books"}},[t._v("Books & Posts")])],1),t._v(" "),i("p",[i("router-link",{attrs:{to:"/examples"}},[t._v("Examples")])],1),t._v(" "),t._m(0),t._v(" "),i("hr"),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{href:"https://codecept.discourse.group/c/cookbook"}},[this._v("Cookbook →")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"border"},[e("a",{staticClass:"dashed",attrs:{href:"http://sdclabs.com/codeceptjs?utm_source=codecept.io&utm_medium=right&utm_term=link&utm_campaign=reference"}},[this._v("\n      Commercial Services →\n    ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"border"},[e("a",{staticClass:"dashed",attrs:{href:"http://sdclabs.com/trainings/web-automation-codeceptjs?utm_source=codecept.io&utm_medium=rigth&utm_term=link&utm_campaign=reference"}},[this._v("\n      Trainings →\n    ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"border"},[e("a",{staticClass:"dashed",attrs:{href:"https://testomat.io"}},[this._v("\n      Testomat.io →\n    ")]),e("br"),this._v(" "),e("small",[e("b",[this._v("Plan your end 2 end tests")]),this._v(", collaborate, synchronize with code & get reports!"),e("br"),this._v("\n    Join Testomat.io while it is in beta and get a huge discount!")])])}],!1,null,"5560262c",null).exports),C={components:{PageEdit:c,PageNav:m,Footer:g.a,RightSidebar:b},props:["sidebarItems"],computed:{title:function(){return this.$page.title}}},k=(i(231),Object(o.a)(C,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("main",{staticClass:"page"},[i("div",{staticClass:"article-title"},[t._v(t._s(t.title))]),t._v(" "),i("RightSidebar"),t._v(" "),t._t("top"),t._v(" "),i("div",{staticClass:"post"},[i("article",[i("Content",{staticClass:"theme-default-content"})],1)]),t._v(" "),i("PageEdit"),t._v(" "),i("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),t._t("bottom"),t._v(" "),i("Footer")],2)}),[],!1,null,null,null));e.a=k.exports},function(t,e,i){"use strict";var s=i(242),a=(i(32),i(189),{props:["options"],data:function(){return{placeholder:void 0}},mounted:function(){this.initialize(this.options,this.$lang),this.placeholder=this.$site.themeConfig.searchPlaceholder||""},methods:{initialize:function(t,e){var a=this;Promise.all([Promise.all([i.e(0),i.e(4)]).then(i.t.bind(null,245,7)),Promise.all([i.e(0),i.e(4)]).then(i.t.bind(null,246,7))]).then((function(i){var n=Object(s.a)(i,1)[0];n=n.default;var r=t.algoliaOptions,o=void 0===r?{}:r;n(Object.assign({},t,{inputSelector:"#algolia-search-input",algoliaOptions:Object.assign({facetFilters:["lang:".concat(e)].concat(o.facetFilters||[])},o),handleSelected:function(t,e,i){var s=new URL(i.url),n=s.pathname,r=s.hash;a.$router.push("".concat(n).concat(r))}}))}))},update:function(t,e){this.$el.innerHTML='<input id="algolia-search-input" class="search-query">',this.initialize(t,e)}},watch:{$lang:function(t){this.update(this.options,t)},options:function(t){this.update(t,this.$lang)}}}),n=(i(190),i(0)),r=Object(n.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("form",{staticClass:"algolia-search-wrapper search-box",attrs:{id:"search-form",role:"search"}},[e("input",{staticClass:"search-query",attrs:{id:"algolia-search-input",placeholder:this.placeholder}})])}),[],!1,null,null,null).exports,o=i(241);i(199);function c(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var l={components:{SidebarButton:Object(n.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[i("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[i("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null).exports,NavLinks:i(136).a,SearchBox:o.a,AlgoliaSearchBox:r},data:function(){return{linksWrapMaxWidth:null}},mounted:function(){var t=this,e=parseInt(c(this.$el,"paddingLeft"))+parseInt(c(this.$el,"paddingRight"));document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},u=(i(218),i(219),Object(n.a)(l,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"navbar"},[i("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),i("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?i("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?i("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),i("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?i("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?i("SearchBox"):t._e(),t._v(" "),i("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null));e.a=u.exports},function(t,e,i){"use strict";var s=i(100),a={data:function(){return{slideComp:null,carouselComp:null}},mounted:function(){var t=this;i.e(74).then(i.t.bind(null,244,7)).then((function(e){t.slideComp=e.Slide,t.carouselComp=e.Carousel}))}},n=(i(158),i(0)),r=Object(n.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"slider"},[t.carouselComp?i(t.carouselComp,{tag:"carousel",attrs:{navigationEnabled:!0,autoplayTimeout:1e4,autoplay:!0,"per-page":1,"center-mode":!0}},[i(t.slideComp,{tag:"slide"},[i("div",{staticClass:"slide"},[i("img",{attrs:{src:"/img/pause.gif",alt:""}}),t._v(" "),i("div",[i("Content",{attrs:{"slot-key":"pause"}})],1)])]),t._v(" "),i(t.slideComp,{tag:"slide"},[i("div",{staticClass:"slide"},[i("img",{attrs:{src:"/img/test.gif",alt:""}}),t._v(" "),i("div",[i("Content",{attrs:{"slot-key":"run"}})],1)])]),t._v(" "),i(t.slideComp,{tag:"slide"},[i("div",{staticClass:"slide"},[i("img",{attrs:{src:"/img/edit.gif",alt:""}}),t._v(" "),i("div",[i("Content",{attrs:{"slot-key":"autocomplete"}})],1)])]),t._v(" "),i(t.slideComp,{tag:"slide"},[i("div",{staticClass:"slide"},[i("img",{attrs:{src:"/img/codeceptui.gif",alt:""}}),t._v(" "),i("div",[i("Content",{attrs:{"slot-key":"ui"}}),t._v(" "),i("router-link",{staticClass:"button green",attrs:{to:"ui"}},[t._v("Try CodeceptUI →")])],1)])]),t._v(" "),i(t.slideComp,{tag:"slide"},[i("div",{staticClass:"slide"},[i("img",{attrs:{src:"/img/new-test.gif",alt:""}}),t._v(" "),i("div",[i("Content",{attrs:{"slot-key":"write"}}),t._v(" "),i("router-link",{staticClass:"button green",attrs:{to:"ui"}},[t._v("Try CodeceptUI →")])],1)])])],1):t._e()],1)}),[],!1,null,null,null).exports,o=i(98),c={components:{NavLink:s.a,Footer:o.a,Slides:r},data:function(){return{showVideo:!1}},methods:{toggleVideo:function(){var t=this;this.showVideo=!this.showVideo;var e=function e(){t.showVideo=!1,document.body.removeEventListener("click",e)};return setTimeout((function(){return document.body.addEventListener("click",e)}),0),!1},hideVideo:function(){this.showVideo=!1}},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},l=(i(160),i(161),i(162),Object(n.a)(c,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[i("header",{staticClass:"hero"},[i("div",{staticClass:"mountains"},[t.data.heroImage?i("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),t._m(0),t._v(" "),i("img",{attrs:{src:"/img/code.png",alt:""}}),t._v(" "),i("div",{staticClass:"video"},[i("a",{attrs:{href:"#"},on:{click:t.toggleVideo}},[t._v("📺 Watch a video ▶")]),t._v(" "),t.showVideo?i("div",{staticClass:"videoModal"},[i("video",{staticStyle:{width:"100%",padding:"20px"},attrs:{controls:"",src:"/img/codeceptjs_demo.mp4"}})]):t._e()]),t._v(" "),t.data.actionText&&t.data.actionLink?i("p",{staticClass:"action"},[i("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()])]),t._v(" "),i("div",{staticClass:"frameworks"},[i("div",{staticClass:"content"},[i("h4",[t._v("\n        Plays nicely with your favorite frameworks →\n          "),i("router-link",{attrs:{to:"/react"}},[i("img",{attrs:{src:"/img/react.svg",alt:"React"}})]),t._v(" "),i("router-link",{attrs:{to:"/vue"}},[i("img",{attrs:{src:"/img/vue.svg",alt:"Vue"}})]),t._v(" "),i("router-link",{attrs:{to:"/angular"}},[i("img",{attrs:{src:"/img/AngularLogo.png",alt:"Angular"}})])],1)])]),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"flex features"},[t._m(1),t._v(" "),i("div",{staticClass:"feature"},[i("img",{attrs:{src:"/img/Mind-Map-Paper.svg",alt:""}}),t._v(" "),i("div",{staticClass:"inner"},[i("h5",[t._v("Driver Agnostic")]),t._v("\n        Run your tests via "),i("b",[t._v("WebDriver, Puppeteer, TestCafe, Protractor, Appium")]),t._v(". The code is the same.\n        "),i("router-link",{attrs:{to:"/basics#architecture"}},[t._v("Learn More")])],1)]),t._v(" "),i("div",{staticClass:"feature"},[i("img",{attrs:{src:"/img/Coding-Html.svg",alt:""}}),t._v(" "),i("div",{staticClass:"inner"},[i("h5",[t._v("Interactive Debug")]),t._v("\n        Control tests as they run. Pause tests at any point and execute commands to try locators.\n        "),i("router-link",{attrs:{to:"/basics#debug"}},[t._v("Learn More")])],1)])]),t._v(" "),i("div",{staticClass:"features"},[i("div",{staticClass:"feature"},[i("img",{attrs:{src:"/img/Prism-3.svg",alt:""}}),t._v(" "),i("div",{staticClass:"inner"},[i("h5",[t._v("Rich Locators")]),t._v("\n      Use semantic locators, CSS, XPath to find elements on page\n      "),i("router-link",{attrs:{to:"/locators"}},[t._v("Learn More")])],1)]),t._v(" "),i("div",{staticClass:"feature"},[i("img",{staticStyle:{filter:"hue-rotate(45deg)",transform:"rotate(225deg)"},attrs:{src:"/img/Prism-3.svg",alt:""}}),t._v(" "),i("div",{staticClass:"inner"},[i("h5",[t._v("PageObjects")]),t._v("\n      PageObjects are essential to write stable and reusable code!\n      "),i("router-link",{attrs:{to:"/pageobjects"}},[t._v("Learn More")])],1)]),t._v(" "),i("div",{staticClass:"feature"},[i("img",{staticStyle:{filter:"hue-rotate(90deg)",transform:"rotate(180deg)"},attrs:{src:"/img/Prism-3.svg",alt:""}}),t._v(" "),i("div",{staticClass:"inner"},[i("h5",[t._v("Web & Mobile Testing")]),t._v("\n      Test native mobile apps using "),i("b",[t._v("Appium")]),t._v(" or "),i("b",[t._v("Detox")]),t._v(".\n      "),i("router-link",{attrs:{to:"/mobile"}},[t._v("Learn More")])],1)])]),t._v(" "),i("div",{staticClass:"features"},[i("div",{staticClass:"feature"},[i("img",{staticStyle:{filter:"hue-rotate(135deg)",transform:"rotate(45deg)"},attrs:{src:"/img/Prism-3.svg",alt:""}}),t._v(" "),i("div",{staticClass:"inner"},[i("h5",[t._v("Cucumber-like BDD")]),t._v("\n      Automate business scenarios as you do in CucumberJS\n      "),i("router-link",{attrs:{to:"/bdd"}},[t._v("Learn More")])],1)]),t._v(" "),i("div",{staticClass:"feature"},[i("img",{staticStyle:{filter:"hue-rotate(180deg)",transform:"rotate(90deg)"},attrs:{src:"/img/Prism-3.svg",alt:""}}),t._v(" "),i("div",{staticClass:"inner"},[i("h5",[t._v("Beautiful Reports")]),t._v("\n      Integrated with Allure reporter\n      "),i("router-link",{attrs:{to:"/plugins#allure"}},[t._v("Learn More ")])],1)]),t._v(" "),i("div",{staticClass:"feature"},[i("img",{staticStyle:{filter:"hue-rotate(225deg)",transform:"rotate(135deg)"},attrs:{src:"/img/Prism-3.svg",alt:""}}),t._v(" "),i("div",{staticClass:"inner"},[i("h5",[t._v("Data Management")]),t._v("\n      Create fake data and clean it up via REST API\n      "),i("router-link",{attrs:{to:"/data"}},[t._v("Learn More ")])],1)])]),t._v(" "),i("div",{staticClass:"features"},[i("div",{staticClass:"feature"},[i("img",{staticStyle:{transform:"rotate(90deg)",filter:"hue-rotate(60deg) saturate(20%)"},attrs:{src:"/img/Prism-3.svg",alt:""}}),t._v(" "),i("div",{staticClass:"inner"},[i("h5",[t._v("Parallel Testing")]),t._v("\n      Tests are split into chunks and executed in multiple processes.\n      "),i("router-link",{attrs:{to:"/advanced#parallel-execution"}},[t._v("Learn More ")])],1)]),t._v(" "),i("div",{staticClass:"feature"},[i("img",{staticStyle:{filter:"hue-rotate(105deg) saturate(20%)",transform:"'rotate(45deg)"},attrs:{src:"/img/Prism-3.svg",alt:""}}),t._v(" "),i("div",{staticClass:"inner"},[i("h5",[t._v("Reduced Flackiness")]),t._v("\n      Automatically retry failed steps\n      "),i("router-link",{attrs:{to:"/basics#retries"}},[t._v("Learn More ")])],1)]),t._v(" "),t._m(2)])]),t._v(" "),i("div",{staticClass:"demos"},[i("ClientOnly",[i("Slides")],1)],1),t._v(" "),i("div",{staticClass:"content"},[i("Content",{attrs:{"slot-key":"code"}})],1),t._v(" "),t._m(3),t._v(" "),i("Footer")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",[this._v("\n        Supercharged"),e("br"),e("span",{staticClass:"name"},[this._v("End 2 End")]),this._v(" Testing\n      ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"feature"},[e("img",{attrs:{src:"/img/Checklist.svg",alt:""}}),this._v(" "),e("div",{staticClass:"inner"},[e("h5",[this._v("Scenario Driven")]),this._v("\n        Write acceptance tests from user's perspective.\n        Make tests readable and easy to follow.\n      ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"feature"},[e("img",{staticStyle:{filter:"hue-rotate(135deg) saturate(20%)",transform:"'rotate(0deg)"},attrs:{src:"/img/Prism-3.svg",alt:""}}),this._v(" "),e("div",{staticClass:"inner"},[e("h5",[this._v("Multi-Session Testing")]),this._v("\n      Run a test using several browser windows\n\n      ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"testimonials"},[i("div",{staticClass:"inner"},[i("h2",{staticClass:"text-center"},[t._v("Trusted By Enterprises")]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"quote"},[i("p",[t._v("\n        We have been using CodeceptJS as our UI testing framework, and it has made writing tests so simp  le for us, the amount of options and features available in CodeceptJS just out of the box are perfect for us to "),i("b",[t._v("test an application like Percona Monitoring and Management")]),t._v(" (PMM), with so many dashboards & Metric plots.\n        We would recommend CodeceptJS to anyone who is looking for a Javascript based testing framework.\n      ")]),t._v(" "),i("div",{staticClass:"signature"},[i("img",{attrs:{src:"/img/kala.jpg"}}),t._v(" "),i("div",{staticClass:"position"},[i("b",[t._v("Puneet Kala")]),i("br"),t._v(" Frontend QA Automation Engineer at "),i("b",[t._v("Percona")])])])]),t._v(" "),i("div",{staticClass:"quote"},[i("p",[t._v("\n      We were searching for a solution to write tests which are good to read and easy to write. It must be able to run on several browsers and understandable across different teams with different knowledge and different frameworks in usage. "),i("b",[t._v("CodeceptJS helps us with all this and much more at Porsche")]),t._v(" and we are happy that we made that decision.\n      ")]),t._v(" "),i("div",{staticClass:"signature"},[i("img",{attrs:{src:"/img/mitko.jpg"}}),t._v(" "),i("div",{staticClass:"position"},[i("b",[t._v("Mitko Tschimev")]),i("br"),t._v(" Frontend Tech Lead at "),i("b",[t._v("My Porsche Core")])])])])]),t._v(" "),i("div",{staticClass:"commercial"},[t._v("\n    CodeceptJS offers enterprise support!"),i("br"),t._v(" "),i("a",{attrs:{href:"http://sdclabs.com/codeceptjs?utm_source=codecept.io&utm_medium=front&utm_term=link&utm_campaign=reference"}},[t._v("Contact SDCLabs for")]),t._v(" "),i("a",{attrs:{href:"http://sdclabs.com/codeceptjs?utm_source=codecept.io&utm_medium=front&utm_term=link&utm_campaign=reference"}},[i("b",[t._v("consulting")])]),t._v(",\n     "),i("a",{attrs:{href:"http://sdclabs.com/trainings/web-automation-codeceptjs?utm_source=codecept.io&utm_medium=front&utm_term=link&utm_campaign=reference"}},[i("b",[t._v("trainings")])]),t._v(",\n     or hire engineers to write tests for you.\n  ")])])])}],!1,null,"468cfbde",null));e.a=l.exports},function(t,e,i){"use strict";var s={data:function(){return{year:(new Date).getFullYear()}}},a=(i(159),i(0)),n=Object(a.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",[i("section",[i("div",{staticClass:"col"},[i("h4",[t._v("Docs")]),t._v(" "),i("ul",[i("li",[i("router-link",{attrs:{to:"/quickstart"}},[t._v("Quickstart")])],1),t._v(" "),i("li",[i("router-link",{attrs:{to:"/basics"}},[t._v("Getting Started")])],1),t._v(" "),i("li",[i("router-link",{attrs:{to:"/puppeteer"}},[t._v("CodeceptJS & Puppeteer")])],1),t._v(" "),i("li",[i("router-link",{attrs:{to:"/puppeteer"}},[t._v("CodeceptJS & WebDriver")])],1)])]),t._v(" "),t._m(0),t._v(" "),t._m(1)]),t._v(" "),i("div",{staticClass:"copyright"},[i("h5",[t._v("CodeceptJS - supercharged end 2 end testing framework for NodeJS")]),t._v("\n    © "+t._s(t.year)+"\n  ")])])}),[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col"},[i("h4",[t._v("Community")]),t._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://github.com/Codeception/CodeceptJS"}},[t._v("GitHub")])]),t._v(" "),i("li",[i("a",{attrs:{href:"http://bit.ly/chat-codeceptjs"}},[t._v("Slack Chat")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://codecept.discourse.group/"}},[t._v("Forum")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://twitter.com/codeceptjs"}},[t._v("Twitter")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col"},[e("h4",{staticClass:"important"},[this._v("Commercial Support")]),this._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://sdclabs.com/codeceptjs?utm_source=codecept.io&utm_medium=footer&utm_term=link&utm_campaign=reference"}},[this._v("Consulting")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://sdclabs.com/trainings/web-automation-codeceptjs?utm_source=codecept.io&utm_medium=top_menu&utm_term=link&utm_campaign=reference"}},[this._v("Trainings")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://sdclabs.com/#services"}},[this._v("Hire Engineers")])])])])}],!1,null,"10fb6068",null);e.a=n.exports},function(t,e,i){"use strict";var s=i(135),a=i(136),n={name:"Sidebar",components:{SidebarLinks:s.default,NavLinks:a.a},props:["items"]},r=(i(236),i(237),i(0)),o=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null);e.a=o.exports},function(t,e,i){"use strict";i(32),i(110),i(38),i(150);var s=i(12),a={props:{item:{required:!0}},computed:{link:function(){return Object(s.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link}},methods:{isExternal:s.f,isMailto:s.g,isTel:s.h,focusoutAction:function(){this.$emit("focusout")}}},n=(i(157),i(0)),r=Object(n.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.isExternal(t.link)?i("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),i("OutboundLink")],1):i("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction(e)}}},[t._v(t._s(t.item.text))])}),[],!1,null,"34dbfd23",null);e.a=r.exports},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,i){"use strict";i.r(e);i(38);var s=i(12),a={name:"SidebarGroup",props:["item","open","collapsable","depth"],components:{DropdownTransition:i(137).a},beforeCreate:function(){this.$options.components.SidebarLinks=i(135).default},methods:{isActive:s.e}},n=(i(232),i(0)),r=Object(n.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?i("router-link",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[i("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?i("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):i("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[i("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?i("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),i("DropdownTransition",[t.open||!t.collapsable?i("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,sidebarDepth:t.item.sidebarDepth,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null).exports;i(52),i(233);function o(t,e,i,s){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:s,"sidebar-link":!0}},i)}function c(t,e,i,a,n){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||r>n?null:t("ul",{class:"sidebar-sub-headers"},e.map((function(e){var l=Object(s.e)(a,i+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[o(t,i+"#"+e.slug,e.title,l),c(t,e.children,i,a,n,r+1)])})))}var l={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var i=e.parent,a=i.$page,n=(i.$site,i.$route),r=i.$themeConfig,l=i.$themeLocaleConfig,u=e.props,d=u.item,p=u.sidebarDepth,h=d.path&&Object(s.e)(n,d.path),v="auto"===d.type?h||d.children.some((function(t){return Object(s.e)(n,d.basePath+"#"+t.slug)})):h,f="external"===d.type?function(t,e,i){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[i,t("OutboundLink")])}(t,d.path,d.title||d.path):o(t,d.path,d.title||d.path,v),m=[a.frontmatter.sidebarDepth,p,l.sidebarDepth,r.sidebarDepth,1].find((function(t){return void 0!==t})),g=l.displayAllHeaders||r.displayAllHeaders;return"auto"===d.type?[f,c(t,d.children,d.basePath,n,m)]:(v||g)&&d.headers&&!s.d.test(d.path)?[f,c(t,Object(s.c)(d.headers),d.path,n,m)]:f}};i(234),i(235);function u(t,e){return"group"===e.type&&e.children.some((function(e){return"group"===e.type?u(t,e):"page"===e.type&&Object(s.e)(t,e.path)}))}var d={name:"SidebarLinks",components:{SidebarGroup:r,SidebarLink:Object(n.a)(l,void 0,void 0,!1,null,"36d82f9f",null).exports},props:["items","depth","sidebarDepth"],data:function(){return{openGroupIndex:0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{refreshIndex:function(){var t=function(t,e){for(var i=0;i<e.length;i++){var s=e[i];if(u(t,s))return i}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(s.e)(this.$route,t.regularPath)}}},p=Object(n.a)(d,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.items.length?i("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,s){return i("li",{key:s},["group"===e.type?i("SidebarGroup",{attrs:{item:e,open:s===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(s)}}}):i("SidebarLink",{attrs:{sidebarDepth:t.sidebarDepth,item:e}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=p.exports},function(t,e,i){"use strict";i(200),i(58);var s=i(243),a=(i(38),i(59),i(52),i(32),i(110),i(100)),n=i(137),r=i(215),o=i.n(r),c={components:{NavLink:a.a,DropdownTransition:n.a},data:function(){return{open:!1}},props:{item:{required:!0}},computed:{dropdownAriaLabel:function(){return this.item.ariaLabel||this.item.text}},methods:{toggle:function(){this.open=!this.open},isLastItemOfArray:function(t,e){return o()(e)===t}},watch:{$route:function(){this.open=!1}}},l=(i(216),i(0)),u=Object(l.a)(c,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[i("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:t.toggle}},[i("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),i("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),i("DropdownTransition",[i("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,s){return i("li",{key:e.link||s,staticClass:"dropdown-item"},["links"===e.type?i("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?i("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(s){return i("li",{key:s.link,staticClass:"dropdown-subitem"},[i("NavLink",{attrs:{item:s},on:{focusout:function(i){t.isLastItemOfArray(s,e.items)&&t.isLastItemOfArray(e,t.item.items)&&t.toggle()}}})],1)})),0):i("NavLink",{attrs:{item:e},on:{focusout:function(i){t.isLastItemOfArray(e,t.item.items)&&t.toggle()}}})],1)})),0)])],1)}),[],!1,null,null,null).exports,d=i(12),p={components:{NavLink:a.a,DropdownLink:u},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var i=this.$page.path,a=this.$router.options.routes,n=this.$site.themeConfig.locales||{},r={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(e).map((function(s){var r,o=e[s],c=n[s]&&n[s].label||o.lang;return o.lang===t.$lang?r=i:(r=i.replace(t.$localeConfig.path,s),a.some((function(t){return t.path===r}))||(r=s)),{text:c,link:r}}))};return[].concat(Object(s.a)(this.userNav),[r])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(Object(d.j)(t),{items:(t.items||[]).map(d.j)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;return t?/^https?:/.test(t)?t:"https://github.com/".concat(t):null},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],i=0;i<e.length;i++){var s=e[i];if(new RegExp(s,"i").test(t))return s}return"Source"}}}},h=(i(217),Object(l.a)(p,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.userLinks.length||t.repoLink?i("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return i("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?i("DropdownLink",{attrs:{item:t}}):i("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?i("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),i("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null));e.a=h.exports},function(t,e,i){"use strict";var s={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},a=(i(214),i(0)),n=Object(a.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=n.exports},,,,,,,,,,,,,,,,,,,,function(t,e,i){"use strict";var s=i(60);i.n(s).a},function(t,e,i){"use strict";var s=i(61);i.n(s).a},function(t,e,i){"use strict";var s=i(62);i.n(s).a},function(t,e,i){"use strict";var s=i(63);i.n(s).a},function(t,e,i){"use strict";var s=i(64);i.n(s).a},function(t,e,i){"use strict";var s=i(65);i.n(s).a},,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,i){"use strict";var s=i(75);i.n(s).a},,,,,,,,,function(t,e,i){"use strict";var s=i(77);i.n(s).a},,,,,,,,,,,,,,,function(t,e,i){"use strict";var s=i(78);i.n(s).a},,function(t,e,i){"use strict";var s=i(79);i.n(s).a},function(t,e,i){"use strict";var s=i(80);i.n(s).a},function(t,e,i){"use strict";var s=i(81);i.n(s).a},function(t,e,i){"use strict";var s=i(82);i.n(s).a},function(t,e,i){"use strict";var s=i(83);i.n(s).a},,,,,,,,,function(t,e,i){"use strict";var s=i(84);i.n(s).a},function(t,e,i){"use strict";var s=i(85);i.n(s).a},function(t,e,i){"use strict";var s=i(86);i.n(s).a},function(t,e,i){"use strict";var s=i(87);i.n(s).a},,function(t,e,i){"use strict";var s=i(88);i.n(s).a},function(t,e,i){"use strict";var s=i(89);i.n(s).a},function(t,e,i){"use strict";var s=i(90);i.n(s).a},function(t,e,i){"use strict";var s=i(91);i.n(s).a}]]);