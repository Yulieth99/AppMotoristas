import { Component, OnInit } from '@angular/core';
import {  faArrowAltCircleLeft, faHome} from '@fortawesome/free-solid-svg-icons';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { OrdenesService } from 'src/app/services/ordenes.service';
import { environment } from 'src/environments/environment';
import { MotoristaService } from 'src/app/services/motorista.service';


@Component({
  selector: 'app-order-taken',
  templateUrl: './order-taken.component.html',
  styleUrls: ['./order-taken.component.css']
})
export class OrderTakenComponent implements OnInit {
  base_url = environment.base_url

  faArrowAltCircleLeft = faArrowAltCircleLeft;
  faHome = faHome;
  idOrden:string= ''
  orden:any =[]
  estado:string=' '
  


  constructor(private routerte:Router,
              private route: ActivatedRoute,
              private ordenesService:OrdenesService,
              private motoristaService:MotoristaService) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(data=> {
      console.log(data.idOrden)
      this.idOrden = data.idOrden 
    this. detalleOrdenTomada()  },error=>{
        console.log(error);
      });
  }


  detalleOrdenTomada(){
    this.ordenesService.obtenerDetalleOrden(this.idOrden).subscribe(res=>{    
      this.orden.push(res)
   

    //  setTimeout(()=>{; }, 3000);
     
      console.log("Ordfdene",this.orden)
  
      },error=>{ 
        console.log(error);
      });


  }
  cambiarEsadotOrden(){
    console.log("estado de la ordenYULO", this.estado)
    let nuevoEstado 
    if(this.estado == '1'){
       
      let data={
        "estado":"camino"
      }
        this.ordenesService.editarOrden(this.idOrden,data).subscribe(res=>{
  
          console.log("Esta es la respuesta de la orden en camino",res)
      },error=>{
       console.log(error);
     });

    }else{
      nuevoEstado = "entregada"
      let idMotorista = '611f6ddfe4f8e12e70b06003'
      this.motoristaService.tomarOrden(idMotorista, this.idOrden).subscribe(res=>{ 
         let data ={
           "estado":"entregada",
           }
  
        this.ordenesService.editarOrden(this.idOrden,data).subscribe(res=>{
  
          console.log("Esta es la respuesta de una orden enntregada",res)
         },error=>{
          console.log(error);
        });
  
    
        },error=>{
          console.log(error);
        });
    }
  }

}
