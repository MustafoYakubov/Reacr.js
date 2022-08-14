/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/AuthUserContext.js":
/*!************************************!*\
  !*** ./context/AuthUserContext.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthUserProvider\": () => (/* binding */ AuthUserProvider),\n/* harmony export */   \"useAuth\": () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_useFirebaseAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/useFirebaseAuth */ \"./lib/useFirebaseAuth.js\");\n\n\n\nconst authUserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    authUser: null,\n    loading: true,\n    signInWithEmailAndPassword: async ()=>{},\n    createUserWithEmailAndPassword: async ()=>{},\n    signOut: async ()=>{}\n});\nfunction AuthUserProvider({ children  }) {\n    const auth = (0,_lib_useFirebaseAuth__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(authUserContext.Provider, {\n        value: auth,\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\files\\\\React.js\\\\tesla\\\\context\\\\AuthUserContext.js\",\n        lineNumber: 14,\n        columnNumber: 12\n    }, this);\n}\nconst useAuth = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(authUserContext)\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0F1dGhVc2VyQ29udGV4dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBa0Q7QUFDRztBQUVyRCxNQUFNRyxlQUFlLGlCQUFHSCxvREFBYSxDQUFDO0lBQ2xDSSxRQUFRLEVBQUUsSUFBSTtJQUNkQyxPQUFPLEVBQUUsSUFBSTtJQUNiQywwQkFBMEIsRUFBRSxVQUFZLEVBQUU7SUFDMUNDLDhCQUE4QixFQUFFLFVBQVksRUFBRTtJQUM5Q0MsT0FBTyxFQUFFLFVBQVksRUFBRTtDQUMxQixDQUFDO0FBRUssU0FBU0MsZ0JBQWdCLENBQUMsRUFBQ0MsUUFBUSxHQUFDLEVBQUU7SUFDekMsTUFBTUMsSUFBSSxHQUFHVCxnRUFBZSxFQUFFO0lBQzlCLHFCQUFPLDhEQUFDQyxlQUFlLENBQUNTLFFBQVE7UUFBQ0MsS0FBSyxFQUFFRixJQUFJO2tCQUFHRCxRQUFROzs7OztZQUE0QjtDQUN0RjtBQUVNLE1BQU1JLE9BQU8sR0FBRyxJQUFNYixpREFBVSxDQUFDRSxlQUFlLENBQUM7QUFBQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzbGFjbG9uZTIvLi9jb250ZXh0L0F1dGhVc2VyQ29udGV4dC5qcz8xNzIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB1c2VGaXJlYmFzZUF1dGggZnJvbSAnLi4vbGliL3VzZUZpcmViYXNlQXV0aCc7XHJcblxyXG5jb25zdCBhdXRoVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHtcclxuICAgIGF1dGhVc2VyOiBudWxsLFxyXG4gICAgbG9hZGluZzogdHJ1ZSxcclxuICAgIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkOiBhc3luYyAoKSA9PiB7fSxcclxuICAgIGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZDogYXN5bmMgKCkgPT4ge30sXHJcbiAgICBzaWduT3V0OiBhc3luYyAoKSA9PiB7fVxyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBdXRoVXNlclByb3ZpZGVyKHtjaGlsZHJlbn0pIHtcclxuICAgIGNvbnN0IGF1dGggPSB1c2VGaXJlYmFzZUF1dGgoKTtcclxuICAgIHJldHVybiA8YXV0aFVzZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXthdXRofT57Y2hpbGRyZW59PC9hdXRoVXNlckNvbnRleHQuUHJvdmlkZXI+XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VBdXRoID0gKCkgPT4gdXNlQ29udGV4dChhdXRoVXNlckNvbnRleHQpOyJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUZpcmViYXNlQXV0aCIsImF1dGhVc2VyQ29udGV4dCIsImF1dGhVc2VyIiwibG9hZGluZyIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwic2lnbk91dCIsIkF1dGhVc2VyUHJvdmlkZXIiLCJjaGlsZHJlbiIsImF1dGgiLCJQcm92aWRlciIsInZhbHVlIiwidXNlQXV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/AuthUserContext.js\n");

/***/ }),

