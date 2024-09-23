const killed = document.getElementById("dead");
const miss = document.getElementById("lost");
const holle = document.getElementsByClassName("hole");


for (let i = 1; i <= 10; i++) {
	getHole = index => document.getElementById(`hole${index}`);
	getHole(i).onclick = function() {
		if (getHole(i).className === 'hole hole_has-mole') {
			killed.textContent++;

			if (killed.textContent === '10') {
				alert("Победа!!!");
				killed.textContent = '0';
				miss.textContent = '0';

			}


		} else {

			miss.textContent++;

			if (miss.textContent === '5') {
				alert("Вы проиграли!!!");
				killed.textContent = '0';
				miss.textContent = '0';
			}

		}


	}

}