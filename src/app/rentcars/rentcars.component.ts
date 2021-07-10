import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarserviceService } from '../carservice.service';

@Component({
  selector: 'app-rentcars',
  templateUrl: './rentcars.component.html',
  styleUrls: ['./rentcars.component.css'],
  providers:[CarserviceService]
})
export class RentcarsComponent implements OnInit {
  selectedCar:any;
  cars:[];
  constructor(private q:ActivatedRoute,obj:CarserviceService,r:Router) {
    this.cars=obj.CarLists;
    if(sessionStorage.getItem('uid')==null){
      r.navigate(['Login']);
    }
   }

cid :any;
cname:any;
cprice:any;

  ngOnInit(): void {
    this.q.queryParams.subscribe(c=>  {

      this.cid = c['cid']; 
      this.cname=c['cname'];
      this.cprice=c['cprice'];
    });
    this.selectedCar=this.cars.filter(c=>c['CarId']===this.cid);
    console.log(this.selectedCar["CarName"]);
  }
  diffDay?:number;
  totalcost?:number;
  d:boolean=false;
  selectDay(){
    var day1=(document.getElementById("day1") as HTMLInputElement).value.toString();
    var day2=(document.getElementById("day2") as HTMLInputElement).value.toString();
    var date1=new Date(day1);
    var date2=new Date(day2);
    console.log(date1,date2);
    var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    this.diffDay = Math.abs((date2.getTime() - date1.getTime()) / (oneDay));
    this.totalcost=this.diffDay*this.cprice;
    this.d=true;
  }

}
