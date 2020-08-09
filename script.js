gsap.from('form', {
  duration: 2,
  x: '-50%',
  opacity: 0,
  ease: 'slow',
})

gsap.from('.todo-list', {
  duration: 2,
  opacity: 0,
  y: '100',
})

gsap.from('header', {
  opacity: 0,
  duration: 2,
})

let darkMode=localStorage.getItem("darkMode");
const darkModeToggle=document.querySelector('.mode');


const enableDarkMode= () => {

    document.documentElement.setAttribute('data-theme', 'dark')
    darkModeToggle.textContent = 'Light'
    localStorage.setItem("darkMode","enabled")
}


const disableDarkMode= () => {

    document.documentElement.setAttribute('data-theme', 'light')
    darkModeToggle.textContent = 'Dark'
    localStorage.setItem("darkMode",null)
}

if(darkMode === "enabled"){
    enableDarkMode();
}


darkModeToggle.addEventListener("click",() => {
    darkMode=localStorage.getItem("darkMode");
    if(darkMode !== "enabled"){
        enableDarkMode();
    }
    else{
        disableDarkMode();
    }

})


