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
   let entrada = prompt("Ingrese Celular");
        entrada = prompt ("Ingrese domicilio del paciente");
        entrada = prompt ("Ingrese Fecha de nacimiento del paciente");
        entrada = prompt ("Ingrese localidad del paciente");
        entrada = prompt ("Ingrese Obra Social del paciente");
       alert("Solicite turno") 
  
  //solicitud de turno
    for(let turno = 1; turno <= 5; turno++){
        let nombre = prompt("Ingrese nombre y apellido del paciente para asignar un turno");
        let mensaje = `Turno #${turno} Nombre: ${nombre} Apellido: ${apellido}`;
        
          break;
        
        alert(mensaje);
      }
      alert("Turnos agotados");   
    }
    else{
      alert("Solicite turno");
      for(let turno = 1; turno <= 5; turno++){
        let nombre = prompt("Ingrese nombre y apellido del paciente para asignar un turno");
        let mensaje = `Turno #${turno} Nombre: ${nombre} Apellido: ${apellido}`;
    
        alert(mensaje);
      }
      alert("Turnos agotados");
    }