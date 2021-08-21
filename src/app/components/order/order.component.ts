import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faArrowAltCircleLeft, faHome} from '@fortawesome/free-solid-svg-icons';
import { OrdenesService } from 'src/app/services/ordenes.service';
import { MotoristaService } from 'src/app/services/motorista.service';
import { environment } from 'src/environments/environment';
import { ProductosService } from 'src/app/services/productos.service';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  base_url = environment.base_url
  faArrowAltCircleLeft = faArrowAltCircleLeft;
  faHome = faHome;
  verOrden= false
  productos:any =[]

  //orden a mostrar
  orden:any = []

  @Output() onBack = new EventEmitter();

  constructor(private ordenesService:OrdenesService,
              private motoristaService:MotoristaService,
              private productosService:ProductosService) { }

  ngOnInit(): void {
  }

  detalleOrden(idOrden:string){
    this.orden = []
    this.ordenesService.obtenerDetalleOrden(idOrden).subscribe(res=>{    
      this.orden.push(res)
      this.obtenerProductos()

    //  setTimeout(()=>{; }, 3000);
      this.verOrden =  true
      console.log("Ordene",this.orden)
  
      },error=>{ 
        console.log(error);
      });
  
   

  }

  tomarOrden(idOrden:string){
    let idMotorista = '611f6ddfe4f8e12e70b06003'
    this.motoristaService.tomarOrden(idMotorista, idOrden).subscribe(res=>{ 
      this.verOrden = false
      let estado = "procesando"  
       let data ={
         "estado":"procesando",
         "motorista":idMotorista
         }

      this.ordenesService.editarOrden(idOrden,data).subscribe(res=>{
        this.onBack.emit()

           console.log("Esta es la respuesta",res)
       },error=>{
        console.log(error);
      });

  
      },error=>{
        console.log(error);
      });

  }
  
  goBack(){
    this.verOrden = false
    this.onBack.emit()
  }

  obtenerProductos(){
    console.log("jaaj",this.orden[0])
for (let i = 0; i < this.orden[0].productos.length; i++) {
    let idProducto = this.orden[0].productos[i]._id
  console.log("idasss",idProducto)
  this.productosService.obtenerDetalleProducto(idProducto).subscribe(res=>{    
    this.productos.push(res)
    console.log("prodi",this.productos)

    },error=>{ 
      console.log(error);
    });

  
}
    

 
  

  }

}
