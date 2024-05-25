import {createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithEmailAndPassword} from "firebase/auth";

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

    return;
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            
            const user = userCredential.user;
            if(user.emailVerified){
                // go to dashboard page
            }else{
                sendEmailVerification(user);
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