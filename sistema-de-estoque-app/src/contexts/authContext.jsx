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

    const updateUserInfo = (userData) => {
        setUser(userData);
        localStorage.setItem("@user", JSON.stringify(userData));
        fetch("https://dummyjson.com/users/2", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                userData,
            }),
        })
            .then((res) => res.json())
            .then(console.log)
            .catch((e) => toast.error("Erro ao atualizar os dados do usuário."));
    };

    const signIn = async (email, password) => {
        return await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                if (user.emailVerified) {

                    let userStr = JSON.stringify(user);
                    window.localStorage.setItem("user", userStr);
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

    const isLogged = () => {
        console.log("User: " + window.localStorage.getItem("user"));
        console.log(window.localStorage.getItem("user") != null);
        return window.localStorage.getItem("user") != null;
    }



    const value = {
        createUser,
        user,
        signIn,
        logout,
        isLogged: !!user,
        getUserInfo,
        updateUserInfo,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
