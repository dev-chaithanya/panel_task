import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient) { }

  postEmployee(data: any){
    return this.http.post<any>("http://localhost:3000/employeData/", data)
  }

  getEmployee(){
    return this.http.get<any>("http://localhost:3000/employeData/")
  }

  postAdmin(data: any){
    return this.http.post<any>("http://localhost:3000/adminData/", data)
  }

  getAdmin(){
    return this.http.get<any>("http://localhost:3000/adminData/")
  }

  postSuperAdmin(data: any){
    return this.http.post<any>("http://localhost:3000/superAdminData/", data)
  }

  getSuperAdmin(){
    return this.http.get<any>("http://localhost:3000/superAdminData/")
  }
}
