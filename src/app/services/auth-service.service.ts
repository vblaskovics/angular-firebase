import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private angularFireAuth:AngularFireAuth) { }

  signUp(email:string, password:string){
    return this.angularFireAuth.createUserWithEmailAndPassword(email, password);
  }

  login(email:string, password:string){
    return this.angularFireAuth.signInWithEmailAndPassword(email, password);
  }

  isLoggedIn(){
    return this.angularFireAuth.user;
  }
}
