import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    @ViewChild("meuCanvas", { static: true } ) elemento: ElementRef;
    
    ngOnInit(){
        new Chart(this.elemento.nativeElement,{
            type: 'line',
            data:{
                labels: ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],
                datasets:[
                    {
                        data:[85,73,86,81,84,86,94,60,62,65,41,58]
                    }
                ]
            }

    });
  }

  onClickMe() {
    // const target = evt.target    
    new Chart(this.elemento.nativeElement,{
        type: 'line',
        data:{
            labels: ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],
            datasets:[
                {
                    data:[0,0,0,0,0,0,0,0,0,0,0,0]
                }
            ]
        }

});
  }
}
