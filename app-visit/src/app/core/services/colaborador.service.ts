import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { ColaboradorActualizarRequest, ColaboradorRequest } from '../data/model/request/colaboradorRegisterReq';
import { Observable } from 'rxjs';
import { ColaboradorModelResponse } from '../data/model/response/colaborador.model';


@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {
  headers: Headers;
  private APIADMINENDPOINT: string = environment.urlApiService;

  constructor(private httpClient: HttpClient) { 
    this.headers = new Headers({ 'Content-Type': 'application/json'});
  }

  registrarColab(request: ColaboradorRequest): Observable<ColaboradorModelResponse> {
    return this.httpClient.post<ColaboradorModelResponse>(`${this.APIADMINENDPOINT}/colaborador/registrar`, request);
  }

  listarColab(): Observable<ColaboradorModelResponse> {
    return this.httpClient.get<ColaboradorModelResponse>(`${this.APIADMINENDPOINT}/colaborador/listar`);
  }

  obtenerColab(colaboradorId: number, usuarioId: number): Observable<ColaboradorModelResponse> {
   return this.httpClient.get<ColaboradorModelResponse>(`${this.APIADMINENDPOINT}/colaborador/obtener/` + colaboradorId + '/' + usuarioId);
  }

  actualizarColab(request: ColaboradorActualizarRequest): Observable<ColaboradorModelResponse> {
    return this.httpClient.post<ColaboradorModelResponse>(`${this.APIADMINENDPOINT}/colaborador/actualizar`, request);
  }

  deshabilitarColab(request: number): Observable<ColaboradorModelResponse> {
    return this.httpClient.post<ColaboradorModelResponse>(`${this.APIADMINENDPOINT}/colaborador/deshabilitar/` + request, {});
  }

}
