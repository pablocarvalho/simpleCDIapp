import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    @ViewChild('meuCanvas', { static: true } ) elemento: ElementRef;

    ngOnInit(): void{
        const chart = new Chart(this.elemento.nativeElement, {
            type: 'line',
            data: {
                labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
                datasets: [
                    {
                        data: [85, 73, 86, 81, 84, 86, 94, 60, 62, 65, 41, 58]
                    }
                ]
            }

    });
  }

  shuffle(array: Array<number>, maxValue: number ): Array<number> {

    for (let i = 0; i < array.length; i++) {
        array[i] = Math.floor(Math.random() * (maxValue + 1));
     }

    return array;
  }



  onClickMe(): void {
    // const target = evt.target
    let a: number[] = new Array(12);
    a = this.shuffle(a, 100);

    const chart = new Chart(this.elemento.nativeElement, {
        type: 'line',
        data: {
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            datasets: [
                {
                    data: a
                }
            ]
        }

});
  }

  resetChart(): void {
    // const target = evt.target
    const chart = new Chart(this.elemento.nativeElement, {
        type: 'line',
        data: {
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            datasets: [
                {
                    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }
            ]
        }

});
  }
}
