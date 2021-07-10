import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  IsLoggedin:boolean;
  constructor() {
    this.IsLoggedin=false;
   }
}
