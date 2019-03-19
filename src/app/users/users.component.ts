import { Component } from '@angular/core';
import { UsersState } from './state/usersState';
import { Store } from '@ngrx/store';
import { RequestUsers } from './state/requestUsersAction';
import User from './state/entities/User';
import { Observable } from 'rxjs';

@Component({
	selector: 'org-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.css']
})
export class UsersComponent {
	users: Observable<User[]>;

	constructor(private store: Store<UsersState>) { }

	ngOnInit() {
		this.users = this.store.select(s => s.users);
		this.store.dispatch(new RequestUsers());
	}
}
