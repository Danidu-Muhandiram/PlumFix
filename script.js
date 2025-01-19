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