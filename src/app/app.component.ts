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
  proceso=<HTMLInputElement>document.getElementById("process");

  impresion= "";

  // constructor(){}
  sumar(){
    let resultado=<HTMLInputElement>document.getElementById("txtresultado");
    // let valor2="";
    let digitosTomados=-1;
    let subvalor1:string;
    let subvalor2:string;
    let subTotal1:number;
    let subTotal2:number;
    let auxsubTotal1;
    let auxsubTotal2;
    let aux;
    aux=Number(this.valor2).toString().length;
    aux=aux*-1;
    console.log(aux);
    // while (digitosTomados>=aux) {
      subvalor1=Number(this.valor1).toString().substr(digitosTomados,1);
      subvalor2=Number(this.valor2).toString().substr(digitosTomados,1);
      digitosTomados++;
      subTotal1=(Number(subvalor1)+ Number(subvalor2));
      if (subTotal1>9) {
        auxsubTotal1=subTotal1.toString().substr(-2,1)
      }else{
        auxsubTotal1=0;
      }

      this.impresion += subvalor1 + " + " + subvalor2 + " = " + auxsubTotal1;
      console.log(auxsubTotal1);
      console.log(this.impresion);
    // }
    this.proceso.value = this.impresion;

  }
}


