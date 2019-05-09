import React from 'react';
import DisplayEleve from './../Apicarte/index';

class CarteEleve extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            AllStudent: []
        };
    }

    componentDidMount(){
        this.getEleve();
    }
    getEleve = () => {
        fetch('https://warm-sierra-59608.herokuapp.com/api/users')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    AllStudent: data
                });
            });
    }

    render() {
        const postEleve = this.state.AllStudent.map((elem) => (
            <DisplayEleve eleve={elem} />
        ));
        return (
            <ul>
            { postEleve }

            </ul>
        )
    };

}

export default CarteEleve;
