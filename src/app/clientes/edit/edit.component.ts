import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clientes } from '../interface/clientes';
import { ClientesService } from '../services/clientes.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{

  form: FormGroup;

  constructor(private fb: FormBuilder, 
    private clientesService: ClientesService, 
    private route: ActivatedRoute,
    private router: Router
    ){
      this.form = this.fb.group({
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

  onSubmit() {
    const updatedCliente: Clientes = this.form.value;
    this.clientesService.update(updatedCliente).subscribe(() => {
      window.alert("Registro alterado com sucesso")
      this.router.navigate(['']); 
      console.log(this.form.value)
    }, error => {
      console.error('Error updating cliente:', error);
    });
  }


  ngOnInit() {

    let registro = null;

    this.route.params.subscribe(
      (params:any) => {
        const id = params['id']
        console.log(id)
        const clientes$ = this.clientesService.loadByID(id);
        clientes$.subscribe(cliente => {
          registro = cliente
          this.updateForm(cliente as Clientes)
        })
      }
    );
  }

  updateForm(cliente: Clientes){
    this.form.patchValue({
      id: cliente.id,
      nome_cliente: cliente.nome_cliente,
      data_nascimento: cliente.data_nascimento,
      endereco: cliente.endereco,
      numero: cliente.numero,
      complemento: cliente.complemento,
      uf: cliente.uf,
      cidade: cliente.cidade,
      cep: cliente.cep,
      telefone: cliente.telefone,
      email: cliente.email
    })
  }

}
