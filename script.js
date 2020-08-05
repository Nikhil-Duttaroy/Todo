gsap.from('form',{
duration : 2,
x: '-50%' ,
opacity : 0 ,
ease :'slow',
})

gsap.from(".todo-list",{
    duration : 2,
    opacity : 0,
    y:'100'
})

gsap.from("header",{
    opacity : 0,
    duration :2
})



const mode = document.querySelector('.mode');
let light = false;
mode.addEventListener('click',() => {
    if(light){
        light = false;
        document.documentElement.setAttribute('data-theme','light');
        mode.textContent = 'Dark';
        
    }
    else{
        light = true;
        document.documentElement.setAttribute('data-theme','dark');
        mode.textContent = 'Light';
    }
})
    
