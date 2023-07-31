alert('Welcome! Press OK to continue');
let printButton = document.getElementById('3DPrints');
let imgPa = document.getElementById('pa');


let open = function() {
    imgPa.style.display = 'block';
    
  };

  let close = function() {
    imgPa.style.display = 'none';
    
  };

  printButton.addEventListener('click',open);
  imgPa.addEventListener('click',close);