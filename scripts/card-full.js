import { ITEMS_DATA } from './mock/items-data.js';
import { createElement, getRewievsCountMessage } from './utils.js';

const root = document.querySelector('main');

const getMemoryInputTemplate = (memoryOptions) => memoryOptions.reduce((accumulator, memoryOption) => /*html*/`${accumulator}
		<label class="card-full__memory-label">
			${memoryOption}Gb
			<input type="radio" name="memory" value="${memoryOption}" class="visually-hidden">
		</label>
	`, '');

const getColorInputTemplate = (colorOptions) => colorOptions.reduce((accumulator, colorOption) => /*html*/`${accumulator}
		<label class="card-full__color-label" style="background-color: #${colorOption.code};">
			<span class="visually-hidden">${colorOption.name}</span>
			<input type="radio" name="color" value="${colorOption.name}" class="visually-hidden">
		</label>
	`, '');

const getPicturesTemplate = (pictures) => pictures.reduce((accumulator, picture, index) => {
	if (index === 0) {
		return /*html*/`${accumulator}
			<li class="card-full__picture-item card-full__picture-item_big">
				<img src="./images/covers/${picture}" alt="" class="card-full__picture">
			</li>`;
	}

	return /*html*/`${accumulator}
		<li class="card-full__picture-item"  tabindex="1">
			<img src="./images/covers/${picture}" alt="" class="card-full__picture">
		</li>`;
}, '');

const gerDescriptionTemplate = (description) => description.split(/\n/).reduce((accumulator, text) => `${accumulator}
		<p class="card-full__description">
			${text}
		</p>`
, '');

const getTemplate = ({type, brand, model, price, discount, cashback, isHit, isAvailable, rate, rewievsCount, pictures, memoryOptions, colorOptions, description, screenDiagonal, resolution, ram, battery, cameraCount, year, displayType}) =>
	/*html*/`<article class="card-full">
	<div class="card-full__info-container">
		<h1 class="card-full__name">${type} ${brand} ${model}, ${Math.max(memoryOptions)}, ${colorOptions[0].name}</h1>
		<div class="card-full__info">
			<p class="card-full__availability">${isAvailable ? 'Есть' : 'Нет'} в наличии</p>
			<div class="card-full__rating-container">
				<span class="visually-hidden">Рейтинг ${rate} из пяти</span>
				<div class="card-full__rate-icons-container" aria-hidden>
					<img src="./images/icons/star-icon.svg" alt="" class="card-full__rate-icon" width="17" height="17">
					<img src="./images/icons/star-icon.svg" alt="" class="card-full__rate-icon" width="17" height="17">
					<img src="./images/icons/star-icon.svg" alt="" class="card-full__rate-icon" width="17" height="17">
					<img src="./images/icons/star-icon.svg" alt="" class="card-full__rate-icon" width="17" height="17">
					<img src="./images/icons/star-icon.svg" alt="" class="card-full__rate-icon" width="17" height="17">
				</div>
				<a href="#" class="card-full__link link">${getRewievsCountMessage(rewievsCount)}</a>
			</div>
		</div>
		<form action="" class="card-full__form">
			<section class="card-full__section">
				<h2 class="card-full__subtitle">Объем памяти</h2>
				<div class="card-full__memory-labels-container">
					${getMemoryInputTemplate(memoryOptions)}
				</div>
			</section>
			<section class="card-full__section">
				<h2 class="card-full__subtitle">Цвет</h2>
				<div class="card-full__color-labels-container">
					${getColorInputTemplate(colorOptions)}
				</div>
			</section>
		</form>
		<section class="card-full__section">
			<div class="card-full__features-title">
				<h3 class="card-full__subtitle">Характеристики</h3>
				<a href="#features" class="card-full__link link">Все характеристики</a>
			</div>
			<dl class="card-full__features">
				<div class="card-full__feature-row">
					<dt class="card-full__feature-name">Диагональ экрана, в дюймах:  </dt>
					<dd class="card-full__feature-value">${screenDiagonal}</dd>
				</div>
				<div class="card-full__feature-row">
					<dt class="card-full__feature-name">Разрешение экрана, в пикселях: </dt>
					<dd class="card-full__feature-value">${resolution}</dd>
				</div>
				<div class="card-full__feature-row">
					<dt class="card-full__feature-name">Встроенная память, в Гб: </dt>
					<dd class="card-full__feature-value">${Math.max(memoryOptions)}</dd>
				</div>
				<div class="card-full__feature-row">
					<dt class="card-full__feature-name">Оперативная память, в Гб: </dt>
					<dd class="card-full__feature-value">${ram}</dd>
				</div>
				<div class="card-full__feature-row">
					<dt class="card-full__feature-name">Емкость аккумулятора, в мА-ч: </dt>
					<dd class="card-full__feature-value">${battery}</dd>
				</div>
				<div class="card-full__feature-row">
					<dt class="card-full__feature-name">Количество основных камер: </dt>
					<dd class="card-full__feature-value">${cameraCount}</dd>
				</div>
				<div class="card-full__feature-row">
					<dt class="card-full__feature-name">Год выхода модели: </dt>
					<dd class="card-full__feature-value">${year}</dd>
				</div>
				<div class="card-full__feature-row">
					<dt class="card-full__feature-name">Тип дисплея:</dt>
					<dd class="card-full__feature-value">${displayType}</dd>
				</div>
			</dl>
		</section>
		<div class="card-full__buying-container">
			<p class="card-full__price">Цена: <b class="card-full__price-value">${price.toLocaleString('ru-RU')} <span class="visually-hidden">рублей</span></b></p>
			<button class="card-full__button button-solid">Добавить в корзину</button>
			<button class="card-full__button button-outlined">Рассрочка от <span class="card-full__installment">10800</span><span class="visually-hidden">рублей в месяц</span></button>
		</div>
	</div>

	<div class="card-full__pictures-container">
		<ul class="card-full__pictures-list">
			${getPicturesTemplate(pictures)}
			<li class="card-full__picture-item" tabindex="1">
				<img src="./images/covers/APPLE-IPhone-11-Pro-black-1.png" alt="" class="card-full__picture">
			</li>
			<li class="card-full__picture-item" tabindex="1">
				<img src="./images/covers/APPLE-IPhone-11-Pro-black-2.png" alt="" class="card-full__picture">
			</li>
			<li class="card-full__picture-item" tabindex="1">
				<img src="./images/covers/APPLE-IPhone-11-Pro-black-3.png" alt="" class="card-full__picture">
			</li>
			<li class="card-full__picture-item" tabindex="1">
				<img src="./images/covers/APPLE-IPhone-11-Pro-black-4.png" alt="" class="card-full__picture">
			</li>
			<li class="card-full__picture-item" tabindex="0">
				<img src="./images/covers/APPLE-IPhone-11-Pro-black-5.png" alt="" class="card-full__picture">
			</li>
		</ul>
	</div>

	<ul class="card-full__tab-list" role="tablist">
		<li id="description-tab" class="card-full__tab-item" role="tab" aria-controls="description" aria-selected="true">
			<a href="#description" class="card-full__tab-link">Описание</a>
		</li>
		<li id="features-tab" class="card-full__tab-item" role="tab" aria-controls="features" aria-selected="false">
			<a href="#features" class="card-full__tab-link">Характеристики</a>
		</li>
		<li id="accessories-tab" class="card-full__tab-item" role="tab" aria-controls="accessories" aria-selected="false">
			<a href="#accessories" class="card-full__tab-link">Аксессуары</a>
		</li>
		<li id="reveiws-tab" class="card-full__tab-item" role="tab" aria-controls="reveiws" aria-selected="false">
			<a href="#reveiws" class="card-full__tab-link">Отзывы</a>
		</li>
		<li id="questions-tab" class="card-full__tab-item" role="tab" aria-controls="questions" aria-selected="false">
			<a href="#questions" class="card-full__tab-link">Вопрос-ответ</a>
		</li>
	</ul>

	<div id="description" class="card-full__tab-content" role="tabpanel" aria-labelledby="description-tab">
		${gerDescriptionTemplate(description)}
	</div>

	<div class="card-full__tab-content" id="features" role="tabpanel" aria-labelledby="features-tab"></div>
	<div class="card-full__tab-content" id="accessories" role="tabpanel" aria-labelledby="accessories-tab"></div>
	<div class="card-full__tab-content" id="reveiws" role="tabpanel" aria-labelledby="reveiws-tab"></div>
	<div class="card-full__tab-content" id="questions" role="tabpanel" aria-labelledby="questions-tab"></div>

	<button class="card-full__close-button"><span class="visually-hidden">Вернуться в галлерею</span></button>
</article>`;

const render = (id, onCloseClick) => {
	const data = ITEMS_DATA.get(id);
	const card = createElement(getTemplate(data));

	card.querySelector('.card-full__close-button').addEventListener('click', onCloseClick);
	root.append(card);
};

const remove = () => {
	document.querySelector('.card-full').remove();
};

export {render, remove};
