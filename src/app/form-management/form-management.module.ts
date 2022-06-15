import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormManagementRoutingModule } from './form-management-routing.module';
import { FormManagementComponent } from './form-management.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    FormManagementComponent
  ],
  imports: [
    CommonModule,
    FormManagementRoutingModule,
    SharedModule
  ]
})
export class FormManagementModule { }
