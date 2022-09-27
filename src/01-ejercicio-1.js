//Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla los doce nombres utilizando la función console.log().

let months = ["Enero","Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

function showMonths(arrayMeses){
    for (let i =0; i <= arrayMeses.length; i++ ){
        console.log(arrayMeses[i]);
    };
};

showMonths(months);