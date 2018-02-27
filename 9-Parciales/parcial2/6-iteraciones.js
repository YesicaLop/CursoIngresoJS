//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{	var bandera=true;
	var mayor=10000;
	var importe;
	for(var i=1;i<=7;i++){
		importe=prompt("Ingrese el Importe de las Ventas del día: "+i);
		importe=parseInt(importe);
	  while(isNaN(importe)){
			importe=prompt("ERROR, Ingrese valores numéricos");
	   }

	  if(importe==0){
		   continue;
	  }
	  if(bandera){
		  bandera=false; 
		  menor=importe;
		  mayor=importe;
	  }else if(importe>mayor){
		  mayor=importe;
	  }else if(menor>importe){
		  menor=importe;
	  }

     }// cierre for;

	 alert("el mayor importe es: "+mayor+ ", el menor importe es: "+menor)
}

