const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

function onAdd(){
      // 1. 사용자가 입력한 텍스트 받아오기
      const text = input.value;
      //아무것도 입력되지 않았을때
      if(text === ''){
        input.focus();
        return;//추가하지않고 그냥 함수 나가버리기
      }
      // 2. 새로운 아이템을 만듬 
      const item = createItem(text);
      // 3. 아이템 컨테이너 안에 추가
      items.appendChild(item);
      // 4.새로 추가된 아이템으로 스크롤링
      item.scrollIntoView({block:'center'});
      // 5. 인풋 초기화
      input.value = '';
      input.focus();
}

function createItem(text){
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class','item__row');

  const item = document.createElement('div');
  item.setAttribute('class','item');

  const itemName = document.createElement('span');
  itemName.setAttribute('class','item__name');
  itemName.innerText = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class','item__delete');
  deleteBtn.innerHTML ='<i class="fas fa-trash-alt"></i>';
  deleteBtn.addEventListener('click',()=>{
    items.removeChild(itemRow);
  })

  const divider = document.createElement('div');
  divider.setAttribute('class','item__divider');

  item.appendChild(itemName);
  item.appendChild(deleteBtn);

  itemRow.appendChild(item);
  itemRow.appendChild(divider);

  return itemRow;
}

addBtn.addEventListener('click',()=>{
  onAdd();
})

input.addEventListener('keypress',(event)=>{
  if(event.key === 'Enter'){
    onAdd();
  }
})