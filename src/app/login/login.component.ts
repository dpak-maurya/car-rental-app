import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBell, faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from '../login.service';
import {CarserviceService} from "../carservice.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService,CarserviceService]
})
export class LoginComponent implements OnInit {
  bell: any;
  lock: any;

  usericon: any;

  constructor(private r: Router,private l:LoginService,private obj:CarserviceService) {
    this.lock = faLock;
    this.usericon = faUser;
  }
  alluser:any;
  ngOnInit(): void {
    this.obj.AllUser().subscribe(res=>this.alluser=res);
  }

  result: any;

  ValidateUser(user:any) {
    
    let isValid:Boolean=false;
    for(let i=0;i<this.alluser.length;i++){
      let u=this.alluser[i];
      if (user['uid'] === u['Userid'] && user['pwd']=== u['Password']) {
        sessionStorage.setItem("uid",user['uid']);
        console.log(u['Userid'])
        isValid=true;
        // location.reload();
        break;
      }
    }
    if(isValid){
      this.r.navigate(['View']);
    }
    else {
      this.result = 'InValid user';
    }
  }
}
