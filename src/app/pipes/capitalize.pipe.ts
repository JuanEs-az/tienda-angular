import { Pipe , PipeTransform } from '@angular/core'
@Pipe({
    name:"MayusInicial"
})
export class CapitalizePipe implements PipeTransform{
    transform(v1:any){
        let retorno:string = ""
        v1.split(" ").forEach((word:string) => {
            retorno += word[0].toUpperCase() + word.slice(1) + " "
        });
        return retorno
    }
}