import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CAIZA-VERDESOTO';

  @Input() valor1?: string;
  @Input() valor2: string = '';
  @Input() resolucion: string = '';

  impresion = '';

  // constructor(){}
  PadLeft(value: string, longitud: number): string {
    return value.toString().length < longitud
      ? this.PadLeft('0' + value, longitud)
      : value;
  }
  sumar() {
    let resultado = <HTMLInputElement>document.getElementById('txtresultado');
    let digitosTomados = -1;
    let subvalor1: number;
    let subvalor2: number;
    let subTotal1: number;
    let subTotal2: number;
    let auxsubTotal1: number;
    let auxsubTotal2: number;
    let aux: number;
    let impresion: string[] = [];
    let resp = '';
    aux = Number(this.valor1).toString().length;
    aux = aux * -1;
    if (
      Number(this.valor1).toString().length >
      Number(this.valor2).toString().length
    ) {
      this.valor2 = this.PadLeft(
        this.valor2,
        Number(this.valor1).toString().length
      );
    }
    subvalor1 = Number(
      Number(this.valor1).toString().substr(digitosTomados, 1)
    );
    subvalor2 = Number(
      Number(this.valor2).toString().substr(digitosTomados, 1)
    );
    subTotal1 = Number(subvalor1) + Number(subvalor2);

    if (subTotal1 > 9) {
      auxsubTotal1 = Number(subTotal1.toString().substr(-2, 1));
    } else {
      auxsubTotal1 = 0;
    }
    digitosTomados = digitosTomados - 1;
    auxsubTotal2 = Number(subTotal1.toString().substr(-1, 1));
    impresion.push(auxsubTotal2.toString());
    while (aux <= digitosTomados) {
      subvalor1 = Number(
        Number(this.valor1).toString().substr(digitosTomados, 1)
      );
      console.log('Haber');
      console.log(this.valor2.toString());
      if (Number(this.valor2).toString().substr(digitosTomados, 1) == '0') {
        subvalor2 = 0;
      } else {
        subvalor2 = Number(this.valor2.toString().substr(digitosTomados, 1));
      }
      if (auxsubTotal1 > 0) {
        subvalor2 = Number(
          (Number(subvalor2) + Number(auxsubTotal1)).toString()
        );
      } else {
        subvalor2 = subvalor2;
      }
      subTotal1 = Number(subvalor1) + Number(subvalor2);
      impresion.push(subTotal1.toString().substr(-1, 1));
      if (subTotal1 > 9) {
        auxsubTotal1 = Number(subTotal1.toString().substr(-2, 1));
      } else {
        auxsubTotal1 = 0;
      }
      digitosTomados = digitosTomados - 1;
    }

    resp = impresion.toString();
    this.resolucion = this.reverseString(resp);
  }

  restar() {

    let resultado = <HTMLInputElement>document.getElementById('txtresultado');
    let digitosTomados = -1;
    let subvalor1: number;
    let subvalor2: number;
    let subTotal1: number;
    let subTotal2: number;
    let auxsubTotal1: number;
    let auxsubTotal2: number;
    let aux: number;
    let impresion: string[] = [];
    let resp = '';
    aux = Number(this.valor1).toString().length;
    aux = aux * -1;
    if (
      Number(this.valor1).toString().length >
      Number(this.valor2).toString().length
    ) {
      this.valor2 = this.PadLeft(
        this.valor2,
        Number(this.valor1).toString().length
      );
    }

    if (
      Number(this.valor2).toString().substr(digitosTomados, 1) >
      Number(this.valor1).toString().substr(digitosTomados, 1)
    ) {
      subvalor1 = Number(Number(this.valor1).toString().substr(digitosTomados, 1))+10;
      console.log("Sumado 10: -->" + subvalor1);
    } else {
      subvalor1 = Number(
        Number(this.valor1).toString().substr(digitosTomados, 1)
      );
      console.log('No Sumado 10: -->' + subvalor1);
    }
    subvalor2 = Number(
      Number(this.valor2).toString().substr(digitosTomados, 1)
    );
    subTotal1 = Number(subvalor1) - Number(subvalor2);

    if (subvalor1 > 9) {
      auxsubTotal1 = Number(subvalor1.toString().substr(-2, 1));
    } else {
      auxsubTotal1 = 0;
    }
    console.log('Inicio');
    console.log(auxsubTotal1);
    console.log(subvalor1);
          console.log(subvalor2);
          console.log('******');
    digitosTomados = digitosTomados - 1;
    auxsubTotal2 = Number(subTotal1.toString().substr(-1, 1));
    impresion.push(auxsubTotal2.toString());
    while (aux <= digitosTomados) {
      if (
        Number(this.valor2).toString().substr(digitosTomados, 1) >
        Number(this.valor1).toString().substr(digitosTomados, 1)
      ) {
        subvalor1 =
          Number(Number(this.valor1).toString().substr(digitosTomados, 1)) + 10;
      } else {
        subvalor1 = Number(
          Number(this.valor1).toString().substr(digitosTomados, 1)
        );
      }
      subvalor2 = Number(this.valor2.toString().substr(digitosTomados, 1));
      console.log(subvalor1);
      console.log(subvalor2);
      console.log("******");
      if (auxsubTotal1 > 0) {
        subvalor2 = Number(
          (Number(subvalor2) + Number(auxsubTotal1)).toString()
        );
      } else {
        subvalor2 = subvalor2;
      }
      // console.log(subvalor1);
      // console.log(subvalor2);
      subTotal1 = Number(subvalor1) - Number(subvalor2);
      // console.log(subTotal1);
      impresion.push(subTotal1.toString().substr(-1, 1));
      if (subvalor1 > 9) {
        auxsubTotal1 = Number(subvalor1.toString().substr(-2, 1));
      } else {
        auxsubTotal1 = 0;
      }
      // console.log(subvalor1);
      // console.log(auxsubTotal1);
      // console.log(subvalor2);
      digitosTomados = digitosTomados - 1;
    }

    resp = impresion.toString();
    this.resolucion = this.reverseString(resp);
  }

  reverseString(str: string) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(','); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(''); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

    //Step 4. Return the reversed string
    return joinArray; // "olleh"
  }
}
