import User from '../User';
import Company from '../Company';
import Domain from '../Domain';
import Address from '../Address';
import Email from '../Email';
import Geo from '../Geo';

describe('An user', () => {

	it('can be created exposing required fields', () => {
		const an_id = 5;
		const a_name = 'Chelsey Dietrich';
		const an_username = 'Kamren';
		const an_email = new Email('Lucio_Hettinger@annie.ca');
		const an_address = new Address({
			street: 'Skiles Walks', suite: 'Suite 351', city: 'Roscoeview', zipcode: '33263', geo: new Geo('-31.8129', '62.5342')
		});
		const a_phone = '(254)954-1289';
		const a_website = new Domain('www.microsoft.com');
		const a_company = new Company('Microsoft', 'Technology rules', 'irrelevant');


		const a_user = new User(an_id, a_name, an_username, an_email, an_address, a_phone, a_website, a_company);


		expect(a_user.id).toBe(an_id);
		expect(a_user.name).toBe(a_name);
		expect(a_user.username).toBe(an_username);
		expect(a_user.address).toEqual(an_address);
		expect(a_user.email).toBe(an_email);
		expect(a_user.phone).toBe(a_phone);
		expect(a_user.website).toBe(a_website);
	});
});
