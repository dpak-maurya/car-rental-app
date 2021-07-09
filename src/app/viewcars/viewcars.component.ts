import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewcars',
  templateUrl: './viewcars.component.html',
  styleUrls: ['./viewcars.component.css']
})
export class ViewcarsComponent  {

  constructor() { }
  st:string[] = ['Manoj','Nirav','shivam'];
  d:boolean=true
CarLists:cardet[] =
[
{CarId :"c001", CarName : "Maruthi Swift", Brand:"Maruthi", FuelType:"Petrol",  Price:2000, Description:"Made in india",cimage:"assets/cars/maruti_swift.jpg"},
{CarId :"c002", CarName : "Benz", Brand:"Maruthi", FuelType:"Petrol", Price:5000, Description:"Made in india" ,cimage:"assets/cars/bmw_i8.jpg"},
{CarId :"c003", CarName : "Honda", Brand:"Maruthi", FuelType:"Petrol",Price:2000, Description:"Made in india" ,cimage:"assets/cars/honda_amaze.jpg"},
{CarId :"c004", CarName : "TATA", Brand:"Maruthi", FuelType:"Petrol", Price:1000, Description:"Made in india" ,cimage:"assets/cars/tata_hexa.jpg"},
{CarId :"c005", CarName : "Audi", Brand:"Maruthi", FuelType:"Petrol", Price:12000, Description:"Made in india" ,cimage:"assets/cars/bmw_i8.jpg"},

];

}
class cardet
{
  CarId:string=''
  CarName:string=''
  Brand:string=''
  FuelType:string=''
  Price?:number;
  Description:string=''
  cimage:string=''
}
