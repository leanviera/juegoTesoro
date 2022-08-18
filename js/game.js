const ANCHO = 400;
const ALTO = 400;

let objetivo = {
    x: numeroRandom(ANCHO),
    y:numeroRandom(ALTO)
}

let map = document.getElementById('map');
let txt = document.querySelector('p')
let click = 0;

map.addEventListener('click', function(e){
    click++;
    let distance = distancia(e, objetivo);
    let distanciaPista = pistas(distance)
    txt.innerHTML = `<h1>${distanciaPista}</h1>`

    if (distance < 20) {
        alert('Encontraste el tesoro en '+click +'click!')
        location.reload();
    }
})