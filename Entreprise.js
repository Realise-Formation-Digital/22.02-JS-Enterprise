/**
 * 
 * @returns data, base de donnee Entreprise;
 */
async function getEntreprise() {
    try {
      const response = await axios.get('https://entreprise.vinko-roditi.com/api/entreprise/list');
      return response.data;
    } catch (error) {
      if(error.response) {
        CreateToast(error.response);
      } else if(error.request) {
        CreateToast(error.request);
      } else {
        CreateToast(error.config);
      }
    }
}

//array avec toutes les entreprise;
const dataEntreprise = await getEntreprise();

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

function CreateToast (error) {

    let div1 = document.createElement("div");
    div1.className = "toast";
    div1.setAttribute("role", "alert");
    div1.setAttribute("aria-live", "assertive");
    div1.setAttribute("aria-atomic", "true");

    let div2 = document.createElement("div");
    div2.className = "toast-header";

    let h5 = document.createElement("h5");
    h5.className = "me-auto fw-bold";
    h5.textContent= "Error!"
    div2.appendChild(h5);

    let button = document.createElement("button");
    button.className = "btn-close";
    button.setAttribute("type", "button");
    button.setAttribute("data-bs-dismiss", "toast");
    button.setAttribute("aria-label", "close");
    div2.appendChild(button);
    div1.appendChild(div2);

    let div3 = document.createElement("div");
    div3.className = "toast-body";
    div3.textContent = error;
    div1.appendChild(div3);

    return div1;
}

export { CreateEntreprise, dataEntreprise, CreateToast };