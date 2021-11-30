import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Hello!';


  num:number  =0;
  num1:number =0;


  arf:number = 0;
  geom:number =0;

  math(){
    this.arf = ((Number(this.num) * Number(this.num))  + (Number( this.num1) * Number(this.num1)))/2;
    this.geom = Math.cbrt((this.num * this.num) * (this.num1 * this.num1));


  }
}
