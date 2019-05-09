import React from 'react' ;
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './component/Header/index'
import 'bootstrap/dist/css/bootstrap.css'
import NavWild from './component/Nav/index'
import CarteEleve from './component/Carteeleve/index'
import FooterPage from './Component/FooterPage';

function App () {
    return (
      <div className='App'>
      <NavWild />
      <CarteEleve />
      <Switch>
        <Route exact path='/' component={NavWild} />
        <Route path='/time'  component={Header} />
        <Route path='/sine-up' component={Header.NavWild} />
      </Switch>
      <FooterPage />
      </div>
    );
  }

export default App;
