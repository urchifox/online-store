import { nanoid } from '../node_modules/nanoid/nanoid.js';
import { ItemType, ItemColor } from './consts.js';

const ITEMS_DATA = new Map();

ITEMS_DATA.set(nanoid(),
	{
		type: ItemType.SMARTPHONE,
		brand: '',
		model: '',
		price: 0,
		discount: 0,
		cashback: 0,
		isNew: false,
		isHit: false,
		isAvailable: true,
		rate: 5.0,
		rewievsCount: 0,
		pictures: [
			'',
		],
		memoryOptions: [64, 128, 256, 512],
		colorOptions: [
			ItemColor.BLACK.code,
			ItemColor.GREEN,
			ItemColor.GOLD,
			ItemColor.GREY,
			ItemColor.RED,
			ItemColor.WHITE,
		],
		description: `Смартфон iPhone 11 Pro 512Gb в корпусе черного цвета понравится пользователям не только большим объемом встроенной памяти. Гаджет нового поколения оснащен высокими технологиями будущего. Корпус модели теперь еще более усилен.
            Стекло обработано методом двойного ионного обмена. Водозащита позволяет выдержать четырехметровые волны. Главной особенностью модели iPhone 11 Pro является новая система трех камер, за счет слаженной работы которых удается создать фотографии профессионального качества. Область изображения увеличивается в 4 раза. Портретные фото, селфи и снимки движущихся объектов – все получается намного ярче. Режим ночной съемки включается автоматически, результат – контрастные фото с естественной цветопередачей.
            Удивительно реалистичные видеоролики позволяют снимать мощный процессор и технологии машинного обучения. Изображение редактируется в режиме реального времени — выразительные лица и никакого шума    на заднем фоне.`,
		screenDiagonal: 5.8,
		resolution: [2436, 1125],
		memory: 512,
		ram: 4,
		battery: 3026,
		cameraCount: 3,
		year: 2019,
		displayType: 'Super Retina XDR',
	}
);

export {ITEMS_DATA};
