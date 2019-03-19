import Geo from './Geo';

export default class Address {
	readonly street: string;
	readonly suite: string;
	readonly city: string;
	readonly zipcode: string;
	readonly geo: Geo;

	constructor(
		addressFields: { street: string, suite: string, city: string, zipcode: string, geo: Geo }
	) {
		this.street = addressFields.street;
		this.suite = addressFields.suite;
		this.city = addressFields.city;
		this.zipcode = addressFields.zipcode;
		this.geo = addressFields.geo;
	}
}