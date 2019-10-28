import { Component, Inject, Injectable } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

interface DialogData {
    title: string;
    name: string;
}

@Component({
    selector: 'mat-dialog',
    templateUrl: 'dialog1.html',
    styles: [],
    providers: []
})
@Injectable()
export class dialog1 {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

}