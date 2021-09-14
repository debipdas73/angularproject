import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardServiceService {

  private _registerUrl="";
  private _loginUrl="";
  constructor(private http : HttpClient, private _router:Router) { }
// 
// authenticate(username: string, password: string){

//   if(username==="user1" && password==="password"){
//     sessionStorage.setItem('username',username)
//     return true;

//   }else{
//     return false;
//   }
// }
// isuserLoggedIn(){
//   let user=sessionStorage.getItem('username')
//   console.log(!user===null)
//   return !(user===null)
// }

// logout(){
//   sessionStorage.removeItem('username')
// }
// registerUser(user){
//   return this.http.post<any>(this._registerUrl, user)
// }
// loginUser(user){
//   return this.http.post<any>(this._loginUrl, user)
// }
registerUser(user: any){
return this.http.post<any>(this._registerUrl,user)
}
loginUser(user: any){
  return this.http.post<any>(this._loginUrl,user)
}
logoutUser(){
 // return !!
 localStorage.getItem('token')
this._router.navigate(['/login'])
}
getToken(){
  return localStorage.getItem('token')
}


}
