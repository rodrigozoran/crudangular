import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Clientes } from '../interface/clientes';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private httpClient: HttpClient) { 

  }

  private readonly API = 'http://localhost:3000/clientes'

  getAll(){
    return this.httpClient.get<Clientes[]>(this.API)
  }

  loadByID(id:any){
    return this.httpClient.get(`${this.API}/${id}`).pipe(take(1))
  }

  create(data: Clientes){
    console.log(data)
    return this.httpClient.post(this.API, data)
  }

  update(cliente: Clientes) {
    return this.httpClient.put(`${this.API}/${cliente.id}`, cliente);
  }

  editar(id: string){
    return this.httpClient.get<Clientes>(`this.API/${id}`)
  }

  remover(id: any){
    return this.httpClient.delete(`${this.API}/${id}`).pipe(take(1))
  }


}
