import React from 'react';
import axios from 'axios';
import './index.css'

class DisplayEleve extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eleve: { },

        }
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`https://warm-sierra-59608.herokuapp.com/api/user?userId=${id}`, {
            mode: 'no-cors',
            crossdomain: true,
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
          })
        .then(data => {
            this.setState({
               eleve: data.data
            });
        } );

    }
    render() {
        const { eleve } = this.state;
        return (
          <div>
               { this.state.eleve.name != null
                    &&
                
                    <div>
                    <img className="photos" src={eleve.picture} alt='portrait' />
                    
                    <ul className="listeelement">
                        <li className="ele">Name : {eleve.name} </li>
                        <li className="ele">Lastname : {eleve.lastName} </li>
                        <li className="ele">Location : {eleve.location}</li>
                        <li className="ele">Hardskills : {eleve.hardSkills.join(" ")} </li>
                        <li className="ele">Softskills : {eleve.softSkills.join(" ")}</li>
                        <li>Contract : {eleve.contractType}</li>
                        <li>Expertise : {eleve.expertise}</li>
                    </ul>
                    </div>
                    
               }
            </div>     
        );
    };
}
export default DisplayEleve;
