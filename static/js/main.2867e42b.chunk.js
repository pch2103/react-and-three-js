(this["webpackJsonpreact-and-three-js"]=this["webpackJsonpreact-and-three-js"]||[]).push([[0],{12:function(n,e,t){},13:function(n,e,t){},14:function(n,e,t){"use strict";t.r(e);var o=t(1),i=t(2),r=t.n(i),a=t(4),d=t.n(a),c=(t(12),t(13),t(0));var s=function(n){var e=new c.j(15658702);e.position.set(1e3,1e3,1e3),n.add(e);var t=new c.j(14540238);t.position.set(-300,-300,-300),n.add(t)},u=t(5),w=function(n){var e=new u.a;e.add(n,"rotationX").min(-.03).max(.03).step(.001),e.add(n,"rotationY").min(-.03).max(.03).step(.001),e.add(n,"rotationZ").min(-.03).max(.03).step(.001)},m=t(6),h={rotationX:0,rotationY:0,rotationZ:0};function p(n,e){n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight)}var v=function(){var n=this;return Object(i.useEffect)((function(){var e=window.innerWidth,t=window.innerHeight,o=new c.n;o.setClearColor(0),o.setSize(e,t),document.body.appendChild(o.domElement);var i=new c.h,r=new c.f(45,e/t,.1,5e3);r.position.z=1e3,s(i);var a=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:12,o=new c.a(n,e,t),i=new c.e({color:236517,specular:12369084});return new c.d(o,i)}(100,300,32);i.add(a),w(h);var d=new m.a(r,o.domElement);window.addEventListener("resize",p.bind(n,r,o),!1);return function n(){requestAnimationFrame(n),d.update(),a.rotation.x+=h.rotationX,a.rotation.y+=h.rotationY,a.rotation.z+=h.rotationZ,o.render(i,r)}(),console.log("mounted"),function(){window.removeEventListener("resize",p.bind(n,r,o),!1),console.log("unmounted")}}),[]),Object(o.jsx)(o.Fragment,{})};var f=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(v,{})})},l=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,15)).then((function(e){var t=e.getCLS,o=e.getFID,i=e.getFCP,r=e.getLCP,a=e.getTTFB;t(n),o(n),i(n),r(n),a(n)}))};d.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root")),l()}},[[14,1,2]]]);
//# sourceMappingURL=main.2867e42b.chunk.js.map