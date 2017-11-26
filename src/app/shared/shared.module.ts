import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ShowAuthedDirective } from './show-authed.directive';
import { ListErrorsComponent } from './list-errors.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShowSidebarDirective } from './show-sidebar.directive';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      HttpModule,
      RouterModule,
      NgbModule
    ],
    declarations: [
      ShowAuthedDirective,
      ShowSidebarDirective,
      ListErrorsComponent
    ],
    exports: [ 
      CommonModule,  
      FormsModule,
      ReactiveFormsModule,
      HttpModule,
      ListErrorsComponent,
      RouterModule,
      ShowSidebarDirective,
      ShowAuthedDirective
    ]
  })
  export class SharedModule {}