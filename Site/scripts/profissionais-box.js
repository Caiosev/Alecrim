const select = document.querySelector('#select')
const opcoes = document.querySelector('#opcoes')
const containerSelect = document.querySelector('#select .container-select')
const hiddenInput = document.querySelector('#inputSelect')
const arrow = document.querySelector('.fa-angle-down')

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
        document.body.style.backgroundColor = "red";
    }else if(sec == "Pintura"){
        document.body.style.backgroundColor = "yellow";
    }else if(sec =="Massagem"){
        document.body.style.backgroundColor = "black";

    }
}

select.addEventListener('click', () =>{
    select.classList.toggle('active');
    opcoes.classList.toggle('active')
    arrow.classList.toggle('up')
})