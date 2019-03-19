import { Action } from '@ngrx/store';
import User from './entities/User';

export class RequestUsers implements Action {
	static readonly TYPE = 'REQUEST_USERS';
	readonly type = RequestUsers.TYPE;
}

export class LoadUsers implements Action {
	static readonly TYPE = 'LOAD_USERS';
	readonly type = LoadUsers.TYPE;

	constructor(public users: User[]) { }
}