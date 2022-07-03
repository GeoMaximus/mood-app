import { ViewportScroller } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private scroller: ViewportScroller, private router: Router) { }

  ngOnInit(): void {
  }

  scrollToDoughnutChart() {
    this.scroller.scrollToAnchor("doughnut")
  }

  scrollToBarChart() {
    this.scroller.scrollToAnchor("bar")
  }

  scrollToLineChart() {
    this.scroller.scrollToAnchor("line")
  }

}
