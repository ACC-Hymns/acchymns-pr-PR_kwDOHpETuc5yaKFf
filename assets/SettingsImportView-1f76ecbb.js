import{d as B,b as H,G as V,a2 as E,r as R,N as F,h as c,i as t,I as U,U as L,m as h,F as w,p as k,j as r,q as v,w as d,a3 as b,s as i,k as x,a4 as I,R as f,y as N,z as A,B as D,C as j,a5 as q,E as O}from"./index-4d0be3dc.js";import{_ as P}from"./chevron-back-outline-221160d9.js";import{_ as K}from"./enter-outline-31070eaa.js";import{_ as z}from"./home-outline-386c54c3.js";import{_ as G}from"./settings-15d7e416.js";import{T as _}from"./index-ec31f543.js";import{u as M}from"./navigator-6f97088c.js";import{u as J}from"./preferences-223d7d1b.js";const C="/acchymns-pr-PR_kwDOHpETuc5yaKFf/assets/alert-circle-outline.svg",Q="/acchymns-pr-PR_kwDOHpETuc5yaKFf/assets/close.svg",s=u=>(N("data-v-2ebe20d3"),u=u(),A(),u),W={class:"menu"},X={class:"title"},Y=s(()=>t("h1",{class:"title--center"},"Import Hymnals",-1)),Z={class:"main-content"},tt={class:"input-option reference-option"},et=["disabled"],st=s(()=>t("img",{class:"ionicon enter-button-icon",src:K},null,-1)),ot=[st],nt={key:0},at={key:1,class:"warning-label-container"},it=s(()=>t("img",{class:"ionicon warning-icon",src:C},null,-1)),lt=s(()=>t("h5",{class:"warning-label"},"The hymnals below require an internet connection",-1)),ct=[it,lt],rt=["onClick"],_t=s(()=>t("img",{class:"ionicon ionicon-custom booktext--right add-button-icon",src:q},null,-1)),dt=[_t],ut={key:2},mt={key:3,class:"warning-label-container"},pt=s(()=>t("img",{class:"ionicon warning-icon",src:C},null,-1)),ht=s(()=>t("h5",{class:"warning-label"},"The hymnals below require an internet connection",-1)),vt=[pt,ht],ft={style:{"padding-bottom":"200px"}},wt=["onClick"],gt=s(()=>t("img",{class:"ionicon ionicon-custom add-button-icon",src:Q},null,-1)),yt=[gt],kt={class:"nav"},bt=s(()=>t("img",{class:"ionicon nav__icon",src:z},null,-1)),xt=s(()=>t("span",{class:"nav__text"},"Home",-1)),It=s(()=>t("img",{class:"ionicon nav__icon",src:D},null,-1)),Ct=s(()=>t("span",{class:"nav__text"},"Search",-1)),St=s(()=>t("img",{class:"ionicon nav__icon",src:j},null,-1)),$t=s(()=>t("span",{class:"nav__text"},"Bookmarks",-1)),Tt=s(()=>t("img",{class:"ionicon nav__icon--active",src:G},null,-1)),Bt=s(()=>t("span",{class:"nav__text"},"Settings",-1)),Ht=B({__name:"SettingsImportView",setup(u){M();const a=J("externalBooks",[]);let g=H("import_books_tooltip_complete",!1);const m=V(()=>Object.values(E).filter(o=>!a.value.includes(o))),p=R("");async function y(o,n=!0){let e=null;try{const l=new AbortController,T=setTimeout(()=>l.abort(),2e3);e=await fetch(o+"/summary.json",{method:"HEAD",signal:l.signal}),clearTimeout(T)}catch(l){if(l.name=="TypeError")return await _.show({text:"Failed to load hymnal!"}),!1;if(l.name!="AbortError")throw l}return e==null||!e.ok||e.status!=200?(await _.show({text:"Failed to load hymnal!"}),!1):a.value.includes(o)?(await _.show({text:"Hymnal already imported!"}),!1):(a.value.push(o),n&&await _.show({text:"Successfully imported hymnal!"}),!0)}async function S(o){if(o in b){const n=b[o];a.value.includes(n)?await _.show({text:`Hymnal (${o}) already imported!`}):await y(n,!1)&&await _.show({text:`Successfully imported hymnal (${o})!`})}else await _.show({text:`Unknown hymnal reference (${o})!`})}F(()=>{g.value||(g.value=!0)});function $(o){a.value=a.value.filter(n=>n!=o)}return(o,n)=>(i(),c(w,null,[t("div",W,[t("div",X,[t("img",{onClick:n[0]||(n[0]=e=>o.$router.back()),class:"ionicon title--left",src:P}),Y])]),t("div",Z,[t("div",tt,[U(t("input",{"onUpdate:modelValue":n[1]||(n[1]=e=>p.value=e),type:"text",class:"search-bar",placeholder:"Reference"},null,512),[[L,p.value,void 0,{trim:!0}]]),t("a",{disabled:p.value.length===0,onClick:n[2]||(n[2]=e=>S(p.value)),class:"reference-button"},ot,8,et)]),m.value.length!=0?(i(),c("h2",nt,"Available Hymnals")):h("",!0),m.value.length!=0?(i(),c("div",at,ct)):h("",!0),t("div",null,[(i(!0),c(w,null,k(m.value,e=>(i(),x(I,{key:e,src:e,"with-link":!1},{default:d(()=>[t("button",{onClick:l=>y(e)},dt,8,rt)]),_:2},1032,["src"]))),128))]),r(a).length!=0?(i(),c("h2",ut,"Imported Hymnals")):h("",!0),r(a).length!=0&&m.value.length==0?(i(),c("div",mt,vt)):h("",!0),t("div",ft,[(i(!0),c(w,null,k(r(a),e=>(i(),x(I,{id:"import-book",key:e,src:e,"with-link":!1},{default:d(()=>[t("button",{onClick:l=>$(e)},yt,8,wt)]),_:2},1032,["src"]))),128))])]),t("nav",kt,[v(r(f),{to:"/",class:"nav__link"},{default:d(()=>[bt,xt]),_:1}),v(r(f),{to:"/search",class:"nav__link"},{default:d(()=>[It,Ct]),_:1}),v(r(f),{to:"/bookmarks",class:"nav__link"},{default:d(()=>[St,$t]),_:1}),v(r(f),{to:"/settings",class:"nav__link nav__link--active"},{default:d(()=>[Tt,Bt]),_:1})])],64))}});const Dt=O(Ht,[["__scopeId","data-v-2ebe20d3"]]);export{Dt as default};