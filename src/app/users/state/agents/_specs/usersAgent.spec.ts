import { UsersAgent } from '../usersAgent';
import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { API_BASE_URL } from 'src/app/constants';
import { resolve } from 'dns';
import User from '../../entities/User';

describe('The users agent', () => {
	let injector: TestBed;
	let users_agent: UsersAgent;
	let http_mock: HttpTestingController;
	const SOME_DOMAIN = 'some.api.com';

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [UsersAgent, { provide: API_BASE_URL, useValue: SOME_DOMAIN }]
		});
		injector = getTestBed();
		users_agent = injector.get(UsersAgent);
		http_mock = injector.get(HttpTestingController);
	});

	it('can retrieve users from api', (resolve) => {
		const dummy_users = [Given.a_raw_user];

		users_agent.getAll().then((users) => expect_to_have_an_user(users));
		const req = http_mock.expectOne(`${SOME_DOMAIN}/users`);
		req.flush(dummy_users);

		const expect_to_have_an_user = (users) => {
			expect(users.length).toEqual(dummy_users.length);
			resolve();
		};
	});

	it('should call the users endpoint', () => {
		users_agent.getAll();

		const req = http_mock.expectOne(`${SOME_DOMAIN}/users`);
		expect(req.request.method).toBe('GET');
	});

	it('should convert raw api users to application users', (resolve) => {
		const dummy_users = [Given.a_raw_user];

		users_agent.getAll().then((users) => expect_to_have_application_user(users));
		const req = http_mock.expectOne(`${SOME_DOMAIN}/users`);
		req.flush(dummy_users);

		const expect_to_have_application_user = (users) => {
			const [user] = users;
			expect(user instanceof User).toBeTruthy();
			resolve();
		};
	});
});

class Given {
	static get a_raw_user() {
		return {
			id: 1,
			name: "Leanne Graham",
			username: "Bret",
			email: "Sincere@april.biz",
			address: {
				street: "Kulas Light",
				suite: "Apt. 556",
				city: "Gwenborough",
				zipcode: "92998-3874",
				geo: {
					lat: "-37.3159",
					lng: "81.1496"
				}
			},
			phone: "1-770-736-8031 x56442",
			website: "hildegard.org",
			company: {
				name: "Romaguera-Crona",
				catchPhrase: "Multi-layered client-server neural-net",
				bs: "harness real-time e-markets"
			}
		};
	}
}
