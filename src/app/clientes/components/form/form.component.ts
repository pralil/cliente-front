import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../cliente';
import { ClienteService } from '../../services/cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: ``
})
export class FormComponent implements OnInit{

  public client: Cliente = new Cliente();
  public titulo: string = 'Crear Cliente';



  constructor( private clienteService: ClienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute ) {}

  ngOnInit(): void {
    this.cargarCliente();

  }

  cargarCliente(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if(id){
        this.clienteService.getCliente(id).subscribe( (cliente) => this.client = cliente )
      }

    })
  }

  public create(): void {
    this.clienteService.create(this.client)
      .subscribe(
        cliente => {
          this.router.navigate(['/clientes']);
          swal.fire('Nuevo Cliente', `Cliente ${ cliente.name } creado con exito`, 'success')
        }
      )
  }




}
