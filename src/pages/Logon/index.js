import React, { useState } from 'react'
import { FiLogIn, FiLock } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'
import api from '../../services/api'

import './styles.css'
import ItauImg from '../../assets/itau.jpg'
import logoImg from '../../assets/logo.png'

export default function Logon() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    async function handleLogin(event) {
        event.preventDefault();
        try {
            debugger;
            //const res = await api.get('login/' + email + "/" + password);
            //localStorage.setItem('userId', res.data.user.id);
            //localStorage.setItem('userName', res.data.user.name);
            history.push('/profile');
        }
        catch (err) {
            alert('E-mail ou Senha inválidos!');
        }
    }
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Deu Erro" />

                <form onSubmit={handleLogin}>
                    <h1>Faça o seu Login</h1>
                    <input
                        placeholder="Email"
                        value={'jaquelinelaurenti@email.com'}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        placeholder="Senha"
                        value={'************'}
                        onChange={e => setPassword(e.target.value)}
                    />
                    
                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/forgotPassword">
                        <FiLock size={16} color="#f28500" />
                        Esqueci a Senha
                    </Link>
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#f28500" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={ItauImg} alt="ItauImg" />
        </div>
    )
}
