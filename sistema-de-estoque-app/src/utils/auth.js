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
    console.log("Logou com " + email + "e " + password);
}

export default function isLogged(){
    console.log("User: " + window.localStorage.getItem("user"));
    console.log(window.localStorage.getItem("user") != null);
    return window.localStorage.getItem("user") != null;
}