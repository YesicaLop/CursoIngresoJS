/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var nro1;
    var nro2;
    var porc;
    var rta;

    nro1=document.getElementById("importe").value;
    nro2=document.getElementById("resultado").value;
    nro1=parseInt(nro1);
    nro2=parseInt(nro2); 
    porc=(nro1*25)/100;
    rta=nro1-porc;
    nro2=document.getElementById("resultado").value=rta;
    alert("el descuento del 25% es: "+porc);
	
}

