import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sortBy' })
export class SortByPipe implements PipeTransform {

	transform<T>(collection: Array<T>, fieldName: string): Array<T> {
		collection.sort((a: any, b: any) => {
			if (a[fieldName] < b[fieldName]) {
				return -1;
			} else if (a[fieldName] > b[fieldName]) {
				return 1;
			} else {
				return 0;
			}
		});
		return collection;
	}

}
