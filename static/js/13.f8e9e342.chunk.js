(this.webpackJsonpcart=this.webpackJsonpcart||[]).push([[13],{98:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var s=a(8),r=a(0),c=a(3),l=a(24),n=a(63),i=a.n(n),m=a(1);function d(e){document.title="register";var t=Object(r.useState)(""),a=Object(s.a)(t,2),n=a[0],d=a[1],j=Object(r.useState)(""),o=Object(s.a)(j,2),b=o[0],h=o[1],u=Object(r.useState)(""),f=Object(s.a)(u,2),p=f[0],O=f[1],x=Object(r.useState)(""),g=Object(s.a)(x,2),N=g[0],w=g[1],v=Object(r.useState)(!1),y=Object(s.a)(v,2),S=y[0],C=y[1];return Object(m.jsxs)(m.Fragment,{children:[!0===S&&Object(m.jsx)(c.a,{to:"/login"}),Object(m.jsx)("main",{id:"main",className:"main-site left-sidebar",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("div",{className:"wrap-breadcrumb",children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{className:"item-link",children:Object(m.jsx)(l.b,{to:"/",className:"link",children:"home"})}),Object(m.jsx)("li",{className:"item-link",children:Object(m.jsx)("span",{children:"Register"})})]})}),Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"col-lg-6 col-sm-6 col-md-6 col-xs-12 col-md-offset-3",children:Object(m.jsx)("div",{className:" main-content-area",children:Object(m.jsx)("div",{className:"wrap-login-item ",children:Object(m.jsx)("div",{className:"register-form form-item ",children:Object(m.jsxs)("div",{className:"frm",children:[Object(m.jsxs)("fieldset",{className:"wrap-title",children:[Object(m.jsx)("h3",{className:"form-title",children:"Create an account"}),Object(m.jsx)("h4",{className:"form-subtitle",children:"Personal infomation"})]}),Object(m.jsxs)("fieldset",{className:"wrap-input",children:[Object(m.jsx)("label",{htmlFor:"frm-reg-lname",children:"Name*"}),Object(m.jsx)("input",{type:"text",id:"frm-reg-lname",name:"reg-lname",placeholder:"Name*",value:n,onChange:function(e){return d(e.target.value)}})]}),Object(m.jsxs)("fieldset",{className:"wrap-input",children:[Object(m.jsx)("label",{htmlFor:"frm-reg-email",children:"Email Address*"}),Object(m.jsx)("input",{type:"email",id:"frm-reg-email",name:"reg-email",placeholder:"Email address",value:b,onChange:function(e){return h(e.target.value)}})]}),Object(m.jsx)("fieldset",{className:"wrap-functions ",children:Object(m.jsxs)("label",{className:"remember-field",children:[Object(m.jsx)("input",{name:"newletter",id:"new-letter",value:"forever",type:"checkbox"}),Object(m.jsx)("span",{children:"Sign Up for Newsletter"})]})}),Object(m.jsx)("fieldset",{className:"wrap-title",children:Object(m.jsx)("h3",{className:"form-title",children:"Login Information"})}),Object(m.jsxs)("fieldset",{className:"wrap-input item-width-in-half left-item ",children:[Object(m.jsx)("label",{htmlFor:"frm-reg-pass",children:"Password *"}),Object(m.jsx)("input",{type:"text",id:"frm-reg-pass",name:"reg-pass",placeholder:"Password",value:p,onChange:function(e){return O(e.target.value)}})]}),Object(m.jsxs)("fieldset",{className:"wrap-input item-width-in-half ",children:[Object(m.jsx)("label",{htmlFor:"frm-reg-cfpass",children:"Confirm Password *"}),Object(m.jsx)("input",{type:"text",id:"frm-reg-cfpass",name:"reg-cfpass",placeholder:"Confirm Password",value:N,onChange:function(e){return w(e.target.value)}})]}),Object(m.jsx)("button",{className:"btn",onClick:function(){return function(){if(""===n||""===b||""===p||""===N)alert("Email, Name or Password  is Empty");else if(!p===N)alert("Passwords not Matched");else{var t=new FormData;t.append("username",n),t.append("password",p),i.a.post("registration.php",t).then((function(e){return e.data})).then((function(t){!0===t?(C(!0),d(""),O(""),e.setShowalrt(!0),setTimeout((function(){e.setShowalrt(!1)}),4e3)):!1===t?alert("this username already used try another username"):"some error occurred"===t&&alert("some error occurred please try again letter")})).catch((function(){alert("some error accrued please try again")}))}}()},children:"Submit"})]})})})})})})]})})]})}}}]);
//# sourceMappingURL=13.f8e9e342.chunk.js.map