import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  technologies:string[]  = ['HTML','CSS','Angular','Angular 5','Python','Spring Boot','Micro Services','Jdk1.5/1.6/1.7/1.8'];
  headings:string[]  = ["Animals",'Stationary','Gadgets Items'];
    childdata:string[][]  = [
      ["BlackMamba",'Eagle','Viper','Lepord'],
      ["Compas",'Protractor','SetSquare','Lepord'],
      ["Iphone",'Cromton','BOSS','Sony']]
         
    receiveItem(data,childcount){
       this.childdata[childcount].push(data);
    }
}
