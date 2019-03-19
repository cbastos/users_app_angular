import { Injectable, Inject, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from '../../../constants';
import User from '../entities/User';
import UserDTO from './userDTO';
import Address from '../entities/Address';
import Geo from '../entities/Geo';
import Email from '../entities/Email';
import Domain from '../entities/Domain';
import Company from '../entities/Company';

@Injectable()
export class UsersAgent {
	constructor(public http: HttpClient, @Optional() @Inject(API_BASE_URL) private domainUrl?) { }

	getAll(): Promise<User[]> {
		return this.http.get<UserDTO[]>(`${this.domainUrl}/users`)
			.toPromise()
			.then((users) => users.map(this.fromUserDTOtoEntity));
	}

	private fromUserDTOtoEntity(user: UserDTO): User {
		const address = new Address({
			city: user.address.city,
			street: user.address.street,
			suite: user.address.suite,
			zipcode: user.address.zipcode,
			geo: new Geo(user.address.geo.lat, user.address.geo.lng)
		});
		const email = new Email(user.email);
		const website = new Domain(user.website);
		const company = new Company(user.company.name, user.company.catchPhrase, user.company.bs);
		return new User(
			user.id,
			user.name,
			user.username,
			email,
			address,
			user.phone,
			website,
			company
		);
	}
}
