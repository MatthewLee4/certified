(this.webpackJsonpcertified=this.webpackJsonpcertified||[]).push([[0],{80:function(e,a,t){},81:function(e,a,t){},83:function(e,a,t){},93:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(9),i=t.n(c),s=(t(80),t(81),t(82),t(54)),o=t(12),l=t(57),d=(t(83),t(127)),m=t(134),j=t(131),u=t(128),b=t(132),p=t(59),h=t(122),x=t(44),g=t(45),O=t(124),f=t(126),v=t(5),y=Object(h.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(https://source.unsplash.com/random)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},icons:{margin:e.spacing(1)}}}));var w=function(){var e=y(),a=r.a.useState(null),t=Object(l.a)(a,2),n=t[0],c=t[1];return r.a.useEffect((function(){fetch("/api").then((function(e){return e.json()})).then((function(e){return c(e.message)}))}),[]),Object(v.jsxs)(O.a,{container:!0,component:"main",className:e.root,children:[Object(v.jsx)(O.a,{item:!0,xs:!1,sm:4,md:7,className:e.image}),Object(v.jsx)(O.a,{item:!0,xs:12,sm:8,md:5,component:f.a,elevation:6,square:!0,children:Object(v.jsx)(b.a,{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh",children:Object(v.jsxs)("div",{className:e.paper,children:[Object(v.jsx)(m.a,{className:e.avatar}),Object(v.jsx)("p",{children:n||"Loading..."}),Object(v.jsx)(p.a,{component:"h1",variant:"h5",children:"Sign Up"}),Object(v.jsxs)("form",{className:e.form,noValidate:!0,children:[Object(v.jsx)(j.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Name",name:"name",autoComplete:"name",autoFocus:!0}),Object(v.jsx)(j.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),Object(v.jsx)(j.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",placeholder:"6+ Characters, 1 UpperCase, 1 number"}),Object(v.jsx)(d.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Create Account"}),Object(v.jsx)(O.a,{container:!0,justify:"center",className:e.icons,children:Object(v.jsxs)(b.a,{m:1,pt:1,children:[Object(v.jsx)(x.a,{icon:g.b,size:"2x"}),Object(v.jsx)(x.a,{icon:g.a,size:"2x"}),Object(v.jsx)(x.a,{icon:g.c,size:"2x"})]})}),Object(v.jsx)(O.a,{container:!0,justify:"center",children:Object(v.jsx)(O.a,{item:!0,children:Object(v.jsx)(u.a,{href:"/signin",variant:"body1",children:"Already have an account? Login"})})})]})]})})})]})},C=t(129),N=t(130),k=t(133),S=Object(h.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(https://source.unsplash.com/random)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function E(){var e=S();return Object(v.jsxs)(O.a,{container:!0,component:"main",className:e.root,children:[Object(v.jsx)(C.a,{}),Object(v.jsx)(O.a,{item:!0,xs:!1,sm:4,md:7,className:e.image}),Object(v.jsx)(O.a,{item:!0,xs:12,sm:8,md:5,component:f.a,elevation:6,square:!0,children:Object(v.jsxs)("div",{className:e.paper,children:[Object(v.jsx)(m.a,{className:e.avatar}),Object(v.jsx)(p.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(v.jsxs)("form",{className:e.form,noValidate:!0,children:[Object(v.jsx)(j.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),Object(v.jsx)(j.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),Object(v.jsx)(N.a,{control:Object(v.jsx)(k.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(v.jsx)(d.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Sign In"}),Object(v.jsxs)(O.a,{container:!0,children:[Object(v.jsx)(O.a,{item:!0,xs:!0,children:Object(v.jsx)(u.a,{href:"#",variant:"body2",children:"Forgot password?"})}),Object(v.jsx)(O.a,{item:!0,children:Object(v.jsx)(u.a,{href:"#",variant:"body2",children:"Don't have an account? Sign Up"})})]}),Object(v.jsx)(b.a,{mt:5})]})]})})]})}var F=function(){return Object(v.jsx)("div",{children:Object(v.jsx)("h1",{children:"TEST PAGE"})})},I=function(){return Object(v.jsx)("div",{children:Object(v.jsx)(s.a,{children:Object(v.jsxs)(o.c,{children:[Object(v.jsx)(o.a,{path:"/",exact:!0,children:Object(v.jsx)(w,{})}),Object(v.jsx)(o.a,{path:"/signin",exact:!0,children:Object(v.jsx)(E,{})}),Object(v.jsx)(o.a,{path:"/test",exact:!0,children:Object(v.jsx)(F,{})})]})})})};var P=function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(I,{})})},T=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,137)).then((function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,c=a.getLCP,i=a.getTTFB;t(e),n(e),r(e),c(e),i(e)}))},q=t(56),A="UPDATE_STORE",W={test:[],users:[]},z=t(43),D=Object(z.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case A:return{state:e};default:return e}}),{test:[],users:[]});i.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(q.a,{store:D,children:Object(v.jsx)(P,{})})}),document.getElementById("root")),T()}},[[93,1,2]]]);
//# sourceMappingURL=main.4924f0f1.chunk.js.map