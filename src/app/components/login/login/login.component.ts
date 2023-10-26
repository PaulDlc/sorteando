import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/ApiService';
import { ILogin } from 'src/app/interfaces';

@Component({
  selector: 'app-login-user',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: ILogin = {} as ILogin;

  formLoginUser = new FormGroup({
    'email': new FormControl('', [Validators.required, Validators.email]),
    'contrasenia': new FormControl('', Validators.required)
  });
  constructor(private router: Router, private api: ApiService) { }
  ngOnInit() {
    // Código para ejecutar en la inicialización del componente
  }
  get email() {
    return this.formLoginUser.get('email') as FormControl;
  }

  get contrasenia() {
    return this.formLoginUser.get('contrasenia') as FormControl;
  }

  procesar() {
    this.login.email = this.email.value;
    this.login.contrasenia = this.contrasenia.value;

    this.api.obtenerToken(this.login).subscribe(retorno => {
      console.log(retorno);
      this.router.navigate(['/inicio']);
    });

  }

}
