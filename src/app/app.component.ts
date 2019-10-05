import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SsnValidatorService } from './ssn-validator.service';

function ssnValidator(control: FormControl): {[key: string]: any} {
  const value: string = control.value || '';
  const valid = value.match(/^\d{9}$/);
  return valid ? null : {ssn: true};
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myForm: FormGroup;
  constructor(private ssnValidatorService: SsnValidatorService){
    this.myForm = new FormGroup({
      ssnControl: new FormControl('', 
      ssnValidator, ssnValidatorService.checkWorkAuthoorization.bind(ssnValidatorService))
    });
  }
}
