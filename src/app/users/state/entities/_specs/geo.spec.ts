import Geo from '../Geo';

describe('A geo point', () => {

	it('can be created exposing required fields', () => {
		const a_latitude = '-31.8129';
		const a_longitude = '62.5342';

		const a_geo_point = new Geo(a_latitude, a_longitude);

		expect(a_geo_point.lat).toEqual(a_latitude);
		expect(a_geo_point.lng).toEqual(a_longitude);
	});
});
