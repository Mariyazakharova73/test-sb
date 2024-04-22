import { encoded, translations } from './data.js';

const getDecryptedData = (data, dictionary) => {
	return data.map(item => {
		return Object.fromEntries(
			Object.entries(item).map(([key, value]) => {
				if (value === null) {
					return [key, null];
				}

				if (
					key === 'groupId' ||
					key === 'service' ||
					key === 'formatSize' ||
					key === 'ca'
				) {
					return [key, value];
				}

				if (dictionary[value] === undefined) {
					console.log(`Такого ключа нет в словаре`);
					return [key, value];
				}

				return [key, dictionary[value]];
			})
		);
	});
};

const decoded = getDecryptedData(encoded, translations);

function getUniqueValues(arr) {
	let result = [];
	arr.forEach(item => {
		for (let key in item) {
			if (item[key] === null || key === 'groupId' || key === 'formatSize') {
				continue;
			} else {
				result = [...result, item[key]];
			}
		}
	});
	return [...new Set(result)];
}

console.log(decoded);
console.log(getUniqueValues(encoded));
