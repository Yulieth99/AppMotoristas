import { Component, OnInit } from '@angular/core';
import {  faArrowAltCircleLeft, faHome} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-orders-day',
  templateUrl: './orders-day.component.html',
  styleUrls: ['./orders-day.component.css']
})

export class OrdersDayComponent implements OnInit {
  faArrowAltCircleLeft = faArrowAltCircleLeft;
  faHome = faHome;

  constructor() { }

  ngOnInit(): void {
  }

}
