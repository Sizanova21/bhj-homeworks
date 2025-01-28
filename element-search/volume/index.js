const volumes = document.querySelectorAll('.volume-rect');
const downVolume = document.querySelector('.volume-down'); // -
const upVolume = document.querySelector('.volume-up');    // +
const counterIndicator = document.querySelector('.indicator');

const arreyVolumes = [...volumes];
let i = 0;
let j = 0; 
let lengthVolume = arreyVolumes.length;

upVolume.addEventListener('click', event => { 
    if (i < lengthVolume){
   let meaning = arreyVolumes[i].classList.contains('volume-rect__active');
   
      while(!meaning){
        arreyVolumes[i].classList.add('volume-rect__active');
        counterIndicator.innerHTML = i + 1;
        j = i;
        if (i <= lengthVolume) {
          i++;
        }
       
        break; 
      }  
}
} );

downVolume.addEventListener('click', event => { 
    if (j >= 0){ 
   let meaningDown = arreyVolumes[j].classList.contains('volume-rect__active');
   
    while(meaningDown){
        arreyVolumes[j].classList.remove('volume-rect__active'); 
        counterIndicator.innerHTML = j;
        if (j > 0) {
          j--;
        }
        break;
      }  
    }
}
);
