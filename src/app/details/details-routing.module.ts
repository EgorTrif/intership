import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccdetComponent } from './accdet/accdet.component';
import { DondetComponent } from './dondet/dondet.component';

const routes: Routes = [
{path: '', component: AccdetComponent },
{path: '', component: DondetComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsRoutingModule { }
