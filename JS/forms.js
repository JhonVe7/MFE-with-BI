/*funciones */

//imprimir PDF
function printFact(){
    var doc = new jsPDF();
    doc.text("  ", 10 , 10);
    doc.save("Factura_MFA.pdf");
  }

