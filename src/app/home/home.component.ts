import { Component, OnInit } from '@angular/core';
import {CarserviceService} from '../carservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[CarserviceService]
})
export class HomeComponent implements OnInit {

  result:string;
  constructor(obj:CarserviceService)
   {
     this.result=  obj.Addnums(45,67);
    }

  ngOnInit(): void {
  }

}
