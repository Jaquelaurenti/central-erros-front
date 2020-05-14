import React, { useEffect, useState } from 'react';
import './style.css'
import logoImg from '../../assets/logo_profile.png'
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiArrowRight, FiArrowLeft, FiTrash2 } from 'react-icons/fi'
import api from '../../services/api'
export default function Profile() {

    const userName = 'Jaqueline Laurenti'//localStorage.getItem('userName');
    const userId = localStorage.getItem('userId');
    
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1)
    const [pages, setPages] = useState(0);

    const history = useHistory();

    useEffect(() => {

    }, [userId, page]);

    // remover LocalStorage e voltar o usuário para a sessão de Logout
    function handleLogout() {
        localStorage.clear();
        history.push('/');
    }

    function nextPage() {
        if ((page + 1) > pages) {
            return;
        }
        setPage(page + 1);
    }

    function previousPage() {
        if ((page - 1) < 1) {
            return;
        }
        setPage(page - 1);
    }
    async function handleDeleteError(Iderror){
        try{
            await api.delete(`errorOcurrence/${Iderror}`, {
                headers:{
                    Authorization: userId,
                }
            });
          // faço uma varredura no array de incidentes para que seja removido em real time o id que acabou de ser excluido
          //setIncidents(incidents.filter(incidents => incidents.id !== idIncident))

        } catch (err){
            alert('Ero ao deletar ocorrência, tente novamente');
        }
    }


    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Me Leva Ai" />
                <span>Bem vindo(a), {userName}</span>
                <Link className="button" to="/new/error">
                    Cadastrar novo Erro
                </Link>
                <button onClick={handleLogout}
                    type="button">
                    <FiPower size={14} color="#f28500" />
                </button>
                <button onClick={previousPage} disabled={page === 1}>
                    <FiArrowLeft size={14} color="#f28500" />
                </button>
                <p>{page}/{pages}</p>
                <button onClick={nextPage} disabled={page === pages}>
                    <FiArrowRight size={14} color="#f28500" />
                </button>
               
            </header>
            <h1> Lista de Erros Reportados </h1>
            <ul>
                <li key={1}>
                    <strong>Level:</strong>
                    <p>{'error'}</p>

                    <strong>Ambiente:</strong>
                    <p>{'Produção'}</p>

                    <strong>Log:</strong>
                    <p>{'Erro ao mudar música no Deezer'}</p>

                    <strong>Evento:</strong>
                    <p>{'1000'}</p>   

                    <button onClick={() => handleDeleteError('1')} type="button">
                        <FiTrash2 size = {20} color="#a8a8b3"/>
                    </button>  

                    <Link className="back-link" to="/errorDetails">
                        <FiArrowRight size={20} color="#F28500" />                        
                    </Link>
                </li>

                <li key={2}>
                    <strong>Level:</strong>
                    <p>{'debug'}</p>

                    <strong>Ambiente:</strong>
                    <p>{'Produção'}</p>

                    <strong>Log:</strong>
                    <p>{'Erro no service.auth'}</p>

                    <strong>Evento:</strong>
                    <p>{'350'}</p>   

                    <button onClick={() => handleDeleteError('1')} type="button">
                        <FiTrash2 size = {20} color="#a8a8b3"/>
                    </button>  

                    <Link className="back-link" to="/errorDetails">
                        <FiArrowRight size={20} color="#F28500" />                        
                    </Link>
                </li>

                <li key={3}>
                    <strong>Level:</strong>
                    <p>{'debug'}</p>

                    <strong>Ambiente:</strong>
                    <p>{'Produção'}</p>

                    <strong>Log:</strong>
                    <p>{'Erro no debugger Service.Profile'}</p>

                    <strong>Evento:</strong>
                    <p>{'333'}</p>   

                    <button onClick={() => handleDeleteError('1')} type="button">
                        <FiTrash2 size = {20} color="#a8a8b3"/>
                    </button>  

                    <Link className="back-link" to="/errorDetails">
                        <FiArrowRight size={20} color="#F28500" />                        
                    </Link>
                </li>

                <li key={4}>
                    <strong>Level:</strong>
                    <p>{'debug'}</p>

                    <strong>Ambiente:</strong>
                    <p>{'Produção'}</p>

                    <strong>Log:</strong>
                    <p>{'Erro ao expandir imagem no Instagram'}</p>

                    <strong>Evento:</strong>
                    <p>{'1200'}</p>   

                    <button onClick={() => handleDeleteError('1')} type="button">
                        <FiTrash2 size = {20} color="#a8a8b3"/>
                    </button>  

                    <Link className="back-link" to="/errorDetails">
                        <FiArrowRight size={20} color="#F28500" />                        
                    </Link>
                </li>

                <li key={4}>
                    <strong>Level:</strong>
                    <p>{'warn'}</p>

                    <strong>Ambiente:</strong>
                    <p>{'Produção'}</p>

                    <strong>Log:</strong>
                    <p>{'Erro no debugger Service.Profile'}</p>

                    <strong>Evento:</strong>
                    <p>{'903'}</p>   

                    <button onClick={() => handleDeleteError('1')} type="button">
                        <FiTrash2 size = {20} color="#a8a8b3"/>
                    </button>  

                    <Link className="back-link" to="/errorDetails">
                        <FiArrowRight size={20} color="#F28500" />                        
                    </Link>
                </li>


                <li key={5}>
                    <strong>Level:</strong>
                    <p>{'error'}</p>

                    <strong>Ambiente:</strong>
                    <p>{'Dev'}</p>

                    <strong>Log:</strong>
                    <p>{'Login not found'}</p>

                    <strong>Evento:</strong>
                    <p>{'402'}</p>   

                    <button onClick={() => handleDeleteError('1')} type="button">
                        <FiTrash2 size = {20} color="#a8a8b3"/>
                    </button>  

                    <Link className="back-link" to="/errorDetails">
                        <FiArrowRight size={20} color="#F28500" />                        
                    </Link>
                </li>
            </ul>


        </div>
    );
}