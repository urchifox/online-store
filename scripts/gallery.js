import { ITEMS_DATA } from './mock/items-data.js';
import { createElement } from './utils.js';

const gallery = document.querySelector('.gallery');

const pluralRules = new Intl.PluralRules('ru-RU');

const getRewievsCountMessage = (number) => {
	switch (pluralRules.select(number)) {
		case 'one': {
			return `${number} отзыв`;
		}
		case 'few': {
			return `${number} отзыва`;
		}
		case 'many': {
			return `${number} отзывов`;
		}
		// case 'other'
		default: {
			return `${number} отзыва`;
		}
	}
};

const getShevronTemplate = (discount, cashback, isHit) => {
	if (discount > 0) {
		return `<p class="card-small__shevron card-small__shevron_discount">Скидка ${discount}%</p>`;
	}

	if (cashback > 0) {
		return `<p class="card-small__shevron card-small__shevron_cashback">Кэшбэк ${cashback}%</p>`;
	}

	if (isHit) {
		return '<p class="card-small__shevron card-small__shevron_hit">Хит</p>';
	}
};

const getPicturesTemplate = (pictures) => pictures.reduce(
	(accumulator, picture) => `${accumulator}<img class="card-small__cover" src="images/covers/${picture}" alt="">`, '');

const getTemplate = (id, {type, brand, model, price, discount, cashback, isHit, isAvailable, rate, rewievsCount, colorOptions, pictures, memoryOptions}) => `
	<li data-id="${id}" class="card-small gallery__card-small">
		<h2 class="card-small__name">
			<a href="#" class="card-small__name-link link">${type} ${brand} ${model} ${Math.max(...memoryOptions)}, ${colorOptions[0].name}</a>
		</h2>
		${getShevronTemplate(discount, cashback, isHit)}
		<p class="card-small__price">${price}<span class="visually-hidden">рублей</span></p>
		<div class="card-item__info">
			<p class="card-small__availability">${isAvailable ? 'Есть' : 'Нет'} в наличии</p>
			<p class="card-small__rate"><span class="visually-hidden">Рейтинг</span>${rate.toFixed(1)}</p>
			<a href="#" class="card-small__reviews link">${getRewievsCountMessage(rewievsCount)}</a>
		</div>
		<a href="#" class="card-small__cover-link">
			${getPicturesTemplate(pictures)}		
		</a>
		<div class="card-small__buttons">
			<button class="card-small__buy button-solid">В корзину</button>
			<button class="card-small__favourite button-outlined ">
				<img src="images/icons/heart-icon.svg" alt="">
				<span class="visually-hidden">Добавить в избранное</span>
			</button>
			<button class="card-small__compare button-outlined ">
				<img src="images/icons/compare-icon.svg" alt="">
				<span class="visually-hidden">Добавить к сравнению</span>
			</button>
		</div>
	</li>`;

const render = (cb) => {
	const fragment = document.createDocumentFragment();

	for (const [id, item] of ITEMS_DATA) {
		const card = createElement(getTemplate(id, item));
		card.addEventListener('click', cb);
		fragment.append(card);
	}

	gallery.append(fragment);
};

export {render};
