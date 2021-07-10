import { Component, OnInit } from '@angular/core';
import { CarserviceService } from '../carservice.service';
import {faRupeeSign} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-viewcars',
  templateUrl: './viewcars.component.html',
  styleUrls: ['./viewcars.component.css'],
  providers:[CarserviceService]
})
export class ViewcarsComponent implements OnInit {
  CarLists:any;
  rupee:any=faRupeeSign;
  constructor(private obj:CarserviceService) {
  }
  ngOnInit(): void {
    this.obj.DisplayAllCars().subscribe(result=>this.CarLists=result);
  }
show?:boolean=true;
showCars(){
  this.show=!this.show;
  var cars=document.getElementsByClassName("car-image");
  for(var i=0;i<cars.length;i++){
    (cars[i] as HTMLInputElement).style.display=this.show?'block':'none';
  }
}

}
