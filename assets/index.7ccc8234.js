import{a as e,o as a,c as t,r as s,d as n,p as o,b as r,w as i,e as l,f as c,t as d,F as u,g as v,h as p,i as m,j as h,k as g,l as f,m as C,n as B}from"./vendor.0a2a6f80.js";!function(e=".",a="__import__"){try{self[a]=new Function("u","return import(u)")}catch(t){const s=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[a]=e=>new Promise(((t,o)=>{const r=new URL(e,s);if(self[a].moduleMap[r])return t(self[a].moduleMap[r]);const i=new Blob([`import * as m from '${r}';`,`${a}.moduleMap['${r}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){o(new Error(`Failed to import: ${e}`)),n(l)},onload(){t(self[a].moduleMap[r]),n(l)}});document.head.appendChild(l)})),self[a].moduleMap={}}}("/assets/");let y;const M={},_={navigationType:"hash",useSampleData:!0,api:{useMocks:!0,url:"/api"}},P=e.create({baseURL:_.api.url}),b={getOne:e=>P.get(`/movies/${e}`).then((e=>e.data)),getList:e=>P.get("/movies",{params:e}).then((e=>e.data))};var L={instance:P,movies:b,init:async()=>{{const e=await function(e,a){if(!a)return e();if(void 0===y){const e=document.createElement("link").relList;y=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(a.map((e=>{if(e in M)return;M[e]=!0;const a=e.endsWith(".css"),t=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${t}`))return;const s=document.createElement("link");return s.rel=a?"stylesheet":y,a||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),a?new Promise(((e,a)=>{s.addEventListener("load",e),s.addEventListener("error",a)})):void 0}))).then((()=>e()))}((()=>__import__("./mocks.78372bc7.js")),["/assets/mocks.78372bc7.js","/assets/vendor.0a2a6f80.js"]),a=await caches.keys();await Promise.all(a.map((e=>caches.delete(e)))),await e.default.init()}}};const I={},k={class:"BaseCard"};I.render=function(e,n){return a(),t("div",k,[s(e.$slots,"default")])};const w={},S={class:"BaseCardHeader"};w.render=function(e,n){return a(),t("header",S,[s(e.$slots,"default")])};const D={},$={class:"BaseCardBody"};D.render=function(e,n){return a(),t("div",$,[s(e.$slots,"default")])};var H=n({components:{BaseCard:I,BaseCardHeader:w,BaseCardBody:D},props:{movie:{type:Object,required:!0}},setup:e=>({})});const U=i();o("data-v-06c42f58");const j={class:"MovieDetails"},E={class:"MovieDetailSection"},R=l("label",{class:"MovieDetailLabel"}," Genres: ",-1),T={class:"MovieDetailContent"},O={class:"MovieDetailSection"},q=l("label",{class:"MovieDetailLabel"}," Actors: ",-1),x={class:"MovieDetailContent"};r();const A=U(((e,s,n,o,r,i)=>{const m=p("BaseCardHeader"),h=p("BaseCardBody"),g=p("BaseCard");return a(),t(g,{class:"BaseCardMovie"},{default:U((()=>[l(m,{class:"MovieHeader"},{default:U((()=>[c(d(e.movie.title),1)])),_:1}),l(h,{class:"MovieBody"},{default:U((()=>[l("div",{class:"MovieThumbnail",style:{backgroundImage:`url(${e.movie.img})`}},null,4),l("div",j,[l("div",E,[R,l("div",T,[(a(!0),t(u,null,v(e.movie.genres,(e=>(a(),t("div",{key:e,class:"MovieDetail"},d(e),1)))),128))])]),l("div",O,[q,l("div",x,[(a(!0),t(u,null,v(e.movie.actors,(e=>(a(),t("div",{key:e,class:"MovieDetail"},d(e),1)))),128))])])])])),_:1})])),_:1})}));H.render=A,H.__scopeId="data-v-06c42f58";const F={},N=i();o("data-v-706ed41b");const G={class:"BaseContainer"};r();const V=N(((e,n)=>(a(),t("div",G,[s(e.$slots,"default",{},void 0,!0)]))));F.render=V,F.__scopeId="data-v-706ed41b";var W=n({props:{value:{type:Number,required:!0},total:{type:Number,required:!0},perPage:{type:Number,required:!0}},emits:{input:e=>!0},setup(e,{emit:a}){const{value:t,total:s,perPage:n}=m(e),o=h((()=>Math.ceil(s.value/n.value)));return{pages:h((()=>{const e=[],a=o.value+1;for(let s=1;s<=a;s++)(1===s||s===a||Math.abs(t.value-s)<5)&&e.push(s);return e})),numPages:o,handlePageClick:(e,t)=>{e.preventDefault(),a("input",t)}}}});const z=i();o("data-v-39a8a24d");const J={class:"BasePagination"};r();const K=z(((e,s,n,o,r,i)=>(a(),t("nav",J,[(a(!0),t(u,null,v(e.pages,(s=>(a(),t("a",{key:s,class:["PaginationItem",e.value===s&&"is-active"],href:"#",onClick:a=>e.handlePageClick(a,s)},d(s),11,["onClick"])))),128))]))));W.render=K,W.__scopeId="data-v-39a8a24d";const Q={},X=i();o("data-v-2a6dfede");const Y={class:"BaseLogo"};r();const Z=X(((e,s)=>(a(),t("div",Y,"MoviesApp"))));Q.render=Z,Q.__scopeId="data-v-2a6dfede";const ee={},ae=i();o("data-v-f7a3c7ea");const te={type:"text",class:"BaseInput"};r();const se=ae(((e,s)=>(a(),t("input",te))));ee.render=se,ee.__scopeId="data-v-f7a3c7ea";var ne=n({components:{BaseLogo:Q,BaseContainer:F,BaseInput:ee},props:{},emits:["inputSearch"],setup(e,{emit:a}){let t;return{handleSearchUpdate:e=>{t&&clearTimeout(t),t=setTimeout((()=>{a("inputSearch",e.target.value)}),500)}}}});const oe=i();o("data-v-4805b28e");const re={class:"TheHeader"};r();const ie=oe(((e,s,n,o,r,i)=>{const c=p("BaseLogo"),d=p("BaseInput"),u=p("BaseContainer");return a(),t("div",re,[l(u,{class:"HeaderContainer"},{default:oe((()=>[l(c,{class:"HeaderLogo"}),l(d,{class:"HeaderSearch",placeholder:"Search movies...",onInput:e.handleSearchUpdate},null,8,["onInput"])])),_:1})])}));ne.render=ie,ne.__scopeId="data-v-4805b28e";var le=n({components:{BaseCardMovie:H,BaseContainer:F,BasePagination:W,TheHeader:ne},setup(){const e=g(1),a=g(""),t=g("everything"),s=g(),n=g(9),o=g(0),r=async()=>{const{movies:r,count:i}=await L.movies.getList({limit:n.value,offset:n.value*(e.value-1),search:a.value,searchBy:t.value});s.value=r,o.value=i};return f((()=>r())),{movies:s,requestMovies:r,itemsPerPage:n,itemsCount:o,page:e,handlePageChange:a=>{e.value=a},handleSearchChange:e=>{a.value=e}}}});const ce=i();o("data-v-72a6e472");const de={class:"MoviesPage"},ue={class:"MoviesListContainer"},ve={key:0,class:"MoviesPaginationContainer"};r();const pe=ce(((e,s,n,o,r,i)=>{const c=p("TheHeader"),d=p("BaseCardMovie"),m=p("BasePagination"),h=p("BaseContainer");return a(),t("div",de,[l(c,{onInputSearch:e.handleSearchChange},null,8,["onInputSearch"]),l(h,null,{default:ce((()=>[l("div",ue,[(a(!0),t(u,null,v(e.movies,(e=>(a(),t(d,{key:e.id,movie:e},null,8,["movie"])))),128))]),e.itemsCount>e.itemsPerPage?(a(),t("div",ve,[l(m,{value:e.page,total:e.itemsCount,"per-page":e.itemsPerPage,onInput:e.handlePageChange},null,8,["value","total","per-page","onInput"])])):C("",!0)])),_:1})])}));le.render=pe,le.__scopeId="data-v-72a6e472";const me={class:"App"};var he=n({expose:[],setup:e=>(e,s)=>(a(),t("div",me,[l(le)]))});(async()=>{await L.init(),B(he).mount("#app")})();export{_ as c};
