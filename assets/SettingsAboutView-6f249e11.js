import{_ as l}from"./chevron-back-outline-221160d9.js";import{_ as a}from"./chevron-forward-outline-be203f8f.js";import{_ as r}from"./home-outline-386c54c3.js";import{d as m,h as d,i as s,j as t,t as u,q as n,w as o,F as p,s as h,R as i,B as v,C as g}from"./index-4d0be3dc.js";import{_ as f}from"./settings-15d7e416.js";import{u as k}from"./navigator-6f97088c.js";const b={class:"menu"},x={class:"title"},A=s("h1",{class:"title--center"},"About App",-1),C={class:"main-content"},y={class:"settings"},B=s("span",null,"Attributions",-1),S=s("img",{class:"entrypoint ionicon",src:a},null,-1),V=s("span",null,"Changelog",-1),w=s("img",{class:"entrypoint ionicon",src:a},null,-1),N={class:"nav"},$=s("img",{class:"ionicon nav__icon",src:r},null,-1),F=s("span",{class:"nav__text"},"Home",-1),H=s("img",{class:"ionicon nav__icon",src:v},null,-1),R=s("span",{class:"nav__text"},"Search",-1),j=s("img",{class:"ionicon nav__icon",src:g},null,-1),q=s("span",{class:"nav__text"},"Bookmarks",-1),D=s("img",{class:"ionicon nav__icon--active",src:f},null,-1),E=s("span",{class:"nav__text"},"Settings",-1),Q=m({__name:"SettingsAboutView",setup(L){const{back:e}=k(),c="Alpha 2.0.3";return(z,_)=>(h(),d(p,null,[s("div",b,[s("div",x,[s("img",{onClick:_[0]||(_[0]=G=>t(e)()),class:"ionicon title--left",src:l}),A])]),s("div",C,[s("h2",null,"ACC Hymns Version "+u(t(c)),1),s("div",y,[n(t(i),{to:"/settings/about/attributions",class:"settings-option"},{default:o(()=>[B,S]),_:1}),n(t(i),{to:"/settings/about/changelog",class:"settings-option"},{default:o(()=>[V,w]),_:1})])]),s("nav",N,[n(t(i),{to:"/",class:"nav__link"},{default:o(()=>[$,F]),_:1}),n(t(i),{to:"/search",class:"nav__link"},{default:o(()=>[H,R]),_:1}),n(t(i),{to:"/bookmarks",class:"nav__link"},{default:o(()=>[j,q]),_:1}),n(t(i),{to:"/settings",class:"nav__link nav__link--active"},{default:o(()=>[D,E]),_:1})])],64))}});export{Q as default};