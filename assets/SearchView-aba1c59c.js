var q=Object.defineProperty;var G=(d,t,s)=>t in d?q(d,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):d[t]=s;var $=(d,t,s)=>(G(d,typeof t!="symbol"?t+"":t,s),s);import{d as K,f as U,r as M,G as T,S as W,c as J,g as Q,T as X,N as Y,h as S,i as r,I as Z,U as tt,j as y,F as V,p as E,t as x,m as z,q as O,w as B,s as w,k as st,K as et,x as ot,R as N,V as nt,W as it,C as rt,D as at}from"./index-4d0be3dc.js";import{_ as lt}from"./home-outline-386c54c3.js";const ct="/acchymns-pr-PR_kwDOHpETuc5yaKFf/assets/filter-outline.svg";class P{constructor(t,s,o){$(this,"r",0);$(this,"g",0);$(this,"b",0);this.set(t,s,o)}toString(){return`rgb(${Math.round(this.r)}, ${Math.round(this.g)}, ${Math.round(this.b)})`}set(t,s,o){this.r=this.clamp(t),this.g=this.clamp(s),this.b=this.clamp(o)}hueRotate(t=0){t=t/180*Math.PI;const s=Math.sin(t),o=Math.cos(t);this.multiply([.213+o*.787-s*.213,.715-o*.715-s*.715,.072-o*.072+s*.928,.213-o*.213+s*.143,.715+o*.285+s*.14,.072-o*.072-s*.283,.213-o*.213-s*.787,.715-o*.715+s*.715,.072+o*.928+s*.072])}grayscale(t=1){this.multiply([.2126+.7874*(1-t),.7152-.7152*(1-t),.0722-.0722*(1-t),.2126-.2126*(1-t),.7152+.2848*(1-t),.0722-.0722*(1-t),.2126-.2126*(1-t),.7152-.7152*(1-t),.0722+.9278*(1-t)])}sepia(t=1){this.multiply([.393+.607*(1-t),.769-.769*(1-t),.189-.189*(1-t),.349-.349*(1-t),.686+.314*(1-t),.168-.168*(1-t),.272-.272*(1-t),.534-.534*(1-t),.131+.869*(1-t)])}saturate(t=1){this.multiply([.213+.787*t,.715-.715*t,.072-.072*t,.213-.213*t,.715+.285*t,.072-.072*t,.213-.213*t,.715-.715*t,.072+.928*t])}multiply(t){const s=this.clamp(this.r*t[0]+this.g*t[1]+this.b*t[2]),o=this.clamp(this.r*t[3]+this.g*t[4]+this.b*t[5]),i=this.clamp(this.r*t[6]+this.g*t[7]+this.b*t[8]);this.r=s,this.g=o,this.b=i}brightness(t=1){this.linear(t)}contrast(t=1){this.linear(t,-(.5*t)+.5)}linear(t=1,s=0){this.r=this.clamp(this.r*t+s*255),this.g=this.clamp(this.g*t+s*255),this.b=this.clamp(this.b*t+s*255)}invert(t=1){this.r=this.clamp((t+this.r/255*(1-2*t))*255),this.g=this.clamp((t+this.g/255*(1-2*t))*255),this.b=this.clamp((t+this.b/255*(1-2*t))*255)}hsl(){const t=this.r/255,s=this.g/255,o=this.b/255,i=Math.max(t,s,o),l=Math.min(t,s,o);let c=0,u=0;const v=(i+l)/2;if(i===l)c=u=0;else{const _=i-l;switch(u=v>.5?_/(2-i-l):_/(i+l),i){case t:c=(s-o)/_+(s<o?6:0);break;case s:c=(o-t)/_+2;break;case o:c=(t-s)/_+4;break}c/=6}return{h:c*100,s:u*100,l:v*100}}clamp(t){return t>255?t=255:t<0&&(t=0),t}}class ht{constructor(t){$(this,"target");$(this,"targetHSL");$(this,"reusedColor");this.target=t,this.targetHSL=t.hsl(),this.reusedColor=new P(0,0,0)}solve(){const t=this.solveNarrow(this.solveWide());return{values:t.values,loss:t.loss,filter:this.css(t.values??[])}}solveWide(){const o=[60,180,18e3,600,1.2,1.2];let i={loss:1/0};for(let l=0;i.loss>25&&l<3;l++){const c=[50,20,3750,50,100,100],u=this.spsa(5,o,15,c,1e3);u.loss<i.loss&&(i=u)}return i}solveNarrow(t){const s=t.loss,o=2,i=s+1,l=[.25*i,.25*i,i,.25*i,.2*i,.2*i];return this.spsa(s,l,o,t.values,500)}spsa(t,s,o,i,l){const u=.16666666666666666;let v=null,_=1/0;const m=new Array(6),H=new Array(6),I=new Array(6);for(let h=0;h<l;h++){const f=o/Math.pow(h+1,u);for(let e=0;e<6;e++)m[e]=Math.random()>.5?1:-1,H[e]=i[e]+f*m[e],I[e]=i[e]-f*m[e];const p=this.loss(H)-this.loss(I);for(let e=0;e<6;e++){const a=p/(2*f)*m[e],n=s[e]/Math.pow(t+h+1,1);i[e]=A(i[e]-n*a,e)}const F=this.loss(i);F<_&&(v=i.slice(0),_=F)}return{values:v,loss:_};function A(h,f){let p=100;return f===2?p=7500:(f===4||f===5)&&(p=200),f===3?h>p?h%=p:h<0&&(h=p+h%p):h<0?h=0:h>p&&(h=p),h}}loss(t){const s=this.reusedColor;s.set(0,0,0),s.invert(t[0]/100),s.sepia(t[1]/100),s.saturate(t[2]/100),s.hueRotate(t[3]*3.6),s.brightness(t[4]/100),s.contrast(t[5]/100);const o=s.hsl();return Math.abs(s.r-this.target.r)+Math.abs(s.g-this.target.g)+Math.abs(s.b-this.target.b)+Math.abs(o.h-this.targetHSL.h)+Math.abs(o.s-this.targetHSL.s)+Math.abs(o.l-this.targetHSL.l)}css(t){function s(o,i=1){return Math.round(t[o]*i)}return`filter: invert(${s(0)}%) sepia(${s(1)}%) saturate(${s(2)}%) hue-rotate(${s(3,3.6)}deg) brightness(${s(4)}%) contrast(${s(5)}%);`}}function _t(d){const t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;d=d.replace(t,(o,i,l,c)=>i+i+l+l+c+c);const s=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(d);return s?[parseInt(s[1],16),parseInt(s[2],16),parseInt(s[3],16)]:null}const dt=r("h1",{class:"pagetitle"},"Search",-1),ut={class:"search-bar"},pt=r("button",{disabled:""},[r("svg",{viewBox:"0 0 1024 1024"},[r("path",{class:"path1",d:"M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"})])],-1),mt={class:"filters"},ft=r("p",{class:"dropdown-text"},"Filters",-1),gt=r("img",{class:"ionicon filter-icon",src:ct},null,-1),bt=[ft,gt],vt=["src"],kt=r("div",{class:"dropdown-content-text"},"All Hymnals",-1),yt=["onClick"],wt={class:"dropdown-content-item"},$t=["src"],Mt={class:"dropdown-content-text"},St={key:0,style:{"margin-top":"10px","margin-bottom":"10px"}},Ct={class:"songlist"},At={class:"song__title"},Ft={class:"book__title"},Lt={class:"booktext--right"},Dt={class:"song__number"},xt={key:0,class:"ionicon",style:{filter:"invert(100%) sepia(9%) saturate(7497%) hue-rotate(180deg) brightness(103%) contrast(93%)"},src:nt},Bt=r("div",{class:"song__title"},"Show more",-1),Nt=[Bt],Ht={class:"nav"},It=r("img",{class:"ionicon nav__icon",src:lt},null,-1),Ot=r("span",{class:"nav__text"},"Home",-1),Rt=r("img",{class:"ionicon nav__icon--active",src:it},null,-1),Tt=r("span",{class:"nav__text"},"Search",-1),Vt=r("img",{class:"ionicon nav__icon",src:rt},null,-1),zt=r("span",{class:"nav__text"},"Bookmarks",-1),jt=r("img",{class:"ionicon nav__icon",src:at},null,-1),Et=r("span",{class:"nav__text"},"Settings",-1),j=50,Kt=K({__name:"SearchView",setup(d){const t=U("searchParams",{search:"",bookFilters:[]}),s=M(t.value.search),o=T(()=>s.value.replace(/[.,/#!$%^&*;:{}=\-_'"`~()]/g,"").replace(/s{2,}/g," ").toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu,""));W(s,e=>{t.value.search=e});const i=M([]),l=M([]),c=T(()=>t.value.bookFilters.length>0?i.value.filter(e=>{var a,n;return(((a=e.stripped_title)==null?void 0:a.includes(o.value))||((n=e==null?void 0:e.stripped_first_line)==null?void 0:n.includes(o.value))||(e==null?void 0:e.number)==o.value)&&t.value.bookFilters.find(k=>k==e.book.name.short)}).sort((e,a)=>e.title.replace(/[.,/#!$%^&*;:{}=\-_'"`~()]/g,"").localeCompare(a.title.replace(/[.,/#!$%^&*;:{}=\-_'"`~()]/g,""))):s.value===""?[]:i.value.filter(e=>{var a,n;return((a=e.stripped_title)==null?void 0:a.includes(o.value))||((n=e==null?void 0:e.stripped_first_line)==null?void 0:n.includes(o.value))||(e==null?void 0:e.number)==o.value}).sort((e,a)=>e.title.replace(/[.,/#!$%^&*;:{}=\-_'"`~()]/g,"").localeCompare(a.title.replace(/[.,/#!$%^&*;:{}=\-_'"`~()]/g,"")))),u=M(j),v=T(()=>c.value.length-u.value<j?c.value:c.value.slice(0,u.value));J(async()=>{var n,k,L,C,g;const e=await Q(),a=await X();l.value.push(...Object.values(e));for(const D of Object.keys(a))for(const R of Object.keys(a[D])){let b=a[D][R];i.value.push({title:(b==null?void 0:b.title)??"",number:R,book:e[D],stripped_title:b.title.replace(/[.,/#!$%^&*;:{}=\-_'"`~()]/g,"").replace(/s{2,}/g," ").toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu,""),stripped_first_line:((g=(C=(L=(k=(n=b==null?void 0:b.first_line)==null?void 0:n.replace(/[.,/#!$%^&*;:{}=\-_'"`~()]/g,""))==null?void 0:k.replace(/s{2,}/g," "))==null?void 0:L.toLowerCase())==null?void 0:C.normalize("NFD"))==null?void 0:g.replace(/\p{Diacritic}/gu,""))??""})}});const _=M();var m=!1;function H(){var e,a;(e=_.value)!=null&&e.classList.contains("dropdown-content-active")&&!m&&((a=_.value)==null||a.classList.remove("dropdown-content-active")),m=!1}function I(){var e,a,n;(e=_.value)!=null&&e.classList.contains("dropdown-content-active")?((a=_.value)==null||a.classList.remove("dropdown-content-active"),m=!1):(m=!0,(n=_.value)==null||n.classList.add("dropdown-content-active"))}let A=M([]),h=M();function f(e){if(m=!0,t.value.bookFilters.includes(e)){let a=t.value.bookFilters.findIndex(n=>n==e);t.value.bookFilters.splice(a,1)}else t.value.bookFilters.push(e)}function p(){t.value.bookFilters=[]}function F(e){return e?"./assets/checkmark-circle.svg":"./assets/ellipse-outline.svg"}return Y(async()=>{var a,n,k,L;for(var e=0;e<((a=A.value)==null?void 0:a.length);e++){const C=(k=(n=A.value)==null?void 0:n.at(e))==null?void 0:k.children[0].children[0],g=_t(((L=l.value.at(e))==null?void 0:L.primaryColor)??"#000000");if((g==null?void 0:g.length)!==3){alert("Invalid format!");return}const D=new P(g[0],g[1],g[2]),b=new ht(D).solve();C==null||C.setAttribute("style",`${b.filter}`)}}),(e,a)=>(w(),S(V,null,[r("div",{onClick:H,class:"blocker"},[dt,r("div",ut,[Z(r("input",{"onUpdate:modelValue":a[0]||(a[0]=n=>s.value=n),placeholder:"Search for a song title or number...","aria-label":"Search through site content"},null,512),[[tt,s.value]]),pt]),r("div",mt,[r("a",{onClick:a[1]||(a[1]=n=>I()),class:"dropdown"},bt),r("div",{class:"dropdown-content",ref_key:"filter_content",ref:_},[r("a",null,[r("div",{class:"dropdown-content-top-item",ref_key:"all_hymnals_filter",ref:h,onClick:p},[r("img",{class:"ionicon checkmark-icon",src:F(y(t).bookFilters.length==0)},null,8,vt),kt],512)]),(w(!0),S(V,null,E(l.value,n=>(w(),S("a",{key:n.name.medium,onClick:k=>f(n.name.short),ref_for:!0,ref_key:"book_filters",ref:A},[r("div",wt,[r("img",{class:"ionicon",src:F(y(t).bookFilters.includes(n.name.short))},null,8,$t),r("div",Mt,x(n.name.medium),1)])],8,yt))),128))],512)]),c.value.length>0?(w(),S("h2",St,"Search Results ("+x(c.value.length)+")",1)):z("",!0),r("div",Ct,[(w(!0),S(V,null,E(v.value,n=>(w(),st(y(N),{key:n.title+n.number+n.book.name.short,to:`/display/${n.book.name.short}/${n.number}`,class:"song",style:ot(`background: linear-gradient(135deg, ${n.book.primaryColor}, ${n.book.secondaryColor})`)},{default:B(()=>[r("div",null,[r("div",At,x(n.title),1),r("div",Ft,x(n.book.name.medium),1)]),r("div",Lt,[r("div",Dt,"#"+x(n.number),1),n.book.addOn&&y(et).getPlatform()!=="web"?(w(),S("img",xt)):z("",!0)])]),_:2},1032,["to","style"]))),128)),v.value.length<c.value.length?(w(),S("div",{key:0,onClick:a[2]||(a[2]=n=>u.value+=j),class:"song",style:{background:"#2196f3","justify-content":"center"}},Nt)):z("",!0)])]),r("nav",Ht,[O(y(N),{to:"/",class:"nav__link"},{default:B(()=>[It,Ot]),_:1}),O(y(N),{to:"/search",class:"nav__link nav__link--active"},{default:B(()=>[Rt,Tt]),_:1}),O(y(N),{to:"/bookmarks",class:"nav__link"},{default:B(()=>[Vt,zt]),_:1}),O(y(N),{to:"/settings",class:"nav__link"},{default:B(()=>[jt,Et]),_:1})])],64))}});export{Kt as default};