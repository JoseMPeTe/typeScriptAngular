import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { InicioComponent } from './inicio/inicio.component';
import { EquipoComponent } from './equipo/equipo.component';

const routes: Routes = [
  {path:'contacto', component: ContactoComponent},
  {path:'nosotros', component: NosotrosComponent},
  {path:'inicio', component:InicioComponent},
  {path:'equipo/:id', component: EquipoComponent},
  {path:'', component:InicioComponent, pathMatch: 'full'},
  { path: '**',   redirectTo: '/', pathMatch: 'full'},
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
