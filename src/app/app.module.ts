import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AgileDashboardModule } from './agile-dashboard/agile-dashboard.module';
import { AgileDatatableModule } from './agile-datatable/agile-datatable.module';
import { AgileSideNavModule } from './agile-side-nav/agile-side-nav.module';
import { AppRoutingModule } from './app-routing.module';
import { AgileTeamsModule } from './agile-teams/agile-teams.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AgileDashboardModule,
    AgileDatatableModule,
    AgileSideNavModule,
    AgileTeamsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
