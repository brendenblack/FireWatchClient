import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule, AuthGuard } from '../shared';
import { AccountsListComponent } from './accounts-list.component';
// import { HomeAuthResolver } from './home-auth-resolver.service';

const accountsRouting: ModuleWithProviders = RouterModule.forChild([
    {
      path: 'accounts',
      component: AccountsListComponent,
      canActivate: [AuthGuard]
    }
  ]);

  @NgModule({
    imports: [
      accountsRouting,
      SharedModule
    ],
    declarations: [
        AccountsListComponent
    ],
    providers: [
      // HomeAuthResolver
    ]
  })
  export class AccountsModule {}