import { UsersComponent } from '../users.component';
import { TestBed, tick } from '@angular/core/testing';
import { UsersAgent } from '../state/agents/usersAgent';
import { Given } from '../state/_specs/given';
import { By, BrowserModule } from '@angular/platform-browser';
import { SortByPipe } from '../sortBy.pipe';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UsersReducer } from '../state/usersReducer';
import { UsersEffects } from '../state/usersEffects';
import { UsersState } from '../state/usersState';

describe('The users list', () => {
	const api_users = [Given.an_application_user];

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				BrowserModule,
				StoreModule.forRoot<UsersState>({ users: UsersReducer }),
				EffectsModule.forRoot([UsersEffects])
			],
			declarations: [UsersComponent, SortByPipe],
			providers: [
				{
					provide: UsersAgent,
					useValue: {
						getAll() {
							return Promise.resolve(api_users)
						}
					}
				}
			]
		});

	});

	it('should render an user fields', (resolve) => {
		let users_fixture = TestBed.createComponent(UsersComponent);

		users_fixture.autoDetectChanges();

		users_fixture.whenStable().then(() => {
			let [first_user_rendered_fieldset] = users_fixture.debugElement.queryAll(By.css('fieldset'));
			const user_fields_html = first_user_rendered_fieldset.nativeElement.innerHTML;
			let [first_api_user] = api_users;

			expect_user_info_is_rendered_in(user_fields_html, first_api_user);
			expect_company_is_rendered_in(user_fields_html, first_api_user.company);
			expect_address_is_rendered_in(user_fields_html, first_api_user.address);
			resolve();
		});
	});

	function expect_user_info_is_rendered_in(html, user) {
		expect(html.includes(user.name)).toBeTruthy();
		expect(html.includes(user.id)).toBeTruthy();
		expect(html.includes(user.username)).toBeTruthy();
		expect(html.includes(user.phone)).toBeTruthy();
		expect(html.includes(user.website)).toBeTruthy();
	}

	function expect_company_is_rendered_in(html, company) {
		expect(html.includes(company.bs)).toBeTruthy();
		expect(html.includes(company.catchPhrase)).toBeTruthy();
		expect(html.includes(company.name)).toBeTruthy();
	}

	function expect_address_is_rendered_in(html, address) {
		expect(html.includes(address.city)).toBeTruthy();
		expect(html.includes(address.suite)).toBeTruthy();
		expect(html.includes(address.zipcode)).toBeTruthy();
		expect(html.includes(address.street)).toBeTruthy();
		expect(html.includes(address.geo.lat)).toBeTruthy();
		expect(html.includes(address.geo.lng)).toBeTruthy();
	}

	it('should render a field set for each user retrieved from api (trought users agent)', (resolve) => {
		let users_fixture = TestBed.createComponent(UsersComponent);

		users_fixture.autoDetectChanges();

		users_fixture.whenStable().then(() => {

			let fieldsets = users_fixture.debugElement.queryAll(By.css('fieldset'));
			expect(fieldsets.length).toBe(api_users.length);
			resolve();
		});
	});

});