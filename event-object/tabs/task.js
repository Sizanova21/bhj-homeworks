const tabs = [...document.getElementsByClassName('tab')];
let tabsContent = [...document.getElementsByClassName('tab__content')];

tabs.forEach(item => {

		item.addEventListener('click', event => {
			const target = event.target;
			let i = tabs.indexOf(target);

			tabs.forEach(index => {
				if (index !== tabs[i]) {
					index.classList.remove('tab_active')
				}
			})
			tabsContent.forEach(index => {
				if (index !== tabsContent[i]) {
					index.classList.remove('tab__content_active')
				}
			})

			item.classList.add('tab_active');
			tabsContent[i].classList.add('tab__content_active');
		})
		return false;
	}

)
  
