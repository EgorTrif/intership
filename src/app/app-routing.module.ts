import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { HomeComponent } from './core/home/home.component';
import { AuthGuardService } from './services/authguard.service';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},
  {path: 'lists', loadChildren: () => import('./modules/lists/lists.module').then(m => m.ListsModule), canActivate: [AuthGuardService], 
  },
  { path: 'add', loadChildren: () => import('./modules/add/add.module').then(m => m.AddModule), canActivate: [AuthGuardService] 
  },
  { path: 'details/:id', loadChildren: () => import('./modules/details/details.module').then(m => m.DetailsModule), canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
