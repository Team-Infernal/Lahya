import { useEffect } from "react";
import $ from "jquery";
//import "./styles.scss";

const FormTutor = () => {
    useEffect(() => {

    });
    
    return (
        <form>
            <h2>Formulaire</h2>
            <fieldset>
                <legend>Information</legend>
                <div>
                    <label><input type="radio" name="inputSit" id="inputSitPer" checked required/>Personnel</label>
                    <label><input type="radio" name="inputSit" id="inputSitPro"/>Professionnel</label>
                </div>
                <div><label for="tva">N° TVA</label><input type="text" name="tva" id="inputTVA" required/></div>
                <div><label for="prenom">Prenom</label><input type="text" name="inputPrenom" id="inputTVA" required/></div>
                <div><label for="nom">Nom</label><input type="text" name="nom" id="inputTVA" required/></div>
                <div>
                    <div><label><input type="radio" name="sexe" id="inputSexeHomme" required/>Homme</label></div>
                    <div><label><input type="radio" name="sexe" id="inputSexeFemme"/>Femme</label></div>
                    <div><label><input type="radio" name="sexe" id="inputSexeAutre"/>Autre</label></div>
                </div>
                <div><label for="email">Email</label><input type="email" name="email" id="inputEmail" required/></div>
                <div><label for="tel">N° Telephone</label><input type="tel" name="tel" id="inputTel" required/></div>
                <div><label for="adresse">Adresse</label><input type="text" name="adresse" id="inputAdresse" required/></div>
                <div><label for="region">Region</label><input type="text" name="region" id="inputRegion" required/></div>
                <div><label for="ville">Ville</label><input type="text" name="ville" id="inputVille" required/></div>
                <div><label for="codepostal">Code postal</label><input type="text" name="codepostal" id="inputCodePostal" required/></div>
                <div><label for="carte">Carte de paiement</label><input type="text" name="carte" id="inputCarte" required/></div>
                <div class="g2">
                    <input type="submit" value="Valider"/>
                    <input type="reset" value="Réinitialiser"/>
                </div>
            </fieldset>
        </form>
    )
}
export default FormTutor;