const dropValue = document.querySelector('.dropdown__value');
const dropList = document.querySelector('.dropdown__list');
const dropItem = [...document.querySelectorAll('.dropdown__item')];

dropValue.addEventListener('click', () => dropList.classList.add('dropdown__list_active'));
dropItem.forEach(item => {
	item.onclick = function() {
		dropValue.textContent = item.textContent;
		dropList.classList.remove('dropdown__list_active');
		return false;
	};
})