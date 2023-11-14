import { createElement } from './utils.js';

const pluralRules = new Intl.PluralRules('ru-RU');

const getRewievsCountMessage = (number) => {
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

	return '';
};

const getPriceText = (price, discount) => {
	if (discount > 0) {
		const oldPrice = price;
		const newPrice = price * (100 - discount) / 100;
		return `<p class="card-small__price">
					<span class="card-small__price-current">${newPrice.toLocaleString('ru-RU')}
						<span class="visually-hidden">рублей</span>
					</span>
					<s class="card-small__price-old">${oldPrice.toLocaleString('ru-RU')}
						<span class="visually-hidden">рублей</span>
					</s>
				</p>`;
	}

	return `<p class="card-small__price">
				<span class="card-small__price-current">${price.toLocaleString('ru-RU')}
					<span class="visually-hidden">рублей</span>
				</span>
			</p>`;
};

const getPicturesTemplate = (pictures) => pictures.reduce(
	(accumulator, picture) => `${accumulator}<img class="card-small__cover" src="images/covers/${picture}" alt="">`, '');

const getTemplate = (id, {type, brand, model, price, discount, cashback, isHit, isAvailable, rate, rewievsCount, colorOptions, pictures, memoryOptions}) => `
	<li data-id="${id}" class="card-small gallery__card-small">
		<h2 class="card-small__name">
			<a href="#" class="card-small__name-link link">${type} ${brand} ${model} ${Math.max(...memoryOptions)}Gb, ${colorOptions[0].name}</a>
		</h2>
		${getShevronTemplate(discount, cashback, isHit)}
		${getPriceText(price, discount)}
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

const render = (id, item) => createElement(getTemplate(id, item));

export {render};
