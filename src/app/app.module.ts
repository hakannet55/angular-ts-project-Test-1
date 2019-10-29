import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule,FormGroup,FormBuilder } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatDialogModule,
  MAT_DIALOG_DATA,MatToolbarModule,MatIconModule,MatCheckboxModule,
  MAT_DIALOG_DEFAULT_OPTIONS, MatDialogRef, MatRadioModule, MatFormFieldModule 
} from '@angular/material';
import {SearchPipe} from './custom_pipe/searchPipe';

import { dialog1 } from './dialogs/dialog1';
import { AppComponent } from './app.component';
import { ListelemeComponent } from './listeleme/listeleme.component';
import { GosterDetayComponent } from './goster-detay/goster-detay.component';
import { AddNewComponent } from './pages/addNew/addNew.component';

@NgModule({
  declarations: [AppComponent,
    ListelemeComponent,
    GosterDetayComponent, dialog1,SearchPipe,AddNewComponent
  ],
  entryComponents: [dialog1],
  imports: [
    FormsModule,
    BrowserModule, MatToolbarModule, MatIconModule,
    AppRoutingModule, ReactiveFormsModule,
    BrowserAnimationsModule, MatButtonModule, MatDialogModule,
    AgGridModule.withComponents([AppComponent, ListelemeComponent, GosterDetayComponent]),
    HttpClientModule,MatFormFieldModule,MatCheckboxModule,MatRadioModule
  ],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: {} }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
