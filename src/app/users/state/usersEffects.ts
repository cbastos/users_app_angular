import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap } from 'rxjs/operators';

import { RequestUsers, LoadUsers } from './requestUsersAction';
import { UsersAgent } from './agents/usersAgent';
import { Action } from '@ngrx/store';

@Injectable()
export class UsersEffects {

	constructor(
		private usersAgent: UsersAgent,
		private actions: Actions
	) { }

	@Effect()
	[RequestUsers.TYPE]: Observable<Action> = this.actions.
		pipe(ofType<RequestUsers>(RequestUsers.TYPE))
		.pipe(mergeMap(async () => {
			const users = await this.usersAgent.getAll();
			return new LoadUsers(users);
		}));
	;
}
