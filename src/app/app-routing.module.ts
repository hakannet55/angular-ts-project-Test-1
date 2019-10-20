import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ListelemeComponent } from './listeleme/listeleme.component';
import { GosterDetayComponent } from './goster-detay/goster-detay.component';


const routes: Routes = [
  { path: '', component: ListelemeComponent },
  { path: 'liste', component: ListelemeComponent },
  { path: 'detay/:id', component: GosterDetayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
