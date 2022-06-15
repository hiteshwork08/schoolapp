import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormManagementComponent } from './form-management.component';

const routes: Routes = [
  {
    path:'',
    component:FormManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormManagementRoutingModule { }
