import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  url = "https://gorest.co.in/public/v2/users"
  constructor(private http:HttpClient) { }
  users()
  {
    const header=new HttpHeaders({'Authorization':'Bearer 7dde72333be762bcb4e014087f525e0c30c7543630e70e40cef0aa66b98849d5'})
    return this.http.get(this.url, {headers:header});
  }
  saveUser(data:any){
          const header=new HttpHeaders({'Authorization':'Bearer 7dde72333be762bcb4e014087f525e0c30c7543630e70e40cef0aa66b98849d5'})
          return this.http.post(this.url,data,{headers:header})
  }
 deleteUser(id:number ){
    const header=new HttpHeaders({'Authorization':'Bearer 7dde72333be762bcb4e014087f525e0c30c7543630e70e40cef0aa66b98849d5'})
        return this.http.delete(this.url+'/'+id,{headers:header})
  }
}
