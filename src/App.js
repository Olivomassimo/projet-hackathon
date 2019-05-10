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
        <NavWild counter={selectedStudent.length} />
        <Switch>
          <Route exact path='/' component={Header} />
          <Route path='/student' render={() => <CarteEleve selectStudent={this.selectStudent} />} />
          <Route path='/team' render={() => <Team data={selectedStudent} />} />
          <Route path='/sine-up' component={FooterPage} />
          <Route path='/DisplayEleve/:mas' component={ DisplayEleve }/>
        </Switch>
        <FooterPage/>
      </div>
    );
  }
}

export default App;
