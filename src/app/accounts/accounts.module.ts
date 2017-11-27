import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule, AuthGuard } from '../shared';
import { AccountsListComponent } from './accounts-list.component';
import { AuthComponent } from '../auth/auth.component';
import { AccountDetailsComponent } from './account-details.component';
import { AccountsService } from '../shared/services/accounts.service';
// import { HomeAuthResolver } from './home-auth-resolver.service';

const accountsRouting: ModuleWithProviders = RouterModule.forChild([
    {
      path: 'accounts',
      component: AccountsListComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'accounts/:slug',
      component: AccountDetailsComponent,
      canActivate: [AuthGuard]
    }
    
  ]);

  @NgModule({
    imports: [
      accountsRouting,
      SharedModule
    ],
    declarations: [
        AccountsListComponent,
        AccountDetailsComponent
    ],
    providers: [
      AccountsService
      // HomeAuthResolver
    ]
  })
  export class AccountsModule {}