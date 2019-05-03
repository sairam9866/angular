import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  firstName:string="sairam";
  lastName:string="SINGARAM";
  myNum:number=0.1415927;
  today = new Date();
  a:number=3.56;

  x:string="hello world i am sairam";
}
