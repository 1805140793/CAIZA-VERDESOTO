import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CAIZA-VERDESOTO';

  // constructor(){}
  sumar(){
    @Input() valor1?:string;
    @Input() valor2?:string;
    // let valor1="";
    // let valor2="";
    let digitosTomados=-1;
    let subvalor1:number;
    let subvalor2:number;
    let subTotal1:number;
    let subTotal2:number;
    let auxsubTotal1;
    let auxsubTotal2;

    subvalor1=Number()
  }
}

