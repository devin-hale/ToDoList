(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Pacifico&display=swap);"]),i.push([e.id,"* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    background-color: white;\r\n}\r\n\r\n#content {\r\n    font-family: 'Noto Sans', 'sans serif';\r\n    color: white;\r\n}\r\n\r\n/* HEADER STUFF */\r\n\r\n.header {\r\n    font-family: 'Pacifico', cursive;\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: nowrap;\r\n    align-items: center;\r\n    min-width: 200px;\r\n    justify-content: space-between;\r\n    background-color: #3a4144;\r\n    font-size: 35px;\r\n    padding: 5px;\r\n    text-shadow: 3px 2px 5px #20292ed8;\r\n    box-shadow: 0px 0px 5px black;\r\n}\r\n\r\n#navIcon, .ghub {\r\n    font-size: 50px;\r\n    cursor: pointer;\r\n    padding: 15px;\r\n    transition: .1s;\r\n    transition-timing-function: ease-out;\r\n}\r\n\r\n#navIcon:active {\r\n    font-size: 45px;\r\n    padding-left: 20px;\r\n    transition: .05s;\r\n}\r\n\r\n.header i.ghub:hover {\r\n    cursor: pointer;\r\n    transition: .1s;\r\n    transition-timing-function: ease-out;\r\n}\r\n\r\n/* NAV MENU STUFF */\r\n\r\n.sMenuOverlay {\r\n    height: 100vh;\r\n    width: 0;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 0; /* Stay at the top */\r\n    left: 0;\r\n}\r\n\r\n.sideMenu {\r\n    font-family: 'Noto Sans', 'sans serif';\r\n    height: 100%; /* 100% Full-height */\r\n    width: 0; /* 0 width - change this with JavaScript */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 2; /* Stay on top */\r\n    top: 0; /* Stay at the top */\r\n    left: 0;\r\n    background-color: #3a4144; /* Black*/\r\n    overflow-x: hidden; /* Disable horizontal scroll */\r\n    transition: 0.15s; /* 0.5 second transition effect to slide in the sidenav */\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n#navHText {\r\n    font-size: 30px;\r\n    padding-left: 10px;\r\n}\r\n\r\n#navBack {\r\n    font-size: 30px;\r\n    padding-right: 25px;\r\n    cursor: pointer;\r\n}\r\n\r\n#navBack:active {\r\n    font-size: 25px;\r\n    padding-right: 30px;\r\n}\r\n\r\n.sideHeader {\r\n    width: 100%;\r\n    transition: .15s;\r\n    font-size: 20px;\r\n    text-shadow: 3px 2px 5px #20292ed8;\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: nowrap;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding-bottom: 20px;\r\n    padding-top: 20px;\r\n    margin-bottom: 20px;\r\n    box-shadow: 0px 0px 20px rgb(0, 0, 0);\r\n\r\n}\r\n\r\n.sideItem {\r\n    margin: 5px;\r\n    background-color: rgb(199, 97, 97);\r\n    border-color: black;\r\n    width: 90%;\r\n    display: flex;\r\n    display: grid;\r\n    grid-template-columns: 1fr 4fr 1fr;\r\n    grid-template-rows: 1fr;\r\n    align-items: center;\r\n    justify-items: center;\r\n    flex-wrap: nowrap;\r\n    height: 50px;\r\n    border-radius: 10px;\r\n    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.651);\r\n    cursor: pointer;\r\n    transition: .1s;\r\n}\r\n\r\n.sideItem:active{\r\n    background-color: rgb(255, 255, 255);\r\n    transition: .05s;\r\n}\r\n\r\np.projectText {\r\n    font-size: auto;\r\n    justify-self: left;\r\n}\r\n\r\n.fa-square-pen {\r\n    font-size: 25px;\r\n    cursor: pointer;\r\n    transition: .05s;\r\n}\r\n\r\n.fa-square-pen:hover {\r\n    font-size: 26px;\r\n    transition: .05s;\r\n}\r\n\r\n#projectAdd {\r\n    background-color: rgba(114, 114, 114, 0);\r\n}\r\n\r\n#projectAdd:hover {\r\n    background-color: rgba(114, 114, 114, 0.308);\r\n}\r\n\r\n#projectAdd:active{\r\n    background-color: rgb(255, 255, 255);\r\n    transition: .05s;\r\n}\r\n\r\n/* EDIT STUFF */\r\n\r\n.pTextInput {\r\n    font-size: 20px;\r\n    padding-left: 5px;\r\n    margin-left: 5px;\r\n    border: 0px;\r\n    outline: none;\r\n    color: white;\r\n    border-radius: 10px;\r\n    max-width: 180px;\r\n    justify-self: left;\r\n    font-family: 'Noto Sans', 'sans serif';\r\n    background-color: rgb(179, 75, 75);\r\n}\r\n\r\n/* TASKVIEW STUFF */\r\n\r\n\r\n#taskView {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin: auto;\r\n    width: clamp(345px, 75%, 900px);\r\n}\r\n\r\n.projectHText {\r\n    margin: 10px;\r\n    padding: 10px;\r\n    width: 100%;\r\n    font-size: 25px;\r\n    text-align: center;\r\n    border-radius: 10px;\r\n    background-color: rgb(199, 97, 97);\r\n    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.651);\r\n    text-shadow: 3px 2px 5px #20292ed8;\r\n}\r\n\r\n#taskContainer {\r\n    width: 100%;\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\r\n    grid-auto-rows: repeat(auto-fill, fit-content);\r\n    align-items: start;\r\n    gap: 5px\r\n}\r\n\r\n.taskCard {\r\n    position: relative;\r\n    color: #3a4144;\r\n    font-weight:600;\r\n    background-color: rgb(212, 212, 212);\r\n    border-radius: 10px;\r\n    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.651);\r\n    margin: 5px;\r\n    max-height: fit-content;\r\n}\r\n\r\n.taskName {\r\n    max-width: 100px;\r\n    overflow-x: hidden;\r\n}\r\n\r\n.taskDHeader {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: nowrap;\r\n    align-items: center;\r\n    padding: 10px;\r\n    justify-content: space-between;\r\n}\r\n\r\n.taskPrio {\r\n    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.651);\r\n}\r\n\r\n.expDetails {\r\n    padding: 10px;\r\n}\r\n\r\n.taskExpand, .minTask {\r\n    cursor: pointer;\r\n}\r\n\r\n.prioSelectButton {\r\n    width: 45px;\r\n    height: 30px;\r\n    margin: 5px;\r\n    cursor: pointer;\r\n    outline: none;\r\n    border: 0px;\r\n    border-radius: 5px;\r\n    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.651);\r\n}\r\n\r\n.lowPrio {\r\n    background-color: #a3e635;\r\n    transition: .1s;\r\n}\r\n\r\n.lowPrio:hover {\r\n    background-color: #c2fa67;\r\n    transition: .1s;\r\n}\r\n\r\n.midPrio {\r\n    background-color: #fcd34d;\r\n    transition: .1s;\r\n}\r\n\r\n.midPrio:hover {\r\n    background-color: #ffe9a2;\r\n    transition: .1s;\r\n}\r\n\r\n.highPrio {\r\n    background-color: #ef4444;\r\n    transition: .1s;\r\n}\r\n\r\n.highPrio:hover {\r\n    background-color: #ff8f8f;\r\n    transition: .1s;\r\n}\r\n\r\ninput[type='date'] {\r\n    background-color: rgb(199, 97, 97);\r\n    color: white;\r\n    cursor: pointer;\r\n    font-family: 'Noto Sans', 'sans serif';\r\n    outline: none;\r\n    border: 0px;\r\n    border-radius: 5px;\r\n    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.651);\r\n}\r\n\r\n::-webkit-calendar-picker-indicator{\r\n    background-color: #ffffff;\r\n    padding: 5px;\r\n    cursor: pointer;\r\n    border-radius: 5px;\r\n}\r\n\r\ninput[type='date']:hover, input[type='date']:focus {\r\n    background-color: rgb(238, 129, 129);\r\n}\r\n\r\n.taskNotesDiv {\r\n    width: 100%;\r\n}\r\n\r\ntextarea {\r\n    border: 0px;\r\n    width: 100%;\r\n    padding: 2px;\r\n    border-radius: 5px;\r\n    height: auto;\r\n    resize: none;\r\n    font-family: 'Noto Sans', 'sans serif';\r\n    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.651);\r\n}\r\n\r\n.completeTask {\r\n    cursor: pointer;\r\n    color: rgb(219, 67, 67);\r\n    font-size: 20px;\r\n}\r\n\r\n.taskNameEdit {\r\n    font-size: 15px;\r\n    padding-left: 5px;\r\n}\r\n\r\n.taskNameEdit:hover {\r\n    font-size: 15px;\r\n}\r\n\r\n.nameEditInput {\r\n    max-width: 160px;\r\n    z-index: 1;\r\n    padding-left: 5px;\r\n    position: absolute;\r\n    height: 30px;\r\n    background-color: #ffffff;\r\n    border-radius: 10px;\r\n    font-family: 'Noto Sans', 'sans serif';\r\n    font-weight: 600;\r\n    border: 0px;\r\n    outline: none;\r\n    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.651);\r\n}\r\n\r\n.nameEditInput:focus {\r\n    border: 0px;\r\n    outline: none;\r\n}\r\n\r\n#addTask {\r\n    color: rgb(36, 187, 36);\r\n    text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.651);\r\n    font-size: 50px;\r\n    position: fixed;\r\n    cursor: pointer;\r\n    bottom: 20px;\r\n    right: 20;\r\n    transition: .2s;\r\n}\r\n\r\n#addTask:hover {\r\n    font-size: 51px;\r\n    transition: .2s;\r\n}\r\n\r\n#addTask:active {\r\n    font-size: 49px;\r\n}\r\n\r\n#deleteProject {\r\n    border: 0px;\r\n    font-family: 'Noto Sans', 'sans serif';\r\n    background-color: rgb(199, 97, 97);\r\n    color: white;\r\n    padding: 5px;\r\n    border-radius: 10px;\r\n    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.651);\r\n    cursor: pointer;\r\n    position: fixed;\r\n    bottom: 10px;\r\n    right: 10px;\r\n    transition: .1s;\r\n}\r\n\r\n#deleteProject:hover {\r\n    background-color: rgb(247, 136, 136);\r\n    transition: .1s;\r\n}",""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],s=0;s<e.length;s++){var c=e[s],d=r.base?c[0]+r.base:c[0],l=o[d]||0,p="".concat(d," ").concat(l);o[d]=l+1;var u=n(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var g=a(m,r);r.byIndex=s,t.splice(s,0,{identifier:p,updater:g,references:1})}i.push(p)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=n(o[i]);t[s].references--}for(var c=r(e,a),d=0;d<o.length;d++){var l=n(o[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),a=n.n(r),o=n(569),i=n.n(o),s=n(565),c=n.n(s),d=n(216),l=n.n(d),p=n(589),u=n.n(p),m=n(426),g={};g.styleTagTransform=u(),g.setAttributes=c(),g.insert=i().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=l(),t()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals;const f=()=>{const e=document.getElementById("content");let t=document.createElement("div");t.classList="header";let n=document.createElement("i");n.classList="fa-solid fa-bars navIcon",n.id="navIcon",t.appendChild(n);let r=document.createElement("p");r.innerHTML="To Do",t.appendChild(r);let a=document.createElement("i");a.classList="fa-brands fa-square-github ghub",t.appendChild(a),e.appendChild(t)};class x{constructor(e){this.pName=e,this.pId=x.pLibraryIndex+=1,this.tasks=[]}addTask(e,t,n,r){let a={taskName:e,tID:x.taskID+=1,date:t,priority:n,notes:r,completed:!1};this.tasks.push(a)}static taskID=0;static currentProject=0;static getCurrentProject(){return x.currentProject}static writeCurrentProject(e){x.currentProject=e}static pLibraryIndex=0;static pLibrary=[];static getPLib(){return x.pLibrary}static setPLib(e){x.pLibrary=e}static pushPLib(e){x.pLibrary.push(e)}static removePLib(e){let t=x.pLibrary.indexOf(e);if(-1===t)return"Project Not Found";x.pLibrary.splice(t,1)}static updatePLib(e){let t=x.pLibrary.indexOf(e);return-1!==t&&x.pLibrary.splice(t,1,e),"Project Not Found"}}const h=(e,t)=>{let n=e.target.parentNode.parentNode,r=document.createElement("i");r.classList="fa-solid fa-caret-up minTask",e.target.parentNode.appendChild(r),e.target.remove(),r.addEventListener("click",(e=>{let n=document.createElement("i");n.classList="fa-solid fa-caret-down taskExpand",e.target.parentNode.appendChild(n),e.target.parentNode.nextSibling.remove(),e.target.remove(),n.addEventListener("click",(e=>{h(e,t)}))}));let a=document.createElement("div");a.classList="expDetails",n.appendChild(a),((e,t)=>{let n=document.createElement("div");n.classList="taskDateDiv";let r=document.createElement("p");r.classList="taskDateText",r.innerHTML="Due:",n.appendChild(r);let a=document.createElement("input");a.type="date",a.value=`${t.date}`,n.appendChild(a),e.appendChild(n),a.addEventListener("change",(e=>{t.date=e.target.value;const n=JSON.stringify(x.getPLib());localStorage.setItem("localProjectData",n)}))})(a,t),((e,t)=>{let n=document.createElement("div");n.classList="taskPrioSelect";let r=document.createElement("p");r.classList="prioSelectText",r.innerHTML="Priority:",n.appendChild(r);let a=document.createElement("button");a.classList="prioSelectButton lowPrio",a.type="button",n.appendChild(a),a.addEventListener("click",(()=>{t.priority="Low",document.getElementById(`task=${t.tID}`).style.color="#a3e635";const e=JSON.stringify(x.getPLib());localStorage.setItem("localProjectData",e)}));let o=document.createElement("button");o.classList="prioSelectButton midPrio",o.type="button",n.appendChild(o),o.addEventListener("click",(()=>{t.priority="Mid",document.getElementById(`task=${t.tID}`).style.color="#fcd34d";const e=JSON.stringify(x.getPLib());localStorage.setItem("localProjectData",e)}));let i=document.createElement("button");i.classList="prioSelectButton highPrio",i.type="button",n.appendChild(i),i.addEventListener("click",(()=>{t.priority="High",document.getElementById(`task=${t.tID}`).style.color="#ef4444";const e=JSON.stringify(x.getPLib());localStorage.setItem("localProjectData",e)})),e.appendChild(n)})(a,t),((e,t)=>{let n=document.createElement("div");n.classList="taskNotesDiv";let r=document.createElement("p");r.classList="taskNotesText",r.innerHTML="Notes:",n.appendChild(r);let a=document.createElement("textarea");a.value=`${t.notes}`,a.maxLength="100",a.rows=5,n.appendChild(a),e.appendChild(n),a.addEventListener("change",(e=>{t.notes=e.target.value;const n=JSON.stringify(x.getPLib());localStorage.setItem("localProjectData",n)}))})(a,t)},b=h,v=e=>{let t=document.getElementById("taskContainer"),n=document.createElement("div");n.classList="taskCard";let r=document.createElement("div");r.classList="taskDHeader",n.appendChild(r);let a=document.createElement("p");a.classList="taskName",a.innerHTML=`${e.taskName}`,r.appendChild(a);let o=document.createElement("i");o.classList="fa-solid fa-square-pen taskNameEdit",r.appendChild(o),o.addEventListener("click",(t=>{((e,t,n,r,a)=>{if(!e){let o=document.createElement("input");o.type="text",o.minLength="1",o.maxLength="20",o.classList="nameEditInput",o.value=n.innerHTML,r.insertBefore(o,n),n.remove(),o.focus(),e=!0,o.addEventListener("keydown",(i=>{if("Enter"===i.key){if(o.value.length<1)return;t=!0,e=!1,a.taskName=i.target.value,n.innerHTML=i.target.value,r.insertBefore(n,o),o.remove();const s=JSON.stringify(x.getPLib());localStorage.setItem("localProjectData",s)}})),o.addEventListener("blur",(e=>{if(!0===t)return;if(o.value.length<1)return;a.taskName=e.target.value,n.innerHTML=e.target.value,r.insertBefore(n,o),o.remove(),t=!1;const i=JSON.stringify(x.getPLib());localStorage.setItem("localProjectData",i)}))}})(void 0,!1,a,r,e)}));let i=document.createElement("i");switch(e.priority){case"Low":i.style.color="#a3e635";break;case"Mid":i.style.color="#fcd34d";break;case"High":i.style.color="#ef4444"}i.id=`task=${e.tID}`,i.classList="fa-solid fa-circle taskPrio",r.appendChild(i);let s=document.createElement("i");s.classList="fa-solid fa-circle-check completeTask",r.appendChild(s),s.addEventListener("click",(t=>{e.completed=!0,t.target.parentNode.parentNode.remove();const n=JSON.stringify(x.getPLib());localStorage.setItem("localProjectData",n)}));let c=document.createElement("i");c.classList="fa-solid fa-caret-down taskExpand",r.appendChild(c),c.addEventListener("click",(t=>{b(t,e)})),t.appendChild(n)},L=e=>{let t=document.getElementById("mainView"),n=document.createElement("div");n.id="taskView";let r=document.createElement("p");r.classList="projectHText",r.id=e.pId,r.innerHTML=`${e.pName}`,n.appendChild(r);let a=document.createElement("div");a.id="taskContainer",n.appendChild(a),t.appendChild(n),e.tasks.forEach((e=>{v(e)}));let o=document.createElement("i");o.id="addTask",o.classList="fa-solid fa-circle-plus",n.appendChild(o),o.addEventListener("click",(()=>{const t=x.getPLib()[x.getCurrentProject()-1];t.addTask("New Task","","Low",""),v(t.tasks[e.tasks.length-1]);const n=JSON.stringify(x.getPLib());localStorage.setItem("localProjectData",n)}));let i=document.createElement("button");i.id="deleteProject",i.type="button",i.innerHTML="Delete Project",n.appendChild(i),i.addEventListener("click",(()=>{if(1==x.getPLib().length)return void console.log("Cannot Delete Project when One Remains.");const e=x.getPLib().indexOf(x.getPLib()[x.getCurrentProject()-1]);document.getElementById("taskView").remove(),document.getElementById(`${x.getPLib()[x.getCurrentProject()-1].pId}`).remove(),x.getPLib().splice(e,1),x.currentProject=x.getPLib()[0].pId,L(x.getPLib()[0]);const t=JSON.stringify(x.getPLib());localStorage.setItem("localProjectData",t),localStorage.setItem("currentProject",x.currentProject)}))},y=L,E=e=>{const t=x.getPLib()[x.getPLib().findIndex((t=>t.pId==e.target.id))];console.log(t);const n=e.target.parentNode;e.target.previousElementSibling.remove(),e.target.remove();let r=document.createElement("i");r.classList="fa-solid fa-square-pen",r.id=t.pId,r.addEventListener("click",(e=>{e.target===r&&E(e)}));let a=document.createElement("input");a.type="text",a.minLength=1,a.maxLength=20,a.classList="projectText pTextInput",a.value=t.pName;let o=!1;a.addEventListener("keydown",(e=>{if("Enter"===e.key){if(a.value.length<1)return;o=!0;const i=document.createElement("p");if(n.appendChild(i),i.classList="projectText",i.textContent=e.target.value,t.pName=e.target.value,e.target.parentNode.id==x.getCurrentProject()){let t=x.getPLib()[e.target.parentNode.id-1];document.getElementById("taskView").remove(),y(t)}e.target.remove(),n.appendChild(r);const s=JSON.stringify(x.getPLib());localStorage.setItem("localProjectData",s)}})),a.addEventListener("blur",(e=>{if(!0===o)return;if(a.value.length<1)return;const i=document.createElement("p");if(n.appendChild(i),i.classList="projectText",i.textContent=e.target.value,t.pName=e.target.value,e.target.parentNode.id==x.getCurrentProject()){let t=x.getPLib()[e.target.parentNode.id-1];document.getElementById("taskView").remove(),y(t)}e.target.remove(),n.appendChild(r),o=!1;const s=JSON.stringify(x.getPLib());localStorage.setItem("localProjectData",s)})),n.appendChild(a),a.focus()},k=E,P=()=>{const e=document.getElementById("navIcon");let t=document.createElement("div");t.classList="sMenuOverlay";let n=document.createElement("div");n.classList="sideMenu",n.id="sideMenu";let r=document.createElement("div");r.classList="sideHeader";let a=document.createElement("p");a.id="navHText",a.innerHTML="Projects",r.appendChild(a);let o=document.createElement("i");o.classList="fa-solid fa-x navBack",o.id="navBack",r.appendChild(o),n.appendChild(r),t.appendChild(n),document.getElementById("content").appendChild(t),e.addEventListener("click",(()=>{t.style.width="100%",n.style.width="275px",n.style.boxShadow="0px 0px 5px black"})),t.addEventListener("click",(e=>{e.target===t&&(t.style.width="0px",n.style.width="0px",n.style.boxShadow="0px 0px 0px")})),o.addEventListener("click",(()=>{t.style.width="0px",n.style.width="0px",n.style.boxShadow="0px 0px 0px"}))},w=e=>{const t=x.getPLib().indexOf(e),n=document.getElementById("sideMenu");if(-1!==t){let t=document.createElement("div");t.classList="sideItem",t.id=e.pId,t.addEventListener("click",(e=>{if(e.target===t){let t=x.getPLib()[e.target.id-1];if(e.target.id==x.getCurrentProject())return;document.getElementById("taskView").remove(),y(t),x.writeCurrentProject(e.target.id),localStorage.setItem("currentProject",e.target.id)}}));let r=document.createElement("i");r.classList="fa-solid fa-circle",t.appendChild(r);let a=document.createElement("p");a.classList="projectText",a.innerHTML=e.pName,t.appendChild(a);let o=document.createElement("i");return o.classList="fa-solid fa-square-pen edit",o.id=e.pId,t.appendChild(o),o.addEventListener("click",(e=>k(e))),void n.appendChild(t)}let r=document.createElement("p");r.classList="errorText",r.style="color: red; font-family: sans serif",r.innerHTML="Error Displaying Projects",n.appendChild(r)},I=()=>{const e=document.getElementById("sideMenu");let t=document.createElement("div");t.classList="sideItem",t.id="projectAdd";let n=document.createElement("i");n.classList="fa-solid fa-circle",t.appendChild(n);let r=document.createElement("p");r.classList="projectText",r.innerHTML="New Project",t.appendChild(r);let a=document.createElement("i");a.classList="fa-solid fa-plus",t.appendChild(a),e.appendChild(t),t.addEventListener("click",(()=>{(e=>{let t=new x("New Project");x.pushPLib(t);const n=JSON.stringify(x.getPLib());localStorage.setItem("localProjectData",n),localStorage.setItem("pLibraryIndex",x.pLibraryIndex);const r=document.getElementById("sideMenu");let a=!1,o=document.createElement("div");o.classList="sideItem",o.id=t.pId,o.addEventListener("click",(e=>{if(e.target===o){let t=x.getPLib()[e.target.id-1];if(e.target.id==x.getCurrentProject())return console.log("Project the Same"),void console.log(t);document.getElementById("taskView").remove(),y(t),x.writeCurrentProject(e.target.id),localStorage.setItem("currentProject",e.target.id)}}));let i=document.createElement("i");i.classList="fa-solid fa-circle",o.appendChild(i);let s=document.createElement("input");s.type="text",s.minLength=1,s.maxLength=20,s.classList="projectText pTextInput",s.value=t.pName,o.appendChild(s);let c=document.createElement("i");c.classList="fa-solid fa-square-pen",c.id=t.pId,c.addEventListener("click",(e=>{e.target===c&&k(e)})),s.addEventListener("keydown",(e=>{if("Enter"===e.key){if(s.value.length<1)return;a=!0;const n=document.createElement("p");o.appendChild(n),n.classList="projectText",n.textContent=e.target.value,t.pName=e.target.value,e.target.remove(),o.appendChild(c);const r=JSON.stringify(x.getPLib());localStorage.setItem("localProjectData",r)}})),s.addEventListener("blur",(e=>{if(!0===a)return;if(s.value.length<1)return;const n=document.createElement("p");o.appendChild(n),n.classList="projectText",n.textContent=e.target.value,t.pName=e.target.value,e.target.remove(),o.appendChild(c),a=!1;const r=JSON.stringify(x.getPLib());localStorage.setItem("localProjectData",r)})),r.insertBefore(o,r.lastChild),s.focus()})()}))},C=e=>{let t=document.getElementById("content"),n=document.createElement("div");n.id="mainView",t.appendChild(n),y(e)};(()=>{if(localStorage.getItem("localProjectData")&&JSON.parse(localStorage.getItem("localProjectData")).length>0?(console.log("Local data found."),1):(console.log("No Local Data Found"),0)){(()=>{const e=JSON.parse(localStorage.getItem("localProjectData"));console.log(e),e.forEach((e=>{let t=new x(e.pName);x.pushPLib(t),e.tasks.forEach((e=>t.addTask(e.taskName,e.date,e.priority,e.notes)))}));const t=JSON.parse(localStorage.getItem("currentProject"));console.log(t),x.writeCurrentProject(t)})(),console.log(x.getCurrentProject()),f(),P();let e=x.getPLib()[x.getCurrentProject()-1];return x.getPLib().forEach((e=>w(e))),I(),void C(e)}f(),P(),x.pushPLib(new x("New Project"));let e=x.getPLib()[0];x.getPLib().forEach((e=>w(e))),x.currentProject=1,I(),C(e),console.log(x.getPLib()),localStorage.setItem("localProjectData",JSON.stringify(x.getPLib())),localStorage.setItem("pLibraryIndex",x.pLibraryIndex),localStorage.setItem("currentProject",x.getCurrentProject())})()})()})();