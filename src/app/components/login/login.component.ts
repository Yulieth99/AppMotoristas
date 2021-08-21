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
  mensajeError: string = '';

  public loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
  }

  ingresar() {
    let form = this.loginForm.value;

    this.authService.ingresar(this.loginForm.value).subscribe(
      res => {

        this.authService.obtenerUsuarios().subscribe(
          resp => {
            let motorista = resp.find((user: { email: string; }) => user.email === form.email);
            if (motorista && motorista.roles[0].name === 'motorista' && motorista.status === 1) {
              this.mensajeError = '';
              console.log('motorista', res);
              localStorage.setItem('token', res.token);
              this.router.navigateByUrl('/home');
            } else {
              this.mensajeError = 'No tiene los permisos requeridos';
              console.log(this.mensajeError);
            }
          }, error => {
            console.error(error);
          }
        );

      }, error => {
        this.mensajeError = error.error.message;
        console.error(this.mensajeError);
      }
    );


  }


}
