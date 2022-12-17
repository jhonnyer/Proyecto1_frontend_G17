import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ILogin } from 'src/app/modelos/ILogin';
import { IResponseLogin } from 'src/app/modelos/IResponse';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private UrlLogin:string="http://localhost:8080/auth/login"
  private httpHeaders= new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http:HttpClient) { }

  getLogin(usuario:ILogin):Observable<any> {
    return this.http.post<IResponseLogin>(this.UrlLogin, usuario, {headers:this.httpHeaders}).pipe(
      catchError(e=>{
        console.log(e);
        return throwError(e);
      })
    );
  }
}
