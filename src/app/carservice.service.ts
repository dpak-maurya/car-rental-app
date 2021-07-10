import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})

export class CarserviceService {
  constructor(private obj:HttpClient) {}
  CarLists:any =
[
{CarId :"c001", CarName : "Maruthi Swift", Brand:"Maruthi", FuelType:"Petrol",  Price:2000, Description:"Made in india",cimage:"assets/cars/maruti_swift.jpg"},
{CarId :"c002", CarName : "Benz", Brand:"Maruthi", FuelType:"Petrol", Price:5000, Description:"Made in india" ,cimage:"assets/cars/bmw_i8.jpg"},
{CarId :"c003", CarName : "Honda", Brand:"Maruthi", FuelType:"Petrol",Price:2000, Description:"Made in india" ,cimage:"assets/cars/honda_amaze.jpg"},
{CarId :"c004", CarName : "TATA", Brand:"Maruthi", FuelType:"Petrol", Price:1000, Description:"Made in india" ,cimage:"assets/cars/tata_hexa.jpg"},
{CarId :"c005", CarName : "Audi", Brand:"Maruthi", FuelType:"Petrol", Price:12000, Description:"Made in india" ,cimage:"assets/cars/bmw_i8.jpg"},

];
  Addnums(a: number, b: number) {
    return 'the sum is ' + (a + b);
  }

  DisplayAllCars():Observable<any>{
    return this.obj.get("https://localhost:44323/api/values");
  }
  
  AddUser(user:any):Observable<any>{
    return this.obj.post("https://localhost:44323/api/users/add",user);
  }

}
