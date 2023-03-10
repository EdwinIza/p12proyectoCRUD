import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from '../../servicios/clientes.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrls: ['./actualizar-cliente.component.css']
})
export class ActualizarClienteComponent implements OnInit {

  cif: string;
  form: FormGroup;
  cliente: any;

  constructor(private route: ActivatedRoute,
              private router: Router, 
              private clientesService: ClientesService){}

  ngOnInit(): void {
    this.cif = this.route.snapshot.params.cif;
    this.clientesService.getCliente(this.cif)
                        .subscribe({
                          next: (res) => {
                            this.cliente = res.cliente;
                            this.form.patchValue(this.cliente);
                          },
                          error: (err) => console.error(err),
                        })
    this.form = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      cif: new FormControl('', [Validators.required,Validators.minLength(9)]),
      direccion: new FormControl(''),
      localidad: new FormControl('')
    })
  }

  modificarCliente(){
    this.clientesService.putClientes(this.form.value, this.cif)
                        .subscribe({
                          next: (res) => {
                            this.router.navigate(['/clientes']);
                          },
                          error: (err) => console.error(err),
                        })
  }

  

}
