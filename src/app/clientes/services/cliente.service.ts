import { Injectable } from '@angular/core';
import { Observable, map, catchError, throwError, from } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Cliente } from '../cliente';
import swal from 'sweetalert2';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private serviceUrl: string = 'http://localhost:8080/clients';

  private httpHeadres = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient,
    private router: Router) { }

  getClientes(): Observable<Cliente[]> {
    // return of(this.clientes);
    return this.http.get(this.serviceUrl)
      .pipe(
        map( response => response as Cliente[])
      );
  }

  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.serviceUrl, cliente, { headers: this.httpHeadres });
    // .pipe(
    //   catchError( e => {
    //     let errores = Object.values(e.error);
    //     swal.fire('Error, se debe completar con los datos correspondientes', 'error');
    //     return throwError(e);
    //   })
    // );
  }



  getCliente(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${ this.serviceUrl }/${ id }`)
    .pipe(
      catchError(e => {
        this.router.navigate(['/clientes']);
        swal.fire('Error al editar', e , 'error');
        return throwError(e);
      })
    )
  }
}
