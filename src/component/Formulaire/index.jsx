import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'




const Formulaire = () => {
    return (
        <fieldset classnName="from" >
            <legend classnName="from">contacte</legend>

            <form classnName="form">

                <p classnName="name">
                    <input type="text" name="name" id="name" />
                    <label for="name">Name</label>
                </p>

                <p classnName="name">
                    <input type="text" name="name" id="name" />
                    <label for="name">First Name</label>
                </p>

                <p classnName="name">
                    <input type="number" name="age" id="age" />
                    <label for="age">Age</label>
                </p>

                <p classnName="email">
                    <input type="text" name="email" id="email" />
                    <label for="email">E-mail</label>
                </p>

                <p classnName="tel">
                    <input type="text" name="tel" id="tel" />
                    <label for="tel">gsm</label>
                </p>


                <p>
                    <label for="pays">In which country do you live ?</label><br />
                    <select name="pays" id="pays">
                        <option value="belgique">Belgique</option>
                        <option value="france">France</option>
                        <option value="espagne">Espagne</option>
                        <option value="italie">Italie</option>
                        <option value="royaume-uni">Royaume-Uni</option>
                    </select>
                </p>


                <p>
                    what are you doing :<br />
                    <input type="checkbox" name="front end" id="front end" /> <label for="front end">Front end</label><br />
                    <input type="checkbox" name="back end" id="back end" /> <label for="back end">Back end haché</label><br />
                </p>

                <p>
                    what are you looking for :<br />
                    <input type="checkbox" name="traineeship" id="traineeship" /> <label for="traineeship">Traineeship</label><br />
                    <input type="checkbox" name="job" id="job" /> <label for="job">job</label><br />
                </p>

                <p classnName="submit">
                    <input type="submit" value="Send" />
                </p>

            </form>
        </fieldset >
    );

};

export default Formulaire;