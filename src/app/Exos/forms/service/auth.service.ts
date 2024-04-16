import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth: boolean = false;
  constructor() { }

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === '12345678') {
      return this.isAuth = true;
    } else {
      return this.isAuth;
    }
  }

}
