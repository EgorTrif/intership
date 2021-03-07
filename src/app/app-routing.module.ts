import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './authguard.service';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},
  {path: 'lists', loadChildren: () => import('./lists/lists.module').then(m => m.ListsModule), canActivate: [AuthGuardService]
  },
  { path: 'add', loadChildren: () => import('./add/add.module').then(m => m.AddModule), canActivate: [AuthGuardService]
  },
  { path: 'details/:id', loadChildren: () => import('./details/details.module').then(m => m.DetailsModule), canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
