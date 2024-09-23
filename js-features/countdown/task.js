
const timer = document.getElementById("timer");
const reversTime = function() {
	if (timer.textContent === '0') {
		alert("Вы победили в конкурсе!");
		clearInterval(counter);
	} else {
		timer.textContent--;
	}
}
const counter = setInterval(reversTime, 100);
