document.querySelectorAll(".card-img").forEach(carrossel => {
    let imgs = carrossel.querySelectorAll("img");
    let index = 0;

    carrossel.querySelector(".next").onclick = () => {
        imgs[index].classList.remove("active");
        index = (index + 1) % imgs.length;
        imgs[index].classList.add("active");
    };

    carrossel.querySelector(".prev").onclick = () => {
        imgs[index].classList.remove("active");
        index = (index - 1 + imgs.length) % imgs.length;
        imgs[index].classList.add("active");
    };
});

const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-menu");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

const sliders = document.querySelectorAll(".card-img");

sliders.forEach(slider => {

    const images = slider.querySelectorAll("img");

    let current = 0;

    let startX = 0;
    let endX = 0;

    slider.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
    });

    slider.addEventListener("touchend", (e) => {

        endX = e.changedTouches[0].clientX;

        if(startX - endX > 50){

            images[current].classList.remove("active");

            current = (current + 1) % images.length;

            images[current].classList.add("active");
        }

        if(endX - startX > 50){

            images[current].classList.remove("active");

            current = (current - 1 + images.length) % images.length;

            images[current].classList.add("active");
        }

    });

});