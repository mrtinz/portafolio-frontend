class Persona{
    Nombre:string;
    Apellido:string;
    Acercade:string;
    Titulos:string;

    }

let portafolio:Persona={
    Nombre:"",
    Apellido:"",
    Acercade:"",
    Titulos:"",
}
function GetNombre():string {
    return this.Nombre
    
}

function GetApellido():string {
    return this.Apellido
}
function GetAcercade():string {
    return this.Acercade
}

function GetTitulos():string{
    return this.Titulos
}