import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgileSideNavComponent } from './agile-side-nav.component';
import { MatIconModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AgileSideNavComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  exports:[
    AgileSideNavComponent
  ]
})
export class AgileSideNavModule { }

