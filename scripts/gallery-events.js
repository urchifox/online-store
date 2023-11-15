import {render as renderGallery, remove as removeGallery} from './gallery.js';
import {render as renderFullCard, remove as removeFullCard} from './card-full.js';

const closeFullCard = () => {
	removeFullCard();
	renderGallery(onCardClick);
	document.removeEventListener('keydown', onEscKeydown);
};

function onEscKeydown (evt) {
	if (evt.key !== 'Escape') {
		return;
	}

	closeFullCard();
}

function onCloseClick () {
	closeFullCard();
}

function onCardClick (evt) {
	evt.preventDefault();
	const cardId = evt.target.closest('.card-small').dataset.id;
	removeGallery();
	renderFullCard(cardId, onCloseClick);
	window.scroll(0, 0);
	document.addEventListener('keydown', onEscKeydown);
}

const initGallery = () => {
	renderGallery(onCardClick);
};

export {initGallery};
