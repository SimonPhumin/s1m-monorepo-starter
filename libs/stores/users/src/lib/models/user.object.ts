import { UserModel } from './user.model';

export interface UserObject {
	id: number;
	roles: {
		admin: boolean;
	};
	info: {
		firstName: string;
		lastName: string;
		email: string;
		phone: string;
		address: {
			country: string;
			countryShortCode: string;
			street: string;
			streetNumber: string;
			zipCode: string;
			city: string;
		};
	};
}

export const toUserObject = (model: UserModel): UserObject => {
	const {
		id,
		isAdmin,
		firstName,
		lastName,
		email,
		phone,
		country,
		countryShortCode,
		street,
		streetNumber,
		zipCode,
		city
	} = model;

	return {
		id: id,
		roles: {
			admin: isAdmin
		},
		info: {
			firstName: firstName,
			lastName: lastName,
			email: email,
			phone: phone,
			address: {
				country: country,
				countryShortCode: countryShortCode,
				street: street,
				streetNumber: streetNumber,
				zipCode: zipCode,
				city: city
			}
		}
	};
};

export interface UsersBody {
	users: UserObject[];
	pages?: PageInfo;
}

// move to a more common location
export interface PageInfo {
	prev: string;
	next: string;
	stats: {
		currentPage: number;
		pageSize: number;
		pagesTotal: number;
		itemsTotal: number;
	};
}
