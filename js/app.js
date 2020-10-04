
window.onload=
()=>{
  document.getElementById('Opciones').addEventListener('change',Cambio) ; 
  document.getElementById('btnJugar').addEventListener('click',EmpezarJuego);
}


let Cambio=()=>{   
    let indiceSeleccionado=document.getElementById('Opciones').selectedIndex
    let urlImagen=document.getElementById('Opciones').options[indiceSeleccionado].value
    document.getElementById('imgPlay1').src=urlImagen
}


let EscogerMaquina=()=>{
    let numero=Math.random()*10
    if (numero<=3){
        document.getElementById('imgPC').src='./img/papel.jpg';
        document.getElementById('valor').innerText='papel'
    }
    if (numero>3 && numero<=8){
        document.getElementById('imgPC').src='./img/piedra.jpg';
        document.getElementById('valor').innerText='piedra'
    }
    if (numero>8){
        document.getElementById('imgPC').src='./img/tijeras.jpg';
        document.getElementById('valor').innerText='tijeras'
    }

}


let EmpezarJuego=()=>{
    let indiceSeleccionado=document.getElementById('Opciones').selectedIndex
    let urlImagen=document.getElementById('Opciones').options[indiceSeleccionado].value
    EscogerMaquina()
    let valorEscogidoMaquina=document.getElementById('valor').innerText
    DeterminarGanador(urlImagen,valorEscogidoMaquina)
}


let DeterminarGanador=(seleccionP1,seleccionMaquina)=>{


    if(seleccionP1==='./img/papel.jpg')
    {
        if(seleccionMaquina==='piedra'){
            console.log('Gana Jugador 1')
        }
        if(seleccionMaquina==='papel'){
            console.log('Empate')
        }
        if(seleccionMaquina==='tijeras'){
            console.log('Gana Jugador Skynet ,!!Estupido Humano')
        }
    }

    if(seleccionP1==='./img/piedra.jpg')
    {
        if(seleccionMaquina==='piedra'){
          
            console.log('Empate')
        }
        if(seleccionMaquina==='papel'){
            console.log('Gana Jugador Skynet ,!!Estupido Humano')
        }
        if(seleccionMaquina==='tijeras'){
            console.log('Gana Jugador 1')
          
        }
    }

    if(seleccionP1==='./img/tijeras.jpg'){
        if(seleccionMaquina==='piedra'){
            console.log('Gana Jugador Skynet ,!!Estupido Humano')
          
        }
        if(seleccionMaquina==='papel'){
            console.log('Gana Jugador 1')
        }
        if(seleccionMaquina==='tijeras'){
          
            console.log('Empate')
        }
    }

}