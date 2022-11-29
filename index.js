function saludar() {
    alert("Bienvenidos a Turnos Online Espacio Psicopedagogía");
}

saludar();

//Datos primarios
    let nombre = prompt("Ingrese nombre del paciente");
    let apellido = prompt("Ingrese apellido del paciente");
    let dni = prompt("Ingrese DNI del paciente")
    let mensaje = `Hola ${nombre} ${apellido}`;
    alert(mensaje);

// primera consulta 
let respuesta = prompt("¿Es primera consulta?").toLowerCase();

if(respuesta === "si"){
   alert("Complete los datos del paciente, por favor");
    }else{
      alert("Solicite turno");
    }

 let entrada = prompt("Ingrese Celular");
    while(entrada != "ESC"){
        let mensaje = `El usuario ingreso ${entrada}`;
        entrada = prompt ("Ingrese domicilio del paciente");
        entrada = prompt ("Ingrese Fecha de nacimiento del paciente");
        entrada = prompt ("Ingrese localidad del paciente");
        entrada = prompt ("Ingrese Obra Social del paciente");
       alert("Solicite turno")  
       break;
      }
  
    // solicitud de turnos 

    for(let turno = 1; turno <= 5; turno++){
        let nombre = prompt("Ingrese nombre y apellido del paciente para asignar un turno");
        let mensaje = `Turno #${turno} Nombre: ${nombre} Apellido: ${apellido}`;
        alert(mensaje);
      }
      alert("Turnos agotados");