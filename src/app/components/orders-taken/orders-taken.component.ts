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
  ordersDay:any[] = [
    {codigo:"0025", nombreComercio:"Supermercado Paiz",},
    {codigo:"0026", nombreComercio:"Supermercado La colonia",},
    {codigo:"0027", nombreComercio:"Supermercado Paiz",},
    {codigo:"0028", nombreComercio:"Farmacia FarmaCity",},
    {codigo:"0029", nombreComercio:"Supermercado Paiz",},
    {codigo:"0030", nombreComercio:"Farmacia FarmaCity",},
    
  ] 

  constructor() { }

  ngOnInit(): void {
  }

}
