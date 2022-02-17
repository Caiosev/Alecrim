const btnMobile = document.getElementById('btn-menu');
const li = document.querySelectorAll('li');
const menu = document.querySelector('.menu');
const ham = document.querySelector('.ham')
console.log(li)
function toggleMenu(){
    menu.classList.toggle('menu-ativo')
    ham.classList.toggle('x')
}
btnMobile.addEventListener('click', toggleMenu);

function closeMenu(){
    menu.classList.remove('menu-ativo')
    ham.classList.toggle('x')
}
for (i=0;i <=5;i++){
    li[i].addEventListener('click',closeMenu)
}
