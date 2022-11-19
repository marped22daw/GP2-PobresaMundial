import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "punts"
})
export class PuntsPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    return value;
  }
}