import {render as renderGallery, remove as removeGallery} from './gallery.js';
import {render as renderFullCard} from './full-card.js';

const onCardClick = (evt) => {
	evt.preventDefault();
	const cardId = evt.target.closest('.card-small').dataset.id;
	removeGallery();
	renderFullCard(cardId);
};

renderGallery(onCardClick);
