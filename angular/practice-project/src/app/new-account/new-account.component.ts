import {Component, EventEmitter, Output} from '@angular/core';
import {LoggingService} from "../services/logging.service";
import {AccountsService} from "../services/accounts.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: []
})
export class NewAccountComponent {

  constructor(private accountService: AccountsService) {
    this.accountService.onStatusChange.subscribe(
      (status: string) =>  {
        alert('New Status: ' + status);
      }
    )
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.onAccountAdded({name: accountStatus, status: accountStatus});
  }
}
