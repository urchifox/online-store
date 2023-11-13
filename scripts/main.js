import {render as renderGallery} from './gallery.js';

const onCardClick = (evt) => {
	evt.preventDefault();
	const cardId = evt.target.closest('.card-small').dataset.id;
};

renderGallery(onCardClick);
