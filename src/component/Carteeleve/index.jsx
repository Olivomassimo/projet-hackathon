import React from 'react';
import './index.css';
import Carts from './../Carts/index';
import { withRouter } from "react-router";


class CarteEleve extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            AllStudent: this.props.data || [],
            BouttonBF: false,
        };
    }

    componentDidMount() {
        if(this.props.match.path === '/student'){
            this.getEleve();
        }
    }
    getEleve = () => {
        fetch('https://warm-sierra-59608.herokuapp.com/api/users')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    AllStudent:data
                });
            } );
    }
    handleBoutton = () => {
        this.setState({ BouttonBF: !this.state.BouttonBF});
    };

    render() {

        const { selectStudent } = this.props;
        const postEleve = this.state.AllStudent
        .filter(elem => {
           return !this.state.BouttonBF || elem.location.includes('Front-End')
        })
        .map((elem) => (
            <Carts key={elem._id} eleve={elem} selectStudent={selectStudent} />
        ));
        return (
            <React.Fragment>
            <div className='button-general'>
            <button className='button' onClick={this.handleBoutton}>Front-End</button>
            <button className='button'>Back-End</button>
            </div>
            <div className="card-list">
                {postEleve}

            </div>
            </React.Fragment>
        )
    };

}

export default withRouter (CarteEleve);
