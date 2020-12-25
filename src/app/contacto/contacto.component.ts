import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario'
import { Trabajador } from '../models/trabajador'
import { ContactoService } from '../services/contacto.service'

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
  providers: [ContactoService]
})
export class ContactoComponent implements OnInit {
  public usuario:any
  public gotUsuario:Usuario
  public gotTrabajador:any
  public trabajador:Trabajador
  public data:any
  constructor(private _contactoService:ContactoService) {
    this.usuario = {
      nombre:"",
      apellido:"",
      email:"",
      edad:""
    }
    this.trabajador = new Trabajador("","","")
  }

  ngOnInit(): void {
  }
  onSubmitTrabajo(form:any):void{
    let json = this.trabajador.postJSON()
    this._contactoService.postTrabajador(json).subscribe(
      (response) => {
        this.data = {
          id:response.id,
          createdAt:response.createdAt,
          name:json.name,
          job: json.job
        }
        console.log(response)
      },
      (error) => {
        console.log(<any>error)
      }
    )
    form.reset()
  }

}
