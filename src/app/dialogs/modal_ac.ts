import { MatDialog } from '@angular/material/dialog';
import { dialog1 } from './dialog1';

export class modal_ac{
    title:string="";
    content:string="";
    constructor(title:string,content:string, public dialog: MatDialog){
        this.title=title;
        this.content=content;
        this.modalAc();
    }
    modalAc():void{
        const dialogRef = this.dialog.open(dialog1, {
            width: '250px',
            data: { "title": this.title,"content": this.content }
          });
    }
}