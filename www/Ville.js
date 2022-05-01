/**
 * 
 * @returns data, base de donnee des villes;
 */
 async function getVille() {
  try {
    const response = await axios.get('https://entreprise.vinko-roditi.com/api/ville/list', { timeout: 60 });
    return response;
  } catch (error) {
      console.log(error);
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
const reponseAxios = await getVille();

/**
* 
* @returns liste de villes, check le status 200
*/
function check () {
  if (reponseAxios.status == 200) {
      const data = reponseAxios.data;
      return data;
  }
}

//liste de villes
const dataVille = check();
//error de axios
const errorVille = reponseAxios;

/**
* 
* @param {Une ville} value 
* @returns Une card pour chaque ville dans dataVille.
*/
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
  
  //creation du button pour le modal
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

export { CreateVille, dataVille, errorVille };