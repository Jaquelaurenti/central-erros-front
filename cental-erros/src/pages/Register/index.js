import React, { useState } from 'react';
import './style.css'
import { FiArrowLeft } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'

import api from '../../services/api'

import logoImg from '../../assets/logo.png'
export default function Register() {
    // criando os estados para manipular os inputs 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirm] = useState('');

    const history = useHistory();

    async function handleRegister(event) {
        event.preventDefault();

        // Objeto que está sendo instanciado pelo input e será utilizado na API 
        const data = { name, email, password, confirmPassword };

        try {
            //const res = await api.post('user', data);
            alert(`Seu ID de acesso: ${`ID-22003`}`);
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
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e verifique todos os erros!.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#F28500" />
                        Voltar ao Login
                    </Link>

                </section>
                <form onSubmit={handleRegister}>
                    <input
                        placeholder="Nome"
                        value={`Ingrid`}
                        onChange={e => setName(e.target.value)}

                    />
                    <input
                        type="email"
                        placeholder="E-mail"
                        value={`ingrid@codenation.com`}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        placeholder="Senha"
                        value={`********`}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <input
                        placeholder="Confirme a Senha"
                        value={`********`}
                        onChange={e => setConfirm(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>

                </form>
            </div>
        </div>
    );
}