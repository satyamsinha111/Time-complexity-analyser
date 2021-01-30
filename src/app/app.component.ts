import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'time-complexity-visualiser';
  noOfInput: number = 10;
  changeType: string = 'n';
  time_complexity: string = 'O(n)';
  color: string = '#03C6C7';
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    for (let i = 0; i <= this.noOfInput; i++) {
      this.barChartLabels[i] = i;
    }
    for (let i = 0; i <= this.barChartLabels.length; i++) {
      this.barChartData[0].data.push(this.barChartLabels[i]);
    }
  }

  onChangeInput() {
    this.onChangeUpdate();
    if (this.changeType === 'n') {
      this.time_complexity = 'O(n)';
      this.OrderOfNTimeComplexity();
      return;
    } else if (this.changeType === 'n2') {
      this.time_complexity = 'O(n2)';
      this.OrderOfN2TimeComplexity();
      return;
    } else if (this.changeType === 'logn') {
      this.time_complexity = 'O(log n)';
      this.OrderOfLogNComplexity();
      return;
    } else if (this.changeType === 'nlogn') {
      this.time_complexity = 'O(nlogn)';
      this.OrderOfNLogNComplexity();
      return;
    }
  }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    animation: {
      easing: 'easeInQuad',
    },
    responsiveAnimationDuration: 20, // animation duration after a resize
  };
  public barChartLabels: number[] = [];
  public barChartType = 'line';
  public barChartLegend = true;
  public barChartData = [
    { data: [], label: this.time_complexity, backgroundColor: this.color },
  ];

  onChangeUpdate(): void {
    this.barChartData[0].label = this.time_complexity;
    this.barChartData[0].backgroundColor = this.color;
  }

  // something

  OrderOfN2TimeComplexity() {
    this.changeType = 'n2';
    this.color = '#EB4D4B';
    this.barChartLabels = [];
    this.barChartData[0].data = [];
    this.onChangeUpdate();
    for (let i = 0; i <= this.noOfInput; i++) {
      this.barChartLabels[i] = i;
    }
    for (let i = 0; i <= this.barChartLabels.length; i++) {
      this.barChartData[0].data.push(this.barChartLabels[i] ** 2);
    }
  }
  OrderOfNTimeComplexity() {
    this.changeType = 'n';
    this.color = '#03C6C7';
    this.barChartLabels = [];
    this.barChartData[0].data = [];
    this.onChangeUpdate();
    for (let i = 0; i <= this.noOfInput; i++) {
      this.barChartLabels[i] = i;
    }
    for (let i = 0; i <= this.barChartLabels.length; i++) {
      this.barChartData[0].data.push(this.barChartLabels[i]);
    }
  }

  OrderOfLogNComplexity() {
    this.changeType = 'logn';
    this.time_complexity = 'O(logn)';
    this.color = '#758283';
    this.barChartLabels = [];
    this.barChartData[0].data = [];
    this.onChangeUpdate();
    for (let i = 0; i <= this.noOfInput; i++) {
      this.barChartLabels[i] = i;
    }
    for (let i = 0; i <= this.barChartLabels.length; i++) {
      this.barChartData[0].data.push(Math.log(this.barChartLabels[i]));
    }
  }
  OrderOfNLogNComplexity() {
    this.changeType = 'nlogn';
    this.barChartLabels = [];
    this.color = '#E07C24';
    this.barChartData[0].data = [];
    this.onChangeUpdate();
    for (let i = 0; i <= this.noOfInput; i++) {
      this.barChartLabels[i] = i;
    }
    for (let i = 0; i <= this.barChartLabels.length; i++) {
      this.barChartData[0].data.push(
        this.barChartLabels[i] * Math.log(this.barChartLabels[i])
      );
    }
  }
}
