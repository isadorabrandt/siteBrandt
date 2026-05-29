document.addEventListener("DOMContentLoaded", () => {

    /* ================= MENU MOBILE ================= */

    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });

    }

    /* ================= MENU ATIVO AO ROLAR ================= */

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-menu a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }

        });

    });

    /* ================= CARROSSEL ================= */

    const sliders = document.querySelectorAll(".card-img");

    sliders.forEach(slider => {

        const images = slider.querySelectorAll("img");
        const nextBtn = slider.querySelector(".next");
        const prevBtn = slider.querySelector(".prev");

        let current = 0;

        /* FUNÇÃO PARA TROCAR IMAGEM */

        function showImage(index) {

            images.forEach(img => {
                img.classList.remove("active");
            });

            images[index].classList.add("active");

        }

        /* PRÓXIMA */

        function nextSlide() {

            current = (current + 1) % images.length;

            showImage(current);

        }

        /* ANTERIOR */

        function prevSlide() {

            current = (current - 1 + images.length) % images.length;

            showImage(current);

        }

        /* BOTÕES */

        if (nextBtn) {
            nextBtn.addEventListener("click", nextSlide);
        }

        if (prevBtn) {
            prevBtn.addEventListener("click", prevSlide);
        }

        /* SWIPE MOBILE */

        let startX = 0;
        let endX = 0;

        slider.addEventListener("touchstart", (e) => {
            startX = e.touches[0].clientX;
        });

        slider.addEventListener("touchend", (e) => {

            endX = e.changedTouches[0].clientX;

            /* SWIPE ESQUERDA */

            if (startX - endX > 50) {
                nextSlide();
            }

            /* SWIPE DIREITA */

            if (endX - startX > 50) {
                prevSlide();
            }

        });

    });

});