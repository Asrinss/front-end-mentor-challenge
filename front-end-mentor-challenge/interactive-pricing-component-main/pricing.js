const pageViews = document.querySelector('.price-header').querySelector('h4').querySelector('span')
const requiredAmount = document.querySelector('.price-header').querySelector('h1')
const slider = document.getElementById('slider').querySelector('input')
const discount = document.querySelector('.discount')

function changeValue(e) {
  if(e.target.value == 8) {
    pageViews.innerText = '10K'
    requiredAmount.innerHTML = '$8.00 <span>/month</span>'
  }

  if (e.target.value == 12) {
    pageViews.innerText = '50K'
    requiredAmount.innerHTML = '$12.00 <span>/month</span>'
  }

  if (e.target.value == 16) {
    pageViews.innerText = '100K'
    requiredAmount.innerHTML = '$16.00 <span>/month</span>'
  }

  if (e.target.value == 24) {
    pageViews.innerText = '500K'
    requiredAmount.innerHTML = '$24.00 <span>/month</span>'
  }

  if (e.target.value == 36) {
    pageViews.innerText = '1M'
    requiredAmount.innerHTML = '$36.00 <span>/month</span>'
  }
}

slider.addEventListener('input', changeValue)

if(window.innerWidth <= 428) {
  discount.innerText = '-25%'
}