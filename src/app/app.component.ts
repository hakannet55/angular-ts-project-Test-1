import { Component, PipeTransform, Pipe, Directive, OnChanges, ElementRef, Input, SimpleChanges, Sanitizer, SecurityContext } from '@angular/core';
import { MyAppModel } from './model';
import { DomSanitizer, SafeHtml, BrowserModule } from '@angular/platform-browser';
import { element, $ } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.main.html',
  styleUrls: ['./app.component.css'
  ]
})

export class AppComponent {

}