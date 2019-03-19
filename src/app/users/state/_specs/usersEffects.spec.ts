
import { TestBed } from '@angular/core/testing';
import { UsersEffects } from '../usersEffects';
import { UsersAgent } from '../agents/usersAgent';
import { provideMockActions } from '@ngrx/effects/testing';
import { ReplaySubject } from 'rxjs';
import { RequestUsers, LoadUsers } from '../requestUsersAction';
import { Given } from './given';

describe('The users actions side effects', () => {
	let usersEffects;
	let actions: ReplaySubject<any>;
	const application_users_from_agent = [Given.an_application_user];
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [],
			providers: [
				UsersEffects,
				{
					provide: UsersAgent,
					useValue: { getAll() { return Promise.resolve(application_users_from_agent); } }
				},
				provideMockActions(() => actions)
			]
		});
		usersEffects = TestBed.get(UsersEffects);
	});

	describe('when users are requested', () => {

		it('should retrieve users calling user agent', () => {
			actions = new ReplaySubject(1);
			actions.next(new RequestUsers());

			usersEffects[RequestUsers.TYPE].subscribe(result => {

				expect(result).toEqual(new LoadUsers(application_users_from_agent));
			});
		});

	});

});