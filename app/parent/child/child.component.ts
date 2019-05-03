import { Component, OnInit,Input,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() title:string="I am the child component";

  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  triggerEvent()
  {
    this.notify.emit(new Date().getTime().toString());
  }

}
