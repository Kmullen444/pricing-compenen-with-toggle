const toggle = document.getElementById("toggle-button");
const basicPrice = document.querySelector('.basic-price');
const proPrice = document.querySelector('.profess-price');
const masterPrice = document.querySelector('.master-price');

function priceChange (e) {
  if (e.target.checked) { 
   basicPrice.innerText = "$19.99";
   proPrice.innerText =  "$24.99";
   masterPrice.innerText = "$39.99";
  } else {
   basicPrice.innerText = "$199.99";
   proPrice.innerText =  "$249.99";
   masterPrice.innerText = "$399.99";
  };
}



toggle.addEventListener('click', (e) => priceChange(e));


