const linkA = [...document.querySelectorAll('a.font-size')];
const bookClass = document.querySelector('div.book');

linkA.forEach(item =>{
		item.addEventListener('click', event => {
			const target = event.target;
			let index = linkA.indexOf(target);
	
			for (let i = 0; i < linkA.length; i++) {
				if (i !== index) {
					linkA[i].classList.remove('font-size_active');
					bookClass.classList.remove('book_fs-big');
					bookClass.classList.remove('book_fs-small');
				} else {
					linkA[i].classList.add('font-size_active');
				};
			}
		
			if (linkA[index].classList.contains('font-size_small') === true) {
				bookClass.classList.add('book_fs-small');
			} else if (linkA[index].classList.contains('font-size_big') === true) {
				bookClass.classList.add('book_fs-big');
			};
			event.preventDefault();
		});

});