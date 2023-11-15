import { onColorChange, onMemoryChange, onTabClick } from './card-full-events.js';
import { ITEMS_DATA } from './mock/items-data.js';
import { createElement, getRewievsCountMessage } from './utils.js';

const root = document.querySelector('main');

const getMemoryInputTemplate = (memoryOptions) => memoryOptions.reduce((accumulator, memoryOption, index) => /*html*/`${accumulator}
		<label class="card-full__memory-label">
			${memoryOption}Gb
			<input type="radio" name="memory" value="${memoryOption}" class="visually-hidden"
				${index === (memoryOptions.length - 1) ? 'checked' : ''}
			>
		</label>
	`, '');

const getColorInputTemplate = (colorOptions) => colorOptions.reduce((accumulator, colorOption, index) => /*html*/`${accumulator}
		<label class="card-full__color-label" style="background-color: #${colorOption.code};">
			<span class="visually-hidden">${colorOption.name}</span>
			<input type="radio" name="color" value="${colorOption.name}" class="visually-hidden"
				${index === 0 ? 'checked' : ''}
			>
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
		<h1 class="card-full__name">${type} ${brand} ${model} <span class="card-full__name-memory">${Math.max(...memoryOptions)}</span>Gb, <span class="card-full__name-color">${colorOptions[0].name}</span></h1>
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
				<fieldset class="card-full__memory-labels-container">
					${getMemoryInputTemplate(memoryOptions)}
				</fieldset>
			</section>
			<section class="card-full__section">
				<h2 class="card-full__subtitle">Цвет</h2>
				<fieldset class="card-full__color-labels-container">
					${getColorInputTemplate(colorOptions)}
				</fieldset>
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
					<dd class="card-full__feature-value">${Math.max(...memoryOptions)}</dd>
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

	<div class="card-full__tab-content">
		<div id="description" class="card-full__tab-content" role="tabpanel" aria-labelledby="description-tab">
			${gerDescriptionTemplate(description)}
		</div>
		<div class="card-full__tab-content visually-hidden" id="features" role="tabpanel" aria-labelledby="features-tab">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
		</div>
		<div class="card-full__tab-content visually-hidden" id="accessories" role="tabpanel" aria-labelledby="accessories-tab">
			Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
		</div>
		<div class="card-full__tab-content visually-hidden" id="reveiws" role="tabpanel" aria-labelledby="reveiws-tab">
			Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
		</div>
		<div class="card-full__tab-content visually-hidden" id="questions" role="tabpanel" aria-labelledby="questions-tab">
			But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
		</div>
	</div>

	<button class="card-full__close-button"><span class="visually-hidden">Вернуться в галлерею</span></button>
</article>`;


const render = (id, onCloseClick) => {
	const data = ITEMS_DATA.get(id);
	const card = createElement(getTemplate(data));

	card.querySelector('.card-full__close-button').addEventListener('click', onCloseClick);
	card.querySelector('.card-full__memory-labels-container').addEventListener('change', onMemoryChange);
	card.querySelector('.card-full__color-labels-container').addEventListener('change', onColorChange);
	card.querySelector('.card-full__tab-list').addEventListener('click', onTabClick);
	root.append(card);
};

const remove = () => {
	document.querySelector('.card-full').remove();
};

export {render, remove};
