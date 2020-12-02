import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import firebase from '../../firebase';
import './new.css';


class New extends Component{

    constructor(props){
        super(props);
        this.state = {
            titulo: '',
            image: '',
            descricao: '',
            alert: ''
        }
        this.cadastrar = this.cadastrar.bind(this);
    }

    componentDidMount(){
        if(!firebase.getCurrent()){
            this.props.history.replace('/');
            return null;
        }
    }

    cadastrar = async(e) => {
        e.preventDefault();
        if(this.state.titulo !== '' && this.state.image !== '' && this.state.descricao !== ''){
           let posts =  firebase.app.ref('posts');
           let chave = posts.push().key;
           await posts.child(chave).set({
               titulo: this.state.titulo,
               image: this.state.image,
               descricao: this.state.descricao,
               autor: localStorage.nome
           })
           this.props.history.push('/dashboard');
        }else{
            this.setState({alert: 'Preencha todos os campos'});
        }
    }

    render(){
        return(
            <section>
                <header id="new">
                    <Link to="/dashboard">Voltar</Link>
                </header>
                <form onSubmit={this.cadastrar} id="new-post">
                    <span>{this.state.alert}</span>
                    <label>Titulo: </label><br/>
                    <input type="text" placeholder="Titulo do post" value={this.state.titulo}
                    onChange={(e)=> this.setState({titulo: e.target.value})} /><br/>

                    <label>Upload da imagem: </label><br/>
                    <input type="text" placeholder="Imagem da capa" value={this.state.image}
                    onChange={(e)=> this.setState({image: e.target.value})} /><br/>

                    <label>Descricão: </label><br/>
                    <textarea type="text" placeholder="Descricão do post" value={this.state.descricao}
                    onChange={(e)=> this.setState({descricao: e.target.value})} /> <br/>

                    <button type="submit">Cadastrar</button>

                </form>
            </section>
        );
    }
}

export default withRouter(New);