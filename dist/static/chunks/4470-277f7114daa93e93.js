(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4470],{4470:function(e,r,o){Promise.resolve().then(o.bind(o,52041))},52041:function(e,r,o){"use strict";o.r(r);var a=o(57437),t=o(27009),l=o(24033),n=o(2265),d=o(57719),s=o(81550),i=o.n(s);o(7081);var u=o(70508),c=o(74246);o(22990);var p=o(17483),m=o(5803),g=o(49882),b=o(58501),h=o(42105),A=o(7702);r.default=()=>{let e=(0,l.useRouter)(),[r,o]=(0,n.useState)(),[s,x]=(0,n.useState)(null),[y,f]=(0,n.useState)(""),[k,v]=(0,n.useState)(""),[w,C]=(0,n.useState)(null),[j,S]=(0,n.useState)(),[E,z]=(0,n.useState)(""),[R,B]=(0,n.useState)(""),[D,L]=(0,n.useState)(""),[N,O]=(0,n.useState)(),[P,T]=(0,n.useState)(""),[I,Q]=(0,n.useState)(""),[_,W]=(0,n.useState)(""),[F,Z]=(0,n.useState)(""),[U,q]=(0,n.useState)(""),[M,H]=(0,n.useState)(""),[V,X]=(0,n.useState)(),[K,Y]=(0,n.useState)(),G=async()=>{if(""!==y&&""!==k&&null!==w){let e={_id:null==r?void 0:r._id,owner_id:null==s?void 0:s._id,vehicle:y,plate:k,date:w,requirements:null!=j?j:[],sendedQuotes:null!=K?K:[],state:null==r?void 0:r.state},o=await (0,m.Wz)(e);null!==o?window.location.reload():p.fn.error("Ocurrio un problema","Error")}else p.fn.error("Completa los datos","Error")},J=async()=>{let o=await (0,m.UR)(String(null==r?void 0:r._id));null!==o?e.push("/quotes"):p.fn.error("Ocurrio un problema","Error")},$=async()=>{let r=await (0,d.PR)();if(null==r){e.push("/");return}if((null==r?void 0:r.type)!=="workshop")return e.push("/hub");let a=await (0,m.QR)(null==r?void 0:r._id),t=new URLSearchParams(window.location.search),l=t.get("id");if(null!==l&&(null==l?void 0:l.length)>0){let r=null==a?void 0:a.find(e=>e._id===l);null!=r?(o(r),S(null==r?void 0:r.requirements),Y(null==r?void 0:r.sendedQuotes),f(null==r?void 0:r.vehicle),v(null==r?void 0:r.plate),C(null==r?void 0:r.date)):e.push("/quotes")}else e.push("/quotes");x(r)},ee=async e=>{let r=e.target.files[0],o=new FileReader;o.readAsDataURL(r),o.onload=()=>{z(String(o.result))},o.onerror=e=>{console.log(e)}},er=async e=>{let r=e.target.files[0],o=new FileReader;o.readAsDataURL(r),o.onload=()=>{T(String(o.result))},o.onerror=e=>{console.log(e)}},[eo,ea]=(0,n.useState)(0),et=()=>ea(window.innerWidth);(0,n.useEffect)(()=>($(),et(),window.addEventListener("resize",et),()=>window.removeEventListener("resize",et)),[]);let el=[{label:"Imagen",renderCell:e=>(0,a.jsx)("img",{style:{width:"105px",maxHeight:"105px"},src:(null==e?void 0:e.image)!==""?e.image:A.Z.src,alt:"Product Image"})},{label:"Nombre de Producto",renderCell:e=>(0,a.jsx)("p",{children:null==e?void 0:e.name})},{label:"C\xf3digo de repuesto",renderCell:e=>(0,a.jsx)("p",{children:null==e?void 0:e.code})},{label:"",renderCell:e=>(0,a.jsx)(i(),{onClick:()=>{S(null==j?void 0:j.filter((r,o)=>(null==e?void 0:e.name)!==j[o].name))},name:"trash-outline",style:{cursor:"pointer",color:"#E43E1B",fontSize:"1.2rem"}})}],en=[{label:"Imagen",renderCell:e=>(0,a.jsx)("img",{style:{width:"105px",maxHeight:"105px"},src:(null==e?void 0:e.image)!==""?e.image:A.Z.src,alt:"Product Image"})},{label:"Nombre de Producto",renderCell:e=>(0,a.jsx)("p",{children:null==e?void 0:e.product})},{label:"Proveedor",renderCell:e=>(0,a.jsx)("p",{children:null==e?void 0:e.provider})},{label:"Marca",renderCell:e=>(0,a.jsx)("p",{children:null==e?void 0:e.brand})},{label:"Precio",renderCell:e=>(0,a.jsxs)("p",{children:["s/. ",null==e?void 0:e.price]})},{label:"Tiempo de env\xedo",renderCell:e=>(0,a.jsxs)("p",{children:[" ",null==e?void 0:e.timeDeliveried]})},{label:"",renderCell:e=>(0,a.jsx)(i(),{onClick:()=>{Y(null==K?void 0:K.filter((r,o)=>(null==e?void 0:e.product)!==K[o].product))},name:"trash-outline",style:{cursor:"pointer",color:"#E43E1B",fontSize:"1.2rem"}})}],ed=(0,g.u)([(0,b.g)(),{Table:"\n            --data-table-library_grid-template-columns: 150px 300px 200px 100px !important;\n             "}]),es=(0,g.u)([(0,b.g)(),{Table:"\n            --data-table-library_grid-template-columns: 150px 300px 180px 180px 180px 180px 180px  !important;\n             "}]);return(0,a.jsx)(a.Fragment,{children:null===s?(0,a.jsx)(i(),{name:"chevron-collapse-outline",className:"rotateItem",color:"#1366D9",style:{fontSize:"1.5rem",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}):(0,a.jsx)(t.Z,{user:s,route:"quotes",frameContennt:(0,a.jsxs)("div",{style:{maxWidth:"100%"},children:[(0,a.jsx)("p",{style:{color:"grey"},children:"Editar cotizaci\xf3n"}),(0,a.jsx)("h1",{style:{fontSize:"1.1rem",fontWeight:"500",marginTop:"1rem"},children:"Detalle de cotizaci\xf3n"}),(0,a.jsxs)("div",{style:{marginTop:".5rem",display:"flex",justifyContent:"space-between"},children:[(0,a.jsx)("input",{value:y,onChange:e=>f(e.target.value),placeholder:"Veh\xedculo",className:"border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"}}),(0,a.jsx)("input",{value:k,onChange:e=>v(e.target.value),placeholder:"Placa",className:"border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"}}),(0,a.jsx)("input",{value:w,onChange:e=>C(e.target.value),placeholder:"Placa",type:"datetime-local",className:"border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"}})]}),(0,a.jsxs)("div",{style:{display:"flex",marginTop:"2rem",marginBottom:"1rem"},children:[(0,a.jsx)("h1",{style:{fontSize:"1.1rem",fontWeight:"500"},children:"Productos"}),(0,a.jsx)("button",{className:"buttonsWithouthPadding",onClick:()=>O(!0),style:{marginLeft:"1rem",fontSize:".8rem",borderRadius:".5rem",padding:".2rem",paddingLeft:"1rem",paddingRight:"1rem",marginRight:"1rem",backgroundColor:"transparent",color:"#1366D9",border:"1px solid #1366D9"},children:"+"})]}),(0,a.jsx)("div",{style:{maxWidth:"100%"},children:(0,a.jsx)(h._,{theme:ed,layout:{custom:!0,horizontalScroll:!0},columns:el,data:{nodes:null!=j?j:[]}})}),(0,a.jsxs)("div",{style:{display:"flex",marginTop:"2rem",marginBottom:"1rem"},children:[(0,a.jsx)("h1",{style:{fontSize:"1.1rem",fontWeight:"500"},children:"Cotizaciones"}),(0,a.jsx)("button",{className:"buttonsWithouthPadding",onClick:()=>X(!0),style:{marginLeft:"1rem",fontSize:".8rem",borderRadius:".5rem",padding:".2rem",paddingLeft:"1rem",paddingRight:"1rem",marginRight:"1rem",backgroundColor:"transparent",color:"#1366D9",border:"1px solid #1366D9"},children:"+"})]}),(0,a.jsx)("div",{style:{width:"100%"},children:(0,a.jsx)(h._,{theme:es,layout:{custom:!0,horizontalScroll:!0},columns:en,data:{nodes:null!=K?K:[]}})}),(0,a.jsxs)("div",{style:{width:"100%",textAlign:"center",marginTop:"2rem"},children:[(0,a.jsx)("button",{onClick:()=>J(),style:{width:"max-content",background:"rgb(21, 112, 239)",color:"white",padding:".5rem",borderRadius:".2rem",cursor:"pointer"},children:" Confirmar"}),(0,a.jsx)("button",{onClick:()=>G(),style:{marginLeft:"1rem",width:"max-content",color:"rgb(21, 112, 239)",background:"transparent",padding:".5rem",borderRadius:".2rem",cursor:"pointer",border:"1px solid #DEE2E7"},children:"Editar Cotizaci\xf3n"})]}),(0,a.jsx)(u.Z,{closeIcon:(0,a.jsx)(i(),{name:"close"}),styles:{modal:{borderRadius:"1rem",padding:"0rem",maxWidth:eo<921?"90%":"900px"},closeIcon:{color:"white !important"},overlay:{backgroundColor:"rgba(220, 217, 217, 0.5)"}},open:N,center:!0,onClose:()=>O(!1),children:(0,a.jsxs)("div",{style:{padding:"1rem"},children:[(0,a.jsx)("p",{style:{color:"grey"},children:"Toca para cambiar la imagen"}),(0,a.jsxs)("label",{htmlFor:"imageLogo",style:{cursor:"pointer"},children:[(0,a.jsx)("img",{style:{width:"150px",height:"150px",borderRadius:"100%",padding:"1rem",marginRight:"auto",marginLeft:"auto"},src:""!==E?E:c.Z.src,alt:"Logo"}),(0,a.jsx)("input",{accept:"image",id:"imageLogo",onChange:ee,type:"file",placeholder:"Subir archivo",style:{visibility:"hidden",display:"none"}})]}),(0,a.jsxs)("div",{style:{marginTop:".5rem",display:"flex",justifyContent:"space-between"},children:[(0,a.jsx)("input",{value:R,onChange:e=>B(e.target.value),placeholder:"Nombre de producto",className:"border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"}}),(0,a.jsx)("input",{value:D,onChange:e=>L(e.target.value),placeholder:"Codigo de repuesto",className:"border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"}})]}),(0,a.jsx)("div",{style:{width:"100%",textAlign:"right",marginTop:"2rem"},children:(0,a.jsx)("div",{onClick:()=>{""!==R&&""!==D?(S([...null!=j?j:[],{image:null!=E?E:"",name:R,code:D}]),z(""),B(""),L(""),O(!1)):p.fn.error("Completa el formulario","Error")},style:{color:"rgb(21, 112, 239)",cursor:"pointer"},children:"Guardar"})})]})}),(0,a.jsx)(u.Z,{closeIcon:(0,a.jsx)(i(),{name:"close"}),styles:{modal:{borderRadius:"1rem",padding:"0rem",maxWidth:eo<921?"90%":"900px"},closeIcon:{color:"white !important"},overlay:{backgroundColor:"rgba(220, 217, 217, 0.5)"}},open:V,center:!0,onClose:()=>X(!1),children:(0,a.jsxs)("div",{style:{padding:"1rem"},children:[(0,a.jsx)("p",{style:{color:"grey"},children:"Toca para cambiar la imagen"}),(0,a.jsxs)("label",{htmlFor:"imageLogo",style:{cursor:"pointer"},children:[(0,a.jsx)("img",{style:{width:"150px",height:"150px",borderRadius:"100%",padding:"1rem",marginRight:"auto",marginLeft:"auto"},src:""!==P?P:c.Z.src,alt:"Logo"}),(0,a.jsx)("input",{accept:"image",id:"imageLogo",onChange:er,type:"file",placeholder:"Subir archivo",style:{visibility:"hidden",display:"none"}})]}),(0,a.jsxs)("select",{onChange:e=>Q(e.target.value),className:"border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"},children:[(0,a.jsx)("option",{value:"",children:(null==j?void 0:j.length)>0?"Productos":"Todavia no agregaste productos"}),null==j?void 0:j.map(e=>(0,a.jsx)("option",{value:null==e?void 0:e.name,children:null==e?void 0:e.name}))]}),(0,a.jsxs)("div",{style:{marginTop:".5rem",display:"flex",justifyContent:"space-between"},children:[(0,a.jsx)("input",{value:_,onChange:e=>W(e.target.value),placeholder:"Proveedor",className:"border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"}}),(0,a.jsx)("input",{value:F,onChange:e=>Z(e.target.value),placeholder:"Marca",className:"border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"}})]}),(0,a.jsxs)("div",{style:{marginTop:".5rem",display:"flex",justifyContent:"space-between"},children:[(0,a.jsx)("input",{value:M,onChange:e=>H(e.target.value),placeholder:"Precio",className:"border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"}}),(0,a.jsx)("input",{value:U,onChange:e=>q(e.target.value),placeholder:"Tiempo de envio",className:"border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"}})]}),(0,a.jsx)("div",{style:{width:"100%",textAlign:"right",marginTop:"2rem"},children:(0,a.jsx)("div",{onClick:()=>{""!==I&&""!==_&&""!==F&&""!==U?(Y([...null!=K?K:[],{product:I,provider:_,brand:F,price:M,timeDeliveried:U,image:P}]),H(""),Q(""),T(""),q(""),W(""),H(""),X(!1)):p.fn.error("Completa el formulario","Error")},style:{color:"rgb(21, 112, 239)",cursor:"pointer"},children:"Guardar"})})]})})]})})})}},7081:function(){},7702:function(e,r){"use strict";r.Z={src:"/_next/static/media/greyimage.9b2d2444.jpg",height:490,width:735,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AIwAH//Z",blurWidth:8,blurHeight:5}},74246:function(e,r){"use strict";r.Z={src:"/_next/static/media/productImage.c22ed7cc.png",height:201,width:213,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAANlBMVEX////u7u5pZ2dwcG9JSUn8/Pycm5q1tLP29vXZ2NjMy8qCgoHBwL97enmVlZRjYV6npqQpKCkOe5RlAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPElEQVR4nCXLSxKAMAjA0FCg0L/e/7KOusm8TQBp6YDXYqXhzNvsFbHOWTESiR46a8DWPa6eOFX/Dfn6ADVVAXFb3kC/AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}}}]);