import { Component, OnInit } from '@angular/core';
import { Chart, LinearScale, TimeScale } from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private myChart: Chart | undefined;
  public pieChart: Chart | undefined;
  public chart: any;
  ngOnInit(): void {
    this.createChart2();
    this.createChart();
    this.myChart = new Chart("myChart", {
      type: 'bar',
      data: {
        labels: ['February', 'March', 'April', 'May', 'June'],
        datasets: [{
          label: '# Number of properties per month',
          data: [0, 2, 4, 6, 10],
          borderWidth: 1
        }]

      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
      plugins: [LinearScale, TimeScale]
    });

  }

  createChart(){

    this.chart = new Chart("MyChart2", {
      type: 'pie', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['House', 'Apartment','Farm','Land','Villa', 'Office'],
        datasets: [{
          label: 'Number of properties',
          data: [5, 6, 2, 3, 5, 1],
          backgroundColor: [
            '#CCCCFF',
            '#6495ED', // Change the color code here
            '#40E0D0',
            '#9FE2BF',
            '#DE3163',
            '#9B59B6',

          ],
          hoverOffset: 4
        }],

      },
      options: {
        aspectRatio:2.5
      }

    });

  }

  createChart2(){

    this.chart = new Chart("MyChart3", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: [ '2023-06-20', '2023-05-21','2023-05-22','2023-06-23','2023-06-24','2023-06-25' ,'2023-06-26'],
        datasets: [
          {
            label: "Sale",
            data: ['2','1', '0', '3','1','2','2'],
            backgroundColor: 'salmon'
          },
          {
            label: "Rent",
            data: ['0','3', '2', '1','4','1','0'],
            backgroundColor: 'violet'
          }
        ]
      },
      options: {
        aspectRatio:2.5
      }

    });
  }

}

