import{d as re,r as b,c as be,a8 as de,a7 as j,h as n,i as e,j as o,t as f,I as ve,U as pe,O as h,F as C,p as S,m as O,l as T,q as I,w as U,a9 as ke,s as i,R as V,B as he,C as me}from"./index-4d0be3dc.js";import{_ as fe}from"./chevron-back-outline-221160d9.js";import{_ as ge}from"./enter-outline-31070eaa.js";import{_ as ye}from"./home-outline-386c54c3.js";import{_ as $e}from"./settings-15d7e416.js";import{u as Ce}from"./navigator-6f97088c.js";import{U as z,v as xe,b as Z,r as A,s as ee,d as we}from"./broadcast-693787bd.js";const Se="/acchymns-pr-PR_kwDOHpETuc5yaKFf/assets/backspace-outline.svg",Te={class:"menu"},ze={class:"title"},Be={class:"title--center"},Ne={class:"main-content login-container"},Oe={key:0,class:"keypad-container"},Re={class:"pin-input-container"},Ee={class:"keypad"},Ie=["onTouchstart","onMousedown"],Ue=e("img",{class:"ionicon keyicon",src:Se},null,-1),Ve=[Ue],Ae=e("img",{class:"ionicon keyicon",src:ge},null,-1),De=[Ae],Le=["onClick"],Me={key:1},je={class:"biblereading"},Fe=e("h3",null,"Reading Type",-1),qe={class:"book-selector"},He=e("a",{class:"biblebook space"},null,-1),Ke=e("a",{class:"biblebook space"},null,-1),Pe=e("a",{class:"biblebook space"},null,-1),Ge=e("a",{class:"biblebook space"},null,-1),Je=e("h3",null,"Book",-1),Qe={class:"book-selector"},We=e("a",{class:"biblebook space"},null,-1),Xe=e("a",{class:"biblebook space"},null,-1),Ye=e("a",{class:"biblebook space"},null,-1),Ze=e("a",{class:"biblebook space"},null,-1),es={class:"book-selector"},ss=e("a",{class:"biblebook space"},null,-1),ts=e("a",{class:"biblebook space"},null,-1),ls=e("a",{class:"biblebook space"},null,-1),os=e("a",{class:"biblebook space"},null,-1),as=e("h3",null,"Chapter",-1),ns={class:"number-selector"},is=e("a",{class:"biblebook space"},null,-1),us=e("a",{class:"biblebook space"},null,-1),cs=e("a",{class:"biblebook space"},null,-1),_s=e("a",{class:"biblebook space"},null,-1),rs=e("a",{class:"biblebook space"},null,-1),bs=e("a",{class:"biblebook space"},null,-1),ds=e("a",{class:"biblebook space"},null,-1),vs=e("a",{class:"biblebook space"},null,-1),ps=e("h3",null,"Start Verse",-1),ks={class:"number-selector"},hs=e("a",{class:"biblebook space"},null,-1),ms=e("a",{class:"biblebook space"},null,-1),fs=e("a",{class:"biblebook space"},null,-1),gs=e("a",{class:"biblebook space"},null,-1),ys=e("a",{class:"biblebook space"},null,-1),$s=e("a",{class:"biblebook space"},null,-1),Cs=e("a",{class:"biblebook space"},null,-1),xs=e("a",{class:"biblebook space"},null,-1),ws={key:0},Ss={key:1,class:"number-selector"},Ts=e("a",{class:"biblebook space"},null,-1),zs=e("a",{class:"biblebook space"},null,-1),Bs=e("a",{class:"biblebook space"},null,-1),Ns=e("a",{class:"biblebook space"},null,-1),Os=e("a",{class:"biblebook space"},null,-1),Rs=e("a",{class:"biblebook space"},null,-1),Es=e("a",{class:"biblebook space"},null,-1),Is=e("a",{class:"biblebook space"},null,-1),Us={key:2},Vs={key:3,class:"number-selector"},As=e("a",{class:"biblebook space"},null,-1),Ds=e("a",{class:"biblebook space"},null,-1),Ls=e("a",{class:"biblebook space"},null,-1),Ms=e("a",{class:"biblebook space"},null,-1),js=e("a",{class:"biblebook space"},null,-1),Fs=e("a",{class:"biblebook space"},null,-1),qs=e("a",{class:"biblebook space"},null,-1),Hs=e("a",{class:"biblebook space"},null,-1),Ks={key:2,class:"login-container"},Ps=e("h1",{style:{"margin-bottom":"0px"}},"Authorized",-1),Gs={style:{"margin-top":"0px"}},Js={class:"nav"},Qs=e("img",{class:"ionicon nav__icon",src:ye},null,-1),Ws=e("span",{class:"nav__text"},"Home",-1),Xs=e("img",{class:"ionicon nav__icon",src:he},null,-1),Ys=e("span",{class:"nav__text"},"Search",-1),Zs=e("img",{class:"ionicon nav__icon",src:me},null,-1),et=e("span",{class:"nav__text"},"Bookmarks",-1),st=e("img",{class:"ionicon nav__icon--active",src:$e},null,-1),tt=e("span",{class:"nav__text"},"Settings",-1),rt=re({__name:"SettingsConnect",setup(lt){const{back:se}=Ce(),p=b(""),B=b(z.Unauthorized);let D=b(!1),N=b("LOADING"),R=b([]),g=b(),r=b(0);async function te(){let a=await we.post("https://iahifuumb7zasmzuv5xqpmi7fu0pwtkt.lambda-url.us-east-2.on.aws/",{code:p.value}),s=a.data;if(a.status==200){await j.set({key:"broadcasting_auth_token",value:s.token}),B.value=z.Authorized;let t=await Z(A());R.value=[];for(const[l,_]of Object.entries(t))R.value.push(_);N.value=s.church_id}else console.log(a.data),D.value=!0,setTimeout(()=>{D.value=!1,p.value=""},400)}async function le(){await ee(A(),N.value,"","",[-1],"")}async function F(){await j.set({key:"broadcasting_auth_token",value:""}),B.value=z.Unauthorized,p.value=""}function oe(){ke.push({path:"/broadcast"})}function ae(){p.value.length>0&&(p.value=p.value.substring(0,p.value.length-1))}function q(a){p.value.length<4&&(p.value+=a)}be(async()=>{N.value="...",g.value=await de("/acchymns-pr-PR_kwDOHpETuc5yaKFf/NKJV.bible.json",{})||{version:"",books:[]};for(let[s,t]of g.value.books.entries())s>38?K.value.push(t):H.value.push(t);P(),E();let a=await j.get({key:"broadcasting_auth_token"});if(a.value!=""&&a.value!=null){let s=await xe(a.value);if(s.status!=200)return F();let t=s.data;B.value=z.Authorized;let l=await Z(A());R.value=[];for(const[_,k]of Object.entries(l))R.value.push(k);N.value=t.church_id}});async function ne(a){var l,_,k,m,X,Y;let s="",t="";d.value==1?(s=`${c.value}`,t=`${u.value}:${v.value}-${(k=(_=(l=g.value)==null?void 0:l.books.find(w=>w.name==c.value))==null?void 0:_.chapters.find(w=>w.num==u.value))==null?void 0:k.verses.length}`):d.value==2?(s=`${c.value}`,v.value==$.value?t=`${u.value}:${v.value}`:t=`${u.value}:${v.value}-${$.value}`):(s=`${c.value} `,t=`${u.value}:${v.value}-${(Y=(X=(m=g.value)==null?void 0:m.books.find(w=>w.name==c.value))==null?void 0:X.chapters.find(w=>w.num==u.value))==null?void 0:Y.verses.length}, ${x.value}:1-${$.value}`),await ee(A(),N.value,s,"BIBLE",[],t)}let y=b(!1),H=b([]),K=b([]),c=b("Genesis"),u=b(1),x=b(1),v=b(1),$=b(1),d=b(1);function P(){u.value>J(c.value).length&&(u.value=1),x.value>Q(c.value).length&&(x.value=u.value)}function E(){v.value>M(c.value,u.value).length&&(v.value=1),$.value>W(c.value,d.value==3?x.value:u.value).length&&($.value=d.value==3?1:v.value),d.value==1&&($.value=M(c.value,u.value).length)}function G(a){c.value=a.target.innerText,P(),E()}function ie(a){u.value=Number.parseInt(a.target.innerText),E()}function ue(a){x.value=Number.parseInt(a.target.innerText),E()}function ce(a){v.value=Number.parseInt(a.target.innerText)}function _e(a){$.value=Number.parseInt(a.target.innerText)}function L(a,s){d.value=s}function J(a){var t;return(((t=g.value)==null?void 0:t.books.find(l=>l.name==a))||{name:"",chapters:[]}).chapters}function Q(a){var l;let s=((l=g.value)==null?void 0:l.books.find(_=>_.name==a))||{name:"",chapters:[]},t=[];if(u.value>0){for(let _=u.value+1;_<=(s==null?void 0:s.chapters.length);_++)t.push(s.chapters[_-1]);return t}return s.chapters}function M(a,s){var _;return((((_=g.value)==null?void 0:_.books.find(k=>k.name==a))||{name:"",chapters:[]}).chapters.find(k=>k.num==s)||{num:0,verses:[]}).verses}function W(a,s){var k;let l=(((k=g.value)==null?void 0:k.books.find(m=>m.name==a))||{name:"",chapters:[]}).chapters.find(m=>m.num==s)||{num:0,verses:[]},_=[];if(v.value>0){for(let m=v.value;m<=(l==null?void 0:l.verses.length);m++)_.push(l.verses[m-1]);return _}return l.verses}return(a,s)=>(i(),n(C,null,[e("div",Te,[e("div",ze,[e("img",{onClick:s[0]||(s[0]=t=>o(se)()),class:"ionicon title--left",src:fe}),e("h1",Be,f(o(y)?"Bible Reading":"Broadcast"),1)])]),e("div",Ne,[B.value==o(z).Unauthorized?(i(),n("div",Oe,[e("div",Re,[ve(e("input",{class:h(["pin-input",{"pin-input--error":o(D)}]),"onUpdate:modelValue":s[1]||(s[1]=t=>p.value=t),type:"password",disabled:"true",maxlength:"4"},null,2),[[pe,p.value]])]),e("div",Ee,[(i(),n(C,null,S(12,t=>e("div",{class:h(["key",{"key-tapped":o(r)==t}]),onTouchstart:l=>T(r)?r.value=t:r=t,onMousedown:l=>T(r)?r.value=t:r=t,onTouchend:s[5]||(s[5]=l=>T(r)?r.value=0:r=0),onTouchcancel:s[6]||(s[6]=l=>T(r)?r.value=0:r=0),onMouseup:s[7]||(s[7]=l=>T(r)?r.value=0:r=0)},[t==10?(i(),n("a",{key:0,onClick:s[2]||(s[2]=l=>ae())},Ve)):t==11?(i(),n("a",{key:1,onClick:s[3]||(s[3]=l=>q(0))},"0")):t==12?(i(),n("a",{key:2,onClick:s[4]||(s[4]=l=>te())},De)):(i(),n("a",{key:3,onClick:l=>q(t)},f(t),9,Le))],42,Ie)),64))])])):B.value==o(z).Authorized&&o(y)?(i(),n("div",Me,[e("div",je,[Fe,e("div",qe,[He,Ke,e("a",{onClick:s[8]||(s[8]=t=>L(t,1)),class:h(["biblebook",{selected:o(d)==1}])},"Start Only",2),e("a",{onClick:s[9]||(s[9]=t=>L(t,2)),class:h(["biblebook",{selected:o(d)==2}])},"Start End",2),e("a",{onClick:s[10]||(s[10]=t=>L(t,3)),class:h(["biblebook",{selected:o(d)==3}])},"Start End Chapter",2),Pe,Ge]),Je,e("div",Qe,[We,Xe,(i(!0),n(C,null,S(o(H),t=>(i(),n("a",{class:h(["biblebook",{selected:t.name==o(c)}]),onClick:s[11]||(s[11]=l=>G(l)),key:t.name},f(t.name),3))),128)),Ye,Ze]),e("div",es,[ss,ts,(i(!0),n(C,null,S(o(K),t=>(i(),n("a",{class:h(["biblebook",{selected:t.name==o(c)}]),onClick:s[12]||(s[12]=l=>G(l)),key:t.name},f(t.name),3))),128)),ls,os]),as,e("div",ns,[is,us,cs,_s,(i(!0),n(C,null,S(J(o(c)),t=>(i(),n("a",{class:h(["biblebook",{selected:t.num==o(u)}]),onClick:s[13]||(s[13]=l=>ie(l)),key:t.num},f(t.num),3))),128)),rs,bs,ds,vs]),ps,e("div",ks,[hs,ms,fs,gs,(i(!0),n(C,null,S(M(o(c),o(u)),t=>(i(),n("a",{class:h(["biblebook",{selected:t.num==o(v)}]),onClick:s[14]||(s[14]=l=>ce(l)),key:t.num},f(t.num),3))),128)),ys,$s,Cs,xs]),o(d)>1?(i(),n("h3",ws,"End Verse")):O("",!0),o(d)>1?(i(),n("div",Ss,[Ts,zs,Bs,Ns,(i(!0),n(C,null,S(W(o(c),o(d)==2?o(x):o(u)),t=>(i(),n("a",{class:h(["biblebook",{selected:t.num==o($)}]),onClick:s[15]||(s[15]=l=>_e(l)),key:t.num},f(t.num),3))),128)),Os,Rs,Es,Is])):O("",!0),o(d)==3?(i(),n("h3",Us,"End Chapter")):O("",!0),o(d)==3?(i(),n("div",Vs,[As,Ds,Ls,Ms,(i(!0),n(C,null,S(Q(o(c)),t=>(i(),n("a",{class:h(["biblebook",{selected:t.num==o(x)}]),onClick:s[16]||(s[16]=l=>ue(l)),key:t.num},f(t.num),3))),128)),js,Fs,qs,Hs])):O("",!0),e("div",null,[e("button",{class:"send-button",onClick:s[17]||(s[17]=t=>ne())},"Send")]),e("button",{class:"settings-button",onClick:s[18]||(s[18]=t=>T(y)?y.value=!1:y=!1)},"Back")])])):B.value==o(z).Authorized?(i(),n("div",Ks,[Ps,e("h3",Gs,"as "+f(o(N)),1),e("button",{class:"settings-button",onClick:s[19]||(s[19]=t=>T(y)?y.value=!0:y=!0)},"Set Bible Reading"),e("button",{class:"settings-button",onClick:s[20]||(s[20]=t=>le())},"Clear Screen"),e("button",{class:"settings-button",onClick:s[21]||(s[21]=t=>oe())},"Open Output Display"),e("button",{class:"settings-button",onClick:s[22]||(s[22]=t=>F())},"Log Out")])):O("",!0)]),e("nav",Js,[I(o(V),{to:"/",class:"nav__link"},{default:U(()=>[Qs,Ws]),_:1}),I(o(V),{to:"/search",class:"nav__link"},{default:U(()=>[Xs,Ys]),_:1}),I(o(V),{to:"/bookmarks",class:"nav__link"},{default:U(()=>[Zs,et]),_:1}),I(o(V),{to:"/settings",class:"nav__link nav__link--active"},{default:U(()=>[st,tt]),_:1})])],64))}});export{rt as default};