import { AfterContentInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { REGISTRATIONFORMS } from '../shared/data';
import { RegistrationForms } from '../shared/interface/registration.forms.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterContentInit {
  registerationForms: RegistrationForms[] = REGISTRATIONFORMS
  incompleteForms: RegistrationForms[] = REGISTRATIONFORMS
  completedForms: RegistrationForms[] = REGISTRATIONFORMS

  constructor(
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.filterForms();
  }

  filterForms() {
    this.incompleteForms = this.registerationForms.filter(form => form.formStatus === 'incomplete');
    this.completedForms = this.registerationForms.filter(form => form.formStatus === 'pending' || form.formStatus === 'approved');
  }

  ngAfterContentInit(): void {
    this.cdr.detectChanges();
  }

}
