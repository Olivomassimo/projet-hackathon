import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './Component/Header/index'
import 'bootstrap/dist/css/bootstrap.css'
import NavWild from './component/Nav/index'
import CarteEleve from './component/Carteeleve/index'
import Team from './component/Team/index';
import DisplayEleve from './component/Apicarte';
import FooterPage from './Component/FooterPage/index';
import Formulaire from './component/Formulaire/index';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStudent: []
    }
  }

  selectStudent = (elem) => {
    const currentSelection = this.state.selectedStudent;
    currentSelection.push(elem)

    this.setState({
      selectStudent: currentSelection
    })
  }
  render() {
    const { selectedStudent } = this.state;
    return (
      <div className='App'>
<<<<<<< HEAD
      <NavWild />
      <CarteEleve />
      <Switch>
        <Route exact path='/' component={Header} />
        <Route path='/time'  component={Header} />
        <Route path='/sine-up' component={Formulaire} />
      </Switch>
      <FooterPage />
=======
        <NavWild counter={selectedStudent.length} />
        <Switch>
          <Route exact path='/' component={Header} />
          <Route path='/student' render={() => <CarteEleve selectStudent={this.selectStudent} />} />
          <Route path='/team' render={() => <Team data={selectedStudent} />} />
          <Route path='/sine-up' component={FooterPage} />
          <Route path='/DisplayEleve/:mas' component={ DisplayEleve }/>
        </Switch>
        <FooterPage/>
>>>>>>> f30ce3243b660e312206f4f9a2a5139f274254d7
      </div>
    );
  }
}

export default App;
