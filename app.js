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

// smooth scroll

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});