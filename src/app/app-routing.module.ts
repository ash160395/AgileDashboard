import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgileDatatableComponent } from './agile-datatable/agile-datatable.component';
import { AgileDashboardComponent } from './agile-dashboard/agile-dashboard.component';
import { AgileTeamsComponent } from './agile-teams/agile-teams.component';

const routes: Routes = [
  {path: '', component: AgileDatatableComponent},
  {path: 'dashboard', component: AgileDashboardComponent},
  {path: 'teams', component: AgileTeamsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
