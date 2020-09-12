(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{23:function(e,a,t){e.exports=t(38)},29:function(e,a,t){},30:function(e,a,t){},31:function(e,a,t){},38:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(20),c=t.n(l),s=(t(28),t(29),t(6)),i=t(7),o=t(9),m=t(8),d=t(21),u=t(1),p=t(11),E=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"bg-light"},r.a.createElement("nav",{className:"navbar navbar-light bg-light navbar-expand-lg fixed-top"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{className:"navbar-brand d-lg-none d-flex align-items-center",href:"/"},r.a.createElement("img",{src:"images/Devfecta.png",className:"headerLogo",alt:"DevFecta"})),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("a",{className:"navbar-brand d-none d-lg-flex align-items-center",href:"/"},r.a.createElement("img",{src:"images/Devfecta-Logo.png",className:"headerLogo",alt:"DevFecta"})),r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"https://github.com/devfecta",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(p.c,null)," Public Repository ")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"https://github.com/devfecta/devfecta.github.io/wiki",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(p.e,null)," DevFecta Wiki ")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"https://www.linkedin.com/company/devfecta",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(p.d,null)," LinkedIn ")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"mailto:devfecta@gmail.com"},r.a.createElement(p.a,null)," Contact ")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/resume"},r.a.createElement(p.b,null)," Resume ")))))))}}]),t}(n.Component),v=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"card serviceCard m-2"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h3",{className:"card-title"},this.props.title),r.a.createElement("p",{className:"card-text"},this.props.description)))}}]),t}(n.Component),b=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("section",null,r.a.createElement("div",{id:"serviceImage",className:"w-100"}),r.a.createElement("article",{id:"serviceArticle"},r.a.createElement("div",{id:"serviceIntro",className:"row text-light d-flex align-items-center"},r.a.createElement("p",{className:"container"},"DevFecta is a web development, design, and consulting company based in Madison, Wisconsin that offers professional website design, web development, and graphic design services. In addition, I also offer consulting services for when you just need a little help with a current web project.")),r.a.createElement("div",{className:"row d-flex justify-content-center"},r.a.createElement("div",{className:"col-md-3 d-flex align-items-stretch"},r.a.createElement(v,{title:"Development",description:r.a.createElement(r.a.Fragment,null,"DevFecta's web development and programming expertise integrates custom programming and design to create interactive web systems that will grow with your business. I understand that your website should reflect who you are, and is a primary contact for your business.",r.a.createElement("br",null),r.a.createElement("br",null),"Your goals are at the forefront of every project I do and will provide reliable ongoing tech support to my clients.")})),r.a.createElement("div",{className:"col-md-3 d-flex align-items-stretch"},r.a.createElement(v,{title:"Design",description:r.a.createElement(r.a.Fragment,null,"DevFecta develops websites of all sizes. My web design process can either start completely from scratch, or with the dynamic CMS Wordpress that can customized to meet your business needs. With my years experience I can create a completely customized web solution that will grow with your business.",r.a.createElement("br",null),r.a.createElement("br",null),"Give your business an online web presence with information about your products or services. Your website will be custom designed and developed to meet the needs of your business.")})),r.a.createElement("div",{className:"col-md-3 d-flex align-items-stretch"},r.a.createElement(v,{title:"Consulting",description:r.a.createElement(r.a.Fragment,null,"Got a web project that's grown and just need a little extra help, or just can't figure out an issue on your website? DevFecta can help! I can sit down and meet with you to find the best solution to help you with your web project.")})))),r.a.createElement("article",{id:"portfolioArticle",className:"row d-flex justify-content-center"},r.a.createElement("a",{href:"/resume",className:"btn btn-primary"},"View My Resume")))}}]),t}(n.Component),h=(t(30),function(e){var a="",t="",n={"font-size":"80%"};return e.resumeData.jobs&&(console.log("test"),console.log(e.resumeData.jobs),a=e.resumeData.jobs.map((function(a,t){return r.a.createElement("div",{key:t,className:"card col-md-6 col-sm-12 border-0"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},a.jobTitle),r.a.createElement("p",{className:"card-text"},a.startDate," - ",a.endDate," ",r.a.createElement("strong",null,a.companyName,", ",a.city)),r.a.createElement("p",{className:"card-text"}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md"},r.a.createElement("h6",null,"Technologies Used ",r.a.createElement("span",{className:"badge badge-devfecta"},a.technologiesUsed.length)),r.a.createElement("ul",{className:"list-inline row justify-content-between",style:n},a.technologiesUsed.map((function(a,t){return r.a.createElement("li",{key:t,className:"list-inline-item col-md-5 m-1"},r.a.createElement("a",{href:e.resumeData.technologies[a].wiki,target:"_blank",rel:"noopener noreferrer"},e.resumeData.technologies[a].description))})))))))})),t=e.resumeData.clients.map((function(e,a){return r.a.createElement("div",{key:a,className:"col-md-6 p-2"},e.name)}))),r.a.createElement("section",{className:"pb-2"},r.a.createElement("article",{id:"resumeArticle",className:"container my-1"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h2",null,"Work Experience")),r.a.createElement("div",{className:"card-body d-flex flex-wrap"},a))),r.a.createElement("article",{className:"container my-1"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h2",null,"Education")),r.a.createElement("div",{className:"card-body d-flex flex-wrap"},r.a.createElement("div",{className:"card col-md-6 col-sm-12 border-0"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Web Software Developer Associate Degree"),r.a.createElement("p",{className:"card-text"},"January 2018 - December 2019 ",r.a.createElement("strong",null,r.a.createElement("em",null,"Madison College")),", Madison, WI"))),r.a.createElement("div",{className:"card col-md-6 col-sm-12 border-0"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Graphic Design Associate Degree"),r.a.createElement("p",{className:"card-text"},"September 1995 - May 1999 ",r.a.createElement("strong",null,r.a.createElement("em",null,"Madison College")),", Madison, WI")))))),r.a.createElement("article",{className:"container mt-1"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h2",null,"Clients")),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-text row p-3"},t)))))}),g=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{className:"text-light text-center"},r.a.createElement("span",null,"\xa9 DevFecta"))}}]),t}(n.Component),f=(t(31),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(s.a)(this,t),(e=a.call(this)).state={workExperience:[]},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("./resumeData.json").then((function(e){return e.json()})).then((function(a){e.setState({workExperience:a})}))}},{key:"render",value:function(){var e=this;return r.a.createElement(d.a,null,r.a.createElement(E,null),r.a.createElement("main",null,r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",component:b}),r.a.createElement(u.a,{path:"/resume",render:function(a){return r.a.createElement(h,Object.assign({},a,{resumeData:e.state.workExperience}))}}))),r.a.createElement(g,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(19),t(36);c.a.render(r.a.createElement(f,null),document.getElementById("bodyTag")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.11390b36.chunk.js.map