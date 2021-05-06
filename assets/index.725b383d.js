import{a as e,o as a,c as t,r as s,d as n,p as o,b as r,w as i,e as l,f as c,t as d,F as u,g as v,h as p,i as m,j as h,k as g,l as f,m as C}from"./vendor.95cb1922.js";!function(e=".",a="__import__"){try{self[a]=new Function("u","return import(u)")}catch(t){const s=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[a]=e=>new Promise(((t,o)=>{const r=new URL(e,s);if(self[a].moduleMap[r])return t(self[a].moduleMap[r]);const i=new Blob([`import * as m from '${r}';`,`${a}.moduleMap['${r}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){o(new Error(`Failed to import: ${e}`)),n(l)},onload(){t(self[a].moduleMap[r]),n(l)}});document.head.appendChild(l)})),self[a].moduleMap={}}}("/assets/");let B;const M={},_={navigationType:"hash",useSampleData:!0,api:{useMocks:!0,url:"/api"}},y=e.create({baseURL:_.api.url}),b={getOne:e=>y.get(`/movies/${e}`).then((e=>e.data)),getList:e=>y.get("/movies",{params:e}).then((e=>e.data))};var P={instance:y,movies:b,init:async()=>{{const e=await function(e,a){if(!a)return e();if(void 0===B){const e=document.createElement("link").relList;B=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(a.map((e=>{if(e in M)return;M[e]=!0;const a=e.endsWith(".css"),t=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${t}`))return;const s=document.createElement("link");return s.rel=a?"stylesheet":B,a||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),a?new Promise(((e,a)=>{s.addEventListener("load",e),s.addEventListener("error",a)})):void 0}))).then((()=>e()))}((()=>__import__("./mocks.0b2e3b14.js")),["/assets/mocks.0b2e3b14.js","/assets/vendor.95cb1922.js"]),a=await caches.keys();await Promise.all(a.map((e=>caches.delete(e)))),await e.default.init()}}};const L={},I={class:"BaseCard"};L.render=function(e,n){return a(),t("div",I,[s(e.$slots,"default")])};const k={},w={class:"BaseCardHeader"};k.render=function(e,n){return a(),t("header",w,[s(e.$slots,"default")])};const S={},D={class:"BaseCardBody"};S.render=function(e,n){return a(),t("div",D,[s(e.$slots,"default")])};var $=n({components:{BaseCard:L,BaseCardHeader:k,BaseCardBody:S},props:{movie:{type:Object,required:!0}},setup:e=>({})});const H=i();o("data-v-e3e0f950");const U={class:"MovieDetails"},j={class:"MovieDetailSection"},E=l("label",{class:"MovieDetailLabel"}," Actors: ",-1),R={class:"MovieDetailContent"},T={class:"MovieDetailSection"},O=l("label",{class:"MovieDetailLabel"}," Genres: ",-1),q={class:"MovieDetailContent"};r();const x=H(((e,s,n,o,r,i)=>{const m=p("BaseCardHeader"),h=p("BaseCardBody"),g=p("BaseCard");return a(),t(g,{class:"BaseCardMovie"},{default:H((()=>[l(m,{class:"MovieHeader"},{default:H((()=>[c(d(e.movie.title),1)])),_:1}),l(h,{class:"MovieBody"},{default:H((()=>[l("div",{class:"MovieThumbnail",style:{backgroundImage:`url(${e.movie.img})`}},null,4),l("div",U,[l("div",j,[E,l("div",R,[(a(!0),t(u,null,v(e.movie.genres,(e=>(a(),t("div",{key:e,class:"MovieDetail"},d(e),1)))),128))])]),l("div",T,[O,l("div",q,[(a(!0),t(u,null,v(e.movie.actors,(e=>(a(),t("div",{key:e,class:"MovieDetail"},d(e),1)))),128))])])])])),_:1})])),_:1})}));$.render=x,$.__scopeId="data-v-e3e0f950";const A={},F=i();o("data-v-706ed41b");const N={class:"BaseContainer"};r();const G=F(((e,n)=>(a(),t("div",N,[s(e.$slots,"default",{},void 0,!0)]))));A.render=G,A.__scopeId="data-v-706ed41b";var V=n({props:{value:{type:Number,required:!0},total:{type:Number,required:!0},perPage:{type:Number,required:!0}},emits:{input:e=>!0},setup(e,{emit:a}){const{value:t,total:s,perPage:n}=m(e),o=h((()=>Math.ceil(s.value/n.value)));return{pages:h((()=>{const e=[],a=o.value+1;for(let s=1;s<=a;s++)(1===s||s===a||Math.abs(t.value-s)<5)&&e.push(s);return e})),numPages:o,handlePageClick:(e,t)=>{e.preventDefault(),a("input",t)}}}});const W=i();o("data-v-39a8a24d");const z={class:"BasePagination"};r();const J=W(((e,s,n,o,r,i)=>(a(),t("nav",z,[(a(!0),t(u,null,v(e.pages,(s=>(a(),t("a",{key:s,class:["PaginationItem",e.value===s&&"is-active"],href:"#",onClick:a=>e.handlePageClick(a,s)},d(s),11,["onClick"])))),128))]))));V.render=J,V.__scopeId="data-v-39a8a24d";const K={},Q=i();o("data-v-2a6dfede");const X={class:"BaseLogo"};r();const Y=Q(((e,s)=>(a(),t("div",X,"MoviesApp"))));K.render=Y,K.__scopeId="data-v-2a6dfede";const Z={},ee=i();o("data-v-f7a3c7ea");const ae={type:"text",class:"BaseInput"};r();const te=ee(((e,s)=>(a(),t("input",ae))));Z.render=te,Z.__scopeId="data-v-f7a3c7ea";var se=n({components:{BaseLogo:K,BaseContainer:A,BaseInput:Z},props:{},emits:["inputSearch"],setup(e,{emit:a}){let t;return{handleSearchUpdate:e=>{t&&clearTimeout(t),t=setTimeout((()=>{a("inputSearch",e.target.value)}),500)}}}});const ne=i();o("data-v-4805b28e");const oe={class:"TheHeader"};r();const re=ne(((e,s,n,o,r,i)=>{const c=p("BaseLogo"),d=p("BaseInput"),u=p("BaseContainer");return a(),t("div",oe,[l(u,{class:"HeaderContainer"},{default:ne((()=>[l(c,{class:"HeaderLogo"}),l(d,{class:"HeaderSearch",placeholder:"Search movies...",onInput:e.handleSearchUpdate},null,8,["onInput"])])),_:1})])}));se.render=re,se.__scopeId="data-v-4805b28e";var ie=n({components:{BaseCardMovie:$,BaseContainer:A,BasePagination:V,TheHeader:se},setup(){const e=g(1),a=g(""),t=g("everything"),s=g(),n=g(9),o=g(0),r=async()=>{const{movies:r,count:i}=await P.movies.getList({limit:n.value,offset:n.value*(e.value-1),search:a.value,searchBy:t.value});s.value=r,o.value=i};return f((()=>r())),{movies:s,requestMovies:r,itemsPerPage:n,itemsCount:o,page:e,handlePageChange:a=>{e.value=a},handleSearchChange:e=>{a.value=e}}}});const le=i();o("data-v-7272ccac");const ce={class:"MoviesPage"},de={class:"MoviesListContainer"},ue={class:"MoviesPaginationContainer"};r();const ve=le(((e,s,n,o,r,i)=>{const c=p("TheHeader"),d=p("BaseCardMovie"),m=p("BasePagination"),h=p("BaseContainer");return a(),t("div",ce,[l(c,{onInputSearch:e.handleSearchChange},null,8,["onInputSearch"]),l(h,null,{default:le((()=>[l("div",de,[(a(!0),t(u,null,v(e.movies,(e=>(a(),t(d,{key:e.id,movie:e},null,8,["movie"])))),128))]),l("div",ue,[l(m,{value:e.page,total:e.itemsCount,"per-page":e.itemsPerPage,onInput:e.handlePageChange},null,8,["value","total","per-page","onInput"])])])),_:1})])}));ie.render=ve,ie.__scopeId="data-v-7272ccac";const pe={class:"App"};var me=n({expose:[],setup:e=>(e,s)=>(a(),t("div",pe,[l(ie)]))});(async()=>{await P.init(),C(me).mount("#app")})();export{_ as c};
