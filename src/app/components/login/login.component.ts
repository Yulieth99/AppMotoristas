import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faArrowAltCircleLeft, faHome } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  faArrowAltCircleLeft = faArrowAltCircleLeft;
  mensajeError:string = '';

  public loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder,
              private router: Router,
              private authService:AuthService) { }

  ngOnInit(): void {
  }

  ingresar() {

    this.authService.ingresar(this.loginForm.value).subscribe(
      res => {
        console.log('se ingreso', res);
        this.router.navigateByUrl('/home');
      }, error => {
        this.mensajeError = error.error.message;
        console.error(this.mensajeError);
      }
    );

    
  }


}
