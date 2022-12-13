export interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
}

export interface User {
	id: number;
	name: string;
	username: string;
	email: string;
	phone: string;
	website: string;
	address: Address;
	company: Company;
}

interface Address {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: Geo;
}

interface Company {
	name: string;
	catchPhrase: string;
	bs: string;
}

interface Geo {
	lat: string;
	lng: string;
}

export interface PostComment {
	id: number;
	postId: number;
	name: string;
	email: string;
	body: string;
}
