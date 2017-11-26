import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { 
  ApiService,
  JwtService,
  AuthGuard,
  SharedModule,
  UserService,
  HeaderComponent, 
  FooterComponent,
  SidebarComponent
 } from './shared';
import { AuthModule } from './auth/auth.module';
import { AccountsModule } from './accounts/accounts.module';


const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    rootRouting,
    AccountsModule,
    AuthModule,
    HomeModule,
    SharedModule
  ],
  providers: [
    ApiService,
    AuthGuard,
    JwtService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
