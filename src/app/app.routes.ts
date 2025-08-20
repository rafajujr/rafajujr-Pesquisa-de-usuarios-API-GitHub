import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Perfil } from './pages/perfil/perfil';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export const routes: Routes = [
  {
    path: '', component: Home
  },
  {
    path: 'perfil/:username', component: Perfil
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]})
  export class AppRoutingModule { }
