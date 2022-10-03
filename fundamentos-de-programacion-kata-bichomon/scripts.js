//Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon"
let nombre = document.getElementById("gen-1");
nombre.textContent= "Generasión 1 Pokimon";

//Cambia el color de fondo de la primera generación de Pokimon.
nombre.style.background= "violet" 

//Imprime por consola la URL de la página.
let url = document.URL
console.log (url)

//Imprime por consola el dominio de la página.
let dominio = document.domain
console.log (dominio)

 //Imprime todos los nodos de imagen
 let img_pokemons = document.getElementsByTagName('img')
 console.log(img_pokemons.length);

 //Sustituye el atributo "src" de todas las imágenes 
let images = document.getElementsByTagName('img')
for ( let img of images) {
    img.setAttribute("src", "https://media.giphy.com/media/2v170e71aanfi/giphy.gif")
}

//Cambia el fondo de todos los infocard-lg-data text-muted
let infocard = document.getElementsByClassName('infocard-lg-data text-muted')
console.log(infocard);

let voladores = (document.getElementsByClassName('itype flying'));
for ( let cambio of voladores) {
cambio.style.background = 'grey'}

