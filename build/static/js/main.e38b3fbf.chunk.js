(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{10:function(e,a,t){},33:function(e,a,t){e.exports=t(61)},38:function(e,a,t){},61:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(29),c=t.n(r);t(38),t(10),t(11);var s=function(){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-info"},l.a.createElement("a",{className:"navbar-brand",href:"./"},l.a.createElement("strong",null,"Parikshar College Galifa")),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/"},"Home ",l.a.createElement("span",{className:"sr-only"},"(current)"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/Login"},"Login")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/Register"},"Register")))),l.a.createElement("form",{className:"form-inline"},l.a.createElement("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search"}),l.a.createElement("button",{className:"btn btn-success my-2 my-sm-0",type:"submit"},"Search"))))},m=t(12),o=t(13),i=t(15),u=t(14),d=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-1"}),l.a.createElement("div",{className:"col-4"},l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"exampleInputEmail1"},"Email address"),l.a.createElement("input",{type:"email",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"exampleInputPassword1"},"Password"),l.a.createElement("input",{type:"password",class:"form-control",id:"exampleInputPassword1",placeholder:"Password"})),l.a.createElement("button",{type:"submit",class:"btn btn-primary"},"Login"))),l.a.createElement("div",{className:"col-2"}),l.a.createElement("div",{className:"col-4"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header bg-primary text-light"},"Notice Board"),l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},"Special title treatment"),l.a.createElement("p",{className:"card-text"},"With supporting text below as a natural lead-in to additional content."),l.a.createElement("a",{href:"#",className:"btn btn-primary"},"Go somewhere")))),l.a.createElement("div",{className:"col-1"})))}}]),t}(l.a.Component),h=t(7),b=t(30),p=t.n(b),g=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).onChangename=n.onChangename.bind(Object(h.a)(n)),n.onChangefatherName=n.onChangefatherName.bind(Object(h.a)(n)),n.onChangecategory=n.onChangecategory.bind(Object(h.a)(n)),n.onChangeaddress=n.onChangeaddress.bind(Object(h.a)(n)),n.onChangemobileNumber=n.onChangemobileNumber.bind(Object(h.a)(n)),n.onChangepercentage=n.onChangepercentage.bind(Object(h.a)(n)),n.onSubmit=n.onSubmit.bind(Object(h.a)(n)),n.state={name:"",fatherName:"",category:"",address:"",mobileNumber:"",percentage:""},n}return Object(o.a)(t,[{key:"onChangename",value:function(e){this.setState({name:e.target.value})}},{key:"onChangefatherName",value:function(e){this.setState({fatherName:e.target.value})}},{key:"onChangecategory",value:function(e){this.setState({category:e.target.value})}},{key:"onChangeaddress",value:function(e){this.setState({address:e.target.value})}},{key:"onChangemobileNumber",value:function(e){this.setState({mobileNumber:e.target.value})}},{key:"onChangepercentage",value:function(e){this.setState({percentage:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var a={name:this.state.name,fatherName:this.state.fatherName,category:this.state.category,address:this.state.address,mobileNumber:this.state.mobileNumber,percentage:this.state.percentage};console.log(a),p.a.post("/student/add",a).then((function(e){return console.log(e.data)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-4"}),l.a.createElement("h4",{className:"display-4"},"Registration"),l.a.createElement("div",{className:"col-4"})),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-2"}),l.a.createElement("div",{className:"col-4"},l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Name"),l.a.createElement("input",{type:"text",className:"form-control",value:this.state.name,onChange:this.onChangename})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Father's Name"),l.a.createElement("input",{type:"text",className:"form-control",value:this.state.fatherName,onChange:this.onChangefatherName})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Category"),l.a.createElement("input",{type:"text",className:"form-control",value:this.state.category,onChange:this.onChangecategory})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Address"),l.a.createElement("input",{type:"text",className:"form-control",value:this.state.address,onChange:this.onChangeaddress})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Contact Number"),l.a.createElement("input",{type:"text",className:"form-control",value:this.state.mobileNumber,onChange:this.onChangemobileNumber})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"XII Percentage"),l.a.createElement("input",{type:"text",className:"form-control",value:this.state.percentage,onChange:this.onChangepercentage})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Upload XII Marksheet"),l.a.createElement("input",{type:"file",className:"form-control-file"})),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"))),l.a.createElement("div",{className:"col-2"})))}}]),t}(l.a.Component),E=t(31),v=t(1);var N=function(){return l.a.createElement(E.a,null,l.a.createElement("div",{className:"MyApp"},l.a.createElement(s,null),l.a.createElement("br",null),l.a.createElement(v.a,{path:"/",exact:!0,component:d}),l.a.createElement(v.a,{path:"/Register",component:g})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.e38b3fbf.chunk.js.map