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