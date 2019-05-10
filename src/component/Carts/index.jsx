import React from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';



class Carts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            eleve: this.props.eleve,
            selectStudent: this.props.selectStudent,
            isActive: true,
        }
    }

    handleClick = () => {
        const { eleve, selectStudent } = this.state;
        selectStudent(eleve)
        this.setState({
            isActive: false
        })

    }
    render() {
        const { eleve, isActive } = this.state;


        return (
            < div className="card" >
                <NavLink to={`/DisplayEleve/${eleve._id}`}>
                    <div style={{backgroundImage: `url(${eleve.picture})`}} className="image-container">

                    </div>
                </NavLink>

                ￼￼
                <div className="content">
                    <span>Expertise : {eleve.expertise} </span>
                    <span>Contract : {eleve.contractType} </span>
                    <span>Name : {eleve.name} </span>
                    <span>City : {eleve.location} </span>
                    <button className={"select-btn" + (isActive ? "" : " locked")} onClick={this.handleClick}>Select</button>
                </div>
            </div >


        );
    }
};

export default Carts;
