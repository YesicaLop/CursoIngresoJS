//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()

{	var mult=0, resta=0, suma=0;
	var nroUno=prompt("Ingrese un número");
	var nroDos=prompt("Ingrese otro número");
	nroUno=parseInt(nroUno);
	nroDos=parseInt(nroDos);
	if(nroUno==nroDos){
		mult=nroUno*nroDos;
		document.write("La multiplicación de los nros iguales es: "+mult);
	}else if(nroUno>nroDos){
		resta=nroUno-nroDos;
		document.write("El resultado de la resta es: "+resta);
	}else
	{
		suma=nroUno+nroDos;
		document.write("El resultado de la suma es: "+suma);
	
	}
	
}

