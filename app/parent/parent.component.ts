import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  result:any;
  constructor() { }

  ngOnInit() {
  }

ListenToNotify(msg:string)
{
  alert(msg);
}

  generateRandomNo()
  {
    this.result=Math.random();
    //return Math.random();
    
  }
}
