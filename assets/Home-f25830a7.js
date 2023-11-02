import{g as I,c as Z,a as Pe,m as B,h as F,p as V,i as Be,b as f,r as J,d as G,u as pt,e as j,f as Le,s as w,o as ue,j as $e,k as _t,l as xt,n as kt,q as Re,t as Ct,v as ze,w as N,x as o,y as Ne,z as Ee,A as ce,T as de,S as je,B as M,C as Vt,D as It,E as se,F as Oe,G as wt,H as At,I as K,J as ve,K as fe,L as Tt,M as H,N as X,O as Me,P as Q,Q as He,R as De,U as me,V as Pt,W as Bt,X as Fe,Y as D,Z as Ue,_ as We,$ as Lt,a0 as $t,a1 as Rt,a2 as zt,a3 as Nt,a4 as qe,a5 as Ge,a6 as Et,a7 as jt,a8 as Ot,a9 as Mt,aa as Ht,ab as ge,ac as ee,ad as Ke,ae as Ye,af as Dt,ag as Ze,ah as Je,ai as R,aj as xe,ak as Ft,al as Ut,am as Wt,an as oe,ao as qt,ap as Gt,aq as Kt,ar as Yt,as as Zt,at as Jt}from"./index-b44b9754.js";function ye(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",t=arguments.length>2?arguments[2]:void 0;return I()({name:t??Z(Pe(e.replace(/__/g,"-"))),props:{tag:{type:String,default:i},...B()},setup(a,s){let{slots:l}=s;return()=>{var n;return F(a.tag,{class:[e,a.class],style:a.style},(n=l.default)==null?void 0:n.call(l))}}})}const ie=Symbol.for("vuetify:layout"),Xe=Symbol.for("vuetify:layout-item"),ke=1e3,Xt=V({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Qt=V({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function ea(e){const i=Be(ie);if(!i)throw new Error("[Vuetify] Could not find injected layout");const t=e.id??`layout-item-${_t()}`,a=Le("useLayoutItem");$e(Xe,{id:t});const s=w(!1);xt(()=>s.value=!0),kt(()=>s.value=!1);const{layoutItemStyles:l,layoutItemScrimStyles:n}=i.register(a,{...e,active:f(()=>s.value?!1:e.active.value),id:t});return Re(()=>i.unregister(t)),{layoutItemStyles:l,layoutRect:i.layoutRect,layoutItemScrimStyles:n}}const ta=(e,i,t,a)=>{let s={top:0,left:0,right:0,bottom:0};const l=[{id:"",layer:{...s}}];for(const n of e){const r=i.get(n),v=t.get(n),c=a.get(n);if(!r||!v||!c)continue;const d={...s,[r.value]:parseInt(s[r.value],10)+(c.value?parseInt(v.value,10):0)};l.push({id:n,layer:d}),s=d}return l};function aa(e){const i=Be(ie,null),t=f(()=>i?i.rootZIndex.value-100:ke),a=J([]),s=G(new Map),l=G(new Map),n=G(new Map),r=G(new Map),v=G(new Map),{resizeRef:c,contentRect:d}=pt(),h=f(()=>{const S=new Map,C=e.overlaps??[];for(const u of C.filter(m=>m.includes(":"))){const[m,g]=u.split(":");if(!a.value.includes(m)||!a.value.includes(g))continue;const A=s.get(m),P=s.get(g),O=l.get(m),W=l.get(g);!A||!P||!O||!W||(S.set(g,{position:A.value,amount:parseInt(O.value,10)}),S.set(m,{position:P.value,amount:-parseInt(W.value,10)}))}return S}),b=f(()=>{const S=[...new Set([...n.values()].map(u=>u.value))].sort((u,m)=>u-m),C=[];for(const u of S){const m=a.value.filter(g=>{var A;return((A=n.get(g))==null?void 0:A.value)===u});C.push(...m)}return ta(C,s,l,r)}),p=f(()=>!Array.from(v.values()).some(S=>S.value)),x=f(()=>b.value[b.value.length-1].layer),T=f(()=>({"--v-layout-left":j(x.value.left),"--v-layout-right":j(x.value.right),"--v-layout-top":j(x.value.top),"--v-layout-bottom":j(x.value.bottom),...p.value?void 0:{transition:"none"}})),_=f(()=>b.value.slice(1).map((S,C)=>{let{id:u}=S;const{layer:m}=b.value[C],g=l.get(u),A=s.get(u);return{id:u,...m,size:Number(g.value),position:A.value}})),y=S=>_.value.find(C=>C.id===S),k=Le("createLayout"),$=w(!1);ue(()=>{$.value=!0}),$e(ie,{register:(S,C)=>{let{id:u,order:m,position:g,layoutSize:A,elementSize:P,active:O,disableTransitions:W,absolute:yt}=C;n.set(u,m),s.set(u,g),l.set(u,A),r.set(u,O),W&&v.set(u,W);const Se=Ct(Xe,k==null?void 0:k.vnode).indexOf(S);Se>-1?a.value.splice(Se,0,u):a.value.push(u);const pe=f(()=>_.value.findIndex(q=>q.id===u)),ae=f(()=>t.value+b.value.length*2-pe.value*2),ht=f(()=>{const q=g.value==="left"||g.value==="right",ne=g.value==="right",St=g.value==="bottom",_e={[g.value]:0,zIndex:ae.value,transform:`translate${q?"X":"Y"}(${(O.value?0:-110)*(ne||St?-1:1)}%)`,position:yt.value||t.value!==ke?"absolute":"fixed",...p.value?void 0:{transition:"none"}};if(!$.value)return _e;const E=_.value[pe.value];if(!E)throw new Error(`[Vuetify] Could not find layout item "${u}"`);const le=h.value.get(u);return le&&(E[le.position]+=le.amount),{..._e,height:q?`calc(100% - ${E.top}px - ${E.bottom}px)`:P.value?`${P.value}px`:void 0,left:ne?void 0:`${E.left}px`,right:ne?`${E.right}px`:void 0,top:g.value!=="bottom"?`${E.top}px`:void 0,bottom:g.value!=="top"?`${E.bottom}px`:void 0,width:q?P.value?`${P.value}px`:void 0:`calc(100% - ${E.left}px - ${E.right}px)`}}),bt=f(()=>({zIndex:ae.value-1}));return{layoutItemStyles:ht,layoutItemScrimStyles:bt,zIndex:ae}},unregister:S=>{n.delete(S),s.delete(S),l.delete(S),r.delete(S),v.delete(S),a.value=a.value.filter(C=>C!==S)},mainRect:x,mainStyles:T,getLayoutItem:y,items:_,layoutRect:d,rootZIndex:t});const z=f(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),U=f(()=>({zIndex:i?t.value:void 0,position:i?"relative":void 0,overflow:i?"hidden":void 0}));return{layoutClasses:z,layoutStyles:U,getLayoutItem:y,items:_,layoutRect:d,layoutRef:c}}const na=I()({name:"VCardActions",props:B(),setup(e,i){let{slots:t}=i;return ze({VBtn:{variant:"text"}}),N(()=>{var a;return o("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),la=ye("v-card-subtitle"),Qe=ye("v-card-title");function sa(e){return{aspectStyles:f(()=>{const i=Number(e.aspectRatio);return i?{paddingBottom:String(1/i*100)+"%"}:void 0})}}const et=V({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...B(),...Ne()},"VResponsive"),re=I()({name:"VResponsive",props:et(),setup(e,i){let{slots:t}=i;const{aspectStyles:a}=sa(e),{dimensionStyles:s}=Ee(e);return N(()=>{var l;return o("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[s.value,e.style]},[o("div",{class:"v-responsive__sizer",style:a.value},null),(l=t.additional)==null?void 0:l.call(t),t.default&&o("div",{class:["v-responsive__content",e.contentClass]},[t.default()])])}),{}}}),oa=V({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),Y=(e,i)=>{let{slots:t}=i;const{transition:a,disabled:s,...l}=e,{component:n=de,...r}=typeof a=="object"?a:{};return F(n,ce(typeof a=="string"?{name:s?"":a}:r,l,{disabled:s}),t)};function ia(e,i){if(!je)return;const t=i.modifiers||{},a=i.value,{handler:s,options:l}=typeof a=="object"?a:{handler:a,options:{}},n=new IntersectionObserver(function(){var h;let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],v=arguments.length>1?arguments[1]:void 0;const c=(h=e._observe)==null?void 0:h[i.instance.$.uid];if(!c)return;const d=r.some(b=>b.isIntersecting);s&&(!t.quiet||c.init)&&(!t.once||d||c.init)&&s(d,r,v),d&&t.once?tt(e,i):c.init=!0},l);e._observe=Object(e._observe),e._observe[i.instance.$.uid]={init:!1,observer:n},n.observe(e)}function tt(e,i){var a;const t=(a=e._observe)==null?void 0:a[i.instance.$.uid];t&&(t.observer.unobserve(e),delete e._observe[i.instance.$.uid])}const ra={mounted:ia,unmounted:tt},ua=ra,ca=V({alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,...et(),...B(),...oa()},"VImg"),te=I()({name:"VImg",directives:{intersect:ua},props:ca(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,i){let{emit:t,slots:a}=i;const s=w(""),l=J(),n=w(e.eager?"loading":"idle"),r=w(),v=w(),c=f(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),d=f(()=>c.value.aspect||r.value/v.value||0);M(()=>e.src,()=>{h(n.value!=="idle")}),M(d,(u,m)=>{!u&&m&&l.value&&_(l.value)}),Vt(()=>h());function h(u){if(!(e.eager&&u)&&!(je&&!u&&!e.eager)){if(n.value="loading",c.value.lazySrc){const m=new Image;m.src=c.value.lazySrc,_(m,null)}c.value.src&&It(()=>{var m,g;if(t("loadstart",((m=l.value)==null?void 0:m.currentSrc)||c.value.src),(g=l.value)!=null&&g.complete){if(l.value.naturalWidth||p(),n.value==="error")return;d.value||_(l.value,null),b()}else d.value||_(l.value),x()})}}function b(){var u;x(),n.value="loaded",t("load",((u=l.value)==null?void 0:u.currentSrc)||c.value.src)}function p(){var u;n.value="error",t("error",((u=l.value)==null?void 0:u.currentSrc)||c.value.src)}function x(){const u=l.value;u&&(s.value=u.currentSrc||u.src)}let T=-1;function _(u){let m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const g=()=>{clearTimeout(T);const{naturalHeight:A,naturalWidth:P}=u;A||P?(r.value=P,v.value=A):!u.complete&&n.value==="loading"&&m!=null?T=window.setTimeout(g,m):(u.currentSrc.endsWith(".svg")||u.currentSrc.startsWith("data:image/svg+xml"))&&(r.value=1,v.value=1)};g()}const y=f(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),k=()=>{var g;if(!c.value.src||n.value==="idle")return null;const u=o("img",{class:["v-img__img",y.value],src:c.value.src,srcset:c.value.srcset,alt:e.alt,sizes:e.sizes,ref:l,onLoad:b,onError:p},null),m=(g=a.sources)==null?void 0:g.call(a);return o(Y,{transition:e.transition,appear:!0},{default:()=>[se(m?o("picture",{class:"v-img__picture"},[m,u]):u,[[At,n.value==="loaded"]])]})},$=()=>o(Y,{transition:e.transition},{default:()=>[c.value.lazySrc&&n.value!=="loaded"&&o("img",{class:["v-img__img","v-img__img--preload",y.value],src:c.value.lazySrc,alt:e.alt},null)]}),z=()=>a.placeholder?o(Y,{transition:e.transition,appear:!0},{default:()=>[(n.value==="loading"||n.value==="error"&&!a.error)&&o("div",{class:"v-img__placeholder"},[a.placeholder()])]}):null,U=()=>a.error?o(Y,{transition:e.transition,appear:!0},{default:()=>[n.value==="error"&&o("div",{class:"v-img__error"},[a.error()])]}):null,S=()=>e.gradient?o("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,C=w(!1);{const u=M(d,m=>{m&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{C.value=!0})}),u())})}return N(()=>{const[u]=re.filterProps(e);return se(o(re,ce({class:["v-img",{"v-img--booting":!C.value},e.class],style:[{width:j(e.width==="auto"?r.value:e.width)},e.style]},u,{aspectRatio:d.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>o(wt,null,[o(k,null,null),o($,null,null),o(S,null,null),o(z,null,null),o(U,null,null)]),default:a.default}),[[Oe("intersect"),{handler:h,options:e.options},null,{once:!0}]])}),{currentSrc:s,image:l,state:n,naturalWidth:r,naturalHeight:v}}}),da=V({start:Boolean,end:Boolean,icon:K,image:String,...B(),...ve(),...fe(),...Tt(),...H(),...X(),...Me({variant:"flat"})},"VAvatar"),Ce=I()({name:"VAvatar",props:da(),setup(e,i){let{slots:t}=i;const{themeClasses:a}=Q(e),{colorClasses:s,colorStyles:l,variantClasses:n}=He(e),{densityClasses:r}=De(e),{roundedClasses:v}=me(e),{sizeClasses:c,sizeStyles:d}=Pt(e);return N(()=>o(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},a.value,s.value,r.value,v.value,c.value,n.value,e.class],style:[l.value,d.value,e.style]},{default:()=>{var h;return[e.image?o(te,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?o(Bt,{key:"icon",icon:e.icon},null):(h=t.default)==null?void 0:h.call(t),Fe(!1,"v-avatar")]}})),{}}}),va=V({appendAvatar:String,appendIcon:K,prependAvatar:String,prependIcon:K,subtitle:String,title:String,...B(),...ve()},"VCardItem"),fa=I()({name:"VCardItem",props:va(),setup(e,i){let{slots:t}=i;return N(()=>{var c;const a=!!(e.prependAvatar||e.prependIcon),s=!!(a||t.prepend),l=!!(e.appendAvatar||e.appendIcon),n=!!(l||t.append),r=!!(e.title||t.title),v=!!(e.subtitle||t.subtitle);return o("div",{class:["v-card-item",e.class],style:e.style},[s&&o("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?o(D,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},t.prepend):a&&o(Ce,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),o("div",{class:"v-card-item__content"},[r&&o(Qe,{key:"title"},{default:()=>{var d;return[((d=t.title)==null?void 0:d.call(t))??e.title]}}),v&&o(la,{key:"subtitle"},{default:()=>{var d;return[((d=t.subtitle)==null?void 0:d.call(t))??e.subtitle]}}),(c=t.default)==null?void 0:c.call(t)]),n&&o("div",{key:"append",class:"v-card-item__append"},[t.append?o(D,{key:"append-defaults",disabled:!l,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},t.append):l&&o(Ce,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),at=ye("v-card-text"),ma=V({appendAvatar:String,appendIcon:K,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:K,ripple:{type:[Boolean,Object],default:!0},subtitle:String,text:String,title:String,...Ue(),...B(),...ve(),...Ne(),...We(),...Lt(),...$t(),...Rt(),...fe(),...zt(),...H(),...X(),...Me({variant:"elevated"})},"VCard"),ga=I()({name:"VCard",directives:{Ripple:Nt},props:ma(),setup(e,i){let{attrs:t,slots:a}=i;const{themeClasses:s}=Q(e),{borderClasses:l}=qe(e),{colorClasses:n,colorStyles:r,variantClasses:v}=He(e),{densityClasses:c}=De(e),{dimensionStyles:d}=Ee(e),{elevationClasses:h}=Ge(e),{loaderClasses:b}=Et(e),{locationStyles:p}=jt(e),{positionClasses:x}=Ot(e),{roundedClasses:T}=me(e),_=Mt(e,t),y=f(()=>e.link!==!1&&_.isLink.value),k=f(()=>!e.disabled&&e.link!==!1&&(e.link||_.isClickable.value));return N(()=>{const $=y.value?"a":e.tag,z=!!(a.title||e.title),U=!!(a.subtitle||e.subtitle),S=z||U,C=!!(a.append||e.appendAvatar||e.appendIcon),u=!!(a.prepend||e.prependAvatar||e.prependIcon),m=!!(a.image||e.image),g=S||u||C,A=!!(a.text||e.text);return se(o($,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":k.value},s.value,l.value,n.value,c.value,h.value,b.value,x.value,T.value,v.value,e.class],style:[r.value,d.value,p.value,e.style],href:_.href.value,onClick:k.value&&_.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var P;return[m&&o("div",{key:"image",class:"v-card__image"},[a.image?o(D,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):o(te,{key:"image-img",cover:!0,src:e.image},null)]),o(Ht,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),g&&o(fa,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),A&&o(at,{key:"text"},{default:()=>{var O;return[((O=a.text)==null?void 0:O.call(a))??e.text]}}),(P=a.default)==null?void 0:P.call(a),a.actions&&o(na,null,{default:a.actions}),Fe(k.value,"v-card")]}}),[[Oe("ripple"),k.value&&e.ripple]])}),{}}});const ya=V({fluid:{type:Boolean,default:!1},...B(),...H()},"VContainer"),ha=I()({name:"VContainer",props:ya(),setup(e,i){let{slots:t}=i;const{rtlClasses:a}=ge();return N(()=>o(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},a.value,e.class],style:e.style},t)),{}}}),nt=(()=>ee.reduce((e,i)=>(e[i]={type:[Boolean,String,Number],default:!1},e),{}))(),lt=(()=>ee.reduce((e,i)=>{const t="offset"+Z(i);return e[t]={type:[String,Number],default:null},e},{}))(),st=(()=>ee.reduce((e,i)=>{const t="order"+Z(i);return e[t]={type:[String,Number],default:null},e},{}))(),Ve={col:Object.keys(nt),offset:Object.keys(lt),order:Object.keys(st)};function ba(e,i,t){let a=e;if(!(t==null||t===!1)){if(i){const s=i.replace(e,"");a+=`-${s}`}return e==="col"&&(a="v-"+a),e==="col"&&(t===""||t===!0)||(a+=`-${t}`),a.toLowerCase()}}const Sa=["auto","start","end","center","baseline","stretch"],pa=V({cols:{type:[Boolean,String,Number],default:!1},...nt,offset:{type:[String,Number],default:null},...lt,order:{type:[String,Number],default:null},...st,alignSelf:{type:String,default:null,validator:e=>Sa.includes(e)},...B(),...H()},"VCol"),Ie=I()({name:"VCol",props:pa(),setup(e,i){let{slots:t}=i;const a=f(()=>{const s=[];let l;for(l in Ve)Ve[l].forEach(r=>{const v=e[r],c=ba(l,r,v);c&&s.push(c)});const n=s.some(r=>r.startsWith("v-col-"));return s.push({"v-col":!n||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),s});return()=>{var s;return F(e.tag,{class:[a.value,e.class],style:e.style},(s=t.default)==null?void 0:s.call(t))}}}),he=["start","end","center"],ot=["space-between","space-around","space-evenly"];function be(e,i){return ee.reduce((t,a)=>{const s=e+Z(a);return t[s]=i(),t},{})}const _a=[...he,"baseline","stretch"],it=e=>_a.includes(e),rt=be("align",()=>({type:String,default:null,validator:it})),xa=[...he,...ot],ut=e=>xa.includes(e),ct=be("justify",()=>({type:String,default:null,validator:ut})),ka=[...he,...ot,"stretch"],dt=e=>ka.includes(e),vt=be("alignContent",()=>({type:String,default:null,validator:dt})),we={align:Object.keys(rt),justify:Object.keys(ct),alignContent:Object.keys(vt)},Ca={align:"align",justify:"justify",alignContent:"align-content"};function Va(e,i,t){let a=Ca[e];if(t!=null){if(i){const s=i.replace(e,"");a+=`-${s}`}return a+=`-${t}`,a.toLowerCase()}}const Ia=V({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:it},...rt,justify:{type:String,default:null,validator:ut},...ct,alignContent:{type:String,default:null,validator:dt},...vt,...B(),...H()},"VRow"),Ae=I()({name:"VRow",props:Ia(),setup(e,i){let{slots:t}=i;const a=f(()=>{const s=[];let l;for(l in we)we[l].forEach(n=>{const r=e[n],v=Va(l,n,r);v&&s.push(v)});return s.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),s});return()=>{var s;return F(e.tag,{class:["v-row",a.value,e.class],style:e.style},(s=t.default)==null?void 0:s.call(t))}}}),wa=Ke({__name:"MainTSPage",setup(e){let i=Ye();const t=f(()=>{const s=new Date,l=s.getFullYear();let n=s.getMonth()+1;return s.getDate()+"."+n+"."+l}),a=f(()=>i.global.name.value==="light"?"./assets/light.jpg":"./assets/dark.jpg");return(s,l)=>{const n=Dt("TSButton");return Ze(),Je(ha,{class:"fill-height"},{default:R(()=>[o(re,{class:"align-start fill-height",style:{"padding-top":"10%"}},{default:R(()=>[o(Ae,{justify:"center"},{default:R(()=>[o(ga,{color:"teal",width:"572"},{default:R(()=>[o(te,{src:a.value,cover:"",class:"text-white"},{default:R(()=>[o(Qe,null,{default:R(()=>[xe("НТП2 сила")]),_:1}),o(at,null,{default:R(()=>[xe("Сегодня "+Ft(t.value),1)]),_:1}),o(Ae,{align:"center",justify:"center",class:"pb-8"},{default:R(()=>[o(Ie,{cols:"5"},{default:R(()=>[o(n,{href:"https://okc.ertelecom.ru/stats/line_ts/ntp2/index",text:"Очередь"}),o(n,{href:"https://okc.ertelecom.ru/stats/breaks/ntp-two",text:"Перерывы"}),o(n,{href:"https://okc2.ertelecom.ru/wfm/vueapp/day",text:"Обеды и назначения"}),o(n,{href:"https://okc.ertelecom.ru/ts/useful/sait-index",text:"SaitIndex"}),o(n,{href:"https://perm.db.ertelecom.ru/cgi-bin/ppo/excells/wcc_main.login",text:"WebARM"}),o(n,{href:"https://cfp.ucce.ertelecom.ru/desktop/container/",text:"Finesse"}),o(n,{href:"http://kbn.ertelecom.ru/pages/viewpage.action?pageId=9601190",text:"КБН"}),o(n,{href:"https://cloud.ertelecom.ru/Products/Files/DocEditor.aspx?fileid=922151",text:"График наставников"})]),_:1}),o(Ie,{cols:"5"},{default:R(()=>[o(n,{href:"https://okc.ertelecom.ru/stats/lk/index",text:"ЛК"}),o(n,{href:"https://okc.ertelecom.ru/stats/ure/main/ure",text:"Единая отчетная среда"}),o(n,{href:"https://okc.ertelecom.ru/stats/testing/lk/profile",text:"Тестирование"}),o(n,{href:"https://okc.ertelecom.ru/stats/premium/ntp2/spec_month",text:"Премиум"}),o(n,{href:"https://okc.ertelecom.ru/test/gok/ntp-two/errors",text:"ГОК"}),o(n,{href:"https://ticket.ertelecom.ru/secure/Dashboard.jspa?selectPageId=70903",text:"ГОК(ticket)"}),o(n,{href:"https://okc.ertelecom.ru/stats/csi/index",text:"Оценки"}),o(n,{href:"https://okc.ertelecom.ru/stats/taxi_kc/taxi/registration",text:"Такси"})]),_:1})]),_:1})]),_:1},8,["src"])]),_:1})]),_:1})]),_:1})]),_:1})}}});const Aa=V({...B(),...Xt({fullHeight:!0}),...X()},"VApp"),Ta=I()({name:"VApp",props:Aa(),setup(e,i){let{slots:t}=i;const a=Q(e),{layoutClasses:s,getLayoutItem:l,items:n,layoutRef:r}=aa(e),{rtlClasses:v}=ge();return N(()=>{var c;return o("div",{ref:r,class:["v-application",a.themeClasses.value,s.value,v.value,e.class],style:[e.style]},[o("div",{class:"v-application__wrap"},[(c=t.default)==null?void 0:c.call(t)])])}),{getLayoutItem:l,items:n,theme:a}}});const Pa=V({text:String,...B(),...H()},"VToolbarTitle"),Ba=I()({name:"VToolbarTitle",props:Pa(),setup(e,i){let{slots:t}=i;return N(()=>{const a=!!(t.default||t.text||e.text);return o(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var s;return[a&&o("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(s=t.default)==null?void 0:s.call(t)])]}})}),{}}}),La=V({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function L(e,i,t){return I()({name:e,props:La({mode:t,origin:i}),setup(a,s){let{slots:l}=s;const n={onBeforeEnter(r){a.origin&&(r.style.transformOrigin=a.origin)},onLeave(r){if(a.leaveAbsolute){const{offsetTop:v,offsetLeft:c,offsetWidth:d,offsetHeight:h}=r;r._transitionInitialStyles={position:r.style.position,top:r.style.top,left:r.style.left,width:r.style.width,height:r.style.height},r.style.position="absolute",r.style.top=`${v}px`,r.style.left=`${c}px`,r.style.width=`${d}px`,r.style.height=`${h}px`}a.hideOnLeave&&r.style.setProperty("display","none","important")},onAfterLeave(r){if(a.leaveAbsolute&&(r!=null&&r._transitionInitialStyles)){const{position:v,top:c,left:d,width:h,height:b}=r._transitionInitialStyles;delete r._transitionInitialStyles,r.style.position=v||"",r.style.top=c||"",r.style.left=d||"",r.style.width=h||"",r.style.height=b||""}}};return()=>{const r=a.group?Ut:de;return F(r,{name:a.disabled?"":e,css:!a.disabled,...a.group?void 0:{mode:a.mode},...a.disabled?{}:n},l.default)}}})}function ft(e,i){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return I()({name:e,props:{mode:{type:String,default:t},disabled:Boolean},setup(a,s){let{slots:l}=s;return()=>F(de,{name:a.disabled?"":e,css:!a.disabled,...a.disabled?{}:i},l.default)}})}function mt(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",a=Pe(`offset-${t}`);return{onBeforeEnter(n){n._parent=n.parentNode,n._initialStyle={transition:n.style.transition,overflow:n.style.overflow,[t]:n.style[t]}},onEnter(n){const r=n._initialStyle;n.style.setProperty("transition","none","important"),n.style.overflow="hidden";const v=`${n[a]}px`;n.style[t]="0",n.offsetHeight,n.style.transition=r.transition,e&&n._parent&&n._parent.classList.add(e),requestAnimationFrame(()=>{n.style[t]=v})},onAfterEnter:l,onEnterCancelled:l,onLeave(n){n._initialStyle={transition:"",overflow:n.style.overflow,[t]:n.style[t]},n.style.overflow="hidden",n.style[t]=`${n[a]}px`,n.offsetHeight,requestAnimationFrame(()=>n.style[t]="0")},onAfterLeave:s,onLeaveCancelled:s};function s(n){e&&n._parent&&n._parent.classList.remove(e),l(n)}function l(n){const r=n._initialStyle[t];n.style.overflow=n._initialStyle.overflow,r!=null&&(n.style[t]=r),delete n._initialStyle}}L("fab-transition","center center","out-in");L("dialog-bottom-transition");L("dialog-top-transition");L("fade-transition");L("scale-transition");L("scroll-x-transition");L("scroll-x-reverse-transition");L("scroll-y-transition");L("scroll-y-reverse-transition");L("slide-x-transition");L("slide-x-reverse-transition");L("slide-y-transition");L("slide-y-reverse-transition");const $a=ft("expand-transition",mt());ft("expand-x-transition",mt("",!0));const Ra=[null,"prominent","default","comfortable","compact"],gt=V({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Ra.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Ue(),...B(),...We(),...fe(),...H({tag:"header"}),...X()},"VToolbar"),Te=I()({name:"VToolbar",props:gt(),setup(e,i){var p;let{slots:t}=i;const{backgroundColorClasses:a,backgroundColorStyles:s}=Wt(oe(e,"color")),{borderClasses:l}=qe(e),{elevationClasses:n}=Ge(e),{roundedClasses:r}=me(e),{themeClasses:v}=Q(e),{rtlClasses:c}=ge(),d=w(!!(e.extended||(p=t.extension)!=null&&p.call(t))),h=f(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),b=f(()=>d.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return ze({VBtn:{variant:"text"}}),N(()=>{var y;const x=!!(e.title||t.title),T=!!(t.image||e.image),_=(y=t.extension)==null?void 0:y.call(t);return d.value=!!(e.extended||_),o(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},a.value,l.value,n.value,r.value,v.value,c.value,e.class],style:[s.value,e.style]},{default:()=>[T&&o("div",{key:"image",class:"v-toolbar__image"},[t.image?o(D,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):o(te,{key:"image-img",cover:!0,src:e.image},null)]),o(D,{defaults:{VTabs:{height:j(h.value)}}},{default:()=>{var k,$,z;return[o("div",{class:"v-toolbar__content",style:{height:j(h.value)}},[t.prepend&&o("div",{class:"v-toolbar__prepend"},[(k=t.prepend)==null?void 0:k.call(t)]),x&&o(Ba,{key:"title",text:e.title},{text:t.title}),($=t.default)==null?void 0:$.call(t),t.append&&o("div",{class:"v-toolbar__append"},[(z=t.append)==null?void 0:z.call(t)])])]}}),o(D,{defaults:{VTabs:{height:j(b.value)}}},{default:()=>[o($a,null,{default:()=>[d.value&&o("div",{class:"v-toolbar__extension",style:{height:j(b.value)}},[_])]})]})]})}),{contentHeight:h,extensionHeight:b}}}),za=V({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Na(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=i;let a=0;const s=J(null),l=w(0),n=w(0),r=w(0),v=w(!1),c=w(!1),d=f(()=>Number(e.scrollThreshold)),h=f(()=>qt((d.value-l.value)/d.value||0)),b=()=>{const p=s.value;!p||t&&!t.value||(a=l.value,l.value="window"in p?p.pageYOffset:p.scrollTop,c.value=l.value<a,r.value=Math.abs(l.value-d.value))};return M(c,()=>{n.value=n.value||l.value}),M(v,()=>{n.value=0}),ue(()=>{M(()=>e.scrollTarget,p=>{var T;const x=p?document.querySelector(p):window;x&&x!==s.value&&((T=s.value)==null||T.removeEventListener("scroll",b),s.value=x,s.value.addEventListener("scroll",b,{passive:!0}))},{immediate:!0})}),Re(()=>{var p;(p=s.value)==null||p.removeEventListener("scroll",b)}),t&&M(t,b,{immediate:!0}),{scrollThreshold:d,currentScroll:l,currentThreshold:r,isScrollActive:v,scrollRatio:h,isScrollingUp:c,savedScroll:n}}function Ea(){const e=w(!1);return ue(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:f(()=>e.value?void 0:{transition:"none !important"}),isBooted:Gt(e)}}const ja=V({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...gt(),...Qt(),...za(),height:{type:[Number,String],default:64}},"VAppBar"),Oa=I()({name:"VAppBar",props:ja(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:t}=i;const a=J(),s=Kt(e,"modelValue"),l=f(()=>{var k;const y=new Set(((k=e.scrollBehavior)==null?void 0:k.split(" "))??[]);return{hide:y.has("hide"),inverted:y.has("inverted"),collapse:y.has("collapse"),elevate:y.has("elevate"),fadeImage:y.has("fade-image")}}),n=f(()=>{const y=l.value;return y.hide||y.inverted||y.collapse||y.elevate||y.fadeImage||!s.value}),{currentScroll:r,scrollThreshold:v,isScrollingUp:c,scrollRatio:d}=Na(e,{canScroll:n}),h=f(()=>e.collapse||l.value.collapse&&(l.value.inverted?d.value>0:d.value===0)),b=f(()=>e.flat||l.value.elevate&&(l.value.inverted?r.value>0:r.value===0)),p=f(()=>l.value.fadeImage?l.value.inverted?1-d.value:d.value:void 0),x=f(()=>{var $,z;if(l.value.hide&&l.value.inverted)return 0;const y=(($=a.value)==null?void 0:$.contentHeight)??0,k=((z=a.value)==null?void 0:z.extensionHeight)??0;return y+k});Yt(f(()=>!!e.scrollBehavior),()=>{Zt(()=>{l.value.hide?l.value.inverted?s.value=r.value>v.value:s.value=c.value||r.value<v.value:s.value=!0})});const{ssrBootStyles:T}=Ea(),{layoutItemStyles:_}=ea({id:e.name,order:f(()=>parseInt(e.order,10)),position:oe(e,"location"),layoutSize:x,elementSize:w(void 0),active:s,absolute:oe(e,"absolute")});return N(()=>{const[y]=Te.filterProps(e);return o(Te,ce({ref:a,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{..._.value,"--v-toolbar-image-opacity":p.value,height:void 0,...T.value},e.style]},y,{collapse:h.value,flat:b.value}),t)}),{}}}),Da=Ke({__name:"Home",setup(e){let i=Ye();const t=f(()=>localStorage.theme===void 0?"dark":localStorage.theme);i.global.name.value=t.value;function a(){i.global.name.value=i.global.name.value==="light"?"dark":"light",localStorage.theme=i.global.name.value}return(s,l)=>(Ze(),Je(Ta,null,{default:R(()=>[o(Oa,{elevation:2,class:"justify-center mb-16"},{default:R(()=>[o(Jt,{icon:"mdi-theme-light-dark",onClick:l[0]||(l[0]=n=>a())})]),_:1}),o(wa)]),_:1}))}});export{Da as default};