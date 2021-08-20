import { Component, OnInit, ViewChild } from '@angular/core';
import {  faArrowAltCircleLeft, faHome} from '@fortawesome/free-solid-svg-icons';
import { OrdenesService } from 'src/app/services/ordenes.service';
import { OrderComponent } from '../order/order.component';


@Component({
  selector: 'app-orders-day',
  templateUrl: './orders-day.component.html',
  styleUrls: ['./orders-day.component.css']
})

export class OrdersDayComponent implements OnInit {
  faArrowAltCircleLeft = faArrowAltCircleLeft;
  faHome = faHome;

  verOdernesDia:boolean = true

  ordersDay:any = []

  constructor(private ordenesService:OrdenesService) { }

  ngOnInit(): void {

    this.listarOrdenes()


  }

@ViewChild('detalleOrden') detalleOrden !:OrderComponent

 listarOrdenes(){
  
  let d = new Date();
  let date = d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear();
  this.ordenesService.obtenerOrdenesDia(date).subscribe(res=>{    
    this.ordersDay = res
    console.log("Ordenes dia",this.ordersDay)

    },error=>{
      console.log(error);
    });


 }


 verOrden(idOrden:string){
   this.verOdernesDia = false
 this.detalleOrden.detalleOrden(idOrden)

 }
 ver(){
   this.verOdernesDia = true
 }

}
