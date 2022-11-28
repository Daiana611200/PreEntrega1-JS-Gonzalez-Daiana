function saludar() {
    alert("Bienvenidos a Turnos Online Espacio Psicopedagogía");
}

saludar();

//Datos primarios
    let nombre = prompt("Ingrese nombre del paciente");
    let apellido = prompt("Ingrese apellido del paciente");
    let mensaje = `Hola ${nombre} ${apellido}`;
    alert(mensaje);

// primera consulta 
let respuesta = prompt("¿Es primera consulta?").toLowerCase();

if(respuesta === "si"){
   alert("Complete los datos del paciente, por favor");
    }else{
      alert("Solicite turno");
    }

 let entrada = prompt("Ingrese DNI");
    while(entrada != "ESC"){
        let mensaje = `El usuario ingreso ${entrada}`;
        alert(mensaje);

       alert("Solicite turno")  
      }
     


    // solicitud de turnos

    for(let turno = 1; turno <= 5; turno++){
        let nombre = prompt("Ingrese su nombre para asignar un turno");
        let mensaje = `Turno #${turno} Nombre: ${nombre}`;
        alert(mensaje);
      }
      alert("Turnos agotados");