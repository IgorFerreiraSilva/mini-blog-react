import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import firebase from '../../firebase';
import './dashboard.css';

class Dashboard extends Component{

    constructor(props){
        super(props);
        this.state = {
            nome: 'Igor Ferreira'
        };
        this.logout = this.logout.bind(this);
    }

    async componentDidMount(){
        if(!firebase.getCurrent()){
            this.props.history.replace('/login');
            return null;
        }
    }

    logout = async() =>{
        await firebase.logout().catch((error)=>{
            console.log(error);
        });
        localStorage.removeItem("nome");
        this.props.history.push('/');
    }

    render(){
        return(
            <section id="dashboard">
                <div className="user-info">
                    <h1>Seja bem-vindo(a): {this.state.nome}</h1>
                    <Link to="/dashboard/new">Novo post</Link>
                </div>
                <p>Logado com: {firebase.getCurrent()}</p>
                <button onClick={()=> this.logout()}>Sair</button>
            </section>
        );
    }
}

export default withRouter(Dashboard);