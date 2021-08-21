import { Component, OnInit } from '@angular/core';
import {  faArrowAltCircleLeft, faHome} from '@fortawesome/free-solid-svg-icons';
import { MotoristaService } from 'src/app/services/motorista.service';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';



@Component({
  selector: 'app-orders-taken',
  templateUrl: './orders-taken.component.html',
  styleUrls: ['./orders-taken.component.css']
})
export class OrdersTakenComponent implements OnInit {
  faArrowAltCircleLeft=faArrowAltCircleLeft;
  faHome =faHome;

  listaOrdenes:any =[] 
  ordersDay:any = []
  usuario:any
  idUsuarioActual:string = ''
  

  constructor(private motoristaService:MotoristaService,
            private usuarioService: UsuarioService,
            private router:Router) { }

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
            this.listarOrdenesTomadas()
            //console.log("SI ENTRE Y ES ESTA", this.idUsuarioActual)

          }

          
        }

        //console.log('idUsuarioActual: ', this.idUsuarioActual);
      }, error => {
        console.error(error);
      }
    )
  }


  listarOrdenesTomadas(){
    this.motoristaService.obtenerOrdenesTomadas(this.idUsuarioActual).subscribe(res=>{    
      this.ordersDay = res
   

    //  setTimeout(()=>{; }, 3000);
     
  
      },error=>{ 
        console.log(error);
      });


  }

  verOrden(id:string){
    console.log("ID", id)
    this.router.navigate(['/orderTaken'],{queryParams:{idOrden:id}});

    
  }

}


