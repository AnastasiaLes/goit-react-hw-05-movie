"use strict";(self.webpackChunkgoit_react_hw_05_movie=self.webpackChunkgoit_react_hw_05_movie||[]).push([[122],{955:function(n,e,t){t.d(e,{KA:function(){return i},Rl:function(){return a},Uo:function(){return c},rc:function(){return u},u4:function(){return h}});var r="92e9d2ddc265e58dd6d39fa8f044cca9",o="https://api.themoviedb.org/3";function c(){var n="".concat(o,"/trending/movie/day?api_key=").concat(r);return fetch(n).then((function(n){return n.ok?n.json():Promise.reject(new Error("Something weent wrong!"))}))}function i(n){var e="".concat(o,"/movie/").concat(n,"?api_key=").concat(r);return fetch(e).then((function(n){return n.ok?n.json():Promise.reject(new Error("Something weent wrong!"))}))}function u(n){var e="".concat(o,"/movie/").concat(n,"/credits?api_key=").concat(r);return fetch(e).then((function(n){return n.ok?n.json():Promise.reject(new Error("Something weent wrong!"))}))}function a(n){var e="".concat(o,"/movie/").concat(n,"/reviews?api_key=").concat(r);return fetch(e).then((function(n){return n.ok?n.json():Promise.reject(new Error("Something weent wrong!"))}))}function h(n){var e="".concat(o,"/search/movie?api_key=").concat(r,"&query=").concat(n);return fetch(e).then((function(n){return n.ok?n.json():Promise.reject(new Error("Something weent wrong!"))}))}},764:function(n,e,t){t.r(e),t.d(e,{default:function(){return d}});var r,o=t(885),c=t(791),i=t(501),u=t(871),a=t(955),h=t(168),s=t(499).Z.div(r||(r=(0,h.Z)(["\npadding: 16px;\n/* outline: solid 1px black; */\n"]))),f=t(184);var d=function(){var n=(0,u.TH)(),e=(0,c.useState)(""),t=(0,o.Z)(e,2),r=t[0],h=t[1],d=(0,c.useState)(""),l=(0,o.Z)(d,2),m=l[0],v=l[1],g=(0,c.useState)([]),p=(0,o.Z)(g,2),w=p[0],j=p[1],k=(0,i.lr)(),_=(0,o.Z)(k,2)[1];return(0,c.useEffect)((function(){r&&(0,a.u4)(r).then((function(n){return j(n.results)}))}),[r]),(0,f.jsxs)(s,{children:[(0,f.jsxs)("form",{onSubmit:function(n){n.preventDefault(),h(m),_(m)},children:[(0,f.jsx)("input",{type:"input",placeholder:"Find movie",onInput:function(n){v(n.currentTarget.value)}}),(0,f.jsx)("button",{type:"submit",children:"Search"})]}),(0,f.jsxs)("div",{children:[0===r.length&&(0,f.jsx)("p",{children:"Enter what you are looking"}),w.length>0&&w.map((function(e){return(0,f.jsx)("li",{children:(0,f.jsx)(i.rU,{to:{pathname:"/goit-react-hw-05-movie/movies/".concat(e.id),state:{from:n}},children:e.title})},e.id)})),0===w.length&&0!==r.length&&(0,f.jsx)("h2",{children:"Nothing was found"})]}),(0,f.jsx)(u.j3,{})]})}}}]);
//# sourceMappingURL=movies-search-page.b62320a9.chunk.js.map