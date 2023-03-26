export interface UserObject {
	id: number;
	roles: {};
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
			zipCode: number;
			city: string;
		};
	};
}

export interface UserModel {}

export interface UserBody {}
