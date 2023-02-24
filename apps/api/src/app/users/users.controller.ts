import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post
} from '@nestjs/common';
import { UserModel, Users } from '@s1m/common/data';
import { Observable } from 'rxjs';
import { createResponse } from '../tools';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Get()
	getusers(): Observable<Users> {
		return this.usersService.getUsers();
	}

	@Post()
	createUser(@Body() body: UserModel): Observable<Users> {
		const { user } = body;
		return this.usersService.addUser(user);
	}

	@Patch()
	updateUser(@Body() body: UserModel): Observable<Users> {
		const { user } = body;
		return this.usersService.updateUser(user);
	}

	// @Delete(':uuid')
	// deleteUser(@Param('uuid') uuid: string): Observable<Users> {
	// 	return this.usersService.deleteUser(uuid);
	// }

	@Get(':uuid')
	getUser(@Param('uuid') uuid: string): Observable<Users> {
		const user = this.usersService.getUser(uuid);
		return user ? user : this.userNotFound(uuid);
	}

	private userNotFound(uuid: string) {
		return createResponse(412, `Non existing UUID[${uuid}].`);
	}
}
