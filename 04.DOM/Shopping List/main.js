const input = document.querySelector('.input');
const content__index = document.querySelector('.content__index');
const add = document.querySelector('#add');
const shop = document.querySelector('.shop');


input.addEventListener('keydown',updateValue);
function updateValue(e){
  if(e.keyCode === 13){
    content__index.innerHTML +=`${e.target.value}  <button class="delete">X</button><br>`;
    input.value ='';
  }
}

add.addEventListener('click',() =>{
  content__index.innerHTML +=`${input.value}  <button class="de">X</button><br>`;
  input.value ='';
})

//초기화
shop.addEventListener('click',()=>{
  content__index.textContent = '';
  input.value = '';
})

const de = document.querySelector('.de');
de.addEventListener('click', ()=>{
  content__index.textContent = '';
  input.value = '';
  console.log('das');
})
