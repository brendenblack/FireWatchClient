import {
    Directive,
    Input,
    OnInit,
    TemplateRef,
    ViewContainerRef
} from '@angular/core';

import { UserService } from './services/user.service';
import { ActivatedRoute } from '@angular/router';
  
  
  @Directive({ selector: '[showSidebar]' })
  export class ShowSidebarDirective implements OnInit {
    constructor(
      private templateRef: TemplateRef<any>,
      private userService: UserService,
      private viewContainer: ViewContainerRef,
      private route:ActivatedRoute
    ) {}
  
    condition: boolean;

    private excludedRoutes = [ '/', '/login', '/register' ]
  
    ngOnInit() {
        console.log("Showing the sidebar?");
      this.userService.isAuthenticated.subscribe(
        (isAuthenticated) => {
          if (isAuthenticated && this.condition || !isAuthenticated && !this.condition) {
            this.viewContainer.createEmbeddedView(this.templateRef);
          } else {
            this.viewContainer.clear();
          }
        }
      )
    }
  
    @Input() set showSidebar(condition: boolean) {
      this.condition = condition;
    }
  
  }