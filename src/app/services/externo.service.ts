import { Injectable } from '@angular/core'
import { HttpClient , HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable' 

@Injectable()
export class ExternoService{
    constructor(public _http:HttpClient){
    }
    getUsers1():Observable<any>{
        return this._http.get("https://reqres.in/api/users?page=1")
    }
    getUsers2():Observable<any>{
        return this._http.get("https://reqres.in/api/users?page=2")
    }
}