export class TicketRegisterReq {
    descripcion: String;
    estado: String;
    fechaGenerada: String;
    fechaCierre: String;
    prioridad: number;
    idTipo: number;
    idCategoria: number;
    idUsuario: number;
}

export class TicketUpdateReq {
    idTicket : number;
    descripcion: String;
    estado: String;
    fechaGenerada: String;
    fechaCierre: String;
    prioridad: number;
    idTipo: number;
    idCategoria: number;
    idUsuario: number;
}

export class TicketReportReq {    
    idTicket : number| null;
    estado: string | null
    fechaInicio: string| null
    fechaFin: string| null
    idTipo: number| null
    idCategoria: number| null
    idUsuario: number| null
}