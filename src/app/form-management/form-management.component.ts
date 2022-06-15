import { SnackBarService } from './../shared/services/snackbar.service';
import { ALL_FORM_DATA } from './form.data';
import { Component, OnInit } from '@angular/core';
import { AllFormData, FormManagement } from './interface/form-management';
import { from, of, zip } from 'rxjs';
import { mergeMap, toArray, groupBy } from 'rxjs/operators';

@Component({
  selector: 'app-form-management',
  templateUrl: './form-management.component.html',
  styleUrls: ['./form-management.component.scss']
})
export class FormManagementComponent implements OnInit {
  public allForms: AllFormData = ALL_FORM_DATA;
  public filteredForms: any[] = [];
  constructor(
    private snackBarService: SnackBarService
  ) { }

  ngOnInit(): void {
    this.groupBySchoolyear(this.allForms.forms);
  }

  groupBySchoolyear(formInfo: FormManagement[]) {
    from(formInfo)
      .pipe(
        groupBy(
          person => person.schoolYear,
          p => p
        ),
        mergeMap(group => zip(of(group.key), group.pipe(toArray())))
      )
      .subscribe(formData => {
        this.filteredForms.push(formData)
      })
  }

  chamgedActiveStatus(form: FormManagement) {
    if (form.active)
      this.snackBarService.showSuccess(`${form.formName} is active now`);
    else
      this.snackBarService.showError(`${form.formName} is inactive now`);
  }

  submitFormData() {
    console.log(this.allForms.forms)
    this.snackBarService.showSuccess('Saved successfully');
  }

}
