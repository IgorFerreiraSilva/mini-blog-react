import React, { Component } from 'react';
import './register.css';


class Register extends Component{
    render(){
        return(
            <div>
                <form id="register">
                    <label>Nome: </label><br />
                    <input type="text" autoFocus="off" placeholder="Seu nome"/><br/>
                    <label>Email: </label><br />
                    <input type="text" autoFocus="off" placeholder="Seu email"/><br/>
                    <label>Password: </label><br />
                    <input type="text" autoFocus="off" placeholder="Sua senha"/><br/>


                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        )
    }
}


export default Register;