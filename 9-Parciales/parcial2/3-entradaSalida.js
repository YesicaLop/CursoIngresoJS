//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var largo;
	var ancho;
	largo=document.getElementById("largo").value;
	ancho=document.getElementById("ancho").value;
	terreno=largo*2+ancho*2;
	metrosAlam=terreno/6;
	
	alert("Se necesitan "+metrosAlam);
	
}

