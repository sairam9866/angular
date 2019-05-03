import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './first.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { SortingPipe } from './sorting.pipe';
import { CapitalizePipe } from './capitalize.pipe';
import { SwitchComponent } from './switch/switch.component';
import { JqueryDemoComponent } from './jquery-demo/jquery-demo.component';

@NgModule({
  declarations: [
    
    AppComponent,FirstComponent, ParentComponent, ChildComponent, SortingPipe, CapitalizePipe, SwitchComponent, JqueryDemoComponent, 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
