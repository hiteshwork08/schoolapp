import { Component, Input, OnInit } from '@angular/core';
import { RegistrationForms } from '../../interface/registration.forms.interface';

@Component({
  selector: 'app-form-card',
  templateUrl: './form-card.component.html',
  styleUrls: ['./form-card.component.scss']
})
export class FormCardComponent implements OnInit {
  @Input() forms: RegistrationForms[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
