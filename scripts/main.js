import {render as renderGallery, remove as removeGallery} from './gallery.js';
import {render as renderFullCard, remove as removeFullCard} from './card-full.js';

function onCloseClick () {
	removeFullCard();
	renderGallery(onCardClick);
}

function onCardClick (evt) {
	evt.preventDefault();
	const cardId = evt.target.closest('.card-small').dataset.id;
	removeGallery();
	renderFullCard(cardId, onCloseClick);
}

renderGallery(onCardClick);
