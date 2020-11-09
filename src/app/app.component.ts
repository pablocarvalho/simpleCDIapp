import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    minDate: Date;
    maxDate: Date;
    constructor() {
        // Set the minimum to January 1st 20 years in the past and December 31st a year in the future.
        const currentYear = new Date().getFullYear();
        this.minDate = new Date(currentYear - 20, 0, 1);
        this.maxDate = new Date(currentYear + 1, 11, 31);
    }


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

    inputStartEvent(event: any): void{
        console.log(event.value);
    }
    changeStartEvent(event: any): void{
        console.log(event.value);
    }

    inputEndEvent(event: any): void{
        console.log(event.value);
    }
    changeEndEvent(event: any): void{
        console.log(event.value);
    }

}


