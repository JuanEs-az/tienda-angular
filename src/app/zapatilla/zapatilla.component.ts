import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla'
import { ZapatillaService } from '../services/zapatilla.service'
@Component({
  selector: 'zapatilla',
  templateUrl: './zapatilla.component.html',
  styleUrls: ['./zapatilla.component.css'],
  providers:[ZapatillaService]
})
export class ZapatillaComponent implements OnInit {
  
  public zapatillas:Array<Zapatilla>
  
  public tiendas:Array<string>
  public inputTiendas:string = ""
  public mensajeAlertTiendas:string = ""

  public marcas:Array<string>
  public inputMarcas:string = ""
  public mensajeAlertMarcas:string = ""

  constructor(
    private _zapatillaService:ZapatillaService
  ){ }
  ngOnInit(): void {
    this.zapatillas = this._zapatillaService.getBase()
    this.marcas = this._zapatillaService.getMarcas()
    this.tiendas = this._zapatillaService.getTiendas()
  }
  
  upgradeMarcas(){
    if(this.inputMarcas.length > 5){
      this.marcas.push(this.inputMarcas)
      this.mensajeAlertMarcas = ""
      this.inputMarcas = ""
    }else{
      this.mensajeAlertMarcas = "Tu marca debe contener 5 caracteres por lo menos"
    }
  }
  upgradeTiendas(){
    if(this.inputTiendas.length > 5){
      this.tiendas.push(this.inputTiendas)
      this.mensajeAlertMarcas = ""
      this.inputTiendas = ""
    }else{
      this.mensajeAlertTiendas = "Debes tener como minimo 5 caracteres para tu tienda"
    }
  }

}
