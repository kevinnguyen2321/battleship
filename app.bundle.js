(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(354),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,"body {\n  margin: 0;\n  min-height: 100vh;\n}\n\n.main-container {\n  height: 100vh;\n  border: solid rgb(8, 2, 2);\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n}\n\n.header-container {\n  margin-top: 5px;\n  border: solid rgb(19, 117, 10);\n  width: 50%;\n  height: 15%;\n}\n\n.header-text {\n  text-align: center;\n  font-size: 3.6rem;\n}\n\n.content-container {\n  display: flex;\n  border: solid pink;\n  height: 100vh;\n  width: 99%;\n  margin-top: 25px;\n  justify-content: center;\n  gap: 75px;\n}\n\n.player-board-container,\n.computer-board-container {\n  margin-top: 30px;\n  border: solid black;\n  width: 500px;\n  height: 500px;\n  display: grid;\n  grid-template-rows: repeat(auto-fill, minmax(50px, 1fr));\n  grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));\n}\n\n.row {\n  border: solid 1.5px black;\n  width: 50px;\n  height: 50px;\n}\n\n.row:hover {\n  background-color: black;\n}\n","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;EACE,SAAS;EACT,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,0BAA0B;EAC1B,aAAa;EACb,sBAAsB;EACtB,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,8BAA8B;EAC9B,UAAU;EACV,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,aAAa;EACb,UAAU;EACV,gBAAgB;EAChB,uBAAuB;EACvB,SAAS;AACX;;AAEA;;EAEE,gBAAgB;EAChB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,wDAAwD;EACxD,2DAA2D;AAC7D;;AAEA;EACE,yBAAyB;EACzB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,uBAAuB;AACzB",sourcesContent:["body {\n  margin: 0;\n  min-height: 100vh;\n}\n\n.main-container {\n  height: 100vh;\n  border: solid rgb(8, 2, 2);\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n}\n\n.header-container {\n  margin-top: 5px;\n  border: solid rgb(19, 117, 10);\n  width: 50%;\n  height: 15%;\n}\n\n.header-text {\n  text-align: center;\n  font-size: 3.6rem;\n}\n\n.content-container {\n  display: flex;\n  border: solid pink;\n  height: 100vh;\n  width: 99%;\n  margin-top: 25px;\n  justify-content: center;\n  gap: 75px;\n}\n\n.player-board-container,\n.computer-board-container {\n  margin-top: 30px;\n  border: solid black;\n  width: 500px;\n  height: 500px;\n  display: grid;\n  grid-template-rows: repeat(auto-fill, minmax(50px, 1fr));\n  grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));\n}\n\n.row {\n  border: solid 1.5px black;\n  width: 50px;\n  height: 50px;\n}\n\n.row:hover {\n  background-color: black;\n}\n"],sourceRoot:""}]);const s=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=t(p),A={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(A);else{var h=o(A,r);r.byIndex=s,e.splice(s,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=r(n,o),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=c}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;class r{createBoard(){const n=new Map;for(let e=0;e<10;e++)for(let t=0;t<10;t++){const r=`${e},${t}`;n.set(r,null)}return n}gameBoard=this.createBoard();isInbound([n,e]){return n>=0&&n<=9&&e>=0&&e<=9}isAllCoordsInbound(n){return n.every((n=>{const[e,t]=n;return this.isInbound([e,t])}))}isAllCoordsEmpty(n){return n.every((n=>!this.gameBoard.get(n)))}placeShip(n,[e,t],r,o){let a=e,i=t;if(this.isInbound([e,t])){const s=[];let c,l;for(let n=0;n<r;n++)"horizontal"===o?(l=`${e},${i}`,i++):"vertical"===o&&(l=`${a},${t}`,a++),s.push(l),c=s.map((n=>n.split(",").map(Number)));const d=this.isAllCoordsInbound(c),p=this.isAllCoordsEmpty(s);d&&p&&(s.forEach((e=>{this.gameBoard.set(e,[n])})),this.listOfShips[n.name]=n)}}missedAttacks=[];listOfShips={};receiveAttack([n,e]){const t=`${n},${e}`;let r=this.gameBoard.get(t);r&&!r.includes("Hit")?(r.push("Hit"),this.gameBoard.set(t,r),this.sendHitToShip(t),this.areAllShipsSunk(this.listOfShips)&&console.log("All ships are sunk!")):(this.gameBoard.set(t,["Miss"]),this.missedAttacks.push(t))}sendHitToShip(n){let e=this.gameBoard.get(n);e.find((n=>"Hit"===n))&&e[0].hit()}areAllShipsSunk(n){const e=[];for(const t in n)!0===n[t].isSunk()&&e.push(t);return 5===e.length}}class o{constructor(n){this.name=n}gameBoard=new r}var a=t(72),i=t.n(a),s=t(825),c=t.n(s),l=t(659),d=t.n(l),p=t(56),u=t.n(p),A=t(540),h=t.n(A),f=t(113),m=t.n(f),g=t(208),v={};function b(n,e,t){document.querySelector(e)||("body"===t?document.body.appendChild(n):t.appendChild(n))}function B(n){return document.createElement(n)}function E(n,e){n.classList.add(e)}v.styleTagTransform=m(),v.setAttributes=u(),v.insert=d().bind(null,"head"),v.domAPI=c(),v.insertStyleElement=h(),i()(g.A,v),g.A&&g.A.locals&&g.A.locals,console.log("dom-actions.js file loaded");const{computerBoard:C}=function(){console.log("pageLayout function called");const n=B("div");E(n,"main-container"),b(n,".main-container","body");const e=B("div");E(e,"header-container"),b(e,".header-container",n);const t=B("h1");t.textContent="Battleship",E(t,"header-text"),b(t,".header-text",e);const r=B("div");E(r,"content-container"),b(r,".content-container",n);const o=B("div");E(o,"player-board-container"),b(o,".player-board-container",r);const a=B("div");return E(a,"computer-board-container"),b(a,".computer-board-container",r),function(n){const{boardCoordsArr:e}=function(){console.log("createDomCoordsArr function called");const n=[];for(let e=0;e<10;e++)for(let t=0;t<10;t++)n.push([e,t]);return{boardCoordsArr:n}}();let t;console.log(`createDomGameBoard function called for board: ${n.className}`);for(let r=0;r<100;r++)t=B("div"),E(t,"row"),t.setAttribute("id",e[r]),n.appendChild(t)}(o),{playerBoard:o,computerBoard:a}}();C.addEventListener("click",(()=>{console.log("Hi")}));const y=document.getElementById("0,0");y&&!y.hasEventListener&&(y.addEventListener("click",(()=>{console.log("First row clicked")})),y.hasEventListener=!0),console.log(y),console.log("Index.js file loaded");const x=new o("Kev"),w=new class{constructor(n,e){this.name=n,this.length=e}damageTaken=0;hit(){this.damageTaken++}isSunk(){return this.damageTaken>=this.length}}("Battleship (P)",4);new o("Computer"),x.gameBoard.placeShip(w,[0,0],w.length,"horizontal")})();
//# sourceMappingURL=app.bundle.js.map