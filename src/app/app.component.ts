import { Component, PipeTransform, Pipe, Directive, OnChanges, ElementRef, Input, SimpleChanges, Sanitizer, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml, BrowserModule } from '@angular/platform-browser';
import { element, $ } from 'protractor';
import { MatDialog, MatDialogRef } from '@angular/material';
import { modal_ac } from './dialogs/modal_ac';
import { dialog1 } from './dialogs/dialog1';

@Component({
  selector: 'app-root',
  templateUrl: './app.main.html',
  styleUrls: ['./app.component.css'
  ]
})

export class AppComponent {
constructor(public dialog: MatDialog){}

  modal_ac(title: String, content: String) {
    this.dialog.open(
      dialog1,
      {data:{"title":title,"content":content}}
    );
  }
}