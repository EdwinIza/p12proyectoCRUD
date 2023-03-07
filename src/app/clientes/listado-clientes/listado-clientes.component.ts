import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../servicios/clientes.service';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {

  clientes: any;

  constructor(private clientesService: ClientesService){}

  ngOnInit(): void {
    this.cargarClientes();
  }

  cargarClientes(){
    this.clientesService.getClientes()
    .subscribe({
      next: (res) => this.clientes = res,
      error: (err) => console.error(err),
    })
  }

  eliminarCliente(cif){
    this.clientesService.deleteClientes(cif)
                        .subscribe({
                          next: (res) => {
                            this.cargarClientes();
                          },
                          error: (err) => console.error(err),
                        })
  }

} 
