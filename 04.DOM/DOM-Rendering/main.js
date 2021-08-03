const vertical = document.querySelector('.vertical');
const horizantal = document.querySelector('.horizantal');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

addEventListener('load',() =>{
  const targetRect = target.getBoundingClientRect();
  const halfWidth = targetRect.width / 2;
  const halfHeight = targetRect.height / 2;


  window.addEventListener('mousemove',(e) => {
  const x = e.clientX;
  const y = e.clientY;
  
  vertical.style.transform = `translateX(${x}px)`;
  horizantal.style.transform = `translateY(${y}px)`;
  target.style.transform = `translate(${x-halfWidth}px,${y-halfWidth}px)`;
  tag.style.transform = `translate(${x}px,${y}px)`;
  tag.innerHTML = `${x}px,${y}px`
  tag.style.backgroundColor = `tomato`;
  

})
})