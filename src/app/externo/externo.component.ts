import { Component , OnInit} from '@angular/core';
import { ExternoService } from '../services/externo.service'
@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [ ExternoService ]
})
export class ExternoComponent implements OnInit{ 

  public usuarios1:Array<any> = []
  public usuarios2:Array<any> = []
  public usuarios:Array<any> = []

  public idConsulta:string
  public usuarioConsulta:any
  constructor(private _externoService:ExternoService) {

  }
  upGradeUser():void{
    this.usuarioConsulta = this.usuarios[parseInt(this.idConsulta) - 1]
  }
  ngOnInit(){
    //Extracción de los datos de la pagina 1
    this._externoService
    .getUsers1()
    .subscribe(
      (result) => {
        result.data.forEach((val: any) => {
          this.usuarios1.push(val)
          this.usuarios.push(val)
        })
      },
      (error) => {
        console.error(<any>error)
      }
    )
    //Extracción de los datos de la pagina 2
    this._externoService
    .getUsers2()
    .subscribe(
      result => {
        result.data.forEach((val: any) => {
          this.usuarios2.push(val)
          this.usuarios.push(val)
        })
      },
      error => {
        console.error(<any>error)
      }
    )
    console.log(this.usuarios)
    console.log(this.usuarios1)
    console.log(this.usuarios2)

  }
}
  

