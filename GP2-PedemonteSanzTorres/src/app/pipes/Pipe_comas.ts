import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "comas"
})
export class ComasPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    //si hay un punto cambiarlo por una coma
    if (value) {
        return value.toString().replace(/\./g, ",");
        }
    return value;
  }
}