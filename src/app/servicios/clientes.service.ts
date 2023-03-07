import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  endpointClientes: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getClientes() {
    return this.http.get(this.endpointClientes)
                    .pipe(
                      map((data: any) =>{
                        return data;
                      })
                    )
  }

  getCliente(cif){
    return this.http.get(this.endpointClientes + '/' + cif)
                    .pipe(
                      map((data: any) =>{
                        return data;
                      })
                    )   
  }

  postClientes(cliente) {
    return this.http.post(this.endpointClientes, cliente)
                    .pipe(
                      map((data: any) =>{
                        return data;
                      })
                    )
  }

  putClientes(cliente, cif){
    return this.http.put(this.endpointClientes + '/' + cif, cliente)
                    .pipe(
                      map((data: any) =>{
                        return data;
                      })
                    )
  }

  deleteClientes(cif){
    return this.http.delete(this.endpointClientes + '/' + cif)
                    .pipe(
                      map((data: any) =>{
                        return data;
                      })
                    )
  }

}
