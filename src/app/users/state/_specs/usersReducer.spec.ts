import { UsersReducer } from '../usersReducer';
import { RequestUsers, LoadUsers } from '../requestUsersAction';
import { Given } from './given';

describe('The users reducer (a.k.a user action handlers)', () => {

	it('should not mofidy current state users if users are requested', () => {
		const state_users = [];

		const new_state_users = UsersReducer(state_users, new RequestUsers());

		expect(new_state_users).toEqual(state_users);
	});

	it('should load to current state users list an specific user list', () => {
		const state_users = [];
		const an_user = Given.an_application_user;

		const [new_state_user] = UsersReducer(state_users, new LoadUsers([an_user]));

		expect(new_state_user).toEqual(an_user);
	});

});
