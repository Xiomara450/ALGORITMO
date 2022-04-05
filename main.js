//SIGNOS COMPARATIVOS  "A"
function SIGNOSCOMPARATIVOS(){
var a =0;
var b =0;
var suma = 0;
var resta=0;
var multiplicacion=0;
var division =0;

a = parseInt(prompt("ingrese el primer valor"));//parseInt es para covertir string en enteros 
b = parseInt(prompt("por favor ingrese el segundo valor"));

suma =a + b;
resta = a-b;
multiplicacion = a*b;
division = a /b;

alert ("el resultado de la suma es:"+ suma);
alert ("el resultado de la resta es:"+ resta);
alert ("el resultado de la multiplicacion es:"+ multiplicacion);
alert ("el resultado de la division es:"+ division);
}

// DETRMINAR EL MAYOR DE 2 NUMEROS "B"
function NUMEROMAYORDE2(){
    var a=0;
    var b=0;
    a=parseInt(prompt("Ingrese un numero"));
    b=parseInt(prompt("Ingrese un numero"));
    
     if(a>b){
         alert("El numero mayor es a ");
        } else{
            alert ("El numero  mayor es b")
        }
    }
//NUMERO MENOR DE 3 "C"
function NUMEROMENORDETRES(){
    var num1=0;
    var num2=0;
    var num3=0;
    var x=0;
    var menor=0;
    num1=parseInt(prompt("Ingrese el primer  numero"));
    num2=parseInt(prompt("Ingrese el segundo numero"));
    num3=parseInt(prompt("Ingrese el tercer numero"));
    
     if(num1 < num2){
         x = num1;
        } else{
          x = num2;
       }
       if(x < num3){
           menor=x;
       }else{
           menor=num3;
       }
        alert("El numero menor es:" +menor);
        }
    

// DETERMINAR SI UN NUMERO ES PAR O IMPAR "D"
function PAROIMPAR(){
   numero=parseInt(prompt("introduzca un numero"));
  if (numero % 2==0){
    alert ("El numero " +numero+ " es par");
    } else{
    alert ("El numero " +numero+ " es impar");
  }
        }


//DETERMINAR EL CUADRADO DE UN NUMERO "E"
function CUADRADODEUNNUMERO(){
let num = parseInt(prompt("Digite el numero "));
let exponente = num * num; 
alert("El cuadrado del numero es: " + exponente +"");

}




// DETERMINAR EL AREA DE UN TRIANGULO "F"
function AREADEUNTRIAGULO(){
var base=0;
var alto=0;
var area=0;

base=parseInt(prompt("Digite la base "));
alto=parseInt(prompt("Digite el alto "));
area=(base*alto)/2;
alert ("El area del triangulo es"+area+"centimetros²");
}


//DETERMINAR LOS CM DE UN VALOR DADO EN METROS POR EL USUARIO "G"
function CMENMETROS(){
var metros=0;
metros=parseInt(prompt("digite los metros a calcular"));
cm=(metros*100)
alert("Los centimetros de los metros digitados son :"+cm+"");

}



// DETERMINAR EL AÑO EN QUE NACIO EL USUARIO "H"
function AÑOQUENACIONELUSUARIOS(){
    var aactual = 0;
    var Edad = 0;
    var añonacido= 0;

    aactual = parseInt(prompt("Por favor ingrese el año actual: "));
    Edad = parseInt(prompt("Por favor ingrese la edad del usuario: "));

    añonacido =aactual-Edad;

    alert("El Año de nacimiento del usuario es: "+añonacido);
}

// INVERSION DE CAPITAL "I"
function INVERSIONDECAPITAL(){
let numero = prompt("Ingrese su capital");
let años = prompt("Ingrese a cuantos años");
const resultadoPorciento = años * 2 / 100
const resultadoFinal = resultadoPorciento * numero 

alert("Su resultado final es: " + resultadoFinal);

}


// CALCUYLAR CALIFICACIONES "J"
function CALIFICACIONES(){
let numero1 = parseFloat(prompt("Digite la primer nota: "));
let numero2 = parseFloat(prompt("Digite la segunda nota: "));
let numero3 = parseFloat(prompt("Digite la tercera nota: "));
let numero4 = parseFloat(prompt("Digite la cuarta nota: "));
let numero5 = parseFloat(prompt("Digite la quinta nota: "));
let resultado = (numero1 + numero2 + numero3 + numero4 + numero5) / 5;
if(resultado == 1.0 || resultado <= 2.9){
    alert("El estudiante reprobo la materia");
}
else if(resultado >= 3.0 || resultado == 5.0){
    alert("El estudiante aprobo, excelente");
}
else{
    alert("No se pudo")
}

}


// KILOS Y DESCUENTOS 
function KILOSYDESCUENTOS(){
    let precioKilo = 4.500;
    let kilosClientes = parseFloat(prompt("Digite los kilos: "))
    let totalCompra = 0;
    if (kilosClientes == 0 || kilosClientes <= 2) {
        if(kilosClientes == 0){
            alert("El total de la compra de los kilos "+ kilosClientes + " es: " + precioKilo.toFixed(3));
        }
        else if(kilosClientes > 0 || kilosClientes <= 2){
            totalCompra = precioKilo * kilosClientes;
            alert("El total de la compra de los kilos "+ kilosClientes + " es: " + totalCompra.toFixed(3));
        }
        
    }
    else if(kilosClientes == 3 || kilosClientes <= 5){
        totalCompra = (precioKilo * kilosClientes) - 0.10;
        alert("El total de la compra de los kilos "+ kilosClientes + " es: " + totalCompra.toFixed(3));
    }
    else if(kilosClientes == 6 || kilosClientes <= 10){
        totalCompra = (precioKilo * kilosClientes) - 0.15;
        alert("El total de la compra de los kilos "+ kilosClientes + " es: " + totalCompra.toFixed(3));
    }
    else if(kilosClientes >= 10){
        totalCompra = (precioKilo * kilosClientes) - 0.20;
        alert("El total de la compra de los kilos "+ kilosClientes + " es: " + totalCompra.toFixed(3));
    }
    else{
        alert("Nada");
    }
    
}



//CONTAR CULES SON LOS # PARES Y CUALES SON IMPARES
function PARESEIMPARES(){
    let num =parseInt(prompt("ingrese los numeros que desee"));
    let pares= 0;
    let impares=0;
    
    for(let i = 0; i <= num; i++){
        if(i%2 == 0){
            pares = i;
            alert("Los Numeros Pares Son: " + i)
        }
        else if(i%2 != 0){
            impares = i;
            alert("Los Numeros Impares Son: " + i)
        }
        else{
            alert("No hay");
        }
    } 

}


//SUMAR N CANTIDAD DE NUMEROS 
function SUMANNUMEROS(){
    var num =0;
    var suma=0;
    num=parseInt(prompt("ingrese los numeros que desee"));
    suma=num*(num+1)/2;
    alert("la suma es :" + suma)
}



function NUMEROPRIMO(){
    let num = parseInt(prompt("ingrese los numeros que desee"));
    for(let i = 0; i <= num; i++)
     if(i % 2 == 0){
        
            alert("Este es un numero primo: " + i)
        }else{
            alert("Este no es numero primo: " + i)
        }
    }
    



//CALCULAR LOS AÑOS,MESES Y DIAS VIVIDOS
function DIASDEVIDA(){
let dias = parseInt(prompt("Cuántos días has vivido"));
let numAños = Math.floor(diasVida / 365);
let diasRestantes = diasVida % 365 ;
let numMeses = Math.floor(diasRestantes / 30);
diasRestantes = diasRestantes % 30;

alert("Ha vivido " + numAños + " años, " + numMeses + " meses y " + diasRestantes + " días.")
}


// VALIDAR SI PUEDE INGRESAR A LA DICO 
function MAYORDEEDAD(){
    var edad=parseInt(prompt("ingrese la edad"));
    if(edad<18){
      alert("Ustd, es menos de edad no puede ingresar")
    }else{
        alert("Bienvenido, usted es mayor de edad")
    }

}
//HORARIO 
function HORARIO(){
let hora=parseInt(prompt("Ingrese La Hora"));

if (hora<=5){
    alert ("Dejame dormir")
}else if(hora>5 && hora<12){
    alert ("Buenos dias")
}else if (hora> 12 && hora<19){
    alert("Buenas Tardes")
}else{
    alert("Buenas noches")
}
}
//IMPRIMIR LOS 4 PRIMEROS NUMEROS DE LA TABLA DEL 4
function TABLA4(){
var num=1;
var valor=0;

    alert("num=  "+1)

    do{

        valor=4*num
        document.write("4 * "+num+" = " +valor+"<br>");
        num++;

    }while(num<=5);
}








