var suma = function (){
    var x = document.getElementById('valor1').value 
    var y = document.getElementById('valor2').value
    document.getElementById('Resultado').innerHTML = parseInt(x)+ parseInt(y)
}

var resta = function (){
    var x = document.getElementById('valor1').value 
    var y = document.getElementById('valor2').value
    document.getElementById('Resultado').innerHTML = parseInt(x)- parseInt(y)
}


var multiplicacion = function (){
    var x = document.getElementById('valor1').value 
    var y = document.getElementById('valor2').value
    document.getElementById('Resultado').innerHTML = parseInt(x) * parseInt(y)
}

var division = function (){
    var x = document.getElementById('valor1').value 
    var y = document.getElementById('valor2').value
    document.getElementById('Resultado').innerHTML = parseInt(x) / parseInt(y)
}