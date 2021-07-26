import { Component, OnInit } from '@angular/core';
import { faFileImage, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public formLogin = new FormGroup({
  nombre: new FormControl(""),
  apellidos: new FormControl(""),
  correo: new FormControl("",),
  contrasena: new FormControl(""),
  repContrasena: new FormControl(""),
  fechaNacimiento:new FormControl(""),
  genero: new FormControl(""),
  imagen:new FormControl(""),

  })
 
  constructor( private formBulder: FormBuilder) { }

  
  faFileImage = faFileImage;
  faArrowAltCircleLeft=faArrowAltCircleLeft;
  
  ngOnInit(): void {
    
  }
  send(): any{
 console.log(this.formLogin.valid);
  }
  capturarFile(event:any){

  }
}
