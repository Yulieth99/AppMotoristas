import { Component, OnInit } from '@angular/core';
import {  faArrowAltCircleLeft, faSadTear} from '@fortawesome/free-solid-svg-icons';
import { MotoristaService } from 'src/app/services/motorista.service';
import { OrdenesService } from 'src/app/services/ordenes.service';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-orders-completed',
  templateUrl: './orders-completed.component.html',
  styleUrls: ['./orders-completed.component.css']
})
export class OrdersCompletedComponent implements OnInit {
  faArrowAltCircleLeft= faArrowAltCircleLeft;
  faSadTear=faSadTear
  
  
  ordenes:any =[]
  idUsuarioActual:string = ''
  usuario:any

  constructor(private motoristaService:MotoristaService,
              private ordenesService:OrdenesService,
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
            this.listarOrdenesEntregadas()


          }

          
        }

        console.log('idUsuarioActual: ', this.idUsuarioActual);
      }, error => {
        console.error(error);
      }
    )
  }

  listarOrdenesEntregadas(){
    this.ordenesService.obtenerOrdenesEntregadas(this.idUsuarioActual).subscribe(res=>{
      this.ordenes = res
      console.log("Ordenes entregadas",res)
     },error=>{
      console.log(error);
    });
  }

}
