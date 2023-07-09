import { UserObject } from './user.object';

export interface UserModel {
	id: number;
	isAdmin: boolean;
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	country: string;
	countryShortCode: string;
	street: string;
	streetNumber: string;
	zipCode: string;
	city: string;
}

export const toUserModel = (object: UserObject): UserModel => {
	const { id, roles, info } = object;
	return {
		id,
		isAdmin: roles.admin,
		firstName: info.firstName,
		lastName: info.lastName,
		email: info.email,
		phone: info.phone,
		country: info.address.country,
		countryShortCode: info.address.countryShortCode,
		street: info.address.street,
		streetNumber: info.address.streetNumber,
		zipCode: info.address.zipCode,
		city: info.address.city
	};
};
