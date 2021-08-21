import { Component, OnInit } from '@angular/core';
import {  faArrowAltCircleLeft, faHome} from '@fortawesome/free-solid-svg-icons';
import { MotoristaService } from 'src/app/services/motorista.service';
import { Router, ActivatedRoute, Params} from '@angular/router';



@Component({
  selector: 'app-orders-taken',
  templateUrl: './orders-taken.component.html',
  styleUrls: ['./orders-taken.component.css']
})
export class OrdersTakenComponent implements OnInit {
  faArrowAltCircleLeft=faArrowAltCircleLeft;
  faHome =faHome;

  idMotorista = '611f6ddfe4f8e12e70b06003'
  listaOrdenes:any =[] 
  ordersDay:any = []
  

  constructor(private motoristaService:MotoristaService,
   private router:Router) { }

  ngOnInit(): void {
    this.listarOrdenesTomadas()
  }

  listarOrdenesTomadas(){
    this.motoristaService.obtenerOrdenesTomadas(this.idMotorista).subscribe(res=>{    
      this.ordersDay = res
   

    //  setTimeout(()=>{; }, 3000);
     
      console.log("Ordene",this.ordersDay)
  
      },error=>{ 
        console.log(error);
      });


  }

  verOrden(id:string){
    console.log("ID", id)
    this.router.navigate(['/orderTaken'],{queryParams:{idOrden:id}});

    
  }

}


