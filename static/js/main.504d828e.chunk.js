(this["webpackJsonptfjs-skinzy"]=this["webpackJsonptfjs-skinzy"]||[]).push([[0],{35:function(e,t,n){e.exports=n(59)},40:function(e,t,n){},47:function(e,t){},48:function(e,t){},49:function(e,t){},50:function(e,t){},51:function(e,t){},52:function(e,t){},59:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(10),c=n.n(i),l=(n(40),n(25)),o=n.n(l),s=n(29),u=n(19),m=n(14),d=n(76),f=n(79),p=n(31),g=n.n(p),v=n(78),x=Object(d.a)((function(e){return{root:{display:"flex",color:"#3F51B5","& > * + *":{marginLeft:e.spacing(2)},marginTop:"150px",flexDirection:"column",alignItems:"center"}}})),b=function(e){var t=x();return r.a.createElement("div",{className:t.root},r.a.createElement(v.a,{color:"inherit",size:e.size,thickness:e.thickness}))},E=Object(d.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}},input:{display:"none"},result:{maxWidth:"400px",textAlign:"center",boxShadow:"1px 1px 2px 1px rgba(0,0,0,.15)",margin:"20px",padding:"10px",color:"#FFFFFF",fontWeight:"500",backgroundColor:"#3F51BF",marginBottom:"50px",borderRadius:"5px",transition:"all .2s ease-in-out"}}})),k=function(){var e=E(),t=Object(a.useState)(),n=Object(u.a)(t,2),i=n[0],c=n[1],l=Object(a.useState)(),d=Object(u.a)(l,2),p=d[0],v=d[1],x=Object(a.useState)(),k=Object(u.a)(x,2),O=k[0],j=k[1],y=Object(a.useState)(!1),S=Object(u.a)(y,2),h=S[0],F=S[1],I=Object(a.useRef)(),A=Object(a.useRef)(),w=function(){var e=Object(s.a)(o.a.mark((function e(){var t,n,a,r,i,c,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(F(!0),t=localStorage.getItem("kavilres23"),n=localStorage.getItem("kavilres23_labels"),!t||!n){e.next=13;break}return e.next=6,m.c("indexeddb://kavilres23");case 6:a=e.sent,r=JSON.parse(n),v(a),j(r),console.log("Saved Resnet Model Found"),e.next=27;break;case 13:return e.next=15,m.c("/TFJSKavil/kavilres23/model.json");case 15:return i=e.sent,v(i),e.next=19,fetch("/TFJSKavil/kavilres23/labels.json");case 19:return c=e.sent,e.next=22,c.json();case 22:l=e.sent,j(l),localStorage.setItem("kavilres23",!0),i.save("indexeddb://kavilres23"),localStorage.setItem("kavilres23_labels",JSON.stringify(l));case 27:F(!1);case 28:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){if(p&&O&&i&&I){var e=m.d((function(){var e=m.a.fromPixels(I.current);return m.b.resizeBilinear(e,[224,224]).div(255).expandDims(0).toFloat()})),t=p.predict(e),n=t.arraySync()[0];t.dispose(),e.dispose();var a=n.map((function(e,t){return{label:O[t],score:String(100*Number(e)).substring(0,5)}}));a.sort((function(e,t){return t.score-e.score})),A.current.innerHTML="<div>".concat(a[0].label," : ").concat(a[0].score,"% </div><div>").concat(a[1].label," : ").concat(a[1].score,"%</div>")}}),[p,O,i,I,A]),r.a.createElement("div",null,p&&O?r.a.createElement("div",null,r.a.createElement("div",{style:{margin:"30px",marginTop:"100px",textAlign:"center"}},r.a.createElement("input",{accept:"image/*",className:e.input,id:"outlined-button-file",type:"file",onChange:function(e){if(e.target.files&&e.target.files.length>0){var t=new FileReader;t.addEventListener("load",(function(){c(t.result)})),t.readAsDataURL(e.target.files[0])}}}),r.a.createElement("label",{htmlFor:"outlined-button-file"},r.a.createElement(f.a,{variant:"contained",color:"primary",component:"span"},r.a.createElement(g.a,null)," \xa0 CHOOSE IMAGE"))),i&&r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("img",{src:i,style:{maxWidth:"90%"},alt:"selected",ref:I}),r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},r.a.createElement("div",{className:e.result,ref:A})))):r.a.createElement("div",null,h?r.a.createElement(b,{size:100,thickness:4}):r.a.createElement("div",{style:{margin:"30px",marginTop:"100px ",textAlign:"center"}},r.a.createElement(f.a,{variant:"contained",color:"primary",component:"span",onClick:w},"LOAD MODEL"))))},O=function(){return r.a.createElement(k,null)};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.504d828e.chunk.js.map