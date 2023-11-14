import { ITEMS_DATA } from './mock/items-data.js';
import { createElement } from './utils.js';
import { render as renderCardSmall} from './card-small.js';

const root = document.querySelector('main');

const render = (cb) => {
	const gallery = createElement(`
		<article class="gallery-container">
			<h1 class="visually-hidden">Каталог товаров</h1>
			<ul class="gallery main__gallery"></ul>
		</article>`);

	const fragment = document.createDocumentFragment();

	for (const [id, item] of ITEMS_DATA) {
		const card = renderCardSmall(id, item);
		card.addEventListener('click', cb);
		fragment.append(card);
	}

	gallery.querySelector('.gallery').append(fragment);
	root.append(gallery);
};

const remove = () => {
	document.querySelector('.gallery-container').remove();
};

export {render, remove};
