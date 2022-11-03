toopen=document.querySelector('.toopen')
navBar=document.querySelector('.navBar')
rightnav=document.querySelector('.rightnav')
list=document.querySelector('.list')

burger.addEventListener('click' ,()=>{
    rightnav.classList.toggle('v-class-resp');
    list.classList.toggle('v-class-resp');
    navBar.classList.toggle('h-nav-resp');
})