let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onClick = () => {
    navbar.classList.toggle('active');
}


// lightmode

let lightmode = document.querySelector('#lightmode');

lightmode.onClick = () =>{
    if(lightmode.classList.contains('fa-sun')){
        lightmode.classList.replace('fa-sun', 'fa-moon');
        document.body.classList.add('active');
    }
    else{
        lightmode.classList.replace('fa-moon', 'fa-sun');
        document.body.classList.remove('active');
    }
}