function sum(x, y) {
    return x + y;
}
;
sum(1, 2);
var mySum = function (x, y) {
    return x + y;
};
mySum(1, 2);
function buildNamea(firstName, lastName) {
    if (lastName) {
        return firstName + ' ' + lastName;
    }
    else {
        return firstName;
    }
}
var toma = buildNamea('Tom', 'Cat');
var tomb = buildNamea('Tom');
function buildNameb(firstName, lastName) {
    if (lastName === void 0) { lastName = 'Cat'; }
    return firstName + ' ' + lastName;
}
var tomc = buildNameb('Tom', 'Cat');
var tomd = buildNameb('Tom');
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
