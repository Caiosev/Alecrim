const select = document.querySelector('#select')
const opcoes = document.querySelector('#opcoes')
const containerSelect = document.querySelector('#select .container-select')
const hiddenInput = document.querySelector('#inputSelect')
const arrow = document.querySelector('.fa-angle-down')
const psico= document.querySelector('.prof__psico');
const pintura= document.querySelector('.prof__pintura');
const mass= document.querySelector('.prof__mass');

document.querySelectorAll('#opcoes > .opcao').forEach((opcao) =>{
    console.log('AAA')
    opcao.addEventListener('click', (e) =>{
        e.preventDefault();
        containerSelect.innerHTML = e.currentTarget.innerHTML
        select.classList.toggle('active')
        opcoes.classList.toggle('active')
        arrow.classList.toggle('up')
        hiddenInput.value = e.currentTarget.querySelector('.titulo').innerHTML
        const sec = hiddenInput.value
        console.log(sec)
        ShowSec(sec);
    })
})

function ShowSec(sec){
    if(sec == "Psicoterapia"){
        psico.classList.add('show-prof')
        pintura.classList.remove('show-prof')
        mass.classList.remove('show-prof')
    }else if(sec == "Pintura"){
        pintura.classList.add('show-prof')
        mass.classList.remove('show-prof')
        psico.classList.remove('show-prof')
    }else if(sec =="Massagem"){
        mass.classList.add('show-prof')
        pintura.classList.remove('show-prof')
        psico.classList.remove('show-prof')
    }
}

select.addEventListener('click', () =>{
    select.classList.toggle('active');
    opcoes.classList.toggle('active')
    arrow.classList.toggle('up')
})