const elements = [...document.getElementsByClassName('rotator__case')];
let count = 0;
let time = 1000;
const arrAtribute = [
	[1000, 'red'],
	[2000, 'green'],
	[1000, '#000'],
	[1000, 'red'],
	[500, 'blue'],
	[200, 'gray'],
];

function newAtribute() {
	arrAtribute.forEach(atribute => {
		atribute.forEach(color => {
			for (let element of elements) {
				element.setAttribute("dataSpeed", 'atribute');
				element.setAttribute("dataColor", 'color');
			}
		})
	});
	document.querySelectorAll('[data-color]').forEach(function(el) {
		el.style.color = el.getAttribute('data-color');
	});
}

newAtribute();

const rotation = function(elem) {
	if (count < elem.length) {
		elem[count].classList.remove('rotator__case_active');
		count++;
	} else {
		count = 0;
	}
	if (count !== elem.length) {
		elem[count].classList.add('rotator__case_active');
		time = Number(elem[count].getAttribute('data-speed'));
	}
}

setInterval(() => rotation(elements), time);