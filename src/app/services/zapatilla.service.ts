import { Injectable } from '@angular/core'
import { Zapatilla } from '../models/zapatilla'

@Injectable()
export class ZapatillaService{
    private baseDeZapatillas:Array<Zapatilla> = []
    private marcas:Array<string> = []
    private tiendas:Array<string> = []
    constructor(){
        this.baseDeZapatillas = [
            new Zapatilla("Nike","LandWalker",80,"Nike Shop","Mattelsa","Fallabella"),
            new Zapatilla("Adidas","Blow Runner",105,"Adidas Shop","Exito","Wallmart","Yoyo"),
            new Zapatilla("Dcuero","Cowboy",98,"Dcuero Shop Medellín","Dcuero Shop Copacabana","Exito","Fallabella","Mattelsa"),
            new Zapatilla("Dcuero","Leather Run",187,"Dcuero Shop Copacabana","Exito","Fallabella","Mattelsa"),
            new Zapatilla("Nike","Zeus",200,"Nike Shop","Mattelsa"),
            new Zapatilla("Rebook","Fly",65,"Rebook Shop","LGBT Boutique","Dcuero Shop Medellín"),
            new Zapatilla("Adidas","Hack",170,"Adidas Shop","Exito","Wallmart"),
        ]
        this.baseDeZapatillas.forEach((zapatilla) => {
            let marca = zapatilla.marca
            if(this.marcas.indexOf(marca) == -1){
                this.marcas.push(marca)
            }
            let tiendas = zapatilla.tiendas
            tiendas.forEach((tienda) => {
                if(this.tiendas.indexOf(tienda) == -1){
                    this.tiendas.push(tienda)
                }
            })

        })
    }
    getBase(){
        return this.baseDeZapatillas
    }
    getMarcas(){
        return this.marcas
    }
    getTiendas(){
        return this.tiendas
    }
    
}