interface Persona{
    Nombre:string;
    Apellido:string;
    Acercade:string;
    Titulos:string;

    }

let portafolio:Persona={
    Nombre:"",
    Apellido:"",
    Acercade:"",
    Titulos:["",""],
}
function GetNombre(nombre:string) {
    const nombre1 = document.getElementById("Nombre");
    nombre1.textContent=nombre;
}

function GetApellido(apellido:string) {
    const a = document.getElementById("Apellido");
    a.textContent=apellido;
    return portafolio.Apellido=apellido;
}
function GetAcercade(acercade:string) {
    const a = document.getElementById("text-acercade");
    a.textContent=acercade;
    return portafolio.Acercade=acercade;
}
