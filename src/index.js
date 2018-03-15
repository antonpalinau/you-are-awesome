// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (property) => {return this};
const createNotEnumerableProperty = (property) => {
    Object.defineProperty(Object.prototype, property, {
		enumerable: false,
		value: 'value'
	});
	return property;
};
const createProtoMagicObject = () => {
    let magic = () => {};
    magic.prototype = magic.__proto__;
    return magic;
};

let result = 0;

const incrementor = () => {
    result++;
    return incrementor;
};

incrementor.valueOf = () => result;

let asyncResult = 1;
const asyncIncrementor = async() => {
    return await asyncResult++;
};

const createIncrementer = () => {
    function* incrementor() {
		let index = 1;
		while (index <= 10) {
			yield index;
			index++;
		}
	}
	return incrementor();
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (argument) => {
    const time = n => { 
        let promise = new Promise( resolve => {
			setTimeout( () => {
				return resolve(argument);
			}, n);
		});
		return promise;
	};
	return time(1000);
};
const getDeepPropertiesCount = (object) => {

	let result = 0;
	const count = object => {
		for (let property in object) {
			if ( typeof(object[property]) === 'object' ) {
				count(object[property]);
			}
			result++;
		}
		return result;
	}

	return count(object);
};
const createSerializedObject = () => {
    let object = null;
	return object;
};
const toBuffer = () => {};
const sortByProto = (arr) => {
    return arr.filter( elem => elem.__proto__).sort( (a, b) => {
		return a - b;
	})
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;