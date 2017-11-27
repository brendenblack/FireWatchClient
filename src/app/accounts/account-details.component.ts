import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { AccountsService } from '../shared/services/accounts.service';
import { AccountDetails } from '../shared';


@Component({
  selector: 'account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private accountService: AccountsService
  ) {}

  account: AccountDetails

  ngOnInit() {
    this.route.params.subscribe(params => {
        let slug = params['slug'];
        this.accountService.getAccountDetails(slug).subscribe(a => {
          this.account = new AccountDetails();
          this.account.slug = a.slug;
          this.account.name = a.name;
          this.account.id = a.id;
          console.log(this.account);
        });
    })

      
    // this.userService.isAuthenticated.subscribe(
    //   (authenticated) => {
    //     this.isAuthenticated = authenticated;
    //   }
    // );

  }

}