import{d as C,ao as S,h as i,o as u,D as _,w as n,a as o,u as a,e as r,G as c,aj as m,c as T,b as g,F as j,N as B,_ as b,r as O}from"./app-d4cce820.js";import{N as y}from"./Input-8542eb46.js";import{N as h}from"./Button-5c0bd328.js";import{N}from"./Alert-bb842866.js";import{N as w}from"./Tag-b667605b.js";import"./browser-c2be0643.js";import"./resolve-slot-cacdf84e.js";import"./Scrollbar-8af227a2.js";import"./use-merged-state-e9630f09.js";import"./color-to-class-b0332f36.js";const P=C({__name:"Token",setup(V){const t=S({phone:"",password:"",verify_code:""}),p=i(),l=i(),f=i(),v=i(),d=i();async function x(){f.value=!0;const e=await(await fetch("https://api.nn.ci/alist/wopan/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json();if(f.value=!1,e.error){p.value=e.error;return}}async function z(){v.value=!0;const e=await(await fetch("https://api.nn.ci/alist/wopan/verify_code",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json();if(v.value=!1,e.error){l.value=e.error;return}d.value=e}return(k,e)=>(u(),_(a(B),{size:"large",vertical:""},{default:n(()=>[o(a(y),{size:"large",placeholder:"Phone number",value:t.phone,"onUpdate:value":e[0]||(e[0]=s=>t.phone=s)},null,8,["value"]),o(a(y),{size:"large",placeholder:"Password",value:t.password,"onUpdate:value":e[1]||(e[1]=s=>t.password=s),type:"password"},null,8,["value"]),o(a(h),{type:"primary",secondary:"",size:"large",block:"",onClick:x,loading:f.value},{default:n(()=>[r("Get Verify Code")]),_:1},8,["loading"]),p.value?(u(),_(a(N),{key:0,title:"Error",type:"error"},{default:n(()=>[r(c(p.value),1)]),_:1})):m("v-if",!0),o(a(y),{size:"large",placeholder:"Verify code",value:t.verify_code,"onUpdate:value":e[2]||(e[2]=s=>t.verify_code=s)},null,8,["value"]),o(a(h),{type:"primary",size:"large",block:"",onClick:z,loading:v.value},{default:n(()=>[r("Get Token")]),_:1},8,["loading"]),l.value?(u(),_(a(N),{key:1,title:"Error",type:"error"},{default:n(()=>[r(c(l.value),1)]),_:1})):m("v-if",!0),d.value?(u(),T(j,{key:2},[g("div",null,[r("refresh_token: "),o(a(w),{bordered:!1,type:"info"},{default:n(()=>[r(c(d.value.refresh_token),1)]),_:1})]),g("div",null,[r("access_token: "),o(a(w),{bordered:!1,type:"info"},{default:n(()=>[r(c(d.value.access_token),1)]),_:1})])],64)):m("v-if",!0)]),_:1}))}}),E=b(P,[["__file","Token.vue"]]),G=C({__name:"token.html",setup(V){return(t,p)=>{const l=O("NaiveClient");return u(),T("div",null,[o(l,null,{default:n(()=>[o(a(E))]),_:1})])}}}),L=b(G,[["__file","token.html.vue"]]);export{L as default};
