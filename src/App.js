import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './component/Header/index';
import 'bootstrap/dist/css/bootstrap.css';
import NavWild from './component/Nav/index';
import CarteEleve from './component/Carteeleve/index';
import Team from './component/Team/index';
import DisplayEleve from './component/Apicarte/index';
import FooterPage from './component/FooterPage/index';
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
=======


>>>>>>> 86c07a961ff62b6a0b82a72f08f0ef9ab85f855f
        <NavWild counter={selectedStudent.length} />
        <Switch>
          <Route exact path='/' component={Header} />
          <Route path='/student' render={() => <CarteEleve selectStudent={this.selectStudent} />} />
          <Route path='/team' render={() => <Team data={selectedStudent} />} />
          <Route path='/sine-up' component={Formulaire} />
          <Route path='/DisplayEleve/:mas' component={ DisplayEleve }/>
        </Switch>
<<<<<<< HEAD
        <FooterPage/>
=======
        <FooterPage />
>>>>>>> 86c07a961ff62b6a0b82a72f08f0ef9ab85f855f
      </div>
    );
  }
}

export default App;
