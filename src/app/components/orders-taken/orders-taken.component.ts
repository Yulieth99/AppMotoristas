import { Component, OnInit } from '@angular/core';
import {  faArrowAltCircleLeft, faHome} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-orders-taken',
  templateUrl: './orders-taken.component.html',
  styleUrls: ['./orders-taken.component.css']
})
export class OrdersTakenComponent implements OnInit {
  faArrowAltCircleLeft=faArrowAltCircleLeft;
  faHome =faHome;

  constructor() { }

  ngOnInit(): void {
  }

}
