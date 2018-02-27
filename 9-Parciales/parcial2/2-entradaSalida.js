//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{	var importe=prompt("Ingrese el importe del producto");
	var importeFinal, porcentaje;
	importe=parseInt(importe);
	porcentaje=importe*25/100;
	importeFinal=importe+porcentaje;
	alert("El Importe Final es "+importeFinal);
	document.getElementById("importe").value=importeFinal;
	
}

