import { Component, OnInit } from '@angular/core';
import { faFileImage, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { GeneralService } from 'src/app/services/general.service';
import { MotoristaService } from 'src/app/services/motorista.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public formRegister!: FormGroup;

  submitted = false;
  name= false;
  last= false;
  email1= false;
  email= false;
  pass2=false;
  imagenID: any = null


  previsualizacion:string = "false"

 
 
  constructor(private formBulder: FormBuilder,
              private generalService:GeneralService,
              private router:Router,
              private motoristaService:MotoristaService) { }

  
  faFileImage = faFileImage;
  faArrowAltCircleLeft=faArrowAltCircleLeft;
  
  ngOnInit(): void { 
    
     this.formRegister =this.formBulder.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      correo:['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      password2: ['', Validators.required],
      phone:['', Validators.required],
      dni: ['', Validators.required],
      imagen:['', Validators.required],
    
      },{ 
      //  validator:this.mustMatch('password', 'password2'),
      
        
      })
  }
 

  onSubmit(){

    
  }



  capturarFile(event:any){
    this.imagenID = event.target.files[0];
      console.log( event.target.files)
      this.generalService.extraerBase64(this.imagenID).then((imagen:any) => {
        this.previsualizacion = imagen.base;
        })
      }
    
  
  get f(){
   
    return this.formRegister.controls;
  }

  
validar(campo:String){
  let info =this.formRegister.controls;

  if (info.nombre.touched && info.nombre.errors?.required) {
   this.name = true;   
  } else {
    this.name= false;
  }

  switch(campo) { 
    case 'nombre': { 
      if (info.nombre.touched && info.nombre.errors?.required)  this.name = true;   
        else this.name= false;       
            break; 
    } 
    case 'apellidos': { 
      if (info.apellidos.touched && info.apellidos.errors?.required)this.last = true;   
        else this.last= false;       
          break; 
    } 
    case 'correo': { 
      if (info.correo.touched && info.correo.errors?.required)this.email1 = true;   
        else this.email1= false; 
        
        if (info.correo.errors?.email)this.email = true;   
        else this.email= false; 
        
      
      
          break; 
    } 
    case '': { 
      if (info.password2.touched && info.password2.errors?.required)this.last = true;   
        else this.last= false;       
          break; 
    } 
   /* case 'password2': { 
      if ( this.mustMatch( info.password.value,  info.password2.value))
       this.pass2 = true;   
        else this.pass2= false;       
          break; 
    } */
    default: { 
       //statements; 
       break; 
    } 
 } 

}
  mustMatch(controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmedValidator: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}

nuevoMotorista(){
  console.log("se enviaran los datos")
  const formData = new FormData();
  formData.append('firstName', this.formRegister.value.nombre)
  formData.append('lastName', this.formRegister.value.apellidos)
  formData.append('email', this.formRegister.value.correo)
  formData.append('password', this.formRegister.value.password)
  formData.append('imageDni',this.imagenID ) 
  formData.append('dni',this.formRegister.value.dni ) 
  formData.append('phone',this.formRegister.value.phone ) 

 this.motoristaService.registroMotorista(formData).subscribe(res=>{
  console.log("Registro ",res)
  this.router.navigate(['/home'])

},error=>{
  console.log(error);
}); 


}
  

}