/***/ "./lib/firebase.js":
/*!*************************!*\
  !*** ./lib/firebase.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyCda1plKdgrm4GnF0I6DIcXTQvMPAlt6Qs\",\n    authDomain: \"teslaclone-fce24.firebaseapp.com\",\n    projectId: \"teslaclone-fce24\",\n    storageBucket: \"teslaclone-fce24.appspot.com\",\n    messagingSenderId: \"17066301177\",\n    appId: \"1:17066301177:web:8c2974d47d22eafe573428\",\n    measurementId: \"G-8M5G8YECVS\"\n};\nif (!(firebase_app__WEBPACK_IMPORTED_MODULE_0___default().apps.length)) {\n    firebase_app__WEBPACK_IMPORTED_MODULE_0___default().initializeApp(firebaseConfig);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((firebase_app__WEBPACK_IMPORTED_MODULE_0___default()));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZmlyZWJhc2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBbUM7QUFDYjtBQUV0QixNQUFNQyxjQUFjLEdBQUc7SUFDbkJDLE1BQU0sRUFBRSx5Q0FBeUM7SUFDakRDLFVBQVUsRUFBRSxrQ0FBa0M7SUFDOUNDLFNBQVMsRUFBRSxrQkFBa0I7SUFDN0JDLGFBQWEsRUFBRSw4QkFBOEI7SUFDN0NDLGlCQUFpQixFQUFFLGFBQWE7SUFDaENDLEtBQUssRUFBRSwwQ0FBMEM7SUFDakRDLGFBQWEsRUFBRSxjQUFjO0NBQ2hDO0FBRUQsSUFBRyxDQUFDUixpRUFBb0IsRUFBQztJQUNyQkEsaUVBQXNCLENBQUNDLGNBQWMsQ0FBQztDQUN6QztBQUVELGlFQUFlRCxxREFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzbGFjbG9uZTIvLi9saWIvZmlyZWJhc2UuanM/YWI0NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvYXBwJ1xyXG5pbXBvcnQgJ2ZpcmViYXNlL2F1dGgnXHJcblxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICAgIGFwaUtleTogXCJBSXphU3lDZGExcGxLZGdybTRHbkYwSTZESWNYVFF2TVBBbHQ2UXNcIixcclxuICAgIGF1dGhEb21haW46IFwidGVzbGFjbG9uZS1mY2UyNC5maXJlYmFzZWFwcC5jb21cIixcclxuICAgIHByb2plY3RJZDogXCJ0ZXNsYWNsb25lLWZjZTI0XCIsXHJcbiAgICBzdG9yYWdlQnVja2V0OiBcInRlc2xhY2xvbmUtZmNlMjQuYXBwc3BvdC5jb21cIixcclxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjE3MDY2MzAxMTc3XCIsXHJcbiAgICBhcHBJZDogXCIxOjE3MDY2MzAxMTc3OndlYjo4YzI5NzRkNDdkMjJlYWZlNTczNDI4XCIsXHJcbiAgICBtZWFzdXJlbWVudElkOiBcIkctOE01RzhZRUNWU1wiXHJcbn07XHJcblxyXG5pZighZmlyZWJhc2UuYXBwcy5sZW5ndGgpe1xyXG4gICAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZylcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZmlyZWJhc2U7Il0sIm5hbWVzIjpbImZpcmViYXNlIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/firebase.js\n");

/***/ }),

