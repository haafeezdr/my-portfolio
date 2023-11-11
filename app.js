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


// light mode
document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("lightmode");
    const body = document.body;

    themeToggle.addEventListener("click", function () {
        body.classList.toggle("light-mode");
        body.classList.toggle("dark-mode");
    });
});

