import React from 'react';

class DisplayEleve extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eleve: { },

        }
    }

    componentDidMount(){
        const id = this.props.match.params.mas;
        fetch(`https://warm-sierra-59608.herokuapp.com/api/user?userId=${id}`)
        .then(response => response.json())
        .then(data => {
            this.setState({
               eleve: data
            });
        } );

    }
    render() {
        const { eleve } = this.state;
        return (
          <div>
               { this.state.eleve.length > 0
                    &&
                
                    <div>
                    <img className="photos" src={eleve.picture} alt='portrait' />
                    
                    <ul className="listeelement">
                        <li>Name : {eleve.name} </li>
                        <li>Lastname : {eleve.lastName} </li>
                        <li>Location : {eleve.location}</li>
                        <li>Hardskills : {eleve.hardSkills} </li>
                        <li>Softskills : {eleve.softSkills}</li>
                    </ul>
                    </div>
                    
               }
            </div>     
        );
    };
}
export default DisplayEleve;
