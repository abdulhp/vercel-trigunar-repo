/*! For license information please see app~069c28ab.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkcapstone_project=self.webpackChunkcapstone_project||[]).push([[823],{230:(t,n,e)=>{function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(){o=function(){return n};var t,n={},e=Object.prototype,a=e.hasOwnProperty,i=Object.defineProperty||function(t,n,e){t[n]=e.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{f({},"")}catch(t){f=function(t,n,e){return t[n]=e}}function h(t,n,e,r){var o=n&&n.prototype instanceof w?n:w,a=Object.create(o.prototype),c=new N(r||[]);return i(a,"_invoke",{value:O(t,e,c)}),a}function p(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}n.wrap=h;var d="suspendedStart",v="suspendedYield",y="executing",m="completed",g={};function w(){}function b(){}function x(){}var k={};f(k,u,(function(){return this}));var E=Object.getPrototypeOf,L=E&&E(E(I([])));L&&L!==e&&a.call(L,u)&&(k=L);var j=x.prototype=w.prototype=Object.create(k);function _(t){["next","throw","return"].forEach((function(n){f(t,n,(function(t){return this._invoke(n,t)}))}))}function P(t,n){function e(o,i,c,u){var s=p(t[o],t,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==r(f)&&a.call(f,"__await")?n.resolve(f.__await).then((function(t){e("next",t,c,u)}),(function(t){e("throw",t,c,u)})):n.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return e("throw",t,c,u)}))}u(s.arg)}var o;i(this,"_invoke",{value:function(t,r){function a(){return new n((function(n,o){e(t,r,n,o)}))}return o=o?o.then(a,a):a()}})}function O(n,e,r){var o=d;return function(a,i){if(o===y)throw Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:t,done:!0}}for(r.method=a,r.arg=i;;){var c=r.delegate;if(c){var u=T(c,r);if(u){if(u===g)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===d)throw o=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=y;var s=p(n,e,r);if("normal"===s.type){if(o=r.done?m:v,s.arg===g)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=m,r.method="throw",r.arg=s.arg)}}}function T(n,e){var r=e.method,o=n.iterator[r];if(o===t)return e.delegate=null,"throw"===r&&n.iterator.return&&(e.method="return",e.arg=t,T(n,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var a=p(o,n.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,g;var i=a.arg;return i?i.done?(e[n.resultName]=i.value,e.next=n.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,g):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function S(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function G(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function I(n){if(n||""===n){var e=n[u];if(e)return e.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var o=-1,i=function e(){for(;++o<n.length;)if(a.call(n,o))return e.value=n[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(r(n)+" is not iterable")}return b.prototype=x,i(j,"constructor",{value:x,configurable:!0}),i(x,"constructor",{value:b,configurable:!0}),b.displayName=f(x,l,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===b||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,f(t,l,"GeneratorFunction")),t.prototype=Object.create(j),t},n.awrap=function(t){return{__await:t}},_(P.prototype),f(P.prototype,s,(function(){return this})),n.AsyncIterator=P,n.async=function(t,e,r,o,a){void 0===a&&(a=Promise);var i=new P(h(t,e,r,o),a);return n.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(j),f(j,l,"Generator"),f(j,u,(function(){return this})),f(j,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=I,N.prototype={constructor:N,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(G),!n)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var e=this;function r(r,o){return c.type="throw",c.arg=n,e.next=r,o&&(e.method="next",e.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=a.call(i,"catchLoc"),s=a.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=n,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),g},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),G(e),g}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;G(e)}return o}}throw Error("illegal catch attempt")},delegateYield:function(n,e,r){return this.delegate={iterator:I(n),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=t),g}},n}function a(t,n,e,r,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void e(t)}c.done?n(u):Promise.resolve(u).then(r,o)}function i(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var i=t.apply(n,e);function c(t){a(i,r,o,c,u,"next",t)}function u(t){a(i,r,o,c,u,"throw",t)}c(void 0)}))}}e.d(n,{A:()=>c});const c={render:function(){return i(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",'\n       <main>\n          <div class="main-content-admin">\n              <aside>\n                  <ul>\n                      <li><a href="/#/admin">Home</a></li>\n                      <li>user</li>\n                       <li><a href="/#/event_admin">Event</a></li>\n                      <li>destination</li>\n                      <li>Tri Kota</li>\n                      <li>kuliner</li>\n                  </ul>\n              </aside>\n  \n              <div class="content-dasboard">\n                  <section class="form-section">\n                      <h2>Tambahkan data & Edit data</h2>\n                      <form id="package-form-kuliner" enctype="multipart/form-data">\n                          <div class="form-group">\n                              <label for="name">Name</label>\n                              <input type="text" id="name" name="name" required>\n                          </div>\n                          <div class="form-group">\n                              <label for="description">Description</label>\n                              <textarea id="description" name="description" required></textarea>\n                          </div>\n                          <div class="form-group">\n                              <label for="location">Location</label>\n                              <input type="text" id="location" name="location" required>\n                          </div>\n                          <div class="form-group">\n                             <label for="city">City</label>\n                             <select id="city" name="city" required>\n                                <option value="">Pilih Kota</option>\n                                <option value="Lombok">Lombok</option>\n                                <option value="Banyumas">Banyumas</option>\n                                <option value="Jambi">Jambi</option>\n                            </select>\n                        </div>\n                          <div class="form-group">\n                              <label for="price">Price</label>\n                              <input type="number" id="price" name="price" required>\n                          </div>\n                          <div class="form-group">\n                              <label for="rating">Rating</label>\n                              <input type="number" id="rating" name="rating" required>\n                          </div>\n  \n                          <div class="form-group">\n                              <label for="image">Gambar</label>\n                              <input id="image" name="image" type="file" required>\n                          </div>\n                          <button type="submit">Save</button>\n                      </form>\n                  </section>\n  \n                  <section class="table-section">\n                      <h2>Kuliner</h2>\n                      <table>\n                          <thead>\n                              <tr>\n                                  <th>Name</th>\n                                  <th>Description</th>\n                                  <th>Location</th>\n                                  <th>City</th>\n                                  <th>Rating</th>\n                                  <th>Price</th>\n                                  <th>Gambar</th>\n                                  <th>Actions</th>\n                              </tr>\n                          </thead>\n                          <tbody id="package-list-kuliner">\n                              \x3c!-- Travel packages will be populated here --\x3e\n                          </tbody>\n                      </table>\n                  </section>\n              </div>\n          </div>\n      </main>\n      ');case 1:case"end":return t.stop()}}),t)})))()},afterRender:function(){return i(o().mark((function t(){var n,e,r,a,c;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c=function(){return(c=i(o().mark((function t(){var n,r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://localhost:3000/kuliners");case 3:return n=t.sent,t.next=6,n.json();case 6:r=t.sent,e.innerHTML="",r.forEach((function(t){var n=document.createElement("tr");n.innerHTML="\n              <td>".concat(t.name,"</td>\n              <td>").concat(t.description,"</td>\n              <td>").concat(t.location,"</td>\n              <td>").concat(t.city,"</td>\n              <td>").concat(t.rating,"</td>\n              <td>").concat(t.price,'</td>\n              <td><img src="').concat(t.image,'" alt="').concat(t.image,'" width="100"></td>\n              <td class="action">\n                <button class="edit" onclick="editPackage(').concat(t.id,')">Edit</button>\n                <button class="delete" onclick="deletePackage(').concat(t.id,')">Delete</button>\n              </td>\n            '),e.appendChild(n)})),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.error("Error fetching packages:",t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)},a=function(){return c.apply(this,arguments)},n=document.getElementById("package-form-kuliner"),e=document.getElementById("package-list-kuliner"),r=null,n.addEventListener("submit",function(){var t=i(o().mark((function t(e){var i,c,u,s;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),i=new FormData(n),c=r?"PUT":"POST",u=r?"http://localhost:3000/kuliners/".concat(r):"http://localhost:3000/kuliners",t.prev=4,t.next=7,fetch(u,{method:c,body:i});case 7:if((s=t.sent).ok){t.next=10;break}throw new Error("HTTP error! status: ".concat(s.status));case 10:n.reset(),r=null,a(),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(4),console.error("Error adding/updating package:",t.t0);case 18:case"end":return t.stop()}}),t,null,[[4,15]])})));return function(n){return t.apply(this,arguments)}}()),window.editPackage=function(){var t=i(o().mark((function t(n){var e,a;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://localhost:3000/kuliners/".concat(n));case 3:return e=t.sent,t.next=6,e.json();case 6:a=t.sent,document.getElementById("name").value=a.name,document.getElementById("description").value=a.description,document.getElementById("location").value=a.location,document.getElementById("city").value=a.city,document.getElementById("rating").value=a.rating,document.getElementById("price").value=a.price,document.getElementById("image").value="",r=n,t.next=20;break;case 17:t.prev=17,t.t0=t.catch(0),console.error("Error editing package:",t.t0);case 20:case"end":return t.stop()}}),t,null,[[0,17]])})));return function(n){return t.apply(this,arguments)}}(),window.deletePackage=function(){var t=i(o().mark((function t(n){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.confirm("Apakah Anda yakin ingin menghapus kuliner ini?")){t.next=14;break}return t.prev=2,t.next=5,fetch("http://localhost:3000/kuliners/".concat(n),{method:"DELETE"});case 5:if((e=t.sent).ok){t.next=8;break}throw new Error("HTTP error! status: ".concat(e.status));case 8:a(),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(2),console.error("Error deleting package:",t.t0);case 14:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(n){return t.apply(this,arguments)}}(),a();case 9:case"end":return t.stop()}}),t)})))()}}},498:(t,n,e)=>{function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(){o=function(){return n};var t,n={},e=Object.prototype,a=e.hasOwnProperty,i=Object.defineProperty||function(t,n,e){t[n]=e.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{f({},"")}catch(t){f=function(t,n,e){return t[n]=e}}function h(t,n,e,r){var o=n&&n.prototype instanceof w?n:w,a=Object.create(o.prototype),c=new N(r||[]);return i(a,"_invoke",{value:O(t,e,c)}),a}function p(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}n.wrap=h;var d="suspendedStart",v="suspendedYield",y="executing",m="completed",g={};function w(){}function b(){}function x(){}var k={};f(k,u,(function(){return this}));var E=Object.getPrototypeOf,L=E&&E(E(I([])));L&&L!==e&&a.call(L,u)&&(k=L);var j=x.prototype=w.prototype=Object.create(k);function _(t){["next","throw","return"].forEach((function(n){f(t,n,(function(t){return this._invoke(n,t)}))}))}function P(t,n){function e(o,i,c,u){var s=p(t[o],t,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==r(f)&&a.call(f,"__await")?n.resolve(f.__await).then((function(t){e("next",t,c,u)}),(function(t){e("throw",t,c,u)})):n.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return e("throw",t,c,u)}))}u(s.arg)}var o;i(this,"_invoke",{value:function(t,r){function a(){return new n((function(n,o){e(t,r,n,o)}))}return o=o?o.then(a,a):a()}})}function O(n,e,r){var o=d;return function(a,i){if(o===y)throw Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:t,done:!0}}for(r.method=a,r.arg=i;;){var c=r.delegate;if(c){var u=T(c,r);if(u){if(u===g)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===d)throw o=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=y;var s=p(n,e,r);if("normal"===s.type){if(o=r.done?m:v,s.arg===g)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=m,r.method="throw",r.arg=s.arg)}}}function T(n,e){var r=e.method,o=n.iterator[r];if(o===t)return e.delegate=null,"throw"===r&&n.iterator.return&&(e.method="return",e.arg=t,T(n,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var a=p(o,n.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,g;var i=a.arg;return i?i.done?(e[n.resultName]=i.value,e.next=n.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,g):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function S(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function G(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function I(n){if(n||""===n){var e=n[u];if(e)return e.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var o=-1,i=function e(){for(;++o<n.length;)if(a.call(n,o))return e.value=n[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(r(n)+" is not iterable")}return b.prototype=x,i(j,"constructor",{value:x,configurable:!0}),i(x,"constructor",{value:b,configurable:!0}),b.displayName=f(x,l,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===b||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,f(t,l,"GeneratorFunction")),t.prototype=Object.create(j),t},n.awrap=function(t){return{__await:t}},_(P.prototype),f(P.prototype,s,(function(){return this})),n.AsyncIterator=P,n.async=function(t,e,r,o,a){void 0===a&&(a=Promise);var i=new P(h(t,e,r,o),a);return n.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(j),f(j,l,"Generator"),f(j,u,(function(){return this})),f(j,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=I,N.prototype={constructor:N,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(G),!n)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var e=this;function r(r,o){return c.type="throw",c.arg=n,e.next=r,o&&(e.method="next",e.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=a.call(i,"catchLoc"),s=a.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=n,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),g},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),G(e),g}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;G(e)}return o}}throw Error("illegal catch attempt")},delegateYield:function(n,e,r){return this.delegate={iterator:I(n),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=t),g}},n}function a(t,n,e,r,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void e(t)}c.done?n(u):Promise.resolve(u).then(r,o)}function i(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var i=t.apply(n,e);function c(t){a(i,r,o,c,u,"next",t)}function u(t){a(i,r,o,c,u,"throw",t)}c(void 0)}))}}e.d(n,{A:()=>c});const c={render:function(){return i(o().mark((function t(){var n,e,r,a,i,c,u,s,l;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://trigunar-capstone.vercel.app/#/admin");case 3:return n=t.sent,t.next=6,n.json();case 6:return e=t.sent,r=e.filter((function(t){return"Banyumas"===t.city})),t.next=10,fetch("https://trigunar-capstone.vercel.app/#/event_admin");case 10:return a=t.sent,t.next=13,a.json();case 13:return i=t.sent,c=i.filter((function(t){return"Banyumas"===t.city})),t.next=17,fetch("https://trigunar-capstone.vercel.app/#/admin");case 17:return u=t.sent,t.next=20,u.json();case 20:return s=t.sent,l=s.filter((function(t){return"Banyumas"===t.city})),t.abrupt("return",'\n          <h1 class="kota">Banyumas</h1>\n          <p>Temukan Destinasi Impian Anda</p>\n  \n          <h2 class="title">Wisata</h2>\n          <div class="wisata">\n            <div class="container-wisata">\n              '.concat(r.map((function(t){return'\n                <div class="image-wisata">\n                  <a href="#/detail/'.concat(t.id,'">\n                    <img src="').concat(t.image_url||"./default-image.jpg",'" alt="').concat(t.name,'" />\n                  </a>\n                  <h3>').concat(t.name,'</h3>\n                  <p tabindex="0">').concat(t.description.slice(0,150),'...</p>\n                  <div class="rating">Rating: ').concat(t.rating,"</div>\n                </div>\n              ")})).join(""),'\n            </div>\n          </div>\n  \n          <h2 class="title">Kuliner</h2>\n          <div class="wisata">\n            <div class="container-wisata">\n              ').concat(l.map((function(t){return'\n                <div class="image-wisata">\n                 <a href="#/kuliner/'.concat(t.id,'">\n                    <img src="').concat(t.image||"./default-image.jpg",'"\n                     alt="').concat(t.name,'" />\n                  </a>\n                  <h3>').concat(t.name,'</h3>\n                 <p tabindex="0">').concat(t.description.slice(0,150),'...</p>\n                  <div class="rating">Rating: ').concat(t.rating,"</div>\n                </div>\n              ")})).join(""),'\n            </div>\n          </div>\n  \n          <h2 class="title">Event</h2>\n          <div class="wisata">\n            <div class="container-wisata">\n              ').concat(c.map((function(t){return'\n                <div class="image-wisata">\n                  <a href="#/event/'.concat(t.id,'">\n                    <img src="').concat(t.image||"./default-image.jpg",'"\n                     alt="').concat(t.title,'" />\n                  </a>\n                  <h3>').concat(t.title,'</h3>\n                  <p tabindex="0">').concat(t.description.slice(0,150),'...</p>\n                  <div class="price">RP. ').concat(t.price,"</div>\n                </div>\n              ")})).join(""),"\n            </div>\n          </div>\n        "));case 25:return t.prev=25,t.t0=t.catch(0),console.error("Error fetching data:",t.t0),t.abrupt("return",'\n          <h1 class="kota">Lombok</h1>\n          <p>Temukan Destinasi Impian Anda</p>\n          <p>Error loading data. Please try again later.</p>\n        ');case 29:case"end":return t.stop()}}),t,null,[[0,25]])})))()},afterRender:function(){return i(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("Rendering Lombok page completed.");case 1:case"end":return t.stop()}}),t)})))()}}}}]);
//# sourceMappingURL=app~069c28ab.bundle.js.map