import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarserviceService } from '../carservice.service';

@Component({
  selector: 'app-rentcars',
  templateUrl: './rentcars.component.html',
  styleUrls: ['./rentcars.component.css'],
  providers: [CarserviceService],
})
export class RentcarsComponent implements OnInit {
  selectedCar: any;
  constructor(
    private q: ActivatedRoute,
    private obj: CarserviceService,
    r: Router
  ) {}

  cid?: number;
  cname: any;
  cprice: any;

  ngOnInit(): void {
    this.q.queryParams.subscribe((c) => {
      this.cid = parseInt(c['cid']);
      this.cname = c['cname'];
      this.cprice = c['cprice'];
    });
  }
  diffDay?: number;
  totalcost?: number;
  day1: any;
  day2: any;
  response:string="";
  BookCar(dates: any) {
    var date1 = new Date(dates['day1']);
    var date2 = new Date(dates['day2']);
    console.log(date1, date2);
    var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    this.diffDay = Math.abs((date2.getTime() - date1.getTime()) / oneDay);
    this.totalcost = this.diffDay * this.cprice;
    let userid = sessionStorage.getItem('uid');
    
    let bk = {
      Userid: userid,
      Carid: this.cid,
      Bookingdate: new Date(Date.now()),
      Fromdate: date1,
      Todate: date2,
      TotalPrice: this.totalcost,
      Status: 1,
    };
      console.log(bk);
    this.obj.AddBooking(bk).subscribe((res) => (this.response = res));
  }
}
