import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { AddRoutingModule } from './add-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddaccComponent } from './addacc/addacc.component';
import { AdddonComponent } from './adddon/adddon.component';



@NgModule({
  declarations: [ AddaccComponent, AdddonComponent ],
  imports: [
    CommonModule,
    AddRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ]
})
export class AddModule { }
