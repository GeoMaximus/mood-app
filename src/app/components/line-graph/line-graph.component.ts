import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.css']
})
export class LineGraphComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const myChart = new Chart("line-graph", {
      type: 'line',
      data: {
        labels: ['Bad', 'Low', 'Good', 'Very good', 'Amazing', 'Perfect'],
        datasets: [{
          label: '# of Votes',
          data: [47, 17, 57, 37, 17, 27],
          backgroundColor: [ 'rgba(12, 26, 156, 0.2)'
          ],
          borderColor: [
            'rgb(136, 143, 215)'
          ],
          borderWidth: 3
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

}
