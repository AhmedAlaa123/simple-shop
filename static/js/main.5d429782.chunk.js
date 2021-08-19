(this["webpackJsonpsimple-counter"]=this["webpackJsonpsimple-counter"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(22),s=n.n(r),o=(n(28),n(7)),i=n(16),l=n(8),d=n(9),u=n(11),h=n(10),j=(n(29),n(12)),b=n(2),m=n(0),p=function(e){return Object(m.jsxs)("nav",{className:"navbar navbar-dark bg-dark navbar-expand-sm",children:[Object(m.jsx)(j.b,{className:"navbar-brand",to:"/simple-shop",children:"Navbar"}),Object(m.jsxs)("ul",{className:"navbar-nav ",children:[Object(m.jsx)("li",{className:"nav-item ",children:Object(m.jsx)(j.c,{className:"nav-link",exact:!0,to:"/simple-shop",children:"Menu "})}),Object(m.jsx)("li",{className:"nav-item ",children:Object(m.jsx)(j.c,{className:"nav-link",to:"/cart",children:"Shopping Cart "})}),Object(m.jsx)("li",{className:"nav-item ",children:Object(m.jsx)(j.c,{className:"nav-link",to:"/add-product",children:"Add Product "})})]})]})},O=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.props.products;return Object(m.jsxs)("div",{className:"container ",children:[Object(m.jsx)("h1",{className:"container font-weight-light mt-3",children:"Menu"}),Object(m.jsxs)("table",{className:"table font-weight-light mt-5",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{scope:"col",children:"Name"}),Object(m.jsx)("th",{scope:"col",children:"Price $"}),Object(m.jsx)("th",{scope:"col"})]})}),Object(m.jsx)("tbody",{children:t.map((function(t){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:t.name}),Object(m.jsxs)("td",{children:[t.price," $"]}),Object(m.jsx)("td",{children:Object(m.jsx)("span",{onClick:function(){return e.props.addToCart(t)},style:{cursor:"pointer",color:"".concat(t.incart?"black":"grey")},children:Object(m.jsx)("i",{className:"fa fa-cart-arrow-down fa-2x"})})})]},t.id)}))})]})]})}}]),n}(a.Component),f=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.props.products?this.props.products:[];return Object(m.jsxs)("div",{className:"container font-weight-light",children:[Object(m.jsx)("h1",{className:"text-secondary mt-3 font-weight-light",children:"Shopping Cart"}),t.length<=0?"":Object(m.jsx)("button",{onClick:this.props.reset,className:"btn btn-danger btn-lg mb-5 mt-5 font-weight-light btn-block",children:"Reset"}),t.length>0?"":Object(m.jsx)("h4",{className:"text-danger text-center mt-5 font-weight-light ",children:"! There is No Products In The Cart Please go to the menu and add Your Products."}),t.map((function(t){return Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("h3",{className:"col font-weight-light",children:t.name}),Object(m.jsxs)("span",{className:"col",children:[Object(m.jsx)("span",{className:"badge badge-".concat(t.count>0?"primary":"warning"," "),style:{fontSize:"18px"},children:e.countFormat(t)}),Object(m.jsx)("button",{onClick:function(){return e.props.incrementCount(t)},className:"btn btn-lg btn-primary m-2 font-weight-light",children:"+"}),Object(m.jsx)("button",{onClick:function(){return e.props.decrementCount(t)},className:"btn btn-lg btn-primary m-2 font-weight-light",children:"-"}),Object(m.jsxs)("button",{onClick:function(){return e.props.deleteProduct(t)},className:"btn btn-lg btn-danger font-weight-light",children:[Object(m.jsx)("i",{className:"fa fa-trash  "}),"  delete"]})]})]},t.id)})),Object(m.jsxs)("p",{className:"font-weight-bold text-primary",children:[Object(m.jsx)("span",{className:"font-weight-light fa-2x",children:"Total Price :"})," ",this.getTotalPrice(t)," $"]})]})}},{key:"countFormat",value:function(e){return e.count>0?e.count:"Zero"}},{key:"getTotalPrice",value:function(e){for(var t=0,n=0;n<e.length;n++)t+=e[n].count*e[n].price;return t}}]),n}(a.Component),g=n(14),x=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={id:0,name:"",price:"",count:0,incart:!1},e.handelChange=function(t){e.setState(Object(g.a)({},t.target.id,t.target.value))},e.handelSubmit=function(t){t.preventDefault(),""!==e.state.name&&""!==e.state.price&&(e.props.submit(e.state),e.setState({name:"",price:""}))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.isActive||this.props.history.replace("/login")}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"container text-secondary font-weight-light",children:[Object(m.jsx)("h1",{className:"font-weight-light mt-2",children:"Add Product Page"}),Object(m.jsxs)("form",{onSubmit:this.handelSubmit,className:"mt-5",children:[Object(m.jsxs)("div",{className:"from-group",children:[Object(m.jsx)("label",{className:"fa-2x",htmlFor:"name",children:"Product Name :"}),Object(m.jsx)("input",{className:"form-control",id:"name",type:"text",onChange:this.handelChange,placeholder:"Enter Product Name",value:this.state.name,required:!0})]}),Object(m.jsxs)("div",{className:"from-group mt-3",children:[Object(m.jsx)("label",{className:"fa-2x",htmlFor:"price",children:"Product Price $ :"}),Object(m.jsx)("input",{className:"form-control",id:"price",type:"number",onChange:this.handelChange,placeholder:"Enter Product Name",min:1,value:this.state.price,required:!0})]}),Object(m.jsx)("input",{type:"submit",className:"btn btn-secondary mt-3",value:"Add Product"})]})]})}}]),n}(a.Component),v=function(e){return console.log(e),Object(m.jsx)("h1",{children:"Page Not Found"})},N=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={username:"",password:""},e.handelChange=function(t){e.setState(Object(g.a)({},t.target.id,t.target.value))},e.handelSubmit=function(t){t.preventDefault(),e.props.login(e.state)?(e.props.history.replace("/add-product"),alert("Login is Succeeful")):(alert("Username or password is error!"),e.setState({username:"",password:""}))},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"container text-secondary font-weight-light",children:[Object(m.jsx)("h1",{className:"font-weight-light mt-2",children:"Login"}),Object(m.jsxs)("form",{onSubmit:this.handelSubmit,className:"mt-5",children:[Object(m.jsxs)("div",{className:"from-group",children:[Object(m.jsx)("label",{className:"fa-2x",htmlFor:"username",children:"Username :"}),Object(m.jsx)("input",{className:"form-control",id:"username",type:"text",onChange:this.handelChange,placeholder:"Enter username",value:this.state.username,required:!0})]}),Object(m.jsxs)("div",{className:"from-group mt-3",children:[Object(m.jsx)("label",{className:"fa-2x",htmlFor:"password",children:"password"}),Object(m.jsx)("input",{className:"form-control",id:"password",type:"password",onChange:this.handelChange,placeholder:"Enter password",value:this.state.password,required:!0})]}),Object(m.jsx)("input",{type:"submit",className:"btn btn-secondary mt-3",value:"Login"})]})]})}}]),n}(a.Component),y=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={user:{username:"ahmed",password:"1234",isActive:!1},products:[]},e.handelAddToCartOrRemove=function(t){var n=Object(i.a)(e.state.products),a=n.indexOf(t),c=n[a];c.incart=!c.incart,c.count=0,n[a]=c,e.setState({products:n})},e.handdelIncremnt=function(t){var n=Object(i.a)(e.state.products),a=n.indexOf(t),c=n[a];c.count++,n[a]=c,e.setState({products:n})},e.handdeldecremnt=function(t){var n=Object(i.a)(e.state.products),a=n.indexOf(t),c=n[a];c.count=c.count>0?c.count-1:c.count,n[a]=c,e.setState({products:n})},e.handelReset=function(){var t=e.state.products.map((function(e){return e.count=0,e}));e.setState({products:t})},e.handelAddProduct=function(t){var n=e.state.products;t.price=parseInt(t.price),t.id=n.length+1,n.push(t),e.setState({products:n}),alert("Product is added to menu ! ")},e.handelLogin=function(t){return e.state.user.username===t.username&&e.state.user.password===t.password&&(t=Object(o.a)(Object(o.a)({},t),{},{isActive:!0}),e.setState({user:t}),!0)},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("products");t&&this.setState({products:JSON.parse(t)}),window.onbeforeunload=function(t){localStorage.setItem("products",JSON.stringify(e.state.products))}}},{key:"render",value:function(){var e=this;return Object(m.jsxs)(j.a,{children:[Object(m.jsx)(p,{}),Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.b,{exact:!0,path:"/simple-shop/menu",render:function(t){return Object(m.jsx)(O,Object(o.a)(Object(o.a)({},e.state),{},{addToCart:e.handelAddToCartOrRemove}))}}),Object(m.jsx)(b.b,{path:"/cart",render:function(t){return Object(m.jsx)(f,Object(o.a)(Object(o.a)({},t),{},{products:e.state.products.filter((function(e){return e.incart})),reset:e.handelReset,incrementCount:e.handdelIncremnt,decrementCount:e.handdeldecremnt,deleteProduct:e.handelAddToCartOrRemove}))}}),Object(m.jsx)(b.b,{path:"/add-product",render:function(t){return Object(m.jsx)(x,Object(o.a)(Object(o.a)(Object(o.a)({},t),e.state.user),{},{submit:e.handelAddProduct}))}}),Object(m.jsx)(b.b,{path:"/pagenotfound",component:v}),Object(m.jsx)(b.b,{path:"/login",render:function(t){return Object(m.jsx)(N,Object(o.a)(Object(o.a)({},t),{},{login:e.handelLogin}))}}),Object(m.jsx)(b.a,{to:"/simple-shop/menu",from:"/"}),Object(m.jsx)(b.a,{to:"/pagenotfound"})]})]})}}]),n}(c.a.Component),w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};n(36),n(37);s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(y,{})}),document.getElementById("root")),w()}},[[38,1,2]]]);
//# sourceMappingURL=main.5d429782.chunk.js.map