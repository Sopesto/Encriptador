//Declara una variable que verifica si hay caracteres raros en el texto
let carNP = false;

//Función para copiar el texto del campo respuesta al portapaeles
function copiar() {
  //Declara la variable campo y le asigna el objeto traido desde el documento
  //por el ID 'respuesta'
  let campo = document.getElementById("respuesta");
  //Verifica si el campo está vacío
  if (campo.value.length > 0) {
    //Escribe en el portapapeles el texto del campo respuesta
    navigator.clipboard.writeText(campo.value); 
    //Alerta al usuario sobre lo sucedido
    alert("Texto copiado exitosamente");
    //Alerta al programador sobre lo sucedido
    console.log("Texto copiado exitosamente: ", campo.value);
  }
  else{
    //Alerta al usuario sobre lo sucedido
    alert("No hay nada que copiar");
    //Alerta al programador sobre lo sucedido
    console.log("No hay nada que copiar, el campo respuesta está vacío");
  }
}

//Función que encripta o desencripta un texto a un código establecido
function encriptar(modo) {
  //Declara la variable campo y le asigna el objeto traido desde el documento
  //por el ID 'pregunta'
  let campo = document.getElementById("pregunta");
  //Declara la variable texto y le asigna el texto del objeto campo
  let texto = campo.value;
  //Verifica si el campo está vacío
  if(texto.length > 0){
    //Verifica si no hay caracteres raros
    if(carNP){
      //Imprime en consola el texto a encriptar
      console.log("Texto: ", texto);
      //Modo encriptación
      if(modo){
        //Remplaza todas las vocales a su código correspondiente
        texto = texto.replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat");
        //Asigna el texto encriptado al campo respuesta
        document.getElementById("respuesta").value = texto;
        //Alerta al usuario sobre lo sucedido
        alert("Su texto fue encriptado con éxito");
        //Alerta al programador sobre lo sucedido
        console.log("Texto encriptado con éxito:");
      }
      //Modo desencriptación
      else{
        //Remplaza todas los códigos a su vocal correspondiente
        texto = texto.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat","u");
        //Asigna el texto desencriptado al campo respuesta
        document.getElementById("respuesta").value = texto;

        //Alerta al usuario sobre lo sucedido
        alert("Su texto fue desencriptado con éxito");
        //Alerta al programador sobre lo sucedido
        console.log("Texto desencriptado con éxito:");
      }
      //Imprime en consola el texto encriptado/desencriptado
      console.log("Resultado: ", texto);  
    }
    else{
      alert("No se permite el uso de caracteres especiales");
    }
  }
  else{
    alert("Por favor escriba un texto para poder encriptar");
  }
}

//Función que detecta si el usuario ingreso un caracter no admitido
function nVCar(){
  //Obtiene el texto del campo pregunta
  let texto = document.getElementById("pregunta").value;
  //Verifica si el campo tiene caracteres especiales
  if(texto.includes("<") || texto.includes(">") || texto.includes(",") || texto.includes(";") || texto.includes("/") || texto.includes("\\") || texto.includes("-")){
    carNP = false;
  }
  else{
    carNP = true;
  }
  let rojo  = parseInt(Math.random() * 255);
  let verde = parseInt(Math.random() * 255);
  let azul  = parseInt(Math.random() * 255);
  document.getElementById("t").style.setProperty("color", "#"+rojo.toString(16)+verde.toString(16)+azul.toString(16));
}