import {Component, Input, OnInit} from '@angular/core';
import {CarserviceService} from '../carservice.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[CarserviceService]
})
export class RegisterComponent  implements OnInit {

name:string="";
gender?:string;
dob?:string;
email?:string="";
country?:string;
constructor(private obj:CarserviceService) {
}
ngOnInit() {
}

  showName(event:any){
  this.name=event.target.value;
}
print(){
  this.name=(document.getElementById("name") as HTMLInputElement).value;
  if ((document.getElementById('male') as HTMLInputElement).checked) {
    this.gender = (document.getElementById('male') as HTMLInputElement).value;
  }
  if ((document.getElementById('female') as HTMLInputElement).checked) {
    this.gender = (document.getElementById('female') as HTMLInputElement).value;
  }
  this.dob=(document.getElementById("dob") as HTMLInputElement).value.toString();
  this.email=(document.getElementById("email") as HTMLInputElement).value;
  this.country=(document.getElementById("nationality") as HTMLInputElement).value;
}
  response:string="";
  AddUser(user: any) {
    console.log(user);
    this.obj.AddUser(user).subscribe(res=>this.response=res);
  }
}
