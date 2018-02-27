//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var nota, sexo, min, contadorVarones=0;
	var acumNotas=0, contNotas=0, promNotas;
	for(var i=0;i<=6;i++){
		nota=prompt("Ingrese la nota");
		nota=parseInt(nota);
		while(isnNaN(nota)){
		 nota=prompt("ERROR,Ingrese la nota numérica");	
		}
		while(nota<0 || nota>=10){                //valido con while;
		  nota=prompt("ERROR,Ingrese la nota de 1-10");	
		  nota=parseInt(nota);
		}

		sexo=prompt("Ingrese el sexo: f/femenino, m/masculino");
		while(sexo!="f" && sexo!="m"){
			 sexo=prompt("ERROR, Ingrese el sexo: f/femenino, m/masculino");	
		}
      acumNotas=acumNotas+nota;
	  contNotas=contNotas+1;
		if(i==1){
			min=nota;
		}else if(nota<min){
			min=nota;
		}
		if(sexo=="m" && nota>=6){
			contVarones=contVarones+1;
		}

	}//cierre for;
	promNotas=acumNotas/contNotas;
	alert("El promedio de notas es: "+promNotas);
	alert("La nota más baja es: "+min);
	alert("La cantidad de varones con nota mayor o igual a 6 es: "+contVarones);
}

