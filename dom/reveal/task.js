window.addEventListener('scroll', () => {
	let divElement = document.getElementsByClassName('reveal');
	for (let i = 0; i < divElement.length; i++) {
		let {
			top,
			bottom
		} = divElement[i].getBoundingClientRect();
		if (top > 0 && bottom < window.innerHeight) {
			divElement[i].classList.add('reveal_active');
		} else {
			divElement[i].classList.remove('reveal_active');
		}
	}
});