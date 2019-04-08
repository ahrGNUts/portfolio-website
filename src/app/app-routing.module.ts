import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';

const appRoutes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
