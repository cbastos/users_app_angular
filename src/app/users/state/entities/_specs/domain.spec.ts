import Domain from '../Domain';

describe('A domain', () => {

	it('can be created with a valid domain url', () => {
		const a_valid_domain = 'www.microsoft.com';

		const a_company = new Domain(a_valid_domain);

		expect(a_company.toString()).toEqual(a_valid_domain);
	});

	it('can NOT be created with a invalid domain url', () => {
		const a_INVALID_domain = 'www44microsoft';

		const build_invalid_domain = () => new Domain(a_INVALID_domain);

		expect(build_invalid_domain).toThrow(new Error(`The domain ${a_INVALID_domain} is invalid.`));
	});

});
