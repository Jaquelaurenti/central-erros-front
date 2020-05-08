import React, { useState } from 'react';
import './style.css'
import { FiArrowLeft } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'

import api from '../../services/api'

import logoImg from '../../assets/logo.png'
export default function ForgotPassword() {
    // criando os estados para manipular os inputs 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirm] = useState('');

    const history = useHistory();

    async function handleRegister(event) {
        event.preventDefault();
        
        const data = { name, email, password, confirmPassword };

        try {
            //const res = await api.post('user', data);
            alert(`Token enviado para o e-mail informado!`);
            history.push('/');
        }
        catch (err) {
            alert(err.response.data)
        }
    }
    
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Deu Erro" />
                    <h1>Esqueci a Senha</h1>
                    <p>Insira seu e-mail para Recuperar sua Senha!</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#F28500" />
                    Voltar ao Login
                </Link>

                </section>
                <form onSubmit={handleRegister}>
                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <button className="button" type="submit">Enviar</button>

                </form>
            </div>
        </div>
    );
}