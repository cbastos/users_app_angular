import { RequestUsers, LoadUsers } from './requestUsersAction';
import User from './entities/User';

type UserActions = LoadUsers | RequestUsers;
export function UsersReducer(users: User[] = [], action: UserActions): User[] {
	switch (action.type) {
		case RequestUsers.TYPE: {
			return Array.from(users);
		}
		case LoadUsers.TYPE: {
			return Array.from(action.users);
		}
	}
}
