"use strict";(self.webpackChunkgoit_react_hw_05_movie=self.webpackChunkgoit_react_hw_05_movie||[]).push([[114],{955:function(n,e,t){t.d(e,{KA:function(){return i},Rl:function(){return u},Uo:function(){return o},rc:function(){return a},u4:function(){return f}});var r="92e9d2ddc265e58dd6d39fa8f044cca9",c="https://api.themoviedb.org/3";function o(){var n="".concat(c,"/trending/movie/day?api_key=").concat(r);return fetch(n).then((function(n){return n.ok?n.json():Promise.reject(new Error("Something weent wrong!"))}))}function i(n){var e="".concat(c,"/movie/").concat(n,"?api_key=").concat(r);return fetch(e).then((function(n){return n.ok?n.json():Promise.reject(new Error("Something weent wrong!"))}))}function a(n){var e="".concat(c,"/movie/").concat(n,"/credits?api_key=").concat(r);return fetch(e).then((function(n){return n.ok?n.json():Promise.reject(new Error("Something weent wrong!"))}))}function u(n){var e="".concat(c,"/movie/").concat(n,"/reviews?api_key=").concat(r);return fetch(e).then((function(n){return n.ok?n.json():Promise.reject(new Error("Something weent wrong!"))}))}function f(n){var e="".concat(c,"/search/movie?api_key=").concat(r,"&query=").concat(n);return fetch(e).then((function(n){return n.ok?n.json():Promise.reject(new Error("Something weent wrong!"))}))}},916:function(n,e,t){t.r(e);var r=t(885),c=t(791),o=t(871),i=t(955),a=t(184);e.default=function(){var n=(0,o.UO)().MovieId,e=(0,c.useState)(null),t=(0,r.Z)(e,2),u=t[0],f=t[1];return(0,c.useEffect)((function(){(0,i.rc)(n).then((function(n){f(n.cast)})).catch((function(n){return console.log("Error: ",n)}))}),[n]),(0,a.jsx)("ul",{children:u&&u.map((function(n){var e="https://image.tmdb.org/t/p/original/".concat(n.profile_path);return(0,a.jsxs)("li",{children:[(0,a.jsx)("img",{src:e,alt:n.name,width:"100"}),(0,a.jsxs)("p",{children:[n.name," "]}),(0,a.jsxs)("p",{children:["Character: ",n.character," "]})]},n.id)}))})}}}]);
//# sourceMappingURL=caast.c2c3c567.chunk.js.map