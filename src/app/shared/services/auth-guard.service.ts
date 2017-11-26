import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { UserService } from './user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {

    let isAuthenticated:boolean = false;
    this.userService.isAuthenticated.take(1).subscribe(e => isAuthenticated = e);
    if (isAuthenticated) {
      return Observable.of(true)
    }
    else {
      this.router.navigate(['/login']);
    }

    return Observable.of(false);
  }
}