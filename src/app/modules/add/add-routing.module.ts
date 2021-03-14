import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddaccComponent } from './addacc/addacc.component';
import { AdddonComponent } from './adddon/adddon.component';

const routes: Routes = [
  { path: '', component: AddaccComponent },
  { path: '', component: AdddonComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddRoutingModule { }
