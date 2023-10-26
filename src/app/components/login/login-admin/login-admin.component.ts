import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/ApiService';
import { ILogin } from 'src/app/interfaces';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent implements OnInit {
  login: ILogin = {} as ILogin;

  formLoginAdmin = new FormGroup({
    'email': new FormControl('', [Validators.required, Validators.email]),
    'contrasenia': new FormControl('', Validators.required)
  });
  constructor(private router: Router, private api: ApiService) { }
  ngOnInit() {
    // Código para ejecutar en la inicialización del componente
  }
  get email() {
    return this.formLoginAdmin.get('email') as FormControl;
  }

  get contrasenia() {
    return this.formLoginAdmin.get('contrasenia') as FormControl;
  }

  procesar() {
    this.login.email = this.email.value;
    this.login.contrasenia = this.contrasenia.value;

    this.api.obtenerToken(this.login).subscribe(retorno => {
      console.log(retorno);
      this.router.navigate(['/inicio/admin']);
    });

  }

}
