export function createElement(template) {
	const newElement = document.createElement('div');
	newElement.innerHTML = template;

	return newElement.firstElementChild;
}

const pluralRules = new Intl.PluralRules('ru-RU');

export const getRewievsCountMessage = (number) => {
	switch (pluralRules.select(number)) {
		case 'one': {
			return `${number.toLocaleString('ru-RU')} отзыв`;
		}
		case 'few': {
			return `${number.toLocaleString('ru-RU')} отзыва`;
		}
		case 'many': {
			return `${number.toLocaleString('ru-RU')} отзывов`;
		}
		// case 'other'
		default: {
			return `${number.toLocaleString('ru-RU')} отзыва`;
		}
	}
};
