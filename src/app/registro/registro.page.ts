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
  })

  constructor(private FormBuilder: FormBuilder) { }

  ngOnInit() {
  }

}
