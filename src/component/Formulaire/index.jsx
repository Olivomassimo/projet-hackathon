import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'




const Formulaire = () => {
    return (

        <div className="fromme">
            <form className="form">
                <h1>Form</h1>
                <div className="name field-container">
                    <input className="field" type="file" name="name" id="name" />
                    <label className="label" for="name">Image</label>
                </div>

                <div className="name field-container">
                    <input className="field" type="text" name="name" id="name" />
                    <label className="label" for="name">Name</label>
                </div>

                <div className="name field-container">
                    <input className="field" type="text" name="name" id="name" />
                    <label className="label" for="name">First Name</label>
                </div>

                <div className="name field-container">
                    <input className="field" type="number" name="age" id="age" />
                    <label className="label" for="age">Age</label>
                </div>

                <div className="email field-container">
                    <input className="field" type="text" name="email" id="email" />
                    <label className="label" for="email">E-mail</label>
                </div>

                <div className="tel field-container">
                    <input className="field" type="text" name="tel" id="tel" />
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

export default Formulaire;