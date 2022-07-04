import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const myChart = new Chart("doughnut-chart", {
      type: 'doughnut',
      data: {
        labels: ['Bad', 'So and so', 'Good', 'Very good', 'Amazing', 'Perfect'],
        datasets: [{
          label: '# of Votes',
          data: [7, 17, 57, 37, 17, 27],
          backgroundColor: [
            // 'rgba(255, 99, 132, 1)',
            // 'rgba(54, 162, 235, 1)',
            // 'rgba(255, 206, 86, 1)',
            // 'rgba(75, 192, 192, 1)',
            // 'rgba(153, 102, 255, 1)'
            'rgba(12, 26, 156, 0.5)',
            'rgba(136, 143, 215, 0.5)',
            'rgba(12, 26, 156, 0.5)',
            'rgba(93, 100, 184, 0.5)',
            'rgba(12, 26, 156, 0.5)',
            'rgba(136, 143, 215, 0.5)',
          ],
          borderColor: [
            // 'rgba(255, 99, 132, 1)',
            // 'rgba(54, 162, 235, 1)',
            // 'rgba(255, 206, 86, 1)',
            // 'rgba(75, 192, 192, 1)',
            // 'rgba(153, 102, 255, 1)'
            'rgba(12, 26, 156, 0.5)',
            'rgba(136, 143, 215, 0.5)',
            'rgba(12, 26, 156, 0.5)',
            'rgba(93, 100, 184, 0.5)',
            'rgba(12, 26, 156, 0.5)',
            'rgba(136, 143, 215, 0.5)',
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
