(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[929],{7286:function(e,t,n){"use strict";var r=n(2173);t.Z=r.Z.create({baseURL:"https://stockeado.com/api",withCredentials:!0,headers:{"Content-type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"*","Access-Control-Expose-Headers":"*","Access-Control-Allow-Credentials":"true"}})},1125:function(e,t,n){"use strict";n.d(t,{$v:function(){return c},Dk:function(){return d},RF:function(){return u},RZ:function(){return o},Rd:function(){return s},SI:function(){return a},qU:function(){return l}});var r=n(9110),i=n(7286);let l=async e=>{try{var t;let n=await i.Z.get("/inventory/edit",{headers:{id:e}});if((null==n?void 0:null===(t=n.data)||void 0===t?void 0:t.deleted)!==void 0)return!0;return!1}catch(e){return!1}},s=async e=>{try{var t;let n=await i.Z.post("/inventory",{...e});if((null==n?void 0:null===(t=n.data)||void 0===t?void 0:t.item)!==void 0)return!0;return!1}catch(e){return!1}},a=async e=>{try{var t,n;let r=await i.Z.get("/inventory/load",{headers:{id:e}});if(console.log(r),(null==r?void 0:null===(t=r.data)||void 0===t?void 0:t.item)!==void 0)return null==r?void 0:null===(n=r.data)||void 0===n?void 0:n.item;return null}catch(e){return null}},o=async e=>{try{var t;let n=await i.Z.post("/inventory/load",{items:[...e]});if((null==n?void 0:null===(t=n.data)||void 0===t?void 0:t.item)!==void 0)return!0;return!1}catch(e){return!1}},d=async e=>{try{var t;let n=await i.Z.post("/inventory/edit",{...e});if((null==n?void 0:null===(t=n.data)||void 0===t?void 0:t.item)!==void 0)return!0;return!1}catch(e){return!1}},c=async()=>{try{var e;let t=new r.Z,n=t.get("access_token"),l=await i.Z.get("/inventory",{headers:{token:n}});return null==l?void 0:null===(e=l.data)||void 0===e?void 0:e.items}catch(e){return null}},u=async e=>{try{let t=await i.Z.get("/inventory/marketplace",{headers:{id:e}});return null==t?void 0:t.data}catch(e){return null}}},9162:function(e,t,n){"use strict";n.d(t,{GA:function(){return s},PR:function(){return a},pH:function(){return l},r4:function(){return d},uz:function(){return o}});var r=n(9110),i=n(7286);let l=async(e,t)=>{try{var n,l;let s=new r.Z,a=await i.Z.post("/user/login",{email:e,password:t});if((null==a?void 0:null===(n=a.data)||void 0===n?void 0:n.user)!==void 0)return s.set("access_token",null==a?void 0:null===(l=a.data)||void 0===l?void 0:l.token,{path:"/"}),!0;return!1}catch(e){return!1}},s=async e=>{try{var t;let n=await i.Z.get("/user/login",{headers:{token:e}});return console.log(n),null==n?void 0:null===(t=n.data)||void 0===t?void 0:t.user}catch(e){return null}},a=async()=>{try{var e;let t=new r.Z,n=t.get("access_token"),l=await i.Z.get("/user",{headers:{token:n}});return null==l?void 0:null===(e=l.data)||void 0===e?void 0:e.user}catch(e){return null}},o=async e=>{try{var t;let n=await i.Z.post("/user/edit",{...e});if((null==n?void 0:null===(t=n.data)||void 0===t?void 0:t.user)!==void 0)return!0;return!1}catch(e){return!1}},d=async e=>{try{var t;let n=await i.Z.post("/user/edit/create",{...e});if((null==n?void 0:null===(t=n.data)||void 0===t?void 0:t.user)!==void 0)return!0;return!1}catch(e){return!1}}},901:function(e,t,n){"use strict";var r=n(6705);n(3568);var i=n(793);let l=e=>{var t=0;return null==e||e.map(e=>{t+=Number(null==e?void 0:e.priceSelling)*(null==e?void 0:e.ammount)}),String(t.toFixed(2))},s=e=>{var t=0;return null==e||e.map(e=>{(null==e?void 0:e.ammount)<1&&t++}),String(t)},a=e=>{var t=0;return null==e||e.map(e=>{(null==e?void 0:e.ammount)<5&&t++}),String(t)},o=(e,t)=>{var n=0;return null==e||e.map(e=>{var r;Number(null==e?void 0:e.state)>0&&(null==e||null===(r=e.items)||void 0===r||r.map(e=>{e.item._id===t&&(n=+Number(null==e?void 0:e.ammount))}))}),n},d=(e,t)=>{var n=0;return null==e||e.map(e=>{var r;Number(null==e?void 0:e.state)>0&&(null==e||null===(r=e.items)||void 0===r||r.map(e=>{var r;e.item._id===t&&(n=+(Number(null==e?void 0:e.ammount)*Number(null==e?void 0:null===(r=e.item)||void 0===r?void 0:r.priceSelling)))}))}),n},c=e=>{var t,n=[];return null==e||e.map(e=>{for(var r=0;r<(null==n?void 0:n.length);r++)t=n[r]===i.PX[null==e?void 0:e.brand],0===r&&n.slice(0,1);t||n.push(i.PX[null==e?void 0:e.brand])}),String(null==n?void 0:n.length)};t.ZP=e=>{let{items:t,orders:n,user:i}=e;return(0,r.jsx)("div",{className:"content-frame-container resume",children:(0,r.jsxs)("div",{style:{width:"100%",textAlign:"left"},children:[(0,r.jsx)("h1",{children:"Resumen de Inventario"}),(0,r.jsxs)("div",{className:"resumeContainer displayGridResponsive",style:{display:"flex"},children:[(0,r.jsxs)("div",{style:{padding:"1rem",paddingRight:"3rem",borderRight:"1px solid rgba(230, 230, 230, 0.5)"},children:[(0,r.jsx)("h1",{style:{color:"#1570EF",marginBottom:".3rem"},children:"Marcas"}),(0,r.jsx)("p",{children:c(t)})]}),(0,r.jsxs)("div",{style:{padding:"1rem",width:"100%",borderRight:"1px solid rgba(230, 230, 230, 0.5)"},children:[(0,r.jsx)("h1",{style:{color:"#E19133",marginBottom:".3rem"},children:"Total productos"}),(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:".3rem"},children:[(0,r.jsx)("p",{children:null==t?void 0:t.length}),(0,r.jsx)("p",{children:l(t)})]}),(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,r.jsx)("p",{style:{color:"#858D9D",fontSize:".8rem"},children:"Productos"}),(0,r.jsx)("p",{style:{color:"#858D9D",fontSize:".8rem"},children:" Valor en soles"})]})]}),(0,r.jsxs)("div",{style:{padding:"1rem",width:"100%",borderRight:"1px solid rgba(230, 230, 230, 0.5)"},children:[(0,r.jsx)("h1",{style:{color:"#58D365",marginBottom:".3rem"},children:"Total ventas"}),(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:".3rem"},children:[(0,r.jsx)("p",{children:o(n,String(null==i?void 0:i._id))}),(0,r.jsxs)("p",{children:[" ",d(n,String(null==i?void 0:i._id))]})]}),(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,r.jsx)("p",{style:{color:"#858D9D",fontSize:".8rem"},children:"Unidades"}),(0,r.jsx)("p",{style:{color:"#858D9D",fontSize:".8rem"},children:" Valor en soles"})]})]}),(0,r.jsxs)("div",{style:{padding:"1rem",width:"100%"},children:[(0,r.jsx)("h1",{style:{color:"#F36960",marginBottom:".3rem"},children:"Bajo Stock"}),(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:".3rem"},children:[(0,r.jsx)("p",{children:a(t)}),(0,r.jsxs)("p",{children:[" ",s(t)]})]}),(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,r.jsx)("p",{style:{color:"#858D9D",fontSize:".8rem"},children:"productos"}),(0,r.jsxs)("p",{style:{color:"#858D9D",fontSize:".8rem"},children:[" ","sin stock"]})]})]})]})]})})}},7009:function(e,t,n){"use strict";var r=n(6705),i=n(6821),l=n(3690);n(5420);var s=n(6691),a=n.n(s),o=n(1550),d=n.n(o),c=n(955),u=n(9110),v=n(4033);t.Z=e=>{let{user:t,frameContennt:n,route:s}=e,o=(0,v.useRouter)(),m=new u.Z,[h,y]=(0,c.useState)(!0);return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"responsiveButtonViewNavigation",style:{display:"none",width:"100%",textAlign:"right"},children:(0,r.jsx)("button",{style:{fontSize:".9rem",color:"grey",position:"absolute",top:"1rem",right:"1rem"},onClick:()=>y(!h),children:h?"Esconder barra de navegaci\xf3n":"Mostrar barra de navegaci\xf3n"})}),(0,r.jsxs)("div",{className:"sideBar",children:[(0,r.jsxs)("div",{className:"sidebarCustomStyle",style:{display:h?"block":"none"},children:[(0,r.jsx)(a(),{src:i.Z,alt:"Logo"}),(0,r.jsx)("img",{className:"avatar",alt:"",src:(null==t?void 0:t.imageLogo)!==""?null==t?void 0:t.imageLogo:l.Z.src}),(0,r.jsx)("h1",{className:"title",children:null==t?void 0:t.nameShop}),(0,r.jsx)("div",{style:{marginTop:"3rem"}}),(0,r.jsxs)("div",{className:"list",onClick:()=>o.push("/hub"),children:[(0,r.jsx)(d(),{style:{color:"dashboard"===s?"#1570EF":"black"},className:"icon",name:"home-outline"}),(0,r.jsx)("p",{style:{color:"dashboard"===s?"#1570EF":"black"},className:"text",children:"Dashboard"})]}),(0,r.jsxs)("div",{className:"list",onClick:()=>o.push("/inventory"),children:[(0,r.jsx)(d(),{style:{color:"inventory"===s?"#1570EF":"black"},className:"icon",name:"cart-outline"}),(0,r.jsx)("p",{style:{color:"inventory"===s?"#1570EF":"black"},className:"text",children:"Inventario Web"})]}),(0,r.jsxs)("div",{className:"list",children:[(0,r.jsx)(d(),{style:{color:"request"===s?"#1570EF":"black"},className:"icon",name:"person-outline"}),(0,r.jsx)("p",{style:{color:"request"===s?"#1570EF":"black"},className:"text",children:"Solicitudes"})]}),(0,r.jsxs)("div",{onClick:()=>o.push("/orders"),className:"list",children:[(0,r.jsx)(d(),{style:{color:"orders"===s?"#1570EF":"black"},className:"icon",name:"mail-unread-outline"}),(0,r.jsx)("p",{style:{color:"orders"===s?"#1570EF":"black"},className:"text",children:"Ordenes finales"})]}),(0,r.jsx)("div",{style:{marginTop:"3rem"}}),(0,r.jsxs)("div",{onClick:()=>o.push("/configuration"),className:"list",children:[(0,r.jsx)(d(),{style:{color:"configuration"===s?"#1570EF":"black"},className:"icon",name:"settings-outline"}),(0,r.jsx)("p",{style:{color:"configuration"===s?"#1570EF":"black"},className:"text",children:"Configuraci\xf3n"})]}),(0,r.jsxs)("div",{className:"list logout",onClick:async()=>{await m.remove("access_token"),setTimeout(()=>{window.location.reload()},1500)},children:[(0,r.jsx)(d(),{className:"icon",name:"log-out-outline"}),(0,r.jsx)("p",{className:"text",children:"Cerrar sesi\xf3n"})]})]}),(0,r.jsx)("div",{className:"sideBarContainer",children:n})]})]})}},793:function(e,t,n){"use strict";n.d(t,{FM:function(){return i},PX:function(){return r},rM:function(){return l}});let r=["Toyota","Nissan","Hyundai","BMW","Mercedes Benz","Kia","Chevrolet","Mitsubishi","Peugeot","Suzuki","Mazda","Volkswagen","Audi","Jeep","Land Rover","Volvo","Mini","Porsche","Geely","Otro"],i=["Partes de motor","Neumaticos","Otro"],l=["Genuino","Original","Alternativo","Segunda"]},3568:function(){},5420:function(){},3690:function(e,t){"use strict";t.Z={src:"/_next/static/media/blueimage.a34531f7.png",height:194,width:259,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGAQMAAADEy024AAAAA1BMVEUAAP79f+LBAAAACklEQVR42mNAAgAADAABbcxrYQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:6}},6821:function(e,t){"use strict";t.Z={src:"/_next/static/media/logopreferente.bbc72056.png",height:200,width:640,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAYElEQVR42g3HOxKCMBSG0e8nN+Irlkgtu3C0Y+duwYYZVkHBmwROd/SsPkFyArpr8c6BKX9U3MvaA4tJ+qa01Znd2rj2l1N4eTuXY9yGwvnQGOgH8S9ljhRngQcZR4BxB15DGcQuhSZBAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:3}}}]);