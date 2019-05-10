import React from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';



class Carts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            eleve: this.props.eleve,
            selectStudent : this.props.selectStudent,
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
            < div className = "card" >
                <div className="image-container">
                    <NavLink to={`/DisplayEleve/${eleve._id}`}>
                        <img className=""
                            src={eleve.picture}
                            alt="portrait" />
                    </NavLink>
                </div>
                <div className="content">
                    <span>Name : {eleve.name} </span>
                    <span>Name : {eleve.location} </span>
                    <button className={ "select-btn" + (isActive ? "" : " locked")} onClick={this.handleClick}>Selec</button>
                </div>
        </div >


    );
    }
};

export default Carts;
