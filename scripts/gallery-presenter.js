import CardView from './card-view.js';

export default class GalleryPresenter {
    #model = null;
    #card = new CardView();

    constructor ({itemsModel}) {
        this.#model = itemsModel;
    }

    init() {
        console.log(this.#model.items);
    }
}