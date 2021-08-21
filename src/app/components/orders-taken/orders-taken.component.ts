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
          console.log(typeof(this.usuario))
          console.log("el email a probar",( res[i].email))
         console.log("emails", usuario )
          if(res[i].email == usuario){
            
            this.idUsuarioActual = res[i]._id;
            this.listarOrdenesTomadas()
            console.log("SI ENTRE Y ES ESTA", this.idUsuarioActual)

          }

          
        }

        console.log('idUsuarioActual: ', this.idUsuarioActual);
      }, error => {
        console.error(error);
      }
    )
  }


  listarOrdenesTomadas(){
    console.log("OK USUARIO A MOSTAR",this.idUsuarioActual)
    this.motoristaService.obtenerOrdenesTomadas(this.idUsuarioActual).subscribe(res=>{    
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


