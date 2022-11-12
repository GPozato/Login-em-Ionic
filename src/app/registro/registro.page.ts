import { Component, OnInit } from '@angular/core';
import { FormBuilder, MinLengthValidator, Validators } from '@angular/forms'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formRegistro = this.FormBuilder.group({
    nome: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    cpf: ['', Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(11)])],
    senha:  ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    confirma: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
  });

  mensagensErro = {
    email: [{tipo: 'required', aviso: 'Preencha o Campo'}, {tipo: 'email', aviso: 'Precisa ser um email valido'}],
    senha: [{tipo: 'required', aviso: 'Preencha a Senha'}, {tipo: 'minlength', aviso: 'Precisa ser uma Senha valida'}],
    CPF: [{tipo: 'required', aviso: 'Preencha o CPF'}, {tipo: 'minlength', aviso: 'Precisa seu CPF'},{tipo: 'maxlength', aviso: 'No maximo 11 numeros'}],
    confirma: [{tipo: 'required', aviso: 'Preencha a Senha'}, {tipo: 'email', aviso: 'Precisa ser uma Senha valida'}],
    nome: [{tipo: 'required', aviso: 'Preencha a Senha'}, {tipo: 'email', aviso: 'Precisa ser uma Senha valida'}]
  }


  constructor(private FormBuilder: FormBuilder) { }

  get email(){
    return this.formRegistro.get('email');
  }
  
  get senha(){
    return this.formRegistro.get('senha');
  }

  get CPF(){
    return this.formRegistro.get('CPF');
  }

  get nome(){
    return this.formRegistro.get('nome');
  }

  get confirma(){
    return this.formRegistro.get('confirma');
  }

  ngOnInit() {
  }

}
