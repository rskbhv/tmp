import { Component, OnInit, Input,Output, EventEmitter,DoCheck } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, DoCheck {
 info1:string = 'Child Component';
 unit:string = "unit1";
@Input('title') info:string;
@Input('items') items:string[];
@Output('send') emitData:EventEmitter<string> = new EventEmitter<string>();
current:string;

  constructor() { 
    console.log('construcotr '+this.info);
  }

  ngOnInit() {
    console.log('ngOnInit '+this.info);
  }
  ngOnChanges() {
    console.log(' Input Changed ');
  }
  ngDoCheck() {
    console.log('Change in Instance member ');
  }

  chanageColor(){
    if(this.unit=='unit1')
      this.unit = "unit"
    else
      this.unit='unit1';
  }
  addItem(){
 this.emitData.emit(this.current);
  }
}
