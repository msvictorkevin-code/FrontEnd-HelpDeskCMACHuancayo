import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { TicketModelResponse } from '../data/model/response/ticker.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TicketRegisterReq, TicketReportReq, TicketUpdateReq } from '../data/model/request/tikcerRegisterReq';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  private APIADMINENDPOINT: string = environment.urlApiService;

  constructor(private httpClient: HttpClient) { }

  registrarTicket(request: TicketRegisterReq): Observable<TicketModelResponse> {
    return this.httpClient.post<TicketModelResponse>(`${this.APIADMINENDPOINT}/ticket/registrar`, request);
  }

  listarTicket(): Observable<TicketModelResponse> {
    return this.httpClient.get<TicketModelResponse>(`${this.APIADMINENDPOINT}/ticket/listar`);
  }

  actualizarTicket(request: TicketUpdateReq): Observable<TicketModelResponse> {
    return this.httpClient.post<TicketModelResponse>(`${this.APIADMINENDPOINT}/ticket/actualizar`, request);
  }

  obtenerTicket(idTicket: number): Observable<any> {
    return this.httpClient.get<any>(`${this.APIADMINENDPOINT}/ticket/obtener/`+idTicket);
  }

  crearReporteExcel(request: TicketReportReq): Observable<any> {
    const headers = new HttpHeaders()
    .set('estado',  request.estado == null ? '':request.estado)
    .set('idTipo',  request.idTipo == null ? '':request.idTipo .toString())
    .set('idCategoria',  request.idCategoria == null ? '':  request.idCategoria.toString())
    .set('idTicket',  request.idTicket == null ? '':  request.idTicket.toString())
    .set('fechaInicio',  request.fechaInicio == null ? '': request.fechaInicio  )
    .set('fechaFin',  request.fechaFin  == null ? '': request.fechaFin)
    .set('idUsuario',  request.idUsuario == null ? '':  request.idUsuario.toString());
    return this.httpClient.get<any>(`${this.APIADMINENDPOINT}/reporte/exportar-xlsx`, { headers:headers ,observe: 'response', responseType: 'blob' as 'json'});
  }

   crearReportePdf(request: TicketReportReq): Observable<any> {    
    const headers = new HttpHeaders()
      .set('estado',  request.estado == null ? '':request.estado)
      .set('idTipo',  request.idTipo == null ? '':request.idTipo .toString())
      .set('idCategoria',  request.idCategoria == null ? '':  request.idCategoria.toString())
      .set('idTicket',  request.idTicket == null ? '':  request.idTicket.toString())
      .set('fechaInicio',  request.fechaInicio == null ? '': request.fechaInicio  )
      .set('fechaFin',  request.fechaFin  == null ? '': request.fechaFin)
      .set('idUsuario',  request.idUsuario == null ? '':  request.idUsuario.toString());     
     return this.httpClient.get<any>(`${this.APIADMINENDPOINT}/reporte/exportar-pdf`,  { headers:headers ,observe: 'response', responseType: 'blob' as 'json'});
   }

  // crearReportePdf(request: TicketReportReq) {
  //   return this.httpClient.post<any>(`${this.APIADMINENDPOINT}/reporte/exportar-pdf`,request);
  // }

  busquedaReporte(request: TicketReportReq): Observable<any> {
    return this.httpClient.post<any>(`${this.APIADMINENDPOINT}/reporte/listado`,request);
  }

  listarEstados(): Observable<any>{
    return this.httpClient.get<any>(`${this.APIADMINENDPOINT}/reporte/listar/estados`);
  }
}
