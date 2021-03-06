<?php 

$server = "localhost";
$user = "root";
$pass = "";
$bd = "catalogo_mfe";

//Creacion la conexión
$conexion = mysqli_connect($server, $user, $pass,$bd) 
or die("Ha sucedido un error inexperado en la conexion de la base de datos");

//generador de la consulta
$sql = "SELECT * FROM catalogo";
mysqli_set_charset($conexion, "utf8"); //formato de datos utf8

if(!$result = mysqli_query($conexion, $sql)) die();

$catalogo = array(); //creamos un array

while($row = mysqli_fetch_array($result)) 
{ 
    $codigo=$row['codigo'];
    $detalles=$row['detalles'];
    $proceso=$row['proceso'];
    $costo=$row['costo'];
    $descuento=$row['descuento'];
    $importe=$row['importe'];
    
    $catalogo[] = array('codigo'=> $codigo, 'detalles'=> $detalles, 'proceso'=> $proceso, 'costo'=> $costo,
                        'descuento'=> $descuento, 'importe'=> $importe);

}
    
//desconectamos la base de datos
$close = mysqli_close($conexion) 
or die("Ha sucedido un error inexperado en la desconexion de la base de datos"); 

//Creamos el JSON
$json_string = json_encode($catalogo);
echo $json_string;
//Si queremos crear un archivo json, sería de esta forma
$file = 'catalogo.json';
file_put_contents($file, $json_string);

?>