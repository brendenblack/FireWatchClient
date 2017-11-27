import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
import { User, AccountDetails, Transaction } from '../models';

@Injectable()
export class AccountsService {
  private currentUserSubject = new BehaviorSubject<User>(new User());
  public currentUser = this.currentUserSubject.asObservable().distinctUntilChanged();

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor (
    private apiService: ApiService,
    private http: Http
  ) {}
  

  getAccountDetails(slug:string) : Observable<AccountDetails> {
    console.log("Fetching account with slug " + slug);
    
    return this.apiService.get('/accounts/' + slug);
  }

  getTransactions(slug:string, startDate: Date, endDate: Date): Observable<Transaction[]> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('startDate', startDate.toISOString());
    params.set('endDate', endDate.toISOString());
    return this.apiService.get(`/accounts/${slug}/transactions`, params).map(data => data) ;
  }


}