import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin = this.FormBuilder.group({
    email: ['', Validators.compose([Validators.required, Validators.email])],
    senha: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
  });

  mensagensErro = {
    email: [{tipo: 'required', aviso: 'Preencha o Campo'}, {tipo: 'email', aviso: 'Precisa ser um email valido'}],
    senha: [{tipo: 'required', aviso: 'Preencha a Senha'}, {tipo: 'minlength', aviso: 'Precisa ser uma Senha valida'}]
  }

  constructor(private FormBuilder: FormBuilder) { }

  get email(){
    return this.formLogin.get('email');
  }
  
  get senha(){
    return this.formLogin.get('senha');
  }

  ngOnInit() {
  }

}
