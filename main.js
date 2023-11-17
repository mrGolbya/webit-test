function openClosePopup(e){
  if(e.target.classList.contains('button')){
    document.querySelector('#popup').classList.remove('hidden');
    document.body.style.overflow='hidden'
  }
 else if(e.target.classList.contains('popup-close') || e.target.classList.contains('popup')){
  document.querySelector('#popup').classList.add('hidden');
  document.body.style.overflow='auto'
 }
}
document.addEventListener('click',openClosePopup);
