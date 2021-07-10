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

  ngOnInit(): void {}

  result: any;
  alluser:any;
  ValidateUser(user:any) {
    this.obj.AllUser().subscribe(res=>this.alluser=res);
    this.alluser.for((u:any)=>{
      if (user['uid'] == u['Userid'] && user['pwd']== u['Password']) {
        sessionStorage.setItem("uid",user['uid']);
        // location.reload();
        this.r.navigate(['View']);
      } else {
        this.result = 'InValid user';
      }
    })

  }
}
