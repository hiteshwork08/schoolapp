import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})

export class SnackBarService {

    constructor(private snackBar: MatSnackBar) { }

    openSnackBar(message: string, className: string = 'default') {
        this.snackBar.open(message, '', {
            duration: 4000,
            verticalPosition: 'top',
            horizontalPosition: 'end',
            panelClass: [className],
        });
    }

    showSuccess(message: string) {
        this.openSnackBar(message, 'success');
    }

    showError(message: string) {
        this.openSnackBar(message, 'error');
    }

    showWarning(message: string) {
        this.openSnackBar(message, 'warning');
    }
}