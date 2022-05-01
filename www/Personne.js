/**
 * 
 * @returns data, base de donnee des personnes;
 */
 async function getPersonne() {
  try {
    const response = await axios.get('https://entreprise.vinko-roditi.com/api/personne/list', { timeout: 60 });
    return response;
  } catch (error) {
      if (error.code === "ECONNABORTED") {
          return error.message
      } else if (error.dueToNoInternetConnection) {
          return error = "No Connection";
      } else {
          return error.message;
      }
  }
}

//toutes les donnee de la requete
const reponseAxios = await getPersonne();

/**
* 
* @returns liste de personnes, check le status 200
*/
function check () {
  if (reponseAxios.status == 200) {
      const data = reponseAxios.data;
      return data;
  }
}

//liste de personnes
const dataPersonne = check();

//error de axios
const errorPersonne = reponseAxios;

/**
* 
* @param {une personne} value 
* @returns Une card pour chaque personne dans dataPersonne;
*/
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

  //Creation du button pour le modal
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

export { CreatePersonne, dataPersonne, errorPersonne };