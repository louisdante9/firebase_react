(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){},20:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},27:function(e,t,a){e.exports=a(49)},32:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(23),i=a.n(s),c=(a(32),a(6)),l=a(7),o=a(10),m=a(8),u=a(9),h=a(52),p=a(51),d=a(3),b=a(50),g=function(e){var t=e.onClick;return console.log(t),r.a.createElement("nav",{className:"navbar navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"Grillz"),r.a.createElement("form",{className:"form-inline"},r.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit",onClick:function(){t()}},"Logout")))},f=[{id:1,name:"louis dante"},{id:2,name:"meya louis"},{id:1,name:"mama friday"},{id:1,name:"bros ogb"},{id:1,name:"dada collins"},{id:1,name:"aunty fred"},{id:1,name:"fred bulton"},{id:1,name:"mack tony"},{id:1,name:"tony dante"},{id:1,name:"louis fish"},{id:1,name:"bobby brown"},{id:1,name:"chebo malu"}],v=(a(16),a(24)),E=a.n(v),O=(a(42),E.a.initializeApp({apiKey:"AIzaSyB29UTgUadXdVXcakdZ0LimL06HdZdqapE",authDomain:"my-firebase-react-app.firebaseapp.com",databaseURL:"https://my-firebase-react-app.firebaseio.com",projectId:"my-firebase-react-app",storageBucket:"my-firebase-react-app.appspot.com",messagingSenderId:"354932373163"})),y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).logout=a.logout.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"logout",value:function(){O.auth().signOut()}},{key:"render",value:function(){return console.log(this.props),r.a.createElement("div",{className:"wrapper"},r.a.createElement(g,{onClick:this.logout}),r.a.createElement("h2",null,"Employee List"),r.a.createElement("div",{className:"employee-list-div"},f.map(function(e,t){return r.a.createElement("div",{className:"",key:t},r.a.createElement(b.a,{className:"employee-list",to:"/purpose/".concat(e.id)},e.name))})))}}]),t}(n.Component),j=a(26),w=a(53);function k(e){var t=e.component,a=e.authenticated,n=Object(j.a)(e,["component","authenticated"]);return r.a.createElement(p.a,Object.assign({},n,{render:function(e){return!0===a?r.a.createElement(t,Object.assign({},e,n)):r.a.createElement(w.a,{to:"/signin"})}}))}var N=a(13),C=a(14),S=a.n(C),x=a(19),P=a(54),M=a(20),A=a.n(M),q=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={email:"",password:"",errMsg:""},a.login=a.login.bind(Object(d.a)(Object(d.a)(a))),a.handleChange=a.handleChange.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"login",value:function(){var e=Object(x.a)(S.a.mark(function e(t){var a;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,O.auth().signInWithEmailAndPassword(this.state.email,this.state.password);case 4:e.sent,this.props.history.push("/"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),e.t0&&(a=e.t0.code,this.setState({errMsg:a}));case 12:case"end":return e.stop()}},e,this,[[1,8]])}));return function(t){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){this.setState(Object(N.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return console.log(this.props),r.a.createElement("form",{className:"form-signin"},r.a.createElement("img",{className:"mb-4",src:A.a,alt:"",width:"72",height:"72"}),r.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Please sign in"),this.state.errMsg?r.a.createElement("div",{className:"alert alert-danger",role:"alert"},this.state.errMsg):r.a.createElement("span",null),r.a.createElement("label",{htmlFor:"inputEmail",className:"sr-only"},"Email address"),r.a.createElement("input",{type:"email",name:"email",value:this.state.email,id:"inputEmail",className:"form-control",placeholder:"Email address",required:!0,onChange:this.handleChange,autoFocus:!0}),r.a.createElement("label",{htmlFor:"inputPassword",className:"sr-only"},"Password"),r.a.createElement("input",{type:"password",name:"password",id:"inputPassword",value:this.state.password,className:"form-control",placeholder:"Password",onChange:this.handleChange,required:!0}),r.a.createElement("div",{className:"checkbox mb-3"},r.a.createElement("p",null,"Don't have an account ",r.a.createElement(b.a,{to:"/signup"},"Sign up"))),r.a.createElement("button",{className:"btn btn-lg btn-primary btn-block",type:"submit",onClick:this.login},"Sign in"))}}]),t}(n.Component),D=Object(P.a)(q),F=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={email:"",password:""},a.signup=a.signup.bind(Object(d.a)(Object(d.a)(a))),a.handleChange=a.handleChange.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"signup",value:function(){var e=Object(x.a)(S.a.mark(function e(t){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,O.auth().createUserWithEmailAndPassword(this.state.email,this.state.password);case 4:e.sent,this.props.history.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0.data);case 11:case"end":return e.stop()}},e,this,[[1,8]])}));return function(t){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){this.setState(Object(N.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return r.a.createElement("form",{className:"form-signin"},r.a.createElement("img",{className:"mb-4",src:A.a,alt:"",width:"72",height:"72"}),r.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Please sign up"),r.a.createElement("label",{htmlFor:"inputEmail",className:"sr-only"},"Email address"),r.a.createElement("input",{type:"email",name:"email",value:this.state.email,id:"inputEmail",className:"form-control",placeholder:"Email address",required:!0,onChange:this.handleChange,autoFocus:!0}),r.a.createElement("label",{htmlFor:"inputPassword",className:"sr-only"},"Password"),r.a.createElement("input",{type:"password",name:"password",id:"inputPassword",value:this.state.password,className:"form-control",placeholder:"Password",onChange:this.handleChange,required:!0}),r.a.createElement("div",{className:"checkbox mb-3"},r.a.createElement("p",null,"Don't have an account ",r.a.createElement(b.a,{to:"/signin"},"Signin"))),r.a.createElement("button",{className:"btn btn-lg btn-primary btn-block",type:"submit",onClick:this.signup},"Sign up"))}}]),t}(n.Component),I=Object(P.a)(F),L=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={textarea:"",errMsg:""},a.onSubmit=a.onSubmit.bind(Object(d.a)(Object(d.a)(a))),a.handleChange=a.handleChange.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"onSubmit",value:function(e){e.preventDefault(),""!==this.state.textarea?this.props.history.push("/emailSent"):this.setState({errMsg:"Please write your purpose for meeting!"})}},{key:"handleChange",value:function(e){this.setState(Object(N.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper"},this.state.errMsg?r.a.createElement("div",{className:"alert alert-danger alert-fix",role:"alert"},this.state.errMsg):r.a.createElement("span",null),r.a.createElement("p",{className:"purpose"},"Purpose Of Visit"),r.a.createElement("form",{className:"purpose-cont"},r.a.createElement("textarea",{rows:"6",cols:"80",name:"textarea",form:"usrform",placeholder:"Enter your purpose for visit here..",required:!0,onChange:this.handleChange,value:this.state.textarea}),r.a.createElement("button",{className:"btn btn-lg btn-success btn-block signin-btn",onClick:this.onSubmit},"Submit")))}}]),t}(n.Component),W=Object(P.a)(L),B=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).logout=a.logout.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"logout",value:function(){O.auth().signOut()}},{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement(g,{onClick:this.logout}),r.a.createElement("div",{className:"emailSent"},r.a.createElement("p",null,"An email has been sent to the employee, you would be attended to in a bit")))}}]),t}(n.Component),U=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={authenticated:!1,user:null},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this;O.auth().onAuthStateChanged(function(t){t?e.setState({authenticated:!0,user:t,loading:!1}):e.setState({authenticated:!1,user:null})})}},{key:"render",value:function(){var e=this.state.authenticated;return r.a.createElement(h.a,null,r.a.createElement("div",{className:"app"},r.a.createElement(k,{exact:!0,path:"/",component:y,authenticated:e}),r.a.createElement(k,{exact:!0,path:"/purpose/:id",component:W,authenticated:e}),r.a.createElement(k,{exact:!0,path:"/emailSent",component:B,authenticated:e}),r.a.createElement(p.a,{exact:!0,path:"/signin",component:D}),r.a.createElement(p.a,{exact:!0,path:"/signup",component:I})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,2,1]]]);
//# sourceMappingURL=main.1534ac64.chunk.js.map