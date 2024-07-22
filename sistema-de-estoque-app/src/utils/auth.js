import {createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithEmailAndPassword} from "firebase/auth";
import { initializeApp } from "firebase/app";

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

export async function createUser(email, password){
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

export async function signIn(email, password){
    await signInWithEmailAndPassword(auth, email, password)

        .then((userCredential) => {
            console.log(userCredential);
            const user = userCredential.user;
            if(user.emailVerified){

                let userStr = JSON.stringify(user);
                window.localStorage.setItem("user", userStr);

            }else{
                console.log("enviando email")
                sendEmailVerification(user).then(
                    onfulfilled((a)=>{                
                        console.log("Fulfilled: " + a);
                    }), 
                    onrejected((a)=>{
                        console.log("Rejected: " + a);
                    })
                );
            }
            console.log(user);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}
export default function isLogged(){
    console.log("User: " + window.localStorage.getItem("user"));
    console.log(window.localStorage.getItem("user") != null);
    return window.localStorage.getItem("user") != null;
}


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