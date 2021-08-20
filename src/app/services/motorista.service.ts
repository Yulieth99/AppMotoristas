import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class MotoristaService {

  constructor(private httpClient:HttpClient){ }

  tomarOrden(idMotorista:string,idOrden:string):Observable<any>{
    return this.httpClient.put(`${base_url}/api/motoristas/${idMotorista}/nuevaOrden/${idOrden}`,{})    
    }

  registroMotorista(formData:FormData):Observable<any>{
    return this.httpClient.post(`${base_url}/api/motoristas/`,formData)    
    }
    
  
}
