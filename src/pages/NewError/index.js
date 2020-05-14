import React, { useState } from 'react';
import './style.css'
import { FiArrowLeft } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'

import api from '../../services/api'

import logoImg from '../../assets/logo.png'
import { file } from '@babel/types';
export default function NewError() {
    // criando os estados para manipular os inputs 
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [user, setUser] = useState('');
    const [environment, setEnvironment] = useState('');
    const [level, setLevel] = useState('');

    const history = useHistory();

    async function handleRegister(event) {
        event.preventDefault();

        // Objeto que está sendo instanciado pelo input e será utilizado na API 
        const data = { title,  details, user, environment, level};

        try {
            //const res = await api.post('ErrorOcurrence', data);
            alert(`Erro cadastrado com sucesso`);
            history.push('/profile');
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
                        placeholder="Título"
                        value={'Erro no autorization do Service.Profile'}
                        onChange={e => setTitle(e.target.value)}

                    />
                    <textarea
                        placeholder="Detalhes"
                        value={'Ao debugar o service.profile esta retornando internal server error'}
                        onChange={e => setDetails(e.target.value)}
                    />

                    <input
                        placeholder="Usuário"
                        value={'Jaqueline'}
                        onChange={e => setUser(e.target.value)}
                    />

                    <input
                        placeholder="Level"
                        value={'error'}
                        onChange={e => setLevel(e.target.value)}
                    />

                    <input
                        placeholder="Environment"
                        value={'Dev'}
                        onChange={e => setEnvironment(e.target.value)}
                    />                   

                    <button className="button" type="submit">Cadastrar</button>

                </form>
            </div>
        </div>
    );
}