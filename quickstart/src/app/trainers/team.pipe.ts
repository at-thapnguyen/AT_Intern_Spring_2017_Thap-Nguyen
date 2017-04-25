import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
  name:'teamname',
})
export class TeamPipe implements PipeTransform {
  transform(arr:any, params: string) {
    return arr.filter((res: any) =>
      res.team === params
    )
  }
}
