/*funciones */


function login(){
  var user, pass;

  user = document.getElementById("usuario").value;
  pass = document.getElementById("contraseña").value;

  if(user == "admin" && pass== "123456"){
    window.location="Menu_solicitudes.html"; 
  }else{
    Window.alert("Contraseña incorrecta. Intente nuevamente");
  }
}

//Generador de PDF
function printFact(){
    
  var imgData = 'data:imagenes/qr.png';
  var doc = new jsPDF('landscape');
  var logo = new Image();
    
  //titulo 
  doc.setFontSize(18)
  doc.setFontType('bold')
  doc.text(80,25," Facturación de servicios - Laboratorio ALFA ");
   
  //Logo
  logo.src = 'imagenes/logo.png';
  doc.addImage(logo, 'JPEG', 15, 40,50,50);

  //datos de la factura    
  doc.setFontSize(12)
  doc.setFontType('Arial')
  doc.text( 'Nombre del cliente:'+ 'cosme fulanito' +'\r\rNumero de factura: '+'12|2413543'+'\r\rFecha de la facutra: '+ currentDay() , 140, 50,'center' );
  
  //qr
  logo.src = 'imagenes/qr.jpg';
  doc.addImage(logo,'JPEG', 230,40,50,50);

  //Tabla
  doc.autoTable({ theme: 'striped' ,html: '#myTable',startY: 100})    

  //cure: 
  doc.setFontSize(15)
  doc.setFontType('Arial  ')
  doc.text(15,180,"Cure: "+"N1L2K4N2JL3BLK35H2N3K6LNKL2N3K6LB3KL7BN2KL35NLK");

  //Print
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
