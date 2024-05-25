import Input from '../../components/input';
import { signIn } from '../../utils/auth';
import './styles.css'

import estoqueBg from '../../assets/estoque-bg.png';
import { useState } from 'react';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function login() {
        signIn(email, password);
    }

    return (
        <div id="loginContainer">
            <div>
                <img src={estoqueBg} />
            </div>
            <div>
                <img src={estoqueBg} id="loginLogo"/>
                <Input type="email" placeholder='Email' id="emailInput" onChangeFn={(a)=>setEmail(a)}></Input>
                <Input type="password" placeholder='Senha' id="passwordInput" onChangeFn={(a)=>setPassword(a)}></Input>
                <button onClick={login}>Entrar</button>
            </div>
        </div>
    )
}