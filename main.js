//EVALUADOR DE SUBSIDIO DE ENERIGA

function calcularKWS (mes, sem1, sem2, sem3, sem4){
    let sumaKWS = sem1 + sem2 + sem3 + sem4
    
    if (sumaKWS <= 500){
        alert(`Su consumo mensual de energia de ${mes} es de ${sumaKWS}kWh y no supera el permitido, por lo tanto le corresponde el subsidio`)
    }
    else{
        alert(`Su consumo mensual de energia de ${mes} es de ${sumaKWS}kWh y supera el permitido, por lo tanto NO le corresponde el subsidio`)
    }
}

let cantMeses = prompt("Ingrese la cantidad de meses a evaluar")

for (i = 0; i < cantMeses; i++){
    let ingresoMes = prompt("Ingrese el mes a evaluar")
    console.log(ingresoMes)
    let sem1 = parseInt(prompt("Ingrese los kWs de la semana 1"))
        while(isNaN(sem1)){
        alert("Por favor ingrese una valor numerico")
        sem1 = parseInt(prompt("Ingrese los kWs de la semana 1"))
        console.log(sem1)
}
    let sem2 = parseInt(prompt("Ingrese los kWs de la semana 2"))
        while(isNaN(sem2)){
        alert("Por favor ingrese una valor numerico")
        sem2 = parseInt(prompt("Ingrese los kWs de la semana 2"))
        console.log(sem2)
}
    let sem3 = parseInt(prompt("Ingrese los kWs de la semana 3"))
        while(isNaN(sem3)){
        alert("Por favor ingrese una valor numerico")
        sem3 = parseInt(prompt("Ingrese los kWs de la semana 3")) 
        console.log(sem3)
}
    let sem4 = parseInt(prompt("Ingrese los kWs de la semana 4"))
        while(isNaN(sem4)){
        alert("Por favor ingrese una valor numerico")
        sem4 = parseInt(prompt("Ingrese los kWs de la semana 4"))
        console.log(sem4) 
}
    calcularKWS(ingresoMes, sem1, sem2, sem3, sem4)
}


