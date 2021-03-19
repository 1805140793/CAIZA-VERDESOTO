import { Component, Input, OnInit } from '@angular/core';
import * as bigInt from 'big-integer';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CAIZA-VERDESOTO';

  @Input() valor1?:string;
  @Input() valor2?:string;

  impresion= "";
  resultado=<HTMLInputElement>document.getElementById("txtresultado");


  // constructor(){}
  sumar(){
    // let proceso=<HTMLInputElement>document.getElementById("process");

    // let valor2="";
    let digitosTomados=-1;
    let subvalor1:number;
    let subvalor2:number;
    let subTotal1:number;
    let subTotal2:number;
    let auxsubTotal1:number;
    let auxsubTotal2:number;
    let aux:number;
    let impresion: string[]=[];
    let resp="";

    aux=Number(this.valor1).toString().length;
    aux=aux*-1;

    // while (digitosTomados>=aux) {
    subvalor1 = Number(Number(this.valor1).toString().substr(digitosTomados, 1));

    subvalor2 = Number(Number(this.valor2).toString().substr(digitosTomados, 1));

    subTotal1 = (Number(subvalor1) + Number(subvalor2));

      if (subTotal1>9) {
        auxsubTotal1 = Number(subTotal1.toString().substr(-2, 1));
      }else{
        auxsubTotal1=0;
      }
    digitosTomados = digitosTomados - 1;
    auxsubTotal2 = Number(subTotal1.toString().substr(-1, 1));
    impresion.push(auxsubTotal2.toString());
      while (aux <= digitosTomados) {
        subvalor1 = Number(Number(this.valor1).toString().substr(digitosTomados, 1));
        if (Number(this.valor2).toString().substr(digitosTomados, 1) == '') {
          subvalor2 = 0;
        } else {
          subvalor2 = Number(Number(this.valor2).toString().substr(digitosTomados, 1));
        }
        if (auxsubTotal1 > 0) {
          subvalor2 = Number((Number(subvalor2) + Number(auxsubTotal1)).toString());
        } else {
          subvalor2 = subvalor2;
        }
        subTotal1 = Number(subvalor1) + Number(subvalor2);
        if (subTotal1 > 9) {
          auxsubTotal1 = Number(subTotal1.toString().substr(-2, 1));
        } else {
          auxsubTotal1 = 0;
        }
        digitosTomados = digitosTomados - 1;
        // this.impresion += subTotal1.toString().substr(-1, 1);
        impresion.push(subTotal1.toString().substr(-1, 1));
        //console.log("FINAL" + this.impresion );
      }

      // this.impresion += subvalor1 + " + " + subvalor2 + " = " + auxsubTotal1;
      //console.log(auxsubTotal1);

      console.log(impresion.reverse());
    // }
    //resultado.value = impresion.reverse().toString();
  }
}


