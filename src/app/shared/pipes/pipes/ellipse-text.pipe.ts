import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipseText',
})
export class EllipseTextPipe implements PipeTransform {
  ellipse = '...';

  transform(value: string, limit: number): unknown {
    if (!value) return '';
    const isValid = value && limit && value.length > limit;
    const truncated = isValid ? value.substring(0, limit) + this.ellipse : value;
    return truncated;
  }
}
