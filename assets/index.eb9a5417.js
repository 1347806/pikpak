var ue=Object.defineProperty;var H=Object.getOwnPropertySymbols;var ce=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable;var J=(e,t,o)=>t in e?ue(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,W=(e,t)=>{for(var o in t||(t={}))ce.call(t,o)&&J(e,o,t[o]);if(H)for(var o of H(t))pe.call(t,o)&&J(e,o,t[o]);return e};import{d as I,u as de,r as h,a as K,o as f,c as Y,w as u,b as l,e as a,N as me,f as he,g as ve,z as fe,h as ge,i as _e,j as q,k as ke,l as we,m as ye,n as Ne,p as xe,q as Ee,s as k,t as Fe,v as $e,x as be,y as w,A as L,B as Ce,C as Ie,D as C,E as Le,F as y,G as Ae,H as De,I as A,L as Te,J as G,K as Pe,M as Be,O as Oe,P as Se,Q as je,R as Re,S as Me,T as ze,U as Z,V as Ve,W as Ue,X as He,Y as Je,Z as We,_ as Ke,$ as Ye,a0 as qe,a1 as Ge}from"./vendor.60359f7c.js";const Ze=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}};Ze();const Xe=I({setup(e){return window.$message=de(),(t,o)=>null}}),Qe=I({setup(e){const t=h({common:{primaryColor:"#306eff",hoverColor:"#306eff",primaryColorHover:"#306eff",heightMedium:"42px"},Layout:{siderColor:"#f5f5f6"},Breadcrumb:{fontSize:"16px"},Dropdown:{optionTextColorHover:"#fff"},InternalSelectMenu:{optionTextColorActive:"#fff"},Upload:{itemColorHover:"#F3F3F5FF",itemTextColorSuccess:"#18A058FF"}});return(o,n)=>{const s=K("router-view");return f(),Y(a(_e),{locale:a(fe),"date-locale":a(ge),"theme-overrides":t.value},{default:u(()=>[l(a(ve),null,{default:u(()=>[l(a(me),null,{default:u(()=>[l(a(he),null,{default:u(()=>[l(Xe),l(s)]),_:1})]),_:1})]),_:1})]),_:1},8,["locale","date-locale","theme-overrides"])}}}),et="modulepreload",X={},tt="/pikpak/",_=function(t,o){return!o||o.length===0?t():Promise.all(o.map(n=>{if(n=`${tt}${n}`,n in X)return;X[n]=!0;const s=n.endsWith(".css"),r=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${r}`))return;const c=document.createElement("link");if(c.rel=s?"stylesheet":et,s||(c.as="script",c.crossOrigin=""),c.href=n,document.head.appendChild(c),s)return new Promise((N,v)=>{c.addEventListener("load",N),c.addEventListener("error",v)})})).then(()=>t())};var ot="/pikpak/assets/logo1.08eb9157.png";const d=q.create({});d.interceptors.request.use(e=>{var o;const t=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");return(!t||!t.access_token)&&F.push("/login"),e.headers={Authorization:t.token_type+" "+t.access_token},((o=e.url)==null?void 0:o.indexOf("https://pipak.httpswwwtjskynetgotourlhttpsgithubcommumuchenchen.workers.dev"))===-1&&(e.url="https://pipak.httpswwwtjskynetgotourlhttpsgithubcommumuchenchen.workers.dev/"+e.url),e});let E=!1;d.interceptors.response.use(e=>e,e=>{const{response:t,config:o}=e;if(t.status)switch(t.status){case 401:const n=window.localStorage.getItem("pikpakLoginData"),s=n?JSON.parse(n):{};return s.username&&s.password&&!E?(console.log("wait",o.url),E=!0,d.post("https://user.mypikpak.com/v1/auth/signin",W({captcha_token:"",client_id:"YNxT9w7GMdWvEOKa",client_secret:"dbw2OtmVEeuUvIptb1Coyg"},s)).then(r=>(r.data&&r.data.access_token&&window.localStorage.setItem("pikpakLogin",JSON.stringify(r.data)),E=!1,d(o))).catch(()=>(F.push("/login"),!1))):s.username&&s.password&&E?new Promise((r,c)=>{const N=setInterval(()=>{E||(clearInterval(N),r(d(o)))},100)}):(F.push("/login"),!1);case 400:case 403:window.$message.error(t.data.error_description||"\u51FA\u9519\u4E86")}return console.log(o.url,111),Promise.reject(e)});const Q=q.create({});Q.interceptors.request.use(e=>{var t;return e.headers={Authorization:"Bearer secret_FErDcv3kgsFNLiWUDOWYdJhNqOIKj55eteBg3vIoiLt","Notion-Version":"2021-08-16","Content-Type":"application/json"},((t=e.url)==null?void 0:t.indexOf("https://pipak.httpswwwtjskynetgotourlhttpsgithubcommumuchenchen.workers.dev"))===-1&&(e.url="https://pipak.httpswwwtjskynetgotourlhttpsgithubcommumuchenchen.workers.dev/"+e.url),e});const yt=Q,ee=function(e){if(isNaN(e))return"";let t=["bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],o=Math.floor(Math.log(e)/Math.log(2));o<1&&(o=0);let n=Math.floor(o/10);return e=e/Math.pow(2,10*n),e.toString().length>e.toFixed(2).toString().length&&(e=parseFloat(e.toFixed(2))),e+" "+t[n]};const st=y("a",{href:"https://mypikpak.com/",target:"_blank",class:"logo-box"},[y("img",{src:"https://www.mypikpak.com/logo.png",class:"logo-box__icon",alt:""}),y("div",{class:"logo-box__text"},"PikPak")],-1),at={key:0,class:"content-bottom"},nt=w("\u4F1A\u5458\u7801"),rt={class:"bottom-user-info"},it={key:0,src:ot,class:"user-info-avatar"},lt={key:1,src:"https://www.mypikpak.com/logo.png",class:"user-info-avatar"},ut={class:"user-info-name"},ct={key:0},pt=w(" \u4F1A\u5458\u65F6\u95F4 "),dt={class:"action"},mt=w(" \u9000\u51FA\u767B\u5F55 "),ht=w("\u6DFB\u52A0"),vt=I({setup(e){const t=h(!1),o=i=>()=>Z(A,null,{default:()=>Z(i)}),n=ke(),s=we(),r=h([{label:"\u6587\u4EF6",key:"list",icon:o(Je)},{label:"\u56DE\u6536\u7AD9",key:"trash",icon:o(Ve)},{label:"\u8D44\u6E90\u5E93",key:"share",icon:o(Ue)},{label:"\u8BBE\u7F6E",key:"setting",icon:o(He)}]),c=h(),N=()=>{d.get("https://user.mypikpak.com/v1/user/me").then(i=>{window.localStorage.setItem("pikpakUser",JSON.stringify(i.data)),c.value=i.data}).catch(i=>{console.log(i)})},v=h(),D=()=>{d.get("https://api-drive.mypikpak.com/drive/v1/about").then(i=>{v.value=i.data}).catch(i=>{console.log(i)})},g=h(),te=()=>{d.get("https://api-drive.mypikpak.com/drive/v1/privilege/vip").then(i=>{var p;g.value=(p=i.data)==null?void 0:p.data})},oe=(i,p)=>{console.log(p),n.push("/"+p.key)};ye(()=>{N(),D(),te()});const b=h(),x=h(!1),se=()=>{d.post("https://api-drive.mypikpak.com/vip/v1/order/free",{activation_code:b.value}).then(i=>{window.$message.success("\u5151\u6362\u6210\u529F"),D()}).catch(i=>{console.log(i)}).finally(()=>{x.value=!1})},T=h(!1),ae=i=>{T.value=i<800,t.value||(t.value=i<800)};Ne(s,()=>{T.value&&(t.value=!0)});const ne=xe(),re=()=>{ne.warning({title:"\u8B66\u544A",content:"\u786E\u5B9A\u9000\u51FA\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u4E0D\u786E\u5B9A",onPositiveClick:()=>{d.post("https://user.mypikpak.com/v1/auth/revoke",{}).then(i=>{window.localStorage.removeItem("pikpakLogin"),window.localStorage.removeItem("pikpakLoginData"),window.$message.success("\u9000\u51FA\u6210\u529F"),n.push("/login")}).catch(i=>{console.log(i)})}})};return(i,p)=>{const ie=K("router-view"),le=Ee("resize");return f(),k(ze,null,[Fe(l(a(G),{"has-sider":"",onResize:ae},{default:u(()=>[l(a($e),{"content-style":{display:"flex",flexDirection:"column"},"collapse-mode":"width","collapsed-width":0,width:240,"show-trigger":"bar",collapsed:t.value,onCollapse:p[1]||(p[1]=m=>t.value=!0),onExpand:p[2]||(p[2]=m=>t.value=!1),bordered:""},{default:u(()=>{var m,P,B,O,S,j,R,M,z,V,U;return[st,l(a(be),{options:r.value,value:String(a(s).name),"onUpdate:value":oe},null,8,["options","value"]),t.value?C("",!0):(f(),k("div",at,[w(L(a(ee)((m=v.value)==null?void 0:m.quota.usage))+" / "+L(a(ee)((P=v.value)==null?void 0:P.quota.limit))+" ",1),l(a(Ce),{type:"primary",onClick:p[0]||(p[0]=_t=>x.value=!0)},{default:u(()=>[nt]),_:1}),((B=v.value)==null?void 0:B.quota)?(f(),Y(a(Ie),{key:0,type:"line",percentage:Number((((O=v.value)==null?void 0:O.quota.usage)/((S=v.value)==null?void 0:S.quota.limit)*100).toFixed(2)),"indicator-placement":"inside",height:14,color:((j=g.value)==null?void 0:j.status)==="ok"?"#d1ae6a":void 0,processing:""},null,8,["percentage","color"])):C("",!0)])),t.value?C("",!0):(f(),k("div",{key:1,class:Le(["sider-bottom",{vip:((R=g.value)==null?void 0:R.status)==="ok"}])},[y("div",rt,[((M=g.value)==null?void 0:M.status)==="ok"?(f(),k("img",it)):(f(),k("img",lt)),y("div",ut,[w(L((z=c.value)==null?void 0:z.name)+" ",1),((V=g.value)==null?void 0:V.status)==="ok"&&((U=g.value)==null?void 0:U.expire)?(f(),k("div",ct,[pt,l(a(Ae),{to:new Date().getTime(),time:new Date(g.value.expire).getTime(),type:"relative"},null,8,["to","time"])])):C("",!0)]),y("div",dt,[l(a(De),null,{trigger:u(()=>[l(a(A),{onClick:re},{default:u(()=>[l(a(Te))]),_:1})]),default:u(()=>[mt]),_:1})])])],2))]}),_:1},8,["collapsed"]),l(a(G),null,{default:u(()=>[l(a(Pe),{style:{height:"100vh"}},{default:u(()=>[l(a(Be),{style:{"max-height":"100vh"}},{default:u(()=>[l(ie)]),_:1})]),_:1})]),_:1})]),_:1},512),[[le]]),l(a(Me),{show:x.value,"onUpdate:show":p[5]||(p[5]=m=>x.value=m)},{default:u(()=>[l(a(Oe),{style:{width:"600px"},title:"\u4F1A\u5458\u7801"},{"header-extra":u(()=>[l(a(A),{onClick:p[3]||(p[3]=m=>x.value=!1)},{default:u(()=>[l(a(Se))]),_:1})]),action:u(()=>[l(a(je),{block:!0,type:"primary",disabled:!b.value,onClick:se},{default:u(()=>[ht]),_:1},8,["disabled"])]),default:u(()=>[l(a(Re),{placeholder:"\u4F1A\u5458\u7801",value:b.value,"onUpdate:value":p[4]||(p[4]=m=>b.value=m)},null,8,["value"])]),_:1})]),_:1},8,["show"])],64)}}}),ft=[{path:"/",name:"home",component:vt,redirect:"/list",children:[{path:"list/:id?",name:"list",component:()=>_(()=>import("./list.595cc77f.js"),["assets/list.595cc77f.js","assets/list.b938c6ec.css","assets/vendor.60359f7c.js","assets/StreamSaver.55f74170.js","assets/StreamSaver.594f5e9d.css"])},{path:"trash",name:"trash",component:()=>_(()=>import("./trash.e37a1ee0.js"),["assets/trash.e37a1ee0.js","assets/trash.99a3677d.css","assets/vendor.60359f7c.js"])},{path:"setting",name:"setting",component:()=>_(()=>import("./setting.85f51c82.js"),["assets/setting.85f51c82.js","assets/setting.f947579c.css","assets/vendor.60359f7c.js"])},{path:"share",name:"share",component:()=>_(()=>import("./share.94c83c4d.js"),["assets/share.94c83c4d.js","assets/share.4f9c11c6.css","assets/vendor.60359f7c.js"])}]},{path:"/t/:id?",name:"test",component:()=>_(()=>import("./test.2d31e936.js"),["assets/test.2d31e936.js","assets/vendor.60359f7c.js"])},{path:"/s/:id",name:"shareInfo",component:()=>_(()=>import("./shareInfo.b935dc18.js"),["assets/shareInfo.b935dc18.js","assets/shareInfo.9e107d57.css","assets/vendor.60359f7c.js","assets/StreamSaver.55f74170.js","assets/StreamSaver.594f5e9d.css"])},{path:"/login",name:"login",component:()=>_(()=>import("./login.88d64d82.js"),["assets/login.88d64d82.js","assets/login.62e162e4.css","assets/vendor.60359f7c.js"])}],gt=We({history:Ke(),routes:ft});var F=gt;const $=Ye(Qe);$.directive("resize",{mounted(e,t,o){e.$$erd=qe({strategy:"scroll"}),e.$$erd.listenTo({},e,n=>{let s=n.offsetWidth,r=n.offsetHeight;e.$$time&&clearTimeout(e.$$time),e.$$time=setTimeout(()=>{var c;(c=o.props)==null||c.onResize(s,r)},300)})},unmounted(e){e.$$erd&&e.$$erd.uninstall(e),e.$$time&&clearTimeout(e.$$time)}});$.config.globalProperties.$http=d;$.use(F);$.use(Ge,{router:F,siteIdList:[1280510106]});$.mount("#app");export{ee as b,d as i,yt as n};
