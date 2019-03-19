import Email from './Email';
import Address from './Address';
import Domain from './Domain';
import Company from './Company';

export default class User {
	constructor(
		public readonly id: number,
		public readonly name: string,
		public readonly username: string,
		public readonly email: Email,
		public readonly address: Address,
		public readonly phone: string,
		public readonly website: Domain,
		public readonly company: Company,
	) { }
}