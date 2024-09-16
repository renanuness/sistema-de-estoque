import { MyInput, MaterialInput } from '../../../components/input';
import { useAuth } from '../../../contexts/authContext';

import styles from './styles.module.css'

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const { signIn, createUser, isLogged } = useAuth()
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //TODO: useEffect
    useEffect(() => {
        if (isLogged) {
            navigate("/dashboard");
        }
    }, [])


    async function login() {
        //TODO: Fazer o método esperar
        let result = await signIn(email, password);
        console.log(result)
        if (result) {
            console.log("go to dashboard");
            navigate("/dashboard")
        }else{
            console.log("stay there")
        }
    }

    return (
        <div className={styles.loginContainer}>
            <h1> Sistema de Estoque</h1>
            <MaterialInput label="Email" type="text" onChange={(a: string) => setEmail(a)}></MaterialInput>
            <MaterialInput label="Senha" type="password" onChange={(a: string) => setPassword(a)}></MaterialInput>
            <button onClick={login}>Entrar</button>
        </div>
    )
}