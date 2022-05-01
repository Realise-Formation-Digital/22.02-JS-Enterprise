/**
 * 
 * @returns data, base de donnee Entreprise;
 */
 async function getEntreprise() {
  try {
      const response = await axios.get('https://entreprise.vinko-roditi.com/api/entreprise/list', { timeout: 60 });
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
const reponseAxios = await getEntreprise();

/**
* 
* @returns liste d'entreprise, check le status 200
*/
function check () {
  if (reponseAxios.status == 200) {
      const data = reponseAxios.data;
      console.log(data)
      return data;
  }
}

//liste d'entreprise
const dataEntreprise = check();

//error de axios
const errorEntreprise = reponseAxios;

/**
* 
* @param {Une Entreprise} value 
* @returns Une card pour chaque entreprise dans dataEntreprise
*/
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

export { CreateEntreprise, dataEntreprise, errorEntreprise };