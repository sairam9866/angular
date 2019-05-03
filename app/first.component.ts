import {Component} from "@angular/core";
 


@Component({
    selector:'first-cmp',
    template:'<h1> {{fullname}} </h1>'
})
export class FirstComponent 
{
     firstName:string;
     lastname:string;
     fullName:string;

     constructor()
     {
        this.firstName="sairam";
        this.lastname="singaram";
        this.fullName = this.firstName + this.lastname;

     }
}


