import User from '../entities/User';
import Email from '../entities/Email';
import Address from '../entities/Address';
import Domain from '../entities/Domain';
import Geo from '../entities/Geo';
import Company from '../entities/Company';

export class Given {

	static get an_application_user(): User {
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

		return new User(an_id, a_name, an_username, an_email, an_address, a_phone, a_website, a_company);
	}
}
