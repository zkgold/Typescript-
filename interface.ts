interface Person {
	readonly id: number; 
	name: string;
	age: number;
	probably?: any;
	[propName: string]: any;
}
let me: Person = {
	id: 01,
	name: 'zk',
	age: 20,
}