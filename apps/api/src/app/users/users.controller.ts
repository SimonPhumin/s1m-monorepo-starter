import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import {
	UserModel,
	UserObject,
	UsersBody,
	toUserObject
} from '@s1m/stores/users';
import { createResponse } from '../tools';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
	constructor(private usersService: UsersService) {}

	@Get()
	async getusers(): Promise<UsersBody> {
		return this.usersService.getUsers();
	}

	@Post()
	async createUser(model: UserModel): Promise<UserObject> {
		const object: UserObject = toUserObject(model);
		return this.usersService.addUser(object);
	}

	@Patch()
	async updateUser(model: UserModel): Promise<UserObject> {
		const object: UserObject = toUserObject(model);
		return this.usersService.updateUser(object);
	}

	@Delete(':id')
	async deleteUser(@Param('id') id: number): Promise<
		| UserObject
		| {
				status: { code: number; msg: string };
		  }
	> {
		this.usersService.deleteUser(id);
		return createResponse(200, `Deleted User with ID[${id}]`);
	}

	@Get(':id')
	async getUser(@Param('id') id: number): Promise<
		| UserObject
		| {
				status: { code: number; msg: string };
		  }
	> {
		const user = this.usersService.getUser(id);
		return user ? user : this.userNotFound(id);
	}

	private userNotFound(id: number) {
		return createResponse(412, `Non existing User-ID[${id}].`);
	}
}
