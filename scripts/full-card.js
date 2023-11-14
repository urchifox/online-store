import { ITEMS_DATA } from './mock/items-data.js';
import { createElement } from './utils.js';

const root = document.querySelector('main');

const getTemplate = ({type, brand, model, price, discount, cashback, isHit, isAvailable, rate, rewievsCount, pictures, memoryOptions, colorOptions, description, screenDiagonal, resolution, ram, battery, cameraCount, year, displayType}) => 
	``;

const render = (id) => {
	const data = ITEMS_DATA.get(id);
	// console.log(Object.keys(data));
	const card = createElement(getTemplate(data));
	root.append(card);
};

export {render};
