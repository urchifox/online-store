import ItemsModel from './items-model.js';
import GalleryPresenter from './gallery-presenter.js';

const itemsModel = new ItemsModel();
const galleryPresenter = new GalleryPresenter({itemsModel});

galleryPresenter.init();