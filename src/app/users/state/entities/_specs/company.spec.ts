import Company from '../Company';

describe('A company', () => {

	it('can be created exposing required fields', () => {
		const a_company_name = 'Keebler LLC';
		const a_catch_phrase = 'User-centric fault-tolerant solution';
		const a_bs = 'revolutionize end-to-end systems';

		const a_company = new Company(a_company_name, a_catch_phrase, a_bs);

		expect(a_company.name).toEqual(a_company_name);
		expect(a_company.catchPhrase).toEqual(a_catch_phrase);
		expect(a_company.bs).toEqual(a_bs);
	});
});
