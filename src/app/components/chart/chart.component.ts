import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    const myChart = new Chart("bar-chart", {
      type: 'bar',
      data: {
        labels: ['Bad', 'So and so', 'Good', 'Very good', 'Amazing', 'Perfect'],
        datasets: [{
          data: [7, 17, 57, 37, 17, 27],
          backgroundColor: [
            'rgba(12, 26, 156, 0.5)',
            'rgba(136, 143, 215, 0.5)',
            'rgba(12, 26, 156, 0.5)',
            'rgba(93, 100, 184, 0.5)',
            'rgba(12, 26, 156, 0.5)',
            'rgba(136, 143, 215, 0.5)',
          ],
          borderColor: [
            'rgba(12, 26, 156, 1)',
            'rgba(136, 143, 215, 1)',
            'rgba(12, 26, 156, 1)',
            'rgba(93, 100, 184, 1)',
            'rgba(12, 26, 156, 1)',
            'rgba(136, 143, 215, 1)',
          ],
          borderWidth: 1
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
