import React, { useState } from 'react';
import './style.css'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft} from 'react-icons/fi'

import api from '../../services/api'

import logoImg from '../../assets/logo.png'
export default function ErrorDetails() {
    const history = useHistory();

    async function handleRegister(event) {
        event.preventDefault();
        // Objeto que está sendo instanciado pelo input e será utilizado na API 
        //const data = { name, email, password, confirmPassword };

        try {
            //const res = await api.post('user', data);
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
                    <h1>Detalhes do Erro</h1>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#F28500" />
                        Voltar ao Profile de Erros
                    </Link>

                </section>
                <form onSubmit={handleRegister}>
                <input 
                    placeholder="Título" 
                    value={'Erro ao mudar música no Deezer'}
                    //onChange={e=>setValue(e.target.value)}
                />
                <input 
                    placeholder="Ambiente" 
                    value={'Produção'}
                    //onChange={e=>setValue(e.target.value)}
                />
                <input 
                    placeholder="Level" 
                    value={'error'}
                    //onChange={e=>setValue(e.target.value)}
                />
                <input 
                    placeholder="Event" 
                    value={'1005'}
                    //onChange={e=>setValue(e.target.value)}
                />
                <input 
                    placeholder="IP" 
                    value={'255.255.10.0'}
                    //onChange={e=>setValue(e.target.value)}
                />
                <textarea
                    placeholder="Detalhes do Error"
                    value={"Erro encontado ao mudar musica no deezer ao mudar a musica esta aumentando o volume sozinho"}
                    //onChange={e => setName(e.target.value)}
                />  
             
                </form>
            </div>
        </div>
    );
}