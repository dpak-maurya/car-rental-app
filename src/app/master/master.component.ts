import { Component, OnInit } from '@angular/core';

import {faHome,faSignInAlt,faCar,faSignOutAlt,faInfo} from '@fortawesome/free-solid-svg-icons';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css'],
  providers:[LoginService]
})
export class MasterComponent implements OnInit {

  constructor(private l:LoginService) {

   }
  IsLogged:boolean=sessionStorage.getItem("uid") != null;
  home:any=faHome;
  signing:any=faSignInAlt;
  car:any=faCar;
  register:any=faSignOutAlt;
  contact:any=faInfo;

  ngOnInit(): void {
}
}
