import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBell, faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {
  bell: any;
  lock: any;
  user: any;

  constructor(private r: Router,private l:LoginService) {
    this.lock = faLock;
    this.user = faUser;
  }

  ngOnInit(): void {}

  result: any;
  Validateuser() {
    var uid = (document.getElementById('uid') as HTMLInputElement).value;

    var pwd = (document.getElementById('pwd') as HTMLInputElement).value;

    if (uid == 'admin' && pwd == 'india') {
      sessionStorage.setItem("uid",uid);
      location.reload();
      this.r.navigate(['View']);
    } else {
      this.result = 'InValid user';
    }
  }
}
