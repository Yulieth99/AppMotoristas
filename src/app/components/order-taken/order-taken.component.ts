import { Component, OnInit } from '@angular/core';
import {  faArrowAltCircleLeft, faHome} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-order-taken',
  templateUrl: './order-taken.component.html',
  styleUrls: ['./order-taken.component.css']
})
export class OrderTakenComponent implements OnInit {
  faArrowAltCircleLeft = faArrowAltCircleLeft;
  faHome = faHome;


  constructor() { }

  ngOnInit(): void {
  }

}
