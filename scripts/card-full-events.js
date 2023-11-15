
const onColorChange = (evt) => {
	if (evt.target.name !== 'color') {
		return;
	}
	const color = evt.target.value;
	document.querySelector('.card-full__name-color').textContent = color;
};

const onMemoryChange = (evt) => {
	if (evt.target.name !== 'memory') {
		return;
	}
	const memory = evt.target.value;
	document.querySelector('.card-full__name-memory').textContent = memory;
};

const onTabClick = (evt) => {
	if (!evt.target.classList.contains('card-full__tab-link')) {
		return;
	}

	const currentTab = document.querySelector('.card-full__tab-item[aria-selected="true"]');
	currentTab.ariaSelected = false;
	const currentContentId = `#${currentTab.id.replace('-tab', '')}`;
	const currentContent = document.querySelector(currentContentId);
	currentContent.classList.add('visually-hidden');

	const targetTab = evt.target.closest('.card-full__tab-item');
	targetTab.ariaSelected = true;
	const targetId = `#${evt.target.href.split('#').pop()}`;
	const targetContent = document.querySelector(targetId);
	targetContent.classList.remove('visually-hidden');
};

export {onColorChange, onMemoryChange, onTabClick};
