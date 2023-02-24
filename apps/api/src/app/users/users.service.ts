import { Injectable } from '@nestjs/common';
import { readJsonFile } from '../tools';
@Injectable()
export class UsersService {
	private users: UserObject[] = [];

	constructor() {
		const data = readJsonFile(
			`${process.cwd()}/apps/server/data/user-list.json`
		);
		this.users = data.users;
	}

	getUsers(): Users {
		return { users: this.users };
	}

	getUser(uuid: string): UserModel {
		const user = this.users.find((candidate) => candidate.uuid === uuid);
		return user ? { user } : undefined;
	}

	addUser(user: UserObject): UserModel {
		const uuid = `${this.users.length + 1}`;
		const newUser: UserObject = {
			uuid,
			...user
		};
		this.users.push(newUser);
		return { user };
	}

	deleteUser(uuid: string) {
		const userIndex = this.users.findIndex((user) => user.uuid === uuid);
		this.users.splice(userIndex, 1);
	}

	updateUser(user: UserObject): UserModel {
		const oldIndex = this.users.findIndex(
			(item) => item.uuid === user.uuid
		);
		this.users[oldIndex] = user;
		return { user };
	}
}
