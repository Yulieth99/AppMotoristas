import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {

  constructor(private httpClient:HttpClient){ }

  obtenerOrdenesDia(fecha:string):Observable<any>{
    return this.httpClient.get(`${base_url}/api/ordenes/fecha/${fecha}`,{})    
    }

  obtenerDetalleOrden(idOrden:string):Observable<any>{
    return this.httpClient.get(`${base_url}/api/ordenes/${idOrden}`,{})    
    }

  

    
    
    editarOrden(idOrden:string, data:FormData):Observable<any>{
    return this.httpClient.put(`${base_url}/api/ordenes/${idOrden}`,data)    
    }
    
  eliminarProducto(idOrden:string):Observable<any>{
    return this.httpClient.delete(`${base_url}/api/productos/${idOrden}`,{})    
    }
    
  
}
