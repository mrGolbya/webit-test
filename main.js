function openClosePopup(e){
  if(e.target.classList.contains('button')){
    document.querySelector('#popup').classList.remove('hidden');
  }
 else if(e.target.classList.contains('popup-close') || e.target.classList.contains('popup-body')){
  document.querySelector('#popup').classList.add('hidden');
 }
}

document.addEventListener('click',openClosePopup);
