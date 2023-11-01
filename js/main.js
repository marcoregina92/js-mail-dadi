const listaMail = ['johnsnow@gmail.com' , 'frankzappa@gmail.com' , 'rinogaetano@gmail.com' , 'pippobaudo@gmail.com'];
const inputMail = prompt('Inserisci la tua mail');
let mail = false;

for (let i = 0; i < listaMail.length; i++) {
  const lista = listaMail[i];
  
  if (lista == inputMail) {
    mail = true;
  }
}

if (mail == true){
  alert('Bentornato');
}else{
  alert('Accesso Negato');
}



