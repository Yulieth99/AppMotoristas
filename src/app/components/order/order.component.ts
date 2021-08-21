import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faArrowAltCircleLeft, faHome} from '@fortawesome/free-solid-svg-icons';
import { OrdenesService } from 'src/app/services/ordenes.service';
import { MotoristaService } from 'src/app/services/motorista.service';
import { environment } from 'src/environments/environment';
import { ProductosService } from 'src/app/services/productos.service';
import { UsuarioService } from 'src/app/services/usuario.service';
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
  idUsuarioActual:string = ''
  usuario:any

  //orden a mostrar
  orden:any = []

  @Output() onBack = new EventEmitter();

  constructor(private ordenesService:OrdenesService,
              private motoristaService:MotoristaService,
              private productosService:ProductosService,
              private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuario = localStorage.getItem('usuario') 
   this.obtenerIdUsuario()

  }

  obtenerIdUsuario() {
  
    this.usuarioService.obtenerUsuarios().subscribe(
      res => {
        console.log("esta es la respuesta",res);
        for (let i = 0; i < res.length; i++) {
          let usuario = this.usuario.replace(/"/g, '');
         
          if(res[i].email == usuario){
            
            this.idUsuarioActual = res[i]._id;            

          }     
        }

      }, error => {
        console.error(error);
      }
    )
  }

  detalleOrden(idOrden:string){
    this.ngOnInit()

    this.orden = []
    this.ordenesService.obtenerDetalleOrden(idOrden).subscribe(res=>{    
      this.orden.push(res)
      this.obtenerProductos()

    //  setTimeout(()=>{; }, 3000);
      this.verOrden =  true
      //console.log("ODERN A MOSTRAR",this.orden)
  
      },error=>{ 
        console.log(error);
      });
  
   

  }

  tomarOrden(idOrden:string){
    this.motoristaService.tomarOrden(this.idUsuarioActual, idOrden).subscribe(res=>{ 
      this.verOrden = false
      let estado = "procesando"  
       let data ={
         "estado":"procesando",
         "motorista":this.idUsuarioActual
         }

      this.ordenesService.editarOrden(idOrden,data).subscribe(res=>{
        this.onBack.emit()


        //   console.log("Esta es la respuesta",res)
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
    this.productos = this.orden[0].productos
}
    

 
  

  

}
