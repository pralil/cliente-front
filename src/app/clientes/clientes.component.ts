import { Component, OnInit } from '@angular/core';
import { ClienteService } from './services/cliente.service';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styles: ``
})
export class ClientesComponent implements OnInit{

  constructor( private clienteService: ClienteService ) {}

  public clientes: Cliente[] = [];

  ngOnInit(): void {
    this.clienteService.getClientes()
      .subscribe(
        clientes => this.clientes = clientes
      );
  }
}
