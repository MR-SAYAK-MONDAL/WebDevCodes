// let NomoskarButton = document.querySelector('Button');
// NomoskarButton.addEventListener('click', showMassege);

// function showMassege() {
//     alert("!! Nomoskar Earth !!");
// }

let NomoskarButton = document.querySelector('button');
NomoskarButton.addEventListener('click', InputMsg);

function InputMsg() {
    let name = prompt('Enter your Name');
    NomoskarButton.textContent = "Hey ! " + name + " , How're you doing?";
}