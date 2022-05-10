/*funciones */

//imprimir PDF
function printFact(){
    
  var imgData = 'data:imagenes/qr.png';
  var doc = new jsPDF('landscape');
  var logo = new Image();
    
    //titulo 
    doc.setFontSize(18)
    doc.setFontType('bold')
    doc.text(80,25," Facturación de servicios - Laboratorio ALFA ");
   
    //Logo
    logo.src = 'imagenes/logo.jpg';
    doc.addImage(logo, 'JPEG', 15, 40,50,50);

   
    //datos de la factura
    
    doc.setFontSize(12)
    doc.setFontType('Arial')
    doc.text( 'Nombre del cliente:'+ 'cosme fulanito' +'\r\rNumero de factura: '+'12|2413543'+'\r\rFecha de la facutra: '+ currentDay() , 140, 50,'center' );
  
    //qr
    logo.src = 'imagenes/qr.jpg';
    doc.addImage(logo,'JPEG', 230,40,50,50);

  
    //Tabla
    
    
    
    doc.setFontSize(15)
    doc.setFontType('bold')
    doc.text( 'Item', 80, 100, 'center' )
    doc.text( 'Nombre', 140, 100, 'center' )
    doc.text( 'Nombre', 200, 100, 'center' )
    doc.autoTable({ valign: 'middle', html: '#myTable' });  

    doc.save("Factura_MFA.pdf"); 
  }

//limpiar
function clean(){
  formulario.getElementById("myForm").reset();
}

//dia actual
function currentDay(){
  date = new Date();
  year = date.getFullYear();
  month = date.getMonth() + 1;
  day = date.getDate();
  return dateday =  month + "/" + day + "/" + year;
}