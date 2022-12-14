import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Cliente } from '../modelos/cliente';
import { ResponseCliente } from '../modelos/response-cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private UrlClient:string; 

  private httpHeaders:HttpHeaders;

  constructor(private http: HttpClient) {
    this.UrlClient="http://localhost:8080/cliente/";
    this.httpHeaders=new HttpHeaders({"Content-Type":"application/json"});
   }

   getClientes():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.UrlClient+"listar");
   }

   create(cliente:Cliente):Observable<ResponseCliente>{
      return this.http.post<ResponseCliente>(this.UrlClient+"save", cliente, {headers:this.httpHeaders});
   }
}
