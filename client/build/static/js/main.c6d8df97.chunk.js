(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{71:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var c=n(3),a=n.n(c),r=n(54),i=n.n(r),s=(n(71),n(5)),o=n(11),l=n(6),d=n(60),j=n(88),u=n(90),b=n(87),O=n(58),p=n(8);function h(e,t,n){return new Promise((function(c,a){var r,i,s,o=window.indexedDB.open("shop-shop",1);o.onupgradeneeded=function(e){var t=o.result;t.createObjectStore("products",{keyPath:"_id"}),t.createObjectStore("categories",{keyPath:"_id"}),t.createObjectStore("cart",{keyPath:"_id"})},o.onerror=function(e){console.log("There was an error")},o.onsuccess=function(a){switch(r=o.result,i=r.transaction(e,"readwrite"),s=i.objectStore(e),r.onerror=function(e){console.log("error",e)},t){case"put":s.put(n),c(n);break;case"get":var l=s.getAll();l.onsuccess=function(){c(l.result)};break;case"delete":s.delete(n._id);break;default:console.log("No valid method")}i.oncomplete=function(){r.close()}}}))}var m=n(61),f=n(25),x="UPDATE_PRODUCTS",g="ADD_TO_CART",v="ADD_MULTIPLE_TO_CART",y="REMOVE_FROM_CART",w="UPDATE_CART_QUANTITY",_="TOGGLE_CART",k="UPDATE_CATEGORIES",N="UPDATE_CURRENT_CATEGORY",C=function(e,t){switch(t.type){case x:return Object(s.a)(Object(s.a)({},e),{},{products:Object(f.a)(t.products)});case g:return Object(s.a)(Object(s.a)({},e),{},{cartOpen:!0,cart:[].concat(Object(f.a)(e.cart),[t.product])});case v:return Object(s.a)(Object(s.a)({},e),{},{cart:[].concat(Object(f.a)(e.cart),Object(f.a)(t.products))});case w:return Object(s.a)(Object(s.a)({},e),{},{cartOpen:!0,cart:e.cart.map((function(e){return t._id===e._id&&(e.purchaseQuantity=t.purchaseQuantity),e}))});case y:var n=e.cart.filter((function(e){return e._id!==t._id}));return Object(s.a)(Object(s.a)({},e),{},{cartOpen:n.length>0,cart:n});case"CLEAR_CART":return Object(s.a)(Object(s.a)({},e),{},{cartOpen:!1,cart:[]});case _:return Object(s.a)(Object(s.a)({},e),{},{cartOpen:!e.cartOpen});case k:return Object(s.a)(Object(s.a)({},e),{},{categories:Object(f.a)(t.categories)});case N:return Object(s.a)(Object(s.a)({},e),{},{currentCategory:t.currentCategory});default:return e}};var S=n(1),T=["value"],E=Object(c.createContext)(),A=E.Provider,$=function(e){e.value;var t,n=Object(m.a)(e,T),a=(t={products:[],cart:[],cartOpen:!1,categories:[],currentCategory:""},Object(c.useReducer)(C,t)),r=Object(p.a)(a,2),i=r[0],o=r[1];return Object(S.jsx)(A,Object(s.a)({value:[i,o]},n))},I=function(){return Object(c.useContext)(E)};var D,P,Q,R,F,U=function(e){var t=I(),n=Object(p.a)(t,2),c=n[0],a=n[1],r=e.image,i=e.name,l=e._id,d=e.price,j=(e.quantity,c.cart);return Object(S.jsxs)("div",{className:"card px-1 py-1",children:[Object(S.jsxs)(o.b,{to:"/products/".concat(l),children:[Object(S.jsx)("img",{alt:i,src:"/images/".concat(r)}),Object(S.jsx)("p",{children:i})]}),Object(S.jsx)("div",{children:Object(S.jsxs)("span",{children:["$",d]})}),Object(S.jsx)("button",{onClick:function(){var t=j.find((function(e){return e._id===l}));t?(a({type:w,_id:l,purchaseQuantity:parseInt(t.purchaseQuantity)+1}),h("cart","put",Object(s.a)(Object(s.a)({},t),{},{purchaseQuantity:parseInt(t.purchaseQuantity)+1}))):(a({type:g,product:Object(s.a)(Object(s.a)({},e),{},{purchaseQuantity:1})}),h("cart","put",Object(s.a)(Object(s.a)({},e),{},{purchaseQuantity:1})))},children:"Add to cart"})]})},L=n(62),q=n(22),W=n(89),B=Object(W.a)(D||(D=Object(q.a)(["\n  query getProducts($category: ID) {\n    products(category: $category) {\n      _id\n      name\n      description\n      price\n      quantity\n      image\n      category {\n        _id\n      }\n    }\n  }\n"]))),G=Object(W.a)(P||(P=Object(q.a)(["\n  query getCheckout($products: [ID]!) {\n    checkout(products: $products) {\n      session\n    }\n  }\n"]))),Y=(Object(W.a)(Q||(Q=Object(q.a)(["\n  {\n    products {\n      _id\n      name\n      description\n      price\n      quantity\n      category {\n        name\n      }\n    }\n  }\n"]))),Object(W.a)(R||(R=Object(q.a)(["\n  {\n    categories {\n      _id\n      name\n    }\n  }\n"])))),M=Object(W.a)(F||(F=Object(q.a)(["\n  {\n    user {\n      firstName\n      lastName\n      orders {\n        _id\n        purchaseDate\n        products {\n          _id\n          name\n          description\n          price\n          quantity\n          image\n        }\n      }\n    }\n  }\n"]))),H=n.p+"static/media/spinner.7e729fec.gif";var J=function(){var e=I(),t=Object(p.a)(e,2),n=t[0],a=t[1],r=n.currentCategory,i=Object(L.b)(B),s=i.loading,o=i.data;return Object(c.useEffect)((function(){o?(a({type:x,products:o.products}),o.products.forEach((function(e){h("products","put",e)}))):s||h("products","get").then((function(e){a({type:x,products:e})}))}),[o,s,a]),Object(S.jsxs)("div",{className:"my-2",children:[Object(S.jsx)("h2",{children:"Our Products:"}),n.products.length?Object(S.jsx)("div",{className:"flex-row",children:(r?n.products.filter((function(e){return e.category._id===r})):n.products).map((function(e){return Object(S.jsx)(U,{_id:e._id,image:e.image,name:e.name,price:e.price},e._id)}))}):Object(S.jsx)("h3",{children:"You haven't added any products yet!"}),s?Object(S.jsx)("img",{src:H,alt:"loading"}):null]})};var z=function(){var e=I(),t=Object(p.a)(e,2),n=t[0],a=t[1],r=n.categories,i=Object(L.b)(Y),s=i.loading,o=i.data;return Object(c.useEffect)((function(){o?(a({type:k,categories:o.categories}),o.categories.forEach((function(e){h("categories","put",e)}))):s||h("categories","get").then((function(e){a({type:k,categories:e})}))}),[o,s,a]),Object(S.jsxs)("div",{children:[Object(S.jsx)("h2",{children:"Choose a Category:"}),r.map((function(e){return Object(S.jsx)("button",{onClick:function(){var t;t=e._id,a({type:N,currentCategory:t})},children:e.name},e._id)}))]})},V=n(16),K=n(24),X=n(55),Z=n(84),ee=function(e){var t=e.item,n=I(),c=Object(p.a)(n,2)[1];return Object(S.jsxs)("div",{className:"flex-row",children:[Object(S.jsx)("div",{children:Object(S.jsx)("img",{src:"/images/".concat(t.image),alt:""})}),Object(S.jsxs)("div",{children:[Object(S.jsxs)("div",{children:[t.name,", $",t.price]}),Object(S.jsxs)("div",{children:[Object(S.jsx)("span",{children:"Qty:"}),Object(S.jsx)("input",{type:"number",placeholder:"1",value:t.purchaseQuantity,onChange:function(e){var n=e.target.value;"0"===n?(c({type:y,_id:t._id}),h("cart","delete",Object(s.a)({},t))):(c({type:w,_id:t._id,purchaseQuantity:parseInt(n)}),h("cart","put",Object(s.a)(Object(s.a)({},t),{},{purchaseQuantity:parseInt(n)})))}}),Object(S.jsx)("span",{role:"img","aria-label":"trash",onClick:function(){return function(e){c({type:y,_id:e._id}),h("cart","delete",Object(s.a)({},e))}(t)},children:"\ud83d\uddd1\ufe0f"})]})]})]})},te=n(56),ne=n(57),ce=n(45),ae=n.n(ce),re=new(function(){function e(){Object(te.a)(this,e)}return Object(ne.a)(e,[{key:"getProfile",value:function(){return ae()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return ae()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),ie=(n(76),Object(X.a)("pk_test_TYooMQauvdEDq54NiTphI7jx")),se=function(){var e=I(),t=Object(p.a)(e,2),n=t[0],a=t[1],r=Object(Z.a)(G),i=Object(p.a)(r,2),s=i[0],o=i[1].data;function l(){a({type:_})}return Object(c.useEffect)((function(){o&&ie.then((function(e){e.redirectToCheckout({sessionId:o.checkout.session})}))}),[o]),Object(c.useEffect)((function(){function e(){return(e=Object(K.a)(Object(V.a)().mark((function e(){var t;return Object(V.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("cart","get");case 2:t=e.sent,a({type:v,products:Object(f.a)(t)});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n.cart.length||function(){e.apply(this,arguments)}()}),[n.cart.length,a]),n.cartOpen?Object(S.jsxs)("div",{className:"cart",children:[Object(S.jsx)("div",{className:"close",onClick:l,children:"[close]"}),Object(S.jsx)("h2",{children:"Shopping Cart"}),n.cart.length?Object(S.jsxs)("div",{children:[n.cart.map((function(e){return Object(S.jsx)(ee,{item:e},e._id)})),Object(S.jsxs)("div",{className:"flex-row space-between",children:[Object(S.jsxs)("strong",{children:["Total: $",function(){var e=0;return n.cart.forEach((function(t){e+=t.price*t.purchaseQuantity})),e.toFixed(2)}()]}),re.loggedIn()?Object(S.jsx)("button",{onClick:function(){var e=[];n.cart.forEach((function(t){for(var n=0;n<t.purchaseQuantity;n++)e.push(t._id)})),s({variables:{products:e}})},children:"Checkout"}):Object(S.jsx)("span",{children:"(log in to check out)"})]})]}):Object(S.jsxs)("h3",{children:[Object(S.jsx)("span",{role:"img","aria-label":"shocked",children:"\ud83d\ude31"}),"You haven't added anything to your cart yet!"]})]}):Object(S.jsx)("div",{className:"cart-closed",onClick:l,children:Object(S.jsx)("span",{role:"img","aria-label":"trash",children:"\ud83d\uded2"})})},oe=function(){return Object(S.jsxs)("div",{className:"container",children:[Object(S.jsx)(z,{}),Object(S.jsx)(J,{}),Object(S.jsx)(se,{})]})};var le=function(){var e=I(),t=Object(p.a)(e,2),n=t[0],a=t[1],r=Object(l.g)().id,i=Object(c.useState)({}),d=Object(p.a)(i,2),j=d[0],u=d[1],b=Object(L.b)(B),O=b.loading,m=b.data,f=n.products,v=n.cart;return Object(c.useEffect)((function(){f.length?u(f.find((function(e){return e._id===r}))):m?(a({type:x,products:m.products}),m.products.forEach((function(e){h("products","put",e)}))):O||h("products","get").then((function(e){a({type:x,products:e})}))}),[f,m,O,a,r]),Object(S.jsxs)(S.Fragment,{children:[j&&v?Object(S.jsxs)("div",{className:"container my-1",children:[Object(S.jsx)(o.b,{to:"/",children:"\u2190 Back to Products"}),Object(S.jsx)("h2",{children:j.name}),Object(S.jsx)("p",{children:j.description}),Object(S.jsxs)("p",{children:[Object(S.jsx)("strong",{children:"Price:"}),"$",j.price," ",Object(S.jsx)("button",{onClick:function(){var e=v.find((function(e){return e._id===r}));e?(a({type:w,_id:r,purchaseQuantity:parseInt(e.purchaseQuantity)+1}),h("cart","put",Object(s.a)(Object(s.a)({},e),{},{purchaseQuantity:parseInt(e.purchaseQuantity)+1}))):(a({type:g,product:Object(s.a)(Object(s.a)({},j),{},{purchaseQuantity:1})}),h("cart","put",Object(s.a)(Object(s.a)({},j),{},{purchaseQuantity:1})))},children:"Add to Cart"}),Object(S.jsx)("button",{disabled:!v.find((function(e){return e._id===j._id})),onClick:function(){a({type:y,_id:j._id}),h("cart","delete",Object(s.a)({},j))},children:"Remove from Cart"})]}),Object(S.jsx)("img",{src:"/images/".concat(j.image),alt:j.name})]}):null,O?Object(S.jsx)("img",{src:H,alt:"loading"}):null,Object(S.jsx)(se,{})]})};var de,je,ue,be=function(e){var t=e.children;return Object(S.jsx)("div",{style:{height:560,clear:"both",paddingTop:120,textAlign:"center"},children:t})},Oe=function(){return Object(S.jsx)("div",{children:Object(S.jsxs)(be,{children:[Object(S.jsx)("h1",{children:"404 Page Not Found"}),Object(S.jsx)("h1",{children:Object(S.jsx)("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji",children:"\ud83d\ude44"})})]})})},pe=n(29),he=n(85),me=Object(W.a)(de||(de=Object(q.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),fe=Object(W.a)(je||(je=Object(q.a)(["\n  mutation addOrder($products: [ID]!) {\n    addOrder(products: $products) {\n      purchaseDate\n      products {\n        _id\n        name\n        description\n        price\n        quantity\n        category {\n          name\n        }\n      }\n    }\n  }\n"]))),xe=Object(W.a)(ue||(ue=Object(q.a)(["\n  mutation addUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    addUser(\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      password: $password\n    ) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"])));var ge=function(e){var t=Object(c.useState)({email:"",password:""}),n=Object(p.a)(t,2),a=n[0],r=n[1],i=Object(he.a)(me),l=Object(p.a)(i,2),d=l[0],j=l[1].error,u=function(){var e=Object(K.a)(Object(V.a)().mark((function e(t){var n,c;return Object(V.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,d({variables:{email:a.email,password:a.password}});case 4:n=e.sent,c=n.data.login.token,re.login(c),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),b=function(e){var t=e.target,n=t.name,c=t.value;r(Object(s.a)(Object(s.a)({},a),{},Object(pe.a)({},n,c)))};return Object(S.jsxs)("div",{className:"container my-1",children:[Object(S.jsx)(o.b,{to:"/signup",children:"\u2190 Go to Signup"}),Object(S.jsx)("h2",{children:"Login"}),Object(S.jsxs)("form",{onSubmit:u,children:[Object(S.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(S.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(S.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:b})]}),Object(S.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(S.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(S.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:b})]}),j?Object(S.jsx)("div",{children:Object(S.jsx)("p",{className:"error-text",children:"The provided credentials are incorrect"})}):null,Object(S.jsx)("div",{className:"flex-row flex-end",children:Object(S.jsx)("button",{type:"submit",children:"Submit"})})]})]})};var ve=function(e){var t=Object(c.useState)({email:"",password:""}),n=Object(p.a)(t,2),a=n[0],r=n[1],i=Object(he.a)(xe),l=Object(p.a)(i,1)[0],d=function(){var e=Object(K.a)(Object(V.a)().mark((function e(t){var n,c;return Object(V.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,l({variables:{email:a.email,password:a.password,firstName:a.firstName,lastName:a.lastName}});case 3:n=e.sent,c=n.data.addUser.token,re.login(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(e){var t=e.target,n=t.name,c=t.value;r(Object(s.a)(Object(s.a)({},a),{},Object(pe.a)({},n,c)))};return Object(S.jsxs)("div",{className:"container my-1",children:[Object(S.jsx)(o.b,{to:"/login",children:"\u2190 Go to Login"}),Object(S.jsx)("h2",{children:"Signup"}),Object(S.jsxs)("form",{onSubmit:d,children:[Object(S.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(S.jsx)("label",{htmlFor:"firstName",children:"First Name:"}),Object(S.jsx)("input",{placeholder:"First",name:"firstName",type:"firstName",id:"firstName",onChange:j})]}),Object(S.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(S.jsx)("label",{htmlFor:"lastName",children:"Last Name:"}),Object(S.jsx)("input",{placeholder:"Last",name:"lastName",type:"lastName",id:"lastName",onChange:j})]}),Object(S.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(S.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(S.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:j})]}),Object(S.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(S.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(S.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:j})]}),Object(S.jsx)("div",{className:"flex-row flex-end",children:Object(S.jsx)("button",{type:"submit",children:"Submit"})})]})]})};var ye=function(){return Object(S.jsxs)("header",{className:"flex-row px-1",children:[Object(S.jsx)("h1",{children:Object(S.jsxs)(o.b,{to:"/",children:[Object(S.jsx)("span",{role:"img","aria-label":"shopping bag",children:"\ud83d\udecd\ufe0f"}),"-Shop-Shop"]})}),Object(S.jsx)("nav",{children:re.loggedIn()?Object(S.jsxs)("ul",{className:"flex-row",children:[Object(S.jsx)("li",{className:"mx-1",children:Object(S.jsx)(o.b,{to:"/orderHistory",children:"Order History"})}),Object(S.jsx)("li",{className:"mx-1",children:Object(S.jsx)("a",{href:"/",onClick:function(){return re.logout()},children:"Logout"})})]}):Object(S.jsxs)("ul",{className:"flex-row",children:[Object(S.jsx)("li",{className:"mx-1",children:Object(S.jsx)(o.b,{to:"/signup",children:"Signup"})}),Object(S.jsx)("li",{className:"mx-1",children:Object(S.jsx)(o.b,{to:"/login",children:"Login"})})]})})]})};var we=function(){var e=Object(he.a)(fe),t=Object(p.a)(e,1)[0];return Object(c.useEffect)((function(){function e(){return(e=Object(K.a)(Object(V.a)().mark((function e(){var n,c,a,r;return Object(V.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("cart","get");case 2:if(n=e.sent,!(c=n.map((function(e){return e._id}))).length){e.next=11;break}return e.next=7,t({variables:{products:c}});case 7:a=e.sent,r=a.data,r.addOrder.products.forEach((function(e){h("cart","delete",e)}));case 11:setTimeout((function(){window.location.assign("/")}),3e3);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),Object(S.jsx)("div",{children:Object(S.jsxs)(be,{children:[Object(S.jsx)("h1",{children:"Success!"}),Object(S.jsx)("h2",{children:"Thank you for your purchase!"}),Object(S.jsx)("h2",{children:"You will now be redirected to the home page"})]})})};var _e=function(){var e,t=Object(L.b)(M).data;return t&&(e=t.user),Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)("div",{className:"container my-1",children:[Object(S.jsx)(o.b,{to:"/",children:"\u2190 Back to Products"}),e?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)("h2",{children:["Order History for ",e.firstName," ",e.lastName]}),e.orders.map((function(e){return Object(S.jsxs)("div",{className:"my-2",children:[Object(S.jsx)("h3",{children:new Date(parseInt(e.purchaseDate)).toLocaleDateString()}),Object(S.jsx)("div",{className:"flex-row",children:e.products.map((function(e,t){var n=e._id,c=e.image,a=e.name,r=e.price;return Object(S.jsxs)("div",{className:"card px-1 py-1",children:[Object(S.jsxs)(o.b,{to:"/products/".concat(n),children:[Object(S.jsx)("img",{alt:a,src:"/images/".concat(c)}),Object(S.jsx)("p",{children:a})]}),Object(S.jsx)("div",{children:Object(S.jsxs)("span",{children:["$",r]})})]},t)}))})]},e._id)}))]}):null]})})},ke=Object(d.a)({uri:"/graphql"}),Ne=Object(O.a)((function(e,t){var n=t.headers,c=localStorage.getItem("id_token");return{headers:Object(s.a)(Object(s.a)({},n),{},{authorization:c?"Bearer ".concat(c):""})}})),Ce=new j.a({link:Ne.concat(ke),cache:new u.a});var Se=function(){return Object(S.jsx)(b.a,{client:Ce,children:Object(S.jsx)(o.a,{children:Object(S.jsx)("div",{children:Object(S.jsxs)($,{children:[Object(S.jsx)(ye,{}),Object(S.jsxs)(l.c,{children:[Object(S.jsx)(l.a,{path:"/",element:Object(S.jsx)(oe,{})}),Object(S.jsx)(l.a,{path:"/login",element:Object(S.jsx)(ge,{})}),Object(S.jsx)(l.a,{path:"/signup",element:Object(S.jsx)(ve,{})}),Object(S.jsx)(l.a,{path:"/success",element:Object(S.jsx)(we,{})}),Object(S.jsx)(l.a,{path:"/orderHistory",element:Object(S.jsx)(_e,{})}),Object(S.jsx)(l.a,{path:"/products/:id",element:Object(S.jsx)(le,{})}),Object(S.jsx)(l.a,{path:"*",element:Object(S.jsx)(Oe,{})})]})]})})})})},Te=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ee(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(S.jsx)(a.a.StrictMode,{children:Object(S.jsx)(Se,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Te?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ee(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Ee(t,e)}))}}()}},[[77,1,2]]]);
//# sourceMappingURL=main.c6d8df97.chunk.js.map