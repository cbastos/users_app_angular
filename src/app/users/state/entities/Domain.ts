export default class Domain {
	private static REGEX = /^(?!:\/\/)([a-zA-Z0-9-_]+\.)*[a-zA-Z0-9][a-zA-Z0-9-_]+\.[a-zA-Z]{2,11}?$/;

	constructor(private domain: string) {
		if (!Domain.REGEX.test(this.domain)) {
			throw new Error(`The domain ${this.domain} is invalid.`);
		}
	}

	toString() {
		return this.domain;
	}
}
