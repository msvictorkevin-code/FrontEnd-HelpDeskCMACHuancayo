export class ColaboradorRequest{
    codigo: String;
    area: String;
    nombre:String;
    //email:String;
    apellido: String;
    usuario: String;
    clave: String;
    administador: boolean;
}

export class ColaboradorActualizarRequest{
    idColaborador : number;
    idUsuario: number;
    codigo: String;
    area: String;
    nombre:String;
    //email:String;
    apellido: String;
    usuario: String;
    clave: String;
    administador: boolean;
    activo: boolean;
    nroIntentos: number;
}