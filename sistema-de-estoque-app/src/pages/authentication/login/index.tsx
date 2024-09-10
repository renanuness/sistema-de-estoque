import {MyInput, MaterialInput} from '../../../components/input';
import { signIn } from '../../../utils/auth';
import './styles.css'

import estoqueBg from '../../../assets/estoque-bg.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //TODO: useEffect
    if(window.localStorage.getItem("user") != null){
        navigate("/dashboard");
    }

    async function login() {
        //TODO: Fazer o método esperar
        await signIn(email, password);
        navigate("/dashboard");
    }

    return (
        <div id="loginContainer">
            <h1> Sistema de Estoque</h1>
                <MaterialInput label="Email" type="text" onChange={(a: string)=>setEmail(a)}></MaterialInput>
                <MaterialInput label="Senha" type="password" onChange={(a: string)=>setPassword(a)}></MaterialInput>
                <button onClick={login}>Entrar</button>
        </div>
    )
}