"use strict";
exports.id = 852;
exports.ids = [852];
exports.modules = {

/***/ 8852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "s": () => (/* binding */ AuthUserProvider),
  "a": () => (/* binding */ useAuth)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "firebase/app"
var app_ = __webpack_require__(4324);
var app_default = /*#__PURE__*/__webpack_require__.n(app_);
// EXTERNAL MODULE: external "firebase/auth"
var auth_ = __webpack_require__(4610);
;// CONCATENATED MODULE: ./lib/firebase.js


const firebaseConfig = {
    apiKey: "AIzaSyCda1plKdgrm4GnF0I6DIcXTQvMPAlt6Qs",
    authDomain: "teslaclone-fce24.firebaseapp.com",
    projectId: "teslaclone-fce24",
    storageBucket: "teslaclone-fce24.appspot.com",
    messagingSenderId: "17066301177",
    appId: "1:17066301177:web:8c2974d47d22eafe573428",
    measurementId: "G-8M5G8YECVS"
};
if (!(app_default()).apps.length) {
    app_default().initializeApp(firebaseConfig);
}
/* harmony default export */ const firebase = ((app_default()));

;// CONCATENATED MODULE: ./lib/useFirebaseAuth.js


const formatAuthUser = (user)=>({
        uid: user.uid,
        email: user.email
    })
;
function useFirebaseAuth() {
    const { 0: authUser , 1: setAuthUser  } = (0,external_react_.useState)(null);
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(true);
    const authStateChanged = async (authState)=>{
        if (!authState) {
            setLoading(false);
            return;
        }
        setLoading(true);
        var formattedUser = formatAuthUser(authState);
        setAuthUser(formattedUser);
        setLoading(false);
    };
    const clear = ()=>{
        setAuthUser(null);
        setLoading(true);
    };
    const signInWithEmailAndPassword = (email, password)=>firebase.auth().signInWithEmailAndPassword(email, password)
    ;
    const createUserWithEmailAndPassword = (email, password)=>firebase.auth().createUserWithEmailAndPassword(email, password)
    ;
    const signOut = ()=>firebase.auth().signOut().then(clear)
    ;
    (0,external_react_.useEffect)(()=>{
        const unsubscribe = firebase.auth().onAuthStateChanged(authStateChanged);
        return ()=>unsubscribe()
        ;
    });
    return {
        authUser,
        loading,
        signInWithEmailAndPassword,
        createUserWithEmailAndPassword,
        signOut
    };
};

;// CONCATENATED MODULE: ./context/AuthUserContext.js



const authUserContext = /*#__PURE__*/ (0,external_react_.createContext)({
    authUser: null,
    loading: true,
    signInWithEmailAndPassword: async ()=>{},
    createUserWithEmailAndPassword: async ()=>{},
    signOut: async ()=>{}
});
function AuthUserProvider({ children  }) {
    const auth = useFirebaseAuth();
    return /*#__PURE__*/ jsx_runtime_.jsx(authUserContext.Provider, {
        value: auth,
        children: children
    });
}
const useAuth = ()=>(0,external_react_.useContext)(authUserContext)
;


/***/ })

};
;