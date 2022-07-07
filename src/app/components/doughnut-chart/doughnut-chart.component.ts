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
            "rgba(244, 37, 57, 0.7)",
            "rgba(246, 95, 100, 0.7)",
            "rgba(254, 130, 44, 0.7)",
            "rgba(255, 207, 64, 0.7)",
            "rgba(38, 221, 129, 0.7)",
            "rgba(27, 196, 137, 0.7)"
          ],
          borderColor: [
            // 'rgba(255, 99, 132, 1)',
            // 'rgba(54, 162, 235, 1)',
            // 'rgba(255, 206, 86, 1)',
            // 'rgba(75, 192, 192, 1)',
            // 'rgba(153, 102, 255, 1)'
            "rgba(244, 37, 57, 1)",
            "rgba(246, 95, 100, 1)",
            "rgba(254, 130, 44, 1)",
            "rgba(255, 207, 64, 1)",
            "rgba(38, 221, 129, 1)",
            "rgba(27, 196, 137, 1)"
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
            }
          }]
        }
      }
    });
  }

}
