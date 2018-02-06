function Mostrar()
{
  var importe;
  var iva;
  var total;
   importe=prompt("Ingrese el Importe");
   
   importe=parseInt(importe);
   iva=(importe*25)/100;
   total=iva+importe;
   document.getElementById("importeFinal").value=total;
}
