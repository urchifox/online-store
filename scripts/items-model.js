import { ITEMS_DATA } from './mock/items-data.js';

export default class ItemsModel {
    #items = ITEMS_DATA;

    get items () {
        return this.#items;
    }
}