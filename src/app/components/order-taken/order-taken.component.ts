import { Component, OnInit } from '@angular/core';
import {  faArrowAltCircleLeft, faHome} from '@fortawesome/free-solid-svg-icons';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { OrdenesService } from 'src/app/services/ordenes.service';
import { environment } from 'src/environments/environment';
import { MotoristaService } from 'src/app/services/motorista.service';
import { UsuarioService } from 'src/app/services/usuario.service';



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
  usuario:any
  idUsuarioActual:string =''


  constructor(private routerte:Router,
              private route: ActivatedRoute,
              private ordenesService:OrdenesService,
              private motoristaService:MotoristaService,
              private usuarioService: UsuarioService) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(data=> {
      console.log(data.idOrden)
      this.idOrden = data.idOrden 
    this. detalleOrdenTomada()  },error=>{
        console.log(error);
      });

   this.usuario = localStorage.getItem('usuario') 
   this.obtenerIdUsuario()
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
      this.motoristaService.ordenEntregada(this.idUsuarioActual, this.idOrden).subscribe(res=>{ 
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
