import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SsnValidatorService {

  checkWorkAuthoorization(field: AbstractControl): Observable<ValidationErrors | null>{
    return of(field.value.indexOf('123') >= 0 ? null: {work: "you're not authorized to work"});
  }

  constructor() { }
}
