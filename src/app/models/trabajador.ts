export class Trabajador{
    constructor(
        public nombre:string,
        public apellido:string,
        public trabajo:string
    ){}
    getJSON(){
        return {
            nombre:this.nombre,
            apellido:this.apellido,
            trabajo:this.trabajo
        }
    }
    postJSON(){
        return {
        name: this.nombre + " " + this.apellido,
        job: this.trabajo
    }
    }
}