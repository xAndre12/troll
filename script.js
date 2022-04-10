//Cum afisam un mesaj in consola cu ajutorul codului de js:
//console.log("mesaj")

//Daca vreau sa creez o variabila in js o sa folosesc let nume variabila.
//let a = 10;

//Daca vreau sa selectez un element din html ca sa pot sa il manipulez
//atunci o sa folosesc comanda querySelector().

let button = document.querySelector("button");
let image = document.querySelector("img");


const onMouseMove = (e) =>{
    image.style.left = e.pageX + 'px';
    image.style.top = e.pageY + 'px';
}

document.addEventListener('mousemove', onMouseMove);

button.addEventListener("click", () => {
    image.classList.remove('ascunde');
    image.classList.toggle('arata');
    button.classList.toggle('ascunde');
   
})


