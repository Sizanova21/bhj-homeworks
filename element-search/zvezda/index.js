const starContainer = document.querySelectorAll('.star');

let j = 0;
let num;
for (let i = 0; i < starContainer.length; i++) {
  starContainer[i].addEventListener('click', event => { 
  starContainer[i].classList.add('star_active');
  num = i;
     for (let j = 0; j < num; j++) {
    starContainer[j].classList.add('star_active');
  }
  }); 
};

/*// РЕшение ЭКСПЕРТА!!! Собираем все звезды в псевдоколлекцию
const stars = document.querySelectorAll('.star');

// Пишем логику по добавлению звезд
stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        stars.forEach(s => s.classList.remove('star_active'));
        const activeStars = [...stars].slice(0, index + 1);
        activeStars.forEach((s) => s.classList.add('star_active'));
    })
})*/
  
 
