import { CreateEntreprise, dataEntreprise, CreateToast } from "./Entreprise.js";
import { CreatePersonne, dataPersonne } from "./Personne.js";
import { CreateVille, dataVille } from "./Ville.js";

//window.appendChild(CreateToast());

//lien avec html pour le display des cards.
const div1 = document.querySelector("#displayEntreprise");
const div2 = document.querySelector("#displayPersonne");
const div3 = document.querySelector("#displayVille");

//boucle pour chaque entreprise, personne, ville et genere une card pour chaque avec les information
for (let value of dataEntreprise){
    div1.appendChild(CreateEntreprise(value));
}

for (let value of dataVille){
    div3.appendChild(CreateVille(value));
}

for (let value of dataPersonne){
    div2.appendChild(CreatePersonne(value));
}

//lien modal dans le html
let modal = document.getElementById("modalButton");
console.log(modalButton);

//addEventListener pour chaque button dans les card, prend les info du button au click pour faire un modal avec avec lo nom puis la map.
modal.addEventListener("show.bs.modal", (e) => {
    let buttons = e.relatedTarget;
    console.log(buttons);

    let idButton = buttons.getAttribute("data-bs-value");
    console.log(idButton);

    let arrayButton = buttons.getAttribute("data-bs-array");
    console.log(arrayButton);

    let modaltitle = modal.querySelector("#title");
    //let modalbody = modal.querySelector(".modal-body");

    if(arrayButton == "dataEntreprise") {
        const id = dataEntreprise.find(element => element.id == idButton)
        console.log(id);
        modaltitle.textContent = id.nom;
    } else if (arrayButton == "dataPersonne") {
        const id = dataPersonne.find(element => element.id == idButton)
        console.log(id);
        modaltitle.textContent = id.nom;
    } else {
        const id = dataVille.find(element => element.id == idButton)
        console.log(id);
        modaltitle.textContent = id.nom;
    }  
})