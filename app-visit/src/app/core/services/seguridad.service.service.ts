import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { UsuarioModelResponse } from '../data/model/response/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class SeguridadServiceService {
  
  private APIADMINENDPOINT: string = environment.urlApiService;

  constructor(private httpClient: HttpClient) { }

  validarCredenciales(usuario: string, clave: string) {
    //return this.httpClient.post<UsuarioModelResponse>(`${this.APIADMINENDPOINT}/clientefoss/cliente/`, { username: usuario, password: clave });
    return this.httpClient.get<UsuarioModelResponse>('../../../assets/data/jsonLoginReponse.json');
    //{ username: usuario, password: clave }
  }

  
}
