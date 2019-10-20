import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListelemeComponent } from './listeleme/listeleme.component';
import { GosterDetayComponent } from './goster-detay/goster-detay.component';


@NgModule({
  declarations: [AppComponent,
    ListelemeComponent,
    GosterDetayComponent
  ],
  imports: [FormsModule,
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
