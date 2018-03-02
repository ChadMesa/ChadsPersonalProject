webpackJsonp([2],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

var AboutPage = function AboutPage() {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, " This is about us page ");
};

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(24);


var Header = function Header() {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Link"], { to: "/about", className: "btn btn-default" }, "About"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Link"], { to: "/homepage", className: "btn btn-default" }, "Home"));
};

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

var HomePage = function HomePage() {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, " This is the home page");
};

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(33);


var App = function App(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "container" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__components__["b" /* Header */], null), props.children);
};

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__about__ = __webpack_require__(100);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__about__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header__ = __webpack_require__(101);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__header__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__homepage__ = __webpack_require__(102);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__homepage__["a"]; });




/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(71);



__WEBPACK_IMPORTED_MODULE_1_react_dom__["render"](__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__router__["a" /* AppRouter */], null), document.getElementById("root"));

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app__ = __webpack_require__(103);





var AppRouter = function AppRouter() {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Router"], { history: __WEBPACK_IMPORTED_MODULE_1_react_router__["browserHistory"] }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/", component: __WEBPACK_IMPORTED_MODULE_3__app__["a" /* App */] }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["IndexRoute"], { component: __WEBPACK_IMPORTED_MODULE_2__components__["a" /* AboutPage */] }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/about", component: __WEBPACK_IMPORTED_MODULE_2__components__["a" /* AboutPage */] }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["IndexRoute"], { component: __WEBPACK_IMPORTED_MODULE_2__components__["c" /* HomePage */] }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/homepage", component: __WEBPACK_IMPORTED_MODULE_2__components__["c" /* HomePage */] })));
};

/***/ })

},[60]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fib3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ob21lcGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vcm91dGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBK0I7QUFFekIsSUFBZ0IsWUFBc0M7QUFDbEQsV0FDTixrRUFFSjtBQUFDLENBSk0sQzs7Ozs7Ozs7Ozs7O0FDRndCO0FBQ0s7QUFFOUIsSUFBYSxTQUFzQztBQUM5QyxXQUNILGtFQUFLLHFEQUFLLHNEQUFHLElBQVMsVUFBVSxXQUFrQixxQkFBYSxVQUMxRCxxREFBSyxzREFBRyxJQUFhLGFBQVUsV0FBa0IscUJBSTlEO0FBQUMsQ0FQTSxDOzs7Ozs7Ozs7OztBQ0h3QjtBQUN6QixJQUFlLFdBQXNDO0FBQ2hELFdBQ0gsa0VBRVI7QUFBQyxDQUpNLEM7Ozs7Ozs7Ozs7OztBQ0R3QjtBQUNPO0FBRWhDLElBQVUsTUFBaUMsYUFBVTtBQUNoRCxXQUNILDhEQUFjLFdBQVksZUFDdEIscURBQU8sNkRBQUcsT0FDSixNQUdsQjtBQUFDLENBUE0sQzs7Ozs7Ozs7Ozs7Ozs7QUNIaUI7QUFDQzs7Ozs7Ozs7Ozs7Ozs7O0FDRE07QUFDTztBQUNEO0FBRzdCLGlEQUFPLENBQ1gscURBQVUsNERBQUUsT0FDSixTQUFlLGVBQ3pCLFM7Ozs7Ozs7Ozs7Ozs7O0FDUjZCO0FBQzBDO0FBQ2hDO0FBQ2I7QUFDWTtBQUVsQyxJQUFnQixZQUFzQztBQUVqRCxXQUNILHFEQUFPLHdEQUFRLFNBQWdCLGdFQUMzQixxREFBTSx1REFBSyxNQUFJLEtBQVUsV0FBSyxxREFDMUIscURBQVcsNERBQVUsV0FBZSxtRUFDcEMscURBQU0sdURBQUssTUFBUyxVQUFVLFdBQWUsbUVBQzdDLHFEQUFXLDREQUFVLFdBQWMsa0VBQ25DLHFEQUFNLHVEQUFLLE1BQVksYUFBVSxXQUlqRDtBQUFDLENBWk0sQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBYm91dFBhZ2U6IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDx7fT4gPSAoKSA9PntcclxuICAgIHJldHVybihcclxuICAgIDxkaXY+IFRoaXMgaXMgYWJvdXQgdXMgcGFnZSA8L2Rpdj5cclxuICAgICk7IFxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9hYm91dC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjsgXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7IFxyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlcjogUmVhY3QuU3RhdGVsZXNzQ29tcG9uZW50PHt9PiA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj48TGluayB0bz1cIi9hYm91dFwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiPkFib3V0PC9MaW5rPlxyXG4gICAgICAgICAgICAgPExpbmsgdG8gPVwiL2hvbWVwYWdlXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCI+SG9tZTwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvaGVhZGVyLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5leHBvcnQgY29uc3QgSG9tZVBhZ2U6IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDx7fT4gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+IFRoaXMgaXMgdGhlIGhvbWUgcGFnZTwvZGl2PlxyXG4gICAgKTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvaG9tZXBhZ2UudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gXCIuL2NvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBcHA6IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDx7fT4gPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAudHN4IiwiZXhwb3J0ICogZnJvbSBcIi4vYWJvdXRcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vaGVhZGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2hvbWVwYWdlXCI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvaW5kZXgudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IHsgQXBwUm91dGVyIH0gZnJvbSBcIi4vcm91dGVyXCI7XHJcblxyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gICAgPEFwcFJvdXRlci8+LFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpXHJcbik7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaW5kZXgudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFJvdXRlciwgUm91dGUsIGJyb3dzZXJIaXN0b3J5LCBJbmRleFJvdXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xyXG5pbXBvcnQgeyBBYm91dFBhZ2UgfSBmcm9tIFwiLi9jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IEFwcCB9IGZyb20gXCIuL2FwcFwiO1xyXG5pbXBvcnQgeyBIb21lUGFnZSB9IGZyb20gXCIuL2NvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBcHBSb3V0ZXI6IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDx7fT4gPSAoKSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Um91dGVyIGhpc3Rvcnk9e2Jyb3dzZXJIaXN0b3J5fT5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtBcHB9PlxyXG4gICAgICAgICAgICAgICAgPEluZGV4Um91dGUgY29tcG9uZW50PXtBYm91dFBhZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hYm91dFwiIGNvbXBvbmVudD17QWJvdXRQYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPEluZGV4Um91dGUgY29tcG9uZW50PXtIb21lUGFnZX0gLz5cclxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2hvbWVwYWdlXCIgY29tcG9uZW50PXtIb21lUGFnZX0gLz5cclxuICAgICAgICAgICAgPC9Sb3V0ZT5cclxuICAgICAgICA8L1JvdXRlcj5cclxuICAgIClcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JvdXRlci50c3giXSwic291cmNlUm9vdCI6IiJ9