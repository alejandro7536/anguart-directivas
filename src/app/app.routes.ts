import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuarioRoutingModule } from './components/usuario/usuario.routes';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: '**', pathMatch: 'full', component: HomeComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true}),
    UsuarioRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
