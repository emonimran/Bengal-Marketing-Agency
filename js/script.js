let sortBtn = document.querySelector('.filter-menu').children;
let sortItem = document.querySelector('.filter-item').children;

console.log(sortBtn);

console.log(sortItem);

window.onload=function(){
for (let i = 0; i < sortBtn.length; i++){
  sortBtn[i].addEventListener("click",function(){
    for (let j = 0; j < sortBtn.length; j++){
      sortBtn[j].classList.remove('active');
    }

    this.classList.add('active');

    let targetData = this.getAttribute('data-target');

    for (let k = 0; k < sortItem.length; k++){
      sortItem[k].classList.remove('active');
      sortItem[k].classList.add('delete');

      if (sortItem[k].getAttribute('data-item') == targetData || targetData == 'all'){
        sortItem[k].classList.remove('delete');
        sortItem[k].classList.add('active');
      }
    }
  })
}}
