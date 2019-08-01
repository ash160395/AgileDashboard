import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgileTeamsComponent } from './agile-teams.component';

@NgModule({
  declarations: [AgileTeamsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AgileTeamsComponent
  ]
})
export class AgileTeamsModule { }
