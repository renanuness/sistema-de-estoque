import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";

import { toast} from "react-toastify";

const AuthContext = createContext();

const firebaseConfig = {
    apiKey: "AIzaSyAapYTFKjrbV-aDPeS37OailcH4QPkkXtY",
    authDomain: "sistema-de-estoque-d6464.firebaseapp.com",
    projectId: "sistema-de-estoque-d6464",
    storageBucket: "sistema-de-estoque-d6464.appspot.com",
    messagingSenderId: "254882219928",
    appId: "1:254882219928:web:75a1cb8a5e975e0ea64ded"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();


export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem("@user");
        return savedUser ? JSON.parse(savedUser) : null;
    });

    const navigate = useNavigate();


    const createUser = async (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user)
                //TODO: Salvar no storage
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem("@user");
        navigate("/login");
    };

    const getUserInfo = () => {
        if (user) {
            const { email, password } = user;
            return { email, password };
        }
        return { email: "", password: "" };
    };

    const signIn = async (email, password) => {
        setUser(userMock);
        window.localStorage.setItem("@user", JSON.stringify(userMock));
        return true;
        return await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                if (user.emailVerified) {
                    
                    let userStr = JSON.stringify(user);
                    window.localStorage.setItem("@user", userStr);
                    setUser(user);
                } else {
                    console.log("enviando email")
                    sendEmailVerification(user).then(
                        onfulfilled((a) => {
                            console.log("Fulfilled: " + a);
                        }),
                        onrejected((a) => {
                            console.log("Rejected: " + a);
                        })
                    );
                }
                return true;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                return false;
            });
    }

    function isLogged(){
        let userLogged = window.localStorage.getItem("@user");
        return userLogged != null;
        
    }

    const value = {
        createUser,
        user,
        signIn,
        logout,
        isLogged,
        getUserInfo,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};



const userMock = {
    "user": {
        "uid": "hZ3thhszjRXeVRQNZPTaU1St3Go1",
        "email": "renan1504@gmail.com",
        "emailVerified": true,
        "isAnonymous": false,
        "providerData": [
            {
                "providerId": "password",
                "uid": "renan1504@gmail.com",
                "displayName": null,
                "email": "renan1504@gmail.com",
                "phoneNumber": null,
                "photoURL": null
            }
        ],
        "stsTokenManager": {
            "refreshToken": "AMf-vBzeC2JwacqcvkORDXQd29YT8Jd4LJdxPJI_FWQ4xYPZg9V1LX3i5KFHRZIUZsbeoq8zWAoK330yTqOudU1HQXVGRy0yfqpEy6Fsrk_815hFwLJW5nFDLQjucQiCnOCR68t_-6SWvDeyQANSLS4Z3d3sljSa4iC4_GW3duONvf6LG6bT_6URSCam7OOi3-2DYOrYouuN86Y-wSRUdoNZXy8wzcYM5eqjcNoeLamcwp8V5ncugYQ",
            "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImMxNTQwYWM3MWJiOTJhYTA2OTNjODI3MTkwYWNhYmU1YjA1NWNiZWMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc2lzdGVtYS1kZS1lc3RvcXVlLWQ2NDY0IiwiYXVkIjoic2lzdGVtYS1kZS1lc3RvcXVlLWQ2NDY0IiwiYXV0aF90aW1lIjoxNzIxNjQ1NDgwLCJ1c2VyX2lkIjoiaFozdGhoc3pqUlhlVlJRTlpQVGFVMVN0M0dvMSIsInN1YiI6ImhaM3RoaHN6alJYZVZSUU5aUFRhVTFTdDNHbzEiLCJpYXQiOjE3MjE2NDU0ODAsImV4cCI6MTcyMTY0OTA4MCwiZW1haWwiOiJyZW5hbjE1MDRAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsicmVuYW4xNTA0QGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.uytEjnFB_pHwJY4TfGGRZGwg9VB9Ewg8VrEuQrtbM4-oFRWYS6tp70SXP7EbD6NjitvE74uLYRvcqE-hkwEw9SN_zHswdfFNB94rkMMS4JI_6zmJi_dd66VPUIsDJMt0x14VI2MlSnz3Uu-86zW6gyKxte4HhQhyGGUPjlx9Ts5YcahipecLzAFE5BxF7moqQq1SNRbMbMoa4Uny3RDlNiXZBFm8Q6hGZFv1vRWStyr_nAiXxpw5JQODYezJqL6H-sABK0zBIDa255yQoQQcd1E-1bduwekWrJ2ETESjG-hRW99bUaVfjraInpXc7-N_EC19oZMYd0VhQvvgempLZA",
            "expirationTime": 1721649080882
        },
        "createdAt": "1716643221449",
        "lastLoginAt": "1721645480715",
        "apiKey": "AIzaSyAapYTFKjrbV-aDPeS37OailcH4QPkkXtY",
        "appName": "[DEFAULT]"
    },
    "providerId": null,
    "_tokenResponse": {
        "kind": "identitytoolkit#VerifyPasswordResponse",
        "localId": "hZ3thhszjRXeVRQNZPTaU1St3Go1",
        "email": "renan1504@gmail.com",
        "displayName": "",
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImMxNTQwYWM3MWJiOTJhYTA2OTNjODI3MTkwYWNhYmU1YjA1NWNiZWMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc2lzdGVtYS1kZS1lc3RvcXVlLWQ2NDY0IiwiYXVkIjoic2lzdGVtYS1kZS1lc3RvcXVlLWQ2NDY0IiwiYXV0aF90aW1lIjoxNzIxNjQ1NDgwLCJ1c2VyX2lkIjoiaFozdGhoc3pqUlhlVlJRTlpQVGFVMVN0M0dvMSIsInN1YiI6ImhaM3RoaHN6alJYZVZSUU5aUFRhVTFTdDNHbzEiLCJpYXQiOjE3MjE2NDU0ODAsImV4cCI6MTcyMTY0OTA4MCwiZW1haWwiOiJyZW5hbjE1MDRAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsicmVuYW4xNTA0QGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.uytEjnFB_pHwJY4TfGGRZGwg9VB9Ewg8VrEuQrtbM4-oFRWYS6tp70SXP7EbD6NjitvE74uLYRvcqE-hkwEw9SN_zHswdfFNB94rkMMS4JI_6zmJi_dd66VPUIsDJMt0x14VI2MlSnz3Uu-86zW6gyKxte4HhQhyGGUPjlx9Ts5YcahipecLzAFE5BxF7moqQq1SNRbMbMoa4Uny3RDlNiXZBFm8Q6hGZFv1vRWStyr_nAiXxpw5JQODYezJqL6H-sABK0zBIDa255yQoQQcd1E-1bduwekWrJ2ETESjG-hRW99bUaVfjraInpXc7-N_EC19oZMYd0VhQvvgempLZA",
        "registered": true,
        "refreshToken": "AMf-vBzeC2JwacqcvkORDXQd29YT8Jd4LJdxPJI_FWQ4xYPZg9V1LX3i5KFHRZIUZsbeoq8zWAoK330yTqOudU1HQXVGRy0yfqpEy6Fsrk_815hFwLJW5nFDLQjucQiCnOCR68t_-6SWvDeyQANSLS4Z3d3sljSa4iC4_GW3duONvf6LG6bT_6URSCam7OOi3-2DYOrYouuN86Y-wSRUdoNZXy8wzcYM5eqjcNoeLamcwp8V5ncugYQ",
        "expiresIn": "3600"
    },
    "operationType": "signIn"
};