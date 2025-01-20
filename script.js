const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('toggle-button'),
      navClose = document.getElementById('nav-close')

/*OPEN*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*CLOSE*/
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*REMOVE MENU WHEN CLICK LINK*/
const navLink = document.querySelectorAll('.nav-link')

const linkAction = ()=>{
const navLink = document.getElementById('nav-menu')
navMenu.classList.remove('show-menu')
}

navLink.forEach(n=> n.addEventListener('click', linkAction))
