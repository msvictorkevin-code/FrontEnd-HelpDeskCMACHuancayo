import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequisicionService {

  private APIADMINENDPOINT: string = environment.urlApiService;

  constructor(private httpClient: HttpClient) { }

  listarCategoria(): Observable<any> {
    return this.httpClient.get<any>(`${this.APIADMINENDPOINT}/tipo/requisicion/listar` );
  }
  
}
