export default class Email {
	private static REGEX = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

	constructor(private email: string) {
		if (!Email.REGEX.test(this.email)) {
			throw new Error(`The email ${this.email} is invalid.`);
		}
	}

	toString() {
		return this.email;
	}
}