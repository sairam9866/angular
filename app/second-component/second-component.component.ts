import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnInit {
  firstName:string;
  lastName:string;
  fullName:string;

  constructor() { 
this.firstName;
this.lastName;
  }

  ngOnInit() {
  }
getFullName():string{
this.fullName=this.firstName + this.lastName;
return this.fullName;
}

}
