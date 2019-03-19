import Address from '../Address';
import Geo from '../Geo';

describe('An address', () => {

	it('can be created exposing required fields', () => {
		const an_address_fields = {
			street: 'Skiles Walks',
			suite: 'Suite 351',
			city: 'Roscoeview',
			zipcode: '33263',
			geo: new Geo('-31.8129', '62.5342')
		};

		const an_address = new Address(an_address_fields);

		Object.keys(an_address_fields).forEach((property) => {
			expect(an_address[property]).toEqual(an_address_fields[property])
		});
	});
});
