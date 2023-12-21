import { Component } from '@angular/core';
import { ClientesService } from '../services/clientes.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private clientesService: ClientesService, private router: Router){
    this.form = this.formBuilder.group({
      id: [null],
      nome_cliente: [null],
      data_nascimento: [null],
      endereco: [null],
      numero: [null],
      complemento: [null],
      uf: [null],
      cidade: [null],
      cep: [null],
      telefone: [null],
      email: [null]
    })
  }

  onSubmit(){
    this.clientesService.create(this.form.value).subscribe(
      (data) => {
        console.log(data)
        window.alert("Registro salvo com Sucesso.")
        this.router.navigate(['']);
      }
    )
  }

}
