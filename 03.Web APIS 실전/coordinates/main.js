const vertical = document.querySelector('.vertical');
const horizantal = document.querySelector('.horizantal');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

window.addEventListener('mousemove',(e) => {
  const x = e.clientX;
  const y = e.clientY;

  vertical.style.left = `${x}px`;
  horizantal.style.top = `${y}px`;
  target.style.top = `${y}px`;
  target.style.left = `${x}px`;
  tag.style.top = `${y}px`; 
  tag.style.left = `${x}px`;
  tag.innerHTML = `${x}px,${y}px`

})