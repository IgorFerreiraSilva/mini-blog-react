import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './global.css';
import Home from './components/Home';
import Header from './components/Header';


class App extends Component{

  state = {
    firebaseInitialized: false
  };

  componentDidMount(){
    
  }

  render(){
    return this.state.firebaseInitialized !== false ?(
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </BrowserRouter>
    ) : (
      <h1>Carregando sistema!</h1>
    );
  }
}

export default App;