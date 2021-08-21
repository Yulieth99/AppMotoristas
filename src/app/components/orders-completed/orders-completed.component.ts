import { Component, OnInit } from '@angular/core';
import {  faArrowAltCircleLeft, faHome} from '@fortawesome/free-solid-svg-icons';
import { MotoristaService } from 'src/app/services/motorista.service';
import { OrdenesService } from 'src/app/services/ordenes.service';


@Component({
  selector: 'app-orders-completed',
  templateUrl: './orders-completed.component.html',
  styleUrls: ['./orders-completed.component.css']
})
export class OrdersCompletedComponent implements OnInit {
  faArrowAltCircleLeft= faArrowAltCircleLeft;
  idMotorista = '611f6ddfe4f8e12e70b06003'
  
  ordenes:any =[]

  constructor(private motoristaService:MotoristaService,
              private ordenesService:OrdenesService) { }

  ngOnInit(): void {
    this.listarOrdenesEntregadas()
  }


  listarOrdenesEntregadas(){
    this.ordenesService.obtenerOrdenesEntregadas(this.idMotorista).subscribe(res=>{
      this.ordenes = res
      console.log("Ordenes entregadas",res)
     },error=>{
      console.log(error);
    });
  }

}
