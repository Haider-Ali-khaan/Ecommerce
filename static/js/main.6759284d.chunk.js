(this.webpackJsonpcart=this.webpackJsonpcart||[]).push([[2],{43:function(e,t,i){},54:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i(14),c=i.n(a),s=(i(43),i(25)),r=i(16),o=i(8),l=i(57),u=i(24),m=i(3),j=i(56),d=i(1);function b(){document.title="Loading";var e=Object(n.useState)(0),t=Object(o.a)(e,2),i=t[0],a=t[1];Object(n.useEffect)((function(){var e=setInterval((function(){a((function(t){var i=t+10;return 80===i&&clearInterval(e),i}))}),1)}),[]);return Object(d.jsx)(j.a,{style:{height:"0.3rem"},min:"0",max:"100",now:i})}var g=Object(n.lazy)((function(){return i.e(8).then(i.bind(null,94))})),p=Object(n.lazy)((function(){return Promise.all([i.e(0),i.e(5)]).then(i.bind(null,105))})),f=Object(n.lazy)((function(){return Promise.all([i.e(0),i.e(6)]).then(i.bind(null,95))})),O=Object(n.lazy)((function(){return Promise.all([i.e(0),i.e(9)]).then(i.bind(null,96))})),h=Object(n.lazy)((function(){return i.e(14).then(i.bind(null,97))})),x=Object(n.lazy)((function(){return Promise.all([i.e(1),i.e(13)]).then(i.bind(null,98))})),y=Object(n.lazy)((function(){return Promise.all([i.e(1),i.e(10)]).then(i.bind(null,99))})),v=Object(n.lazy)((function(){return i.e(7).then(i.bind(null,100))})),S=Object(n.lazy)((function(){return i.e(11).then(i.bind(null,101))})),L=Object(n.lazy)((function(){return i.e(15).then(i.bind(null,102))})),P=Object(n.lazy)((function(){return Promise.all([i.e(0),i.e(12)]).then(i.bind(null,103))}));var q=function(){var e;e=null===localStorage.getItem("items")?[]:JSON.parse(localStorage.getItem("items"));var t=Object(n.useState)([{sno:1,qty:1,name:"Niker",price:13,totalPrice:13,img:"assets/images/products/fashion_03.jpg",title:"T-Shirt Raw Hem Organic Boro Constrast Denim",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero excepturi dolorum sequi.",desc:"<ul>\n      <li>7,9-inch LED-backlit, 130Gb</li>\n      <li>Dual-core A7 with quad-core graphics</li>\n      <li>FaceTime HD Camera 7.0 MP Photos</li>\n    </ul>",new:!0},{sno:2,qty:1,name:"T-Shirt",price:11,totalPrice:11,img:"assets/images/products/fashion_07.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero excepturi dolorum sequi."},{sno:3,qty:1,name:"Bag",price:15,totalPrice:15,img:"assets/images/products/fashion_08.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero excepturi dolorum sequi.",sale:!0},{sno:4,qty:1,name:"Shirt",price:131,totalPrice:131,img:"assets/images/products/fashion_09.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero excepturi dolorum sequi."},{sno:5,qty:1,name:"Bag",price:31,totalPrice:31,img:"assets/images/products/fashion_02.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero excepturi dolorum sequi."},{sno:6,qty:1,name:"Shoe",price:31,totalPrice:31,img:"assets/images/products/fashion_05.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero excepturi dolorum sequi.",Bestseller:!0},{sno:7,qty:1,name:"Bag",price:31,totalPrice:31,img:"assets/images/products/fashion_08.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero excepturi dolorum sequi.",new:!0,Bestseller:!0},{sno:8,qty:1,name:"watch",price:131,totalPrice:131,img:"assets/images/products/fashion_04.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero excepturi dolorum sequi."},{sno:9,qty:1,name:"watch",price:19,totalPrice:19,img:"assets/images/products/fashion_01.jpg",info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero excepturi dolorum sequi.",sale:!0,Bestseller:!0}]),i=Object(o.a)(t,1)[0],a={responsiveClass:!0,items:5,stagePadding:0,mergeFit:!0,loop:!0,margin:10,autoplay:!0,autoplayTimeout:2e3,autoplayHoverPause:!0,responsive:{0:{items:1},400:{items:1},600:{items:2},700:{items:3},1e3:{items:5}}},c=Object(n.useState)(!1),j=Object(o.a)(c,2),q=j[0],w=j[1],F=Object(n.useState)(!1),I=Object(o.a)(F,2),N=I[0],T=I[1];Object(n.useEffect)((function(){sessionStorage.setItem("login",JSON.stringify(N))}),[N]);var C=Object(n.useState)(""),z=Object(o.a)(C,2),A=z[0],B=z[1],V=Object(n.useState)(!1),_=Object(o.a)(V,2),k=_[0],D=_[1],E=Object(n.useState)(!1),J=Object(o.a)(E,2),H=J[0],R=J[1],Y=Object(d.jsx)(l.a,{className:"alrta",variant:"danger",children:"product already in cart"}),G=Object(d.jsx)(l.a,{className:"alrta",variant:"success",children:"Product has been added into cart"}),M=Object(d.jsx)(l.a,{className:"alrta",variant:"danger",children:"Product romoved from cart"}),K=Object(d.jsx)(l.a,{className:"alrta",variant:"success",children:"You are Loged In"}),Q=Object(d.jsx)(l.a,{className:"alrta",variant:"danger",children:"You are Loged Out"}),U=Object(d.jsx)(l.a,{className:"alrta",variant:"success",children:"Successfully created your account! You can now Log In"}),W=Object(d.jsx)(l.a,{className:"alrta",variant:"danger",children:"please Log In for this feature"}),X=function(){console.log("alrt"),R(!0),setTimeout((function(){R(!1)}),3e3)},Z=Object(n.useState)(!1),$=Object(o.a)(Z,2),ee=$[0],te=$[1],ie=function(e){!0===N?Object(r.a)(le).find((function(t){return e.sno===t.sno}))?(te(!0),setTimeout((function(){te(!1)}),5e3)):(ue([].concat(Object(r.a)(le),[Object(s.a)({},e)])),B(!0),setTimeout((function(){B("")}),5e3)):X()},ne=Object(n.useState)([]),ae=Object(o.a)(ne,2),ce=ae[0],se=ae[1],re=Object(n.useState)(e),oe=Object(o.a)(re,2),le=oe[0],ue=oe[1];Object(n.useEffect)((function(){localStorage.setItem("items",JSON.stringify(le))}),[le]);var me=Object(n.useState)(1),je=Object(o.a)(me,2),de=je[0],be=je[1],ge=function(e){be(e.sno)};return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(u.a,{children:Object(d.jsxs)(n.Suspense,{fallback:Object(d.jsx)(b,{}),children:[Object(d.jsx)(g,{cart:le,chkAlert:ee,ckalrt:Y,alert:A,alrtAdded:G,alrtRemoved:M,alrtLogIn:K,alrtLogout:Q,showalrt:q,alrtCreatedAccount:U,logdlrt:k,alertForLogin:H,showAlertForLogin:W,login:N,logout:function(){T(!1),B("logout"),setTimeout((function(){B("")}),3e3)},setsrchproduct:se,items2:i,srchproduct:ce,selectitem:ge,AddtoCart:ie}),Object(d.jsxs)(m.d,{children:[Object(d.jsx)(m.b,{exact:!0,path:"/",children:Object(d.jsx)(p,{items2:i,selectitem:ge,options:a})}),Object(d.jsx)(m.b,{exact:!0,path:"/cart",children:Object(d.jsx)(f,{cart:le,login:N,alert:A,alrtRemoved:M,reduce:function(e){if(e.qty>1){var t=Object(r.a)(le),i=t.find((function(t){return e.sno===t.sno}));i&&(i.qty--,i.totalPrice-=i.price),ue(t)}},increment:function(e){var t=Object(r.a)(le),i=t.find((function(t){return e.sno===t.sno}));if(i){i.qty++;var n=i.price;i.totalPrice+=n}ue(t)},removeCart:function(e){ue(le.filter((function(t){return t!==e}))),B(!1),setTimeout((function(){B("")}),3e3)},clearCart:function(){ue([]),B(!1),setTimeout((function(){B("")}),3e3)},items2:i,selectitem:ge,options:a})}),Object(d.jsx)(m.b,{exact:!0,path:"/ItemDetail",children:Object(d.jsx)(O,{items2:i,addToCart:function(){i.map((function(e){return e.sno===de&&ie(e),""}))},selectitem:ge,indx:de,options:a})}),Object(d.jsx)(m.b,{exact:!0,path:"/shop",children:Object(d.jsx)(h,{items2:i,AddtoCart:ie,login:N,setalertForLogin:R,selectitem:ge,showAlertForLogin:W,showAlertForLoginf:X})}),Object(d.jsx)(m.b,{exact:!0,path:"/register",children:Object(d.jsx)(x,{setShowalrt:w})}),Object(d.jsx)(m.b,{exact:!0,path:"/login",children:Object(d.jsx)(y,{setLogdlrt:D,login:N,setlogin:T,setAlert:B})}),Object(d.jsx)(m.b,{exact:!0,path:"/pageNotFound",children:Object(d.jsx)(S,{})}),Object(d.jsx)(m.b,{exact:!0,path:"/search",children:Object(d.jsx)(L,{srchproduct:ce,items2:i})}),Object(d.jsx)(m.b,{exact:!0,path:"/practice",children:Object(d.jsx)(P,{items2:i})}),Object(d.jsx)(m.a,{to:"/pageNotFound"})]}),Object(d.jsx)(v,{})]})})})},w=function(e){e&&e instanceof Function&&i.e(16).then(i.bind(null,104)).then((function(t){var i=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;i(e),n(e),a(e),c(e),s(e)}))};i(30),i(53);c.a.render(Object(d.jsx)(q,{}),document.getElementById("root")),w()}},[[54,3,4]]]);
//# sourceMappingURL=main.6759284d.chunk.js.map