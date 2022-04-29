import { CreateEntreprise, dataEntreprise, errorEntreprise} from "./Entreprise.js";
import { CreatePersonne, dataPersonne, errorPersonne } from "./Personne.js";
import { CreateVille, dataVille, errorVille } from "./Ville.js";

//lien avec html pour le display des cards.
const div1 = document.querySelector("#displayEntreprise");
const div2 = document.querySelector("#displayPersonne");
const div3 = document.querySelector("#displayVille");

//lien pour handling errors toasts
const textToast = document.getElementById("textError");
const toast = new bootstrap.Toast(document.querySelector('#errorToast'), {
    autohide: false
});

const textToast2 = document.getElementById("textError2");
const toast2 = new bootstrap.Toast(document.querySelector('#errorToast2'), {
    autohide: false
});

const textToast3 = document.getElementById("textError3");
const toast3 = new bootstrap.Toast(document.querySelector('#errorToast3'), {
    autohide: false
});

//check les error et sinon boucle pour chaque entreprise, personne, ville et genere une card pour chaque avec les information
if(errorEntreprise.data == undefined || errorEntreprise.data == null) {
    toast.show();
    textToast.innerHTML = "Error: " + errorEntreprise; 
} else { 
    for (let value of dataEntreprise){
        div1.appendChild(CreateEntreprise(value));
    }
}

if(errorVille.data == undefined || errorVille.data == null) {
    toast2.show();
    textToast2.innerHTML = "Error: " + errorVille; 
} else { 
    for (let value of dataVille){
        div3.appendChild(CreateVille(value));
    }
}

if(errorPersonne.data == undefined || errorPersonne.data == null) {
    toast3.show();
    textToast3.innerHTML = "Error: " + errorPersonne; 
} else { 
    for (let value of dataPersonne){
        div2.appendChild(CreatePersonne(value));
    }
}

//lien modal dans le html
let modal = document.getElementById("modalButton");

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