export class Zapatilla{
    public tiendas:Array<string>
    constructor(public marca:string,public nombre:string,public precio:number,...tiendas:string[]){
        this.tiendas = tiendas
    }
}