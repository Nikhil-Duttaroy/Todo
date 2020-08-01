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