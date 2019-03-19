import { SortByPipe } from '../sortBy.pipe';

describe('The sort by field pipe', () => {

	it('should sort elements by some property specified by param', () => {
		const field_name = 'some_irrelevant_field_name';
		const some_list = [
			{ [field_name]: 'bbbb' },
			{ [field_name]: 'aaaa' },
			{ [field_name]: 'dddd' },
			{ [field_name]: 'cccc' }
		];
		const pipe = new SortByPipe();

		const result = pipe.transform(some_list, field_name);

		expect(result).toEqual([
			{ [field_name]: 'aaaa' },
			{ [field_name]: 'bbbb' },
			{ [field_name]: 'cccc' },
			{ [field_name]: 'dddd' }
		])
	});
});
