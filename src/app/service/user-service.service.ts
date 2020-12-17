import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }
  registerUser(body:{apellido:string,nombre:string,correo:string,contraseña:string,nomUsuario:string}):Observable<any>{
    return this.http.post<any>(`${environment.root_api}${environment.endpoints.create_user}`,body);
  }
  loginUser(body:{correo:string,contraseña:string}):Observable<any>{
    return this.http.post<any>(`${environment.root_api}${environment.endpoints.login_user}`,body);
  }
  validateUser(body:{token:string}):Observable<any>{
    return this.http.post<any>(`${environment.root_api}${environment.endpoints.validate_user}`,body);
  }

  changePassword(body:{correo:string}):Observable<any>{
    return this.http.post<any>(`${environment.root_api}${environment.endpoints.change_password}`,body);
  }

  changePassword2(body:{correo:string,contraseña:string}):Observable<any>{
    return this.http.put<any>(`${environment.root_api}${environment.endpoints.change_password}`,body)
  }

  saveElement(name:string,value:string){
    localStorage.setItem(name,value);
  }
  delElement(value){
    localStorage.removeItem(value)
  }
  getElement(value:string){
    const values=localStorage.getItem(value);
    return values;
  }
}
