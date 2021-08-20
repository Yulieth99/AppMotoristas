import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private httpClient:HttpClient){ }

  listarProductos():Observable<any>{
    return this.httpClient.get(`${base_url}/api/productos`,{})    
    }

  obtenerDetalleProducto(idProducto:string):Observable<any>{
    return this.httpClient.get(`${base_url}/api/productos/${idProducto}`,{})    
    }

  obtenerProductosCategoria(idCategoria:string):Observable<any>{
    return this.httpClient.get(`${base_url}/api/productos/categoria/${idCategoria}`,{})    
    }

  nuevoProducto(formData: FormData):Observable<any>{    
  return this.httpClient.post(`${base_url}/api/productos`,formData)    
    
  }
    
    
  editarProducto(idProducto:string, data:FormData):Observable<any>{
    return this.httpClient.put(`${base_url}/api/productos/${idProducto}`,data)    
    }
    
  eliminarProducto(idProducto:string):Observable<any>{
    return this.httpClient.delete(`${base_url}/api/productos/${idProducto}`,{})    
    }
    
  
}
