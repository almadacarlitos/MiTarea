$("#btnCalc").click(function() {
  Calcular();
});

function Calcular() {
  var opcion = $("#moneda option:selected").html();

  var moneda = $("#moneda option:selected").val();
  var monto = $("#monto").val();
  var resultado;

  if (opcion == "Dolar") { 
    resultado = parseInt(monto) * parseInt(moneda);

    $("#jcotizacion").html(moneda + " Gs.");
    $("#jEntrante").html(monto + " Dolares.");
    $("#jcambio").html(resultado + " Gs.");

    function Dolargs() {
      var vEntrante = $("#monto").html();

      var vResult = vEntrante * moneda;
      console.log(vResult);
    }
  }
  if (opcion == "Real") {
    resultado = parseInt(monto) * parseInt(moneda);
    $("#jcotizacion").html(moneda + " Gs.");
    $("#jEntrante").html(monto + " Reales.");
    $("#jcambio").html(resultado + " Gs.");
  }
  if (opcion == "Peso") {
    resultado = parseInt(monto) * parseInt(moneda);
    $("#jcotizacion").html(moneda + " Gs.");
    $("#jEntrante").html(monto + " Pesos.");
    $("#jcambio").html(resultado + " Gs.");
  }
}