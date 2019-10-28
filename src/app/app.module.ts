import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListelemeComponent } from './listeleme/listeleme.component';
import { GosterDetayComponent } from './goster-detay/goster-detay.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatDialogModule, MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, MatDialogRef } from '@angular/material';
import { dialog1 } from './dialogs/dialog1';

@NgModule({
  declarations: [AppComponent,
    ListelemeComponent,
    GosterDetayComponent, dialog1
  ],
  entryComponents: [dialog1],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule, ReactiveFormsModule,
    BrowserAnimationsModule, MatButtonModule, MatDialogModule,
    AgGridModule.withComponents([AppComponent, ListelemeComponent, GosterDetayComponent]),
    HttpClientModule
  ],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: {} }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
