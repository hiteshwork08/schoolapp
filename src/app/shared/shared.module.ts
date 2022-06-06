import { FormCardComponent } from './components/form-card/form-card.component';
import { NgModule } from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

const SHARED_MODULES = [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
]

@NgModule({
    declarations: [FormCardComponent],
    imports: [CommonModule,SHARED_MODULES],
    exports: [FormCardComponent, SHARED_MODULES]
})

export class SharedModule { }