import { Injectable } from '@nestjs/common';
import { readJsonFile } from './../tools';
import { UsersBody, UserObject } from '@s1m/stores/users';
@Injectable()
export class UsersService {
	private users: UserObject[] = [];

	constructor() {
		const data = readJsonFile(`${process.cwd()}/apps/api/data/users.json`);
		this.users = data.users;
	}

	getUsers(): UsersBody {
		return { users: this.users };
	}

	getUser(id: number): UserObject {
		const user = this.users.find((candidate) => candidate.id === id);
		return user ?? undefined;
	}

	addUser(user: UserObject): UserObject {
		const id = `${this.users.length + 1}`;
		const newUser: UserObject = {
			id,
			...user
		};
		this.users.push(newUser);
		return user;
	}

	deleteUser(id: number) {
		const userIndex = this.users.findIndex((user) => user.id === id);
		return this.users.splice(userIndex, 1);
	}

	updateUser(user: UserObject): UserObject {
		const oldIndex = this.users.findIndex((item) => item.id === user.id);
		this.users[oldIndex] = user;
		return user;
	}
}
