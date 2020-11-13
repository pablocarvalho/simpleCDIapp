import { query } from '@angular/animations';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import { stringify } from 'querystring';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    minDate: Date;
    maxDate: Date;
    startDate: Date;
    endDate: Date;

    constructor(private dataService: DataService) {
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

  plotData(originData: any): void {

    const grlabels = originData.map(function(e) {
        return e.date;
     });
    const grdata = originData.map(function(e) {
        return e.unitPrice;
     });


    const chart = new Chart(this.elemento.nativeElement, {
        type: 'line',
        data: {
            labels: grlabels,
            datasets: [
                {
                    data: grdata
                }
            ]
        }

});
  }

    inputStartEvent(event: any): void{
        this.startDate = event.value;
        console.log(event.value);
    }
    changeStartEvent(event: any): void{
        this.startDate = event.value;
        console.log(event.value);
    }

    inputEndEvent(event: any): void{
        this.endDate = event.value;
        console.log(event.value);
    }
    changeEndEvent(event: any): void{
        this.endDate = event.value;
        console.log(event.value);
    }
    isNumeric(candidate: string): boolean{

        let decimal: number;
        decimal = parseFloat(candidate);
        if (isNaN(decimal)){
            console.log('false ' + decimal.toString );
            return false;
        }
        console.log('true ' + parseFloat(candidate) );
        return true;
    }

    sendRequest(cdbValue: string): void{

        console.log(this.startDate);
        console.log(this.endDate);
        console.log(cdbValue);

        const request = {
            investmentDate : this.startDate.getFullYear() + '-' + (this.startDate.getMonth() + 1) + '-' + this.startDate.getDate(),
            cdbRate : cdbValue,
            currentDate : this.endDate.getFullYear() + '-' + (this.endDate.getMonth() + 1) + '-' + this.endDate.getDate(),
        };

        this.dataService.query(request).subscribe(
            data => {
                console.log(data);
                this.plotData(data);
            },
            () =>  {
                return console.log('answer received');
            });

        console.log(request);

        parseFloat(cdbValue);

    }

}


