import { Component } from "@angular/core";
import { ApiService } from "../shared";


@Component({
    selector: 'create-account',
    templateUrl: './create-account.component.html'
})
export class CreateAccount {
    isSubmitting = false;

    constructor(private apiService:ApiService) {}


    createAccount() {
        this.isSubmitting = true;
    }
}