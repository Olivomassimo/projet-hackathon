import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import axios from 'axios';




class Formulaire extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                hardSkills: [],
                softSkills: [],
                name: "",
                lastName: "",
                picture: "",
                location: "",
                cv:"",
                age:""
            }
        }
        onChange = (event) => (
            this.setState({
                [event.target.name]: event.target.value,
            })
        )
        fileChange = (event) => {
            let formData = new FormData();
            const name = event.target.name;
            formData.append('picture', event.target.files[0]);
            axios({
                method: 'post',
                url: 'https://warm-sierra-59608.herokuapp.com/api/upload',
                data: formData
              })
              .then(data => this.setState(
                  {[name]: data.data}
              ))
           
        }
        handleSubmit = (event) => {
            event.preventDefault();
            console.log(JSON.stringify(this.state))
            axios({
                method: 'post',
                url: 'https://warm-sierra-59608.herokuapp.com/api/add-user',
                data: this.state
              }).then(
                  this.props.history.push('/home')
              )
        }
                render(){
                    return (

                        <div className="fromme" >
                            <form className="form">
                                <h1>Form</h1>
                                <div className="name field-container">
                                    <input className="field" 
                                    type="file" 
                                    name="picture" 
                                    id="picture" 
                                    onChange={this.fileChange}
                                    />
                                    <label className="label" for="picture">Image</label>
                                </div>

                                <div className="name field-container">
                                    <input className="field"
                                     type="text" 
                                     name="name" 
                                     id="name"
                                     onChange={this.onChange}
                                     value={this.state.name}
                                     placeholder="Name"
                                      />
                                    <label className="label" for="name">Name</label>
                                </div>

                                <div className="name field-container">
                                    <input className="field" 
                                    type="text" 
                                    name="lastname" 
                                    id="lastname"
                                    onChange={this.onChange}
                                    value={this.state.lastName}
                                    placeholder="Lastname"
                                     />
                                    <label className="label" for="firstname">First Name</label>
                                </div>

                                <div className="name field-container">
                                    <input className="field" 
                                    type="number" 
                                    name="age" 
                                    id="age"
                                    onChange={this.onChange}
                                    value={this.state.age}
                                    placeholder="Age" 
                                    />
                                    <label className="label" for="age">Age</label>
                                </div>

                                <div className="email field-container">
                                    <input className="field"
                                     type="text"
                                      name="email"
                                       id="email" 
                                       onChange={this.onChange}
                                       value={this.state.location}
                                       placeholder="@exemple.com"
                                       />
                                    <label className="label" for="email">E-mail</label>
                                </div>

                                <div className="tel field-container">
                                    <input className="field" 
                                    type="text" 
                                    name="tel" 
                                    id="tel"
                                    placeholder="Gsm" />
                                    <label className="label" for="tel">gsm</label>
                                </div>


                                <div className="field-container">
                                    <label className="label" for="pays">In which country do you live ?</label><br />
                                    <select className="field" name="pays" id="pays">
                                        <option value="belgique">Belgique</option>
                                        <option value="france">France</option>
                                        <option value="espagne">Espagne</option>
                                        <option value="italie">Italie</option>
                                        <option value="royaume-uni">Royaume-Uni</option>
                                    </select>
                                </div>


                                <div className="field-container">
                                    what are you doing :<br />
                                    <input className="field" type="checkbox" name="front end" id="front end" /> <label className="label" for="front end">Front end</label><br />
                                    <input className="field" type="checkbox" name="back end" id="back end" /> <label className="label" for="back end">Back end </label><br />
                                </div>

                                <div className="field-container">
                                    what are you looking for :<br />
                                    <input className="field" type="checkbox" name="traineeship" id="traineeship" /> <label className="label" for="traineeship">Traineeship</label><br />
                                    <input className="field" type="checkbox" name="job" id="job" /> <label className="label" for="job">CDD/CDI</label><br />
                                </div>

                                <div className="submit">
                                    <input className="field" type="submit" value="Send" />
                                </div>

                            </form>
                        </div>
                    );
                };
            }
export default Formulaire;
