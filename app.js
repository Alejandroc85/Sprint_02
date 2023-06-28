// ID's tarjeta num_tar , nom_tar , exp_tar, cvc_tar
// ID's imput , nom_tar_imp , num_tar_imp, exp_m_imp, exp_y_imp, cvc_imp

//constantes tarjeta:
const numtar = document.getElementById('num_tar');

const nomtar = document.getElementById('nom_tar');

const exptar = document.getElementById('exp_tar');

const cvc_tar = document.getElementById('cvc_tar');

//constantes imput:
const numimp = document.getElementById('num_tar_imp');

const nomimp = document.getElementById('nom_tar_imp');

const expmimp = document.getElementById('exp_m_imp');

const expyimp = document.getElementById('exp_y_imp');

const cvcimp = document.getElementById('cvc_imp');

//union imput con tarjeta numeros:

numimp.addEventListener('input', () => {
    const cardnumber = numimp.value;
    const numerostarjeta = grupotarjeta(cardnumber);
    numtar.innerHTML = numerostarjeta;
});

function grupotarjeta(number) {
   
    const groups = [];
    for (let i = 0; i < number.length; i += 4) {
        groups.push(number.slice(i, i + 4));
    }
    
    const numerostarjeta = groups.join(' ');

    return numerostarjeta;
}


//union imput con tarjeta nombre:
nomimp.addEventListener ('input',() => {
    nomtar.innerHTML = nomimp.value;
})

//union imput con tarjeta CVC:
cvcimp.addEventListener ('input',() => {
    cvc_tar.innerHTML = cvcimp.value;
})

//union imput con tarjeta mes y anio:
expmimp.addEventListener ('input', date); 
expyimp.addEventListener ('input', date);

function date() {
    const month = expmimp.value;
    const year = expyimp.value;
    exptar.textContent = month + '/' + year;
};

//  msj error texto card name:
 const inputNombre = document.getElementById("nom_tar_imp");
 const errorNombre = document.getElementById("error_nombre");

 inputNombre.addEventListener("input", function() {
   const value = inputNombre.value.trim();

   if (value !== "" && !/^[a-zA-Z]+$/.test(value)) {
     errorNombre.style.display = "block";
   } else {
     errorNombre.style.display = "none";
   }
 });

 // msj error texto card number:
 const inputNumero = document.getElementById("num_tar_imp");
 const errorCard = document.getElementById("error_card");

 inputNumero.addEventListener("input", function() {
   const value = inputNumero.value.trim();

   if (value !== "" && !/^\d+$/.test(value)) {
     errorCard.style.display = "block";
     errorCard.innerHTML= "solo numeros"
     return 
   } else {
     errorCard.style.display = "none";
     
   }

   
   if (value.length < 16 && value.length!=0) {
     errorCard.style.display = "block";
     errorCard.innerHTML= "ingrese 16 caracteres"
   } else {    
     errorCard.style.display = "none";
     errorCard.innerHTML= "" 
   }  
 }); 

 // msj error exp date
 const inputExpM = document.getElementById("exp_m_imp");
 const inputExpY = document.getElementById("exp_y_imp");
 const errorFecha = document.getElementById("error_fecha");

 function validateExpirationDate() {
   const month = inputExpM.value.trim();
   const year = inputExpY.value.trim();

   if (month === "" || year === "") {
     errorFecha.style.display = "block";
   } else {
     errorFecha.style.display = "none";
   }
 }

 inputExpM.addEventListener("input", validateExpirationDate);
 inputExpY.addEventListener("input", validateExpirationDate);

 // msj error cvc
 const inputCVC = document.getElementById("cvc_imp");
 const errorCVC = document.getElementById("error_cvc");

 inputCVC.addEventListener("input", function() {
   const value = inputCVC.value.trim();

   if (value === "") {
     errorCVC.style.display = "block";
   } else {
     errorCVC.style.display = "none";
   }
 });

 inputCVC.addEventListener("input", function() {
   const value = inputCVC.value.trim();

   if (value.length === 0) {
     errorCVC.style.display = "none";
   }
 });

 // boton complete
  let requirementsMet = false;

  function checkRequirements() {
   const isCardNameValid = /^[a-zA-Z]+$/.test(nomimp.value.trim());
   const isCardNumberValid = /^\d{16}$/.test(numimp.value.trim());
  const isExpirationDateValid = inputExpM.value.trim() !== "" && inputExpY.value.trim() !== "";
   const isCVCValid = /^\d{3}$/.test(inputCVC.value.trim());

   requirementsMet = isCardNameValid && isCardNumberValid && isExpirationDateValid && isCVCValid;

  if (requirementsMet) {
    document.getElementById("complete").style.display = "grid";
    document.getElementById("formulario").style.display = "none";
   } else {
     document.getElementById("complete").style.display = "none";
  }
 }

 nomimp.addEventListener("input", checkRequirements);
 numimp.addEventListener("input", checkRequirements);
 inputExpM.addEventListener("input", checkRequirements);
 inputExpY.addEventListener("input", checkRequirements);
 inputCVC.addEventListener("input", checkRequirements);

 document.getElementById("botonback").addEventListener("click", function(event) {  
  

   nomimp.value = "";
   numimp.value = "";
   inputExpM.value = "";
   inputExpY.value = "";
   inputCVC.value = "";
  

   document.getElementById("complete").style.display = "none";
 });

