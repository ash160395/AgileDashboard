import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgileDatatableComponent } from './agile-datatable.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';

@NgModule({
  declarations: [
    AgileDatatableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports:[
    AgileDatatableComponent
  ]
})
export class AgileDatatableModule { }
