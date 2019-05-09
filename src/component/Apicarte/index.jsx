import React from 'react';

const DisplayEleve = ({ eleve }) => {
    return (

        <li>
            <img className="photos" src={eleve.picture} alt='picture' />
            <ul className="listeelement">
                <li>Name : {eleve.name} </li>
                <li>Lastname : {eleve.lastName} </li>
                <li>Location : {eleve.location}</li>
                <li>Hardskills : {eleve.hardSkills} </li>
                <li>Softskills : {eleve.softSkills}</li>
            </ul>
        </li>
    );
};
export default DisplayEleve;
