import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { Observable, of } from 'rxjs';


const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient: HttpClient) { }

  crearUsuario(formData:FormData) {
    const headers = new HttpHeaders( {'Content-Type':'application/json'} );
    return this.httpClient.post(`${base_url}/auth/registro`, formData, {headers:headers})
            .pipe(
              tap( (res:any) => {
                localStorage.setItem('token',res.token);
              })
            );
  }

  ingresar(formData:FormData) {
    const headers = new HttpHeaders( {'Content-Type':'application/json'} );
    return this.httpClient.post(`${base_url}/auth/ingreso`, formData, {headers:headers})
            .pipe(
              tap( (res:any) => {
                localStorage.setItem('token',res.token);
              })
            );
  }

  validarToken(): Observable<boolean> {
    const token = localStorage.getItem('token') || '';

    return this.httpClient.get(`${base_url}/auth/renew`, {
      headers: {
        'x-token':token
      }
    }).pipe(
      tap((res:any) => {
        localStorage.setItem('token',res.token);
      }),
      map(res => true),
      catchError(error => of(false))
    );
  }
}
