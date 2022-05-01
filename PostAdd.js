//lien pour les forms
const newPerson = document.getElementById("newPerson");
const newEnterprise = document.getElementById("newEnterprise");
const newCity = document.getElementById("newCity");

//lien pour les button ajouter.hmtl
const bPerson = document.getElementById("bPerson");
const bEnterprise = document.getElementById("bEnterprise");
const bCity = document.getElementById("bCity");

//lien submit des forms
const subPerson = document.getElementById("subPerson");
const subEnterprise = document.getElementById("subEnterprise");
const subVille = document.getElementById("subVille");

//lien innerhtml info
const infoPersonne = document.getElementById("infoPersonne");

bPerson.addEventListener("click", () => {
    newPerson.classList.remove("d-none");
    newEnterprise.classList.add("d-none");
    newCity.classList.add("d-none")
});

bEnterprise.addEventListener("click", () => {
    newPerson.classList.add("d-none");
    newEnterprise.classList.remove("d-none");
    newCity.classList.add("d-none")
});

bCity.addEventListener("click", () => {
    newPerson.classList.add("d-none");
    newEnterprise.classList.add("d-none");
    newCity.classList.remove("d-none")
});

(function () {
    'use strict'
    var forms = document.querySelectorAll('.needs-validation')
  
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
    })
})();

subPerson.addEventListener("click", (e) => {
    e.preventDefault();
    let email = document.getElementById("emailPersonne").value;

    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!regex.test(email)) {
        infoPersonne.innerHTML = "Email non valide."
    }

    PostPersonne(email);
})

function PostPersonne(value) {
    axios.post('https://entreprise.vinko-roditi.com/api/personne/add', {
        nom: document.getElementById("nomPersonne").value,
        email: value,
        telephone: document.getElementById("telephonePersonne").value,
        profile: document.getElementById("profilePersonne").value,
        ville_id: document.getElementById("villePersonne").value
    })
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    })
}

subEnterprise.addEventListener("click", (e) => {
    e.preventDefault();
    PostEntreprise();
})

function PostEntreprise() {
    axios.post('https://entreprise.vinko-roditi.com/api/entreprise/add', {
        nom: document.getElementById("nomEnterprise").value,
        telephone: document.getElementById("telephoneEnterprise").value,
        website: document.getElementById("websiteEnterprise").value
    })
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    })
}

subVille.addEventListener("click", (e) => {
    e.preventDefault();
    PostVille();
})

function PostVille (){
    const datas = {
        'nom': document.getElementById("nomVille").value,
        'lattitude': document.getElementById("lattitudeVille").value,
        'longitude': document.getElementById("longitudeVille").value,
        'pays': document.getElementById("paysVille").value
    }
    const json = JSON.stringify(datas);
    axios({
        method: "post",
        url: 'https://entreprise.vinko-roditi.com/api/ville/add',
        data: json,
        headers: {'content-type': 'application/json, text/plain, */*'}
    })
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    })
}