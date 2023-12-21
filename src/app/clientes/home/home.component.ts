import { Component, OnInit } from '@angular/core';
import { Clientes } from '../interface/clientes';
import { ClientesService } from '../services/clientes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clientes: Clientes[] = [];
  clienteSelecionado!: Clientes;

  constructor(private clientesService: ClientesService, private router: Router, private route: ActivatedRoute){

  }

  // onEdit(item: Clientes) {
  //   this.router.navigate(['clientes/edit', item.id]);
  // }

  onEdit(id: any){
    this.router.navigate(['clientes/edit', id], { relativeTo: this.route });
  }

  onDelete(item:any){
    this.clienteSelecionado = item;
    this.clientesService.remover(this.clienteSelecionado.id).subscribe();
  }

  ngOnInit(): void {
    this.clientesService.getAll().subscribe((data) => {
      this.clientes = data;
      console.log(this.clientes)
    })
  }

}


