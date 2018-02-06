/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
 var nro1;
    var nro2;
    var porc;
    var rta;

    nro1=document.getElementById("sueldo").value;
    nro2=document.getElementById("resultado").value;
    nro1=parseInt(nro1);
    nro2=parseInt(nro2); 
    porc=(nro1*10)/100;
    rta=nro1+porc;
    document.getElementById("resultado").value=rta;
    alert("el aumento del 10% es: "+porc);
	
}
