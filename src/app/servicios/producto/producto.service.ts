import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Producto } from 'src/app/modelos/producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private UrlString="http://localhost:8080/producto/"

  constructor(private httpClient:HttpClient) { }

  getProducto(name:string, httpHeaders:HttpHeaders): Observable<Producto[]>{
    return this.httpClient.get<Producto[]>(`${this.UrlString+"getProducto/"}${name}`, {headers:httpHeaders});
  }
}
