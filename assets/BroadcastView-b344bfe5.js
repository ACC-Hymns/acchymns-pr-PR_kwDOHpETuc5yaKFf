import{d as D,r as s,c as z,a7 as K,P as L,h as c,j as t,i as l,t as r,m as M,x as v,F as U,p as j,O as A,s as d,y as F,z as G,E as P}from"./index-4d0be3dc.js";import{v as q,r as H,e as J}from"./broadcast-693787bd.js";const I=u=>(F("data-v-029d81e9"),u=u(),G(),u),Q={class:"info-seperator"},T={key:0,class:"song-info"},W={class:"bottom-text"},X={key:1,class:"song-info"},Y={class:"song-number"},Z={key:0,class:"verses-label"},$={class:"verses"},ee=I(()=>l("div",{class:"dot"},null,-1)),te=I(()=>l("div",null,null,-1)),se=D({__name:"BroadcastView",setup(u){let h=s(!1),S=s(""),m=s(""),i=s(""),p=s(""),g=s(""),f=s(!1),n=s(!1),_=s(""),b=s("");function y(){let e=new Date,a=e.getHours(),o=e.getMinutes(),x=e.getSeconds(),w=a*30+o*(360/720),C=o*6+x*(360/3600),R=x*6;E.value="rotate("+w+"deg)",V.value="rotate("+C+"deg)",N.value="rotate("+R+"deg)"}let k;async function O(){let e=(await J(k,S.value)).Item;n.value=e.BOOK_ID.S=="BIBLE",n.value?(_.value=e.SONG_NUMBER.S,b.value=e.BOOK_COLOR.S):(m.value=e.SONG_NUMBER.S,f.value=!1,e.VERSES.NS[0]==-1?i.value="":e.VERSES.NS[0]==-2?i.value="All Verses":(e.VERSES.NS.sort((a,o)=>a-o),i.value=e.VERSES.NS.join(", "),f.value=!0),p.value=e.BOOK_COLOR.S,g.value=e.BOOK_ID.S)}let B="";z(async()=>{B=document.body.style.backgroundColor,document.body.style.backgroundColor="white",y(),setInterval(y,100),setInterval(O,2e3);let e=await K.get({key:"broadcasting_auth_token"}),a=await q(e.value||"");if(h.value=a.status==200,S.value=a.data.church_id,console.log("Authorized: "+h.value),!h.value){g.value="Unauthorized";return}k=H(),O()}),L(()=>{document.body.style.backgroundColor=B});let E=s(""),V=s(""),N=s("");return(e,a)=>(d(),c("div",Q,[t(n)?(d(),c("div",T,[l("h2",{ref:"top_text_element",class:"top-text"},r(t(_)),513),l("h2",W,r(t(b)),1)])):(d(),c("div",X,[l("h1",Y,r(t(m)),1),t(f)?(d(),c("h3",Z,"Verses:")):M("",!0),l("h2",$,r(t(i)),1),l("h2",{class:"book-name",style:v({color:t(p)})},r(t(g)),5)])),l("div",{class:A(["clock",{"clock-bible-long":t(_).length>8&&t(n),"clock-song":t(m).length>0,"clock-bible":t(_).length<=8&&t(n)}])},[ee,l("div",null,[l("div",{class:"hour-hand",style:v({transform:t(E)})},null,4),l("div",{class:"minute-hand",style:v({transform:t(V)})},null,4)]),te,(d(),c(U,null,j(61,o=>l("div",{class:"diallines",key:o,style:v({transform:"rotate("+6*(o-2)+"deg)"})},null,4)),64))],2)]))}});const oe=P(se,[["__scopeId","data-v-029d81e9"]]);export{oe as default};