let numeroRandom = (size)=>{
    return Math.floor(Math.random()*size)
}

let distancia = (e, target)=>{
    let diffX = e.offsetX - target.x;
    let diffY = e.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

let pistas = distancia => {
    if (distancia < 30) { 
        return 'Estas hirviendo'
    } else if (distancia < 40){
        return 'Muy caliente'
    } else if (distancia < 60) {
        return 'Caliente'
    } else if (distancia < 100) {
        return 'Tibio'
    } else if (distancia < 180) {
        return 'Frio'
    }else if (distancia < 360) {
        return 'Muy frio'
    }else{
        return 'Era del Hielo'
    }
}