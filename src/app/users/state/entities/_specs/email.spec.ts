import Email from '../Email';

describe('A email', () => {

	it('can be created with a valid email address', () => {
		const a_valid_email = 'a_valid_email@domain.es';

		const an_email = new Email(a_valid_email);

		expect(an_email.toString()).toEqual(a_valid_email);
	});

	it('can NOT be created with a invalid email address', () => {
		const a_INVALID_email = 'invalid@domain';

		const build_invalid_domain = () => new Email(a_INVALID_email);

		expect(build_invalid_domain).toThrow(new Error(`The email ${a_INVALID_email} is invalid.`));
	});

});
