function sum(x: number, y: number): number{
	return x + y
};
sum(1,2);


let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};
mySum(1,2);


function buildNamea(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}
let toma = buildNamea('Tom', 'Cat');
let tomb = buildNamea('Tom');


function buildNameb(firstName: string, lastName: string = 'Cat') {
    return firstName + ' ' + lastName;
}
let tomc = buildNameb('Tom', 'Cat');
let tomd = buildNameb('Tom');




function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}