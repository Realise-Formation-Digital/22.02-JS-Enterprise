import { CreateEntreprise, dataEntreprise } from "./Entreprise.js";
import { CreatePersonne, dataPersonne } from "./Personne.js";
import { CreateVille, dataVille } from "./Ville.js";


//lien avec html pour le display des cards.
const div1 = document.querySelector("#displayEntreprise");
const div2 = document.querySelector("#displayPersonne");
const div3 = document.querySelector("#displayVille");

var map = L.map('map').setView([-34.61315000, -58.37723000], 13);
    
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

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

/**
 * addEventListener pour chaque button dans les card, prend les info du button au click pour faire un modal avec avec lo nom puis la map.
 */
modal.addEventListener("show.bs.modal", (e) => {
    e.stopPropagation()
    // modal.getElementById('modalButton').style.display = 'block';

    

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
        // modaltitle.textContent = id.nom;
        setTimeout(function() {
            map.invalidateSize();
        }, 500);
    
        if(idButton == 3)
        L.marker([-34.61315000, -58.37723000]).addTo(map)
            .bindPopup('Buenos Aires')

        else if(idButton == 2){
            L.marker([-34.61315000, -58.37723000]).addTo(map)
                .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        }
        else if(idButton == 1){
            L.marker([-34.61315000, -58.37723000]).addTo(map)
                .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        }
        else if(idButton == 4){
            L.marker([-34.61315000, -58.37723000]).addTo(map)
                .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        }
        
    } else if (arrayButton == "dataPersonne") {
        const id = dataPersonne.find(element => element.id == idButton)
        console.log(id);
        modaltitle.textContent = id.nom;

        setTimeout(function() {
            map.invalidateSize();
        }, 500);
    
    
        L.marker([-34.61315000, -58.37723000]).addTo(map)
            .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    } else {
        const id = dataVille.find(element => element.id == idButton)
        console.log(id);
        modaltitle.textContent = id.nom;
    }

    

    // if(idButton == 3){
    //     var map = L.map('map').setView([-58.37723000, -34.61315000], 13);
    
    //     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //     }).addTo(map);
    
    //     L.marker([-57, -33]).addTo(map)
    //         .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    //         .openPopup();
    // }

    // else if(idButton == 2){
    //     var map = L.map('map2').setView([6.63227340, 46.51965350], 13);
    
    //     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //     }).addTo(map);
    
    //     L.marker([-57, -33]).addTo(map)
    //         .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    //         .openPopup();
    // }

    // else if(idButton == 1){
    //     var map = L.map('map1').setView([46.20700000, 6.14234000], 13);
    
    //     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //     }).addTo(map);
    
    //     L.marker([-57, -33]).addTo(map)
    //         .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    //         .openPopup();
    // }

    // else if(idButton == 4){
    //     var map = L.map('map4').setView([-70.11405900, -33.30851000], 13);
    
    //     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //     }).addTo(map);
    
    //     L.marker([-57, -33]).addTo(map)
    //         .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    //         .openPopup();
    // }
})


    