import { Injectable } from '@angular/core'
import { HttpClient , HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable' 

@Injectable()
export class ContactoService{
    constructor(public _http:HttpClient){
    }
    postTrabajador(trabajador:any):Observable<any>{
        let json = "json=" + JSON.stringify(trabajador)
        let headers = new HttpHeaders().set("Content-Type","aplication/json")//.set('Access-Control-Allow-Origin',"origin-list")
        
        return this._http.post("https://reqres.in/api/users",json,{headers:headers})
    }
}