let widthBody = document.body.clientWidth;

function openClosePopup(e){
  if(e.target.classList.contains('button')){
    document.querySelector('#popup').classList.remove('hidden');
    document.body.style.overflow='hidden';
    let widthBodyClick = document.body.clientWidth;
    document.body.style.paddingRight = `${widthBodyClick-widthBody}px`;
    console.log(widthBodyClick);
  }
 else if(e.target.classList.contains('popup-close') || e.target.classList.contains('popup')){
  document.querySelector('#popup').classList.add('hidden');
  document.body.style.overflow='auto';
  document.body.style.padding = '0';
 }
}
document.addEventListener('click',openClosePopup);