/***/ "./lib/useFirebaseAuth.js":
/*!********************************!*\
  !*** ./lib/useFirebaseAuth.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ useFirebaseAuth)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firebase */ \"./lib/firebase.js\");\n\n\nconst formatAuthUser = (user)=>({\n        uid: user.uid,\n        email: user.email\n    })\n;\nfunction useFirebaseAuth() {\n    const { 0: authUser , 1: setAuthUser  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n    const authStateChanged = async (authState)=>{\n        if (!authState) {\n            setLoading(false);\n            return;\n        }\n        setLoading(true);\n        var formattedUser = formatAuthUser(authState);\n        setAuthUser(formattedUser);\n        setLoading(false);\n    };\n    const clear = ()=>{\n        setAuthUser(null);\n        setLoading(true);\n    };\n    const signInWithEmailAndPassword = (email, password)=>_firebase__WEBPACK_IMPORTED_MODULE_1__[\"default\"].auth().signInWithEmailAndPassword(email, password)\n    ;\n    const createUserWithEmailAndPassword = (email, password)=>_firebase__WEBPACK_IMPORTED_MODULE_1__[\"default\"].auth().createUserWithEmailAndPassword(email, password)\n    ;\n    const signOut = ()=>_firebase__WEBPACK_IMPORTED_MODULE_1__[\"default\"].auth().signOut().then(clear)\n    ;\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const unsubscribe = _firebase__WEBPACK_IMPORTED_MODULE_1__[\"default\"].auth().onAuthStateChanged(authStateChanged);\n        return ()=>unsubscribe()\n        ;\n    });\n    return {\n        authUser,\n        loading,\n        signInWithEmailAndPassword,\n        createUserWithEmailAndPassword,\n        signOut\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdXNlRmlyZWJhc2VBdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMkM7QUFDVjtBQUVqQyxNQUFNRyxjQUFjLEdBQUcsQ0FBQ0MsSUFBSSxHQUFLLENBQUM7UUFDOUJDLEdBQUcsRUFBRUQsSUFBSSxDQUFDQyxHQUFHO1FBQ2JDLEtBQUssRUFBRUYsSUFBSSxDQUFDRSxLQUFLO0tBQ3BCLENBQUM7QUFBQztBQUVZLFNBQVNDLGVBQWUsR0FBRztJQUN0QyxNQUFNLEVBVFYsR0FTV0MsUUFBUSxHQVRuQixHQVNxQkMsV0FBVyxNQUFJVCwrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUM5QyxNQUFNLEVBVlYsR0FVV1UsT0FBTyxHQVZsQixHQVVvQkMsVUFBVSxNQUFJWCwrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUU1QyxNQUFNWSxnQkFBZ0IsR0FBRyxPQUFPQyxTQUFTLEdBQUs7UUFDMUMsSUFBRyxDQUFDQSxTQUFTLEVBQUU7WUFDWEYsVUFBVSxDQUFDLEtBQUssQ0FBQztZQUNqQixPQUFPO1NBQ1Y7UUFDREEsVUFBVSxDQUFDLElBQUksQ0FBQztRQUNoQixJQUFJRyxhQUFhLEdBQUdYLGNBQWMsQ0FBQ1UsU0FBUyxDQUFDO1FBQzdDSixXQUFXLENBQUNLLGFBQWEsQ0FBQztRQUMxQkgsVUFBVSxDQUFDLEtBQUssQ0FBQztLQUNwQjtJQUVELE1BQU1JLEtBQUssR0FBRyxJQUFNO1FBQ2hCTixXQUFXLENBQUMsSUFBSSxDQUFDO1FBQ2pCRSxVQUFVLENBQUMsSUFBSSxDQUFDO0tBQ25CO0lBRUQsTUFBTUssMEJBQTBCLEdBQUcsQ0FBQ1YsS0FBSyxFQUFFVyxRQUFRLEdBQy9DZixzREFBYSxFQUFFLENBQUNjLDBCQUEwQixDQUFDVixLQUFLLEVBQUVXLFFBQVEsQ0FBQztJQUFBO0lBRS9ELE1BQU1FLDhCQUE4QixHQUFHLENBQUNiLEtBQUssRUFBRVcsUUFBUSxHQUNuRGYsc0RBQWEsRUFBRSxDQUFDaUIsOEJBQThCLENBQUNiLEtBQUssRUFBRVcsUUFBUSxDQUFDO0lBQUE7SUFFbkUsTUFBTUcsT0FBTyxHQUFHLElBQ1psQixzREFBYSxFQUFFLENBQUNrQixPQUFPLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDTixLQUFLLENBQUM7SUFBQTtJQUV6Q2QsZ0RBQVMsQ0FBQyxJQUFNO1FBQ1osTUFBTXFCLFdBQVcsR0FBR3BCLHNEQUFhLEVBQUUsQ0FBQ3FCLGtCQUFrQixDQUFDWCxnQkFBZ0IsQ0FBQztRQUN4RSxPQUFPLElBQU1VLFdBQVcsRUFBRTtRQUFBLENBQUM7S0FDOUIsQ0FBQztJQUVGLE9BQU07UUFDRmQsUUFBUTtRQUNSRSxPQUFPO1FBQ1BNLDBCQUEwQjtRQUMxQkcsOEJBQThCO1FBQzlCQyxPQUFPO0tBQ1Y7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc2xhY2xvbmUyLy4vbGliL3VzZUZpcmViYXNlQXV0aC5qcz9jOGU1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gJy4vZmlyZWJhc2UnXHJcblxyXG5jb25zdCBmb3JtYXRBdXRoVXNlciA9ICh1c2VyKSA9PiAoe1xyXG4gICAgdWlkOiB1c2VyLnVpZCxcclxuICAgIGVtYWlsOiB1c2VyLmVtYWlsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRmlyZWJhc2VBdXRoKCkge1xyXG4gICAgY29uc3QgW2F1dGhVc2VyLCBzZXRBdXRoVXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIGNvbnN0IGF1dGhTdGF0ZUNoYW5nZWQgPSBhc3luYyAoYXV0aFN0YXRlKSA9PiB7XHJcbiAgICAgICAgaWYoIWF1dGhTdGF0ZSkge1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgICAgICB2YXIgZm9ybWF0dGVkVXNlciA9IGZvcm1hdEF1dGhVc2VyKGF1dGhTdGF0ZSlcclxuICAgICAgICBzZXRBdXRoVXNlcihmb3JtYXR0ZWRVc2VyKVxyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2xlYXIgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0QXV0aFVzZXIobnVsbClcclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQgPSAoZW1haWwsIHBhc3N3b3JkKSA9PiAvLyBsb2dpblxyXG4gICAgICAgIGZpcmViYXNlLmF1dGgoKS5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXHJcblxyXG4gICAgY29uc3QgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkID0gKGVtYWlsLCBwYXNzd29yZCkgPT4gLy8gcmVnaXN0ZXJcclxuICAgICAgICBmaXJlYmFzZS5hdXRoKCkuY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcclxuXHJcbiAgICBjb25zdCBzaWduT3V0ID0gKCkgPT4gLy8gbG9nIG91dFxyXG4gICAgICAgIGZpcmViYXNlLmF1dGgoKS5zaWduT3V0KCkudGhlbihjbGVhcilcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gZmlyZWJhc2UuYXV0aCgpLm9uQXV0aFN0YXRlQ2hhbmdlZChhdXRoU3RhdGVDaGFuZ2VkKVxyXG4gICAgICAgIHJldHVybiAoKSA9PiB1bnN1YnNjcmliZSgpO1xyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgYXV0aFVzZXIsXHJcbiAgICAgICAgbG9hZGluZyxcclxuICAgICAgICBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCxcclxuICAgICAgICBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQsXHJcbiAgICAgICAgc2lnbk91dFxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZmlyZWJhc2UiLCJmb3JtYXRBdXRoVXNlciIsInVzZXIiLCJ1aWQiLCJlbWFpbCIsInVzZUZpcmViYXNlQXV0aCIsImF1dGhVc2VyIiwic2V0QXV0aFVzZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImF1dGhTdGF0ZUNoYW5nZWQiLCJhdXRoU3RhdGUiLCJmb3JtYXR0ZWRVc2VyIiwiY2xlYXIiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInBhc3N3b3JkIiwiYXV0aCIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsInNpZ25PdXQiLCJ0aGVuIiwidW5zdWJzY3JpYmUiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/useFirebaseAuth.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_AuthUserContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/AuthUserContext */ \"./context/AuthUserContext.js\");\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AuthUserContext__WEBPACK_IMPORTED_MODULE_2__.AuthUserProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"D:\\\\files\\\\React.js\\\\tesla\\\\pages\\\\_app.js\",\n            lineNumber: 5,\n            columnNumber: 28\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\files\\\\React.js\\\\tesla\\\\pages\\\\_app.js\",\n        lineNumber: 5,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQThCO0FBQytCO0FBRTdELFNBQVNDLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxFQUFFO0lBQ3ZDLHFCQUFPLDhEQUFDSCxzRUFBZ0I7a0JBQUMsNEVBQUNFLFNBQVM7WUFBRSxHQUFHQyxTQUFTOzs7OztnQkFBSTs7Ozs7WUFBbUI7Q0FDekU7QUFFRCxpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzbGFjbG9uZTIvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXHJcbmltcG9ydCB7IEF1dGhVc2VyUHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0L0F1dGhVc2VyQ29udGV4dCdcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHJldHVybiA8QXV0aFVzZXJQcm92aWRlcj48Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+PC9BdXRoVXNlclByb3ZpZGVyPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDsiXSwibmFtZXMiOlsiQXV0aFVzZXJQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("firebase/auth");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();