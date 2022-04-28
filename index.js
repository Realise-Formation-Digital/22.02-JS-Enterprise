async function getEntreprise() {
    try {
      const response = await axios.get('https://entreprise.vinko-roditi.com/api/entreprise/list');
      return response.data;
    } catch (error) {
      alert(error);
    }
}

const dataEntreprise = await getEntreprise();

async function getPersonne() {
    try {
      const response = await axios.get('https://entreprise.vinko-roditi.com/api/personne/list');
      return response.data;
    } catch (error) {
      alert(error);
    }
}

const dataPersonne = await getPersonne();

async function getVille() {
    try {
      const response = await axios.get('https://entreprise.vinko-roditi.com/api/ville/list');
      return response.data;
    } catch (error) {
      alert(error);
    }
}

const dataVille = await getVille();

const div1 = document.querySelector("#displayEntreprise");
const div2 = document.querySelector("#displayPersonne");
const div3 = document.querySelector("#displayVille");

function CreateEntreprise(value) {

    let div0 = document.createElement("div");
    div0.className= "card col-5";

    let div1 = document.createElement("div");
    div1.className = "card-header text-center";
    
    let h2 = document.createElement("h2");
    h2.className = "fw-bold text-decoration-underline";
    h2.innerHTML = value.nom;
    div1.appendChild(h2);
    div0.appendChild(div1);

    let div2 = document.createElement("div");
    div2.className= "card-body";

    let div3 = document.createElement("div");
    div3.className= "card-text mb-3";
    div2.appendChild(div3);
    div0.appendChild(div2);

    let p1 = document.createElement("p");
    p1.className = "text-justify fw-bold ms-2"; 
    p1.innerHTML = "Telephone: " + value.telephone;
    
    let br = document.createElement("br");
    p1.appendChild(br);
    div3.appendChild(p1);

    let a1 = document.createElement("a");
    a1.className = "text-justify fw-bold ms-2";
    a1.setAttribute("href", value.website);
    a1.innerHTML = value.website;
    div3.appendChild(a1);
    div0.appendChild(div3);
    
    let div4 = document.createElement("div");
    div4.className= "card-footer d-flex justify-content-center";
    
    let button = document.createElement("button");
    button.className = "btn btn-primary";
    button.textContent= "Subscribe!";
    button.setAttribute("type", "button");
    button.setAttribute("data-bs-toggle", "modal");
    button.setAttribute("data-bs-target", "#modalButton");
    button.setAttribute("data-bs-value", value.id);
    button.setAttribute("data-bs-array", "dataEntreprise");
    div4.appendChild(button);
    div0.appendChild(div4);

    return div0;
}

for (let value of dataEntreprise){
    div1.appendChild(CreateEntreprise(value));
}

function CreatePersonne(value) {

    let div0 = document.createElement("div");
    div0.className= "card col-5";

    let div1 = document.createElement("div");
    div1.className = "card-header text-center";
    
    let h2 = document.createElement("h2");
    h2.className = "fw-bold text-decoration-underline";
    h2.innerHTML = value.nom;
    div1.appendChild(h2);
    div0.appendChild(div1);

    let div2 = document.createElement("div");
    div2.className= "card-body";

    let div3 = document.createElement("div");
    div3.className= "card-text mb-3";
    div2.appendChild(div3);
    div0.appendChild(div2);

    let p1 = document.createElement("p");
    p1.className = "text-justify fw-bold ms-2"; 
    p1.innerHTML = "Telephone: " + value.telephone;

    let br = document.createElement("br");
    p1.appendChild(br);
    div3.appendChild(p1);

    let p2 = document.createElement("p");
    p2.className = "text-justify fw-bold ms-2"; 
    p2.innerHTML = "Email: " + value.email;

    let br1 = document.createElement("br");
    p2.appendChild(br1);
    div3.appendChild(p2);

    if (value.profile !== null) {
        let a1 = document.createElement("a");
        a1.className = "text-justify fw-bold ms-2";
        a1.setAttribute("href", value.profile);
        a1.innerHTML = value.profile;
        div3.appendChild(a1);
    } 

    div0.appendChild(div3);

    let div4 = document.createElement("div");
    div4.className= "card-footer d-flex justify-content-center";
    
    let button = document.createElement("button");
    button.className = "btn btn-primary";
    button.textContent= "Subscribe!";
    button.setAttribute("type", "button");
    button.setAttribute("data-bs-toggle", "modal");
    button.setAttribute("data-bs-target", "#modalButton");
    button.setAttribute("data-bs-value", value.id);
    button.setAttribute("data-bs-array", "dataPersonne");
    div4.appendChild(button);
    div0.appendChild(div4);

    return div0;
}

for (let value of dataPersonne){
    div2.appendChild(CreatePersonne(value));
}

function CreateVille(value) {

    let div0 = document.createElement("div");
    div0.className= "card col-5";

    let div1 = document.createElement("div");
    div1.className = "card-header text-center";
    
    let h2 = document.createElement("h2");
    h2.className = "fw-bold text-decoration-underline";
    h2.innerHTML = value.nom;
    div1.appendChild(h2);
    div0.appendChild(div1);

    let div2 = document.createElement("div");
    div2.className= "card-body";

    let div3 = document.createElement("div");
    div3.className= "card-text mb-3";
    div2.appendChild(div3);
    div0.appendChild(div2);

    let p1 = document.createElement("p");
    p1.className = "text-justify fw-bold ms-2"; 
    p1.innerHTML = "Lattitude: " + value.lattitude;

    let br = document.createElement("br");
    p1.appendChild(br);
    div3.appendChild(p1);

    let p2 = document.createElement("p");
    p2.className = "text-justify fw-bold ms-2"; 
    p2.innerHTML = "Longitude: " + value.longitude;

    let br1 = document.createElement("br");
    p2.appendChild(br1);
    div3.appendChild(p2);

    let p3 = document.createElement("p");
    p3.className = "text-justify fw-bold ms-2"; 
    p3.innerHTML = "Pays: " + value.pays;

    let br2 = document.createElement("br");
    p3.appendChild(br2);
    div3.appendChild(p3);
    div0.appendChild(div3);
    
    let div4 = document.createElement("div");
    div4.className= "card-footer d-flex justify-content-center";
    
    let button = document.createElement("button");
    button.className = "btn btn-primary";
    button.textContent= "Subscribe!";
    button.setAttribute("type", "button");
    button.setAttribute("data-bs-toggle", "modal");
    button.setAttribute("data-bs-target", "#modalButton");
    button.setAttribute("data-bs-value", value.id);
    button.setAttribute("data-bs-array", "dataVille");
    div4.appendChild(button);
    div0.appendChild(div4);

    return div0;
}

for (let value of dataVille){
    div3.appendChild(CreateVille(value));
}

let modal = document.getElementById("modalButton");
console.log(modalButton);

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