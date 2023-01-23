
const myname = document.querySelector('#showname');
const btn =document.querySelector('#btn');

const showname = ()=>{
    myname.innerHTML='loading.....'
    setTimeout(() =>{
        myname.innerHTML='ajay'
    },1000)
};

btn.addEventListener('click',showname);