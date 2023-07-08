import { Injectable } from '@nestjs/common';
import { readJsonFile } from '../tools';
import { UserBody, UserModel, UserObject } from '@s1m/stores/users';
@Injectable()
export class UsersService {
	private users: UserObject[] = [];

	constructor() {
		const data = readJsonFile(
			`${process.cwd()}/apps/server/data/user-list.json`
		);
		this.users = data.users;
	}

	getUsers(): UserBody {
		return { users: this.users };
	}

	getUser(id: string): UserModel {
		const user = this.users.find((candidate) => candidate.id === id);
		return user ? { user } : undefined;
	}

	addUser(user: UserObject): UserModel {
		const id = `${this.users.length + 1}`;
		const newUser: UserObject = {
			id,
			...user
		};
		this.users.push(newUser);
		return { user };
	}

	deleteUser(id: string) {
		const userIndex = this.users.findIndex((user) => user.id === id);
		return this.users.splice(userIndex, 1);
	}

	updateUser(user: UserObject): UserModel {
		const oldIndex = this.users.findIndex((item) => item.id === user.id);
		this.users[oldIndex] = user;
		return { user };
	}
}
