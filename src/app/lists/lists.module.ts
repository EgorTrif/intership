import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsRoutingModule } from './lists-routing.module';
import { ListsComponent } from './lists.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListsComponent],
  imports: [
    CommonModule,
    ListsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ListsModule { }
