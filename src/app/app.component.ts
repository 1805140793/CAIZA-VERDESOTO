import { Component, Input, OnInit } from '@angular/core';


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

  // constructor(){}
  sumar(){
    let resultado=<HTMLInputElement>document.getElementById("txtresultado");
    // let proceso=<HTMLInputElement>document.getElementById("process");

    // let valor2="";
    let digitosTomados=-1;
    let subvalor1:string;
    let subvalor2:string;
    let subTotal1:number;
    let subTotal2:number;
    let auxsubTotal1;
    let auxsubTotal2;
    let aux;
    let impresion = "";
    console.log(this.valor1);
    aux=Number(this.valor1).toString().length;
    aux=aux*-1;
    console.log(this.valor1);
    // while (digitosTomados>=aux) {
    subvalor1 = Number(this.valor1).toString().substr(digitosTomados, 1);
    console.log(subvalor1 + "hola");
    subvalor2 = Number(this.valor2).toString().substr(digitosTomados, 1);
    console.log(subvalor2);
    subTotal1 = (Number(subvalor1) + Number(subvalor2));
    console.log(subTotal1);
      if (subTotal1>9) {
        auxsubTotal1=subTotal1.toString().substr(-2,1)
      }else{
        auxsubTotal1=0;
      }
      digitosTomados=digitosTomados -1;
    this.impresion += auxsubTotal1.toString().substr(-1, 1);
    console.log(this.impresion);
      while (aux <= digitosTomados) {
        console.log('Holaaaaaaaaaaa');
        subvalor1 = Number(this.valor1).toString().substr(digitosTomados, 1);
        if (Number(this.valor2).toString().substr(digitosTomados, 1) == '') {
          subvalor2 = '0';
        } else {
          subvalor2 = Number(this.valor2).toString().substr(digitosTomados, 1);
        }
        if (auxsubTotal1 > 0) {
          subvalor2 = subvalor2 + auxsubTotal1;
        } else {
          subvalor2 = subvalor2;
        }
        subTotal1 = Number(subvalor1) + Number(subvalor2);
        if (subTotal1 > 9) {
          auxsubTotal1 = subTotal1.toString().substr(-2, 1);
        } else {
          auxsubTotal1 = 0;
        }
        digitosTomados = digitosTomados - 1;
        // this.impresion += subTotal1.toString().substr(-1, 1);
        this.impresion += auxsubTotal1.toString().substr(-1, 1);
      }

      // this.impresion += subvalor1 + " + " + subvalor2 + " = " + auxsubTotal1;
      console.log(auxsubTotal1);
      console.log(this.impresion);
    // }
    //proceso.value = this.impresion

  }
}


