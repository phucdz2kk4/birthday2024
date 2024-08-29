const getModal = document.querySelector('.menu-modal');
const getInside = document.querySelector('#card');
getModal.onclick = function(){
    getModal.style.display = 'none'
    getInside.style.display = 'block'
}
const getOpen = document.querySelector('#open')
const getFont = document.querySelector('#card-front')
getOpen.onclick = function(){
    getFont.style.display = 'none'
}