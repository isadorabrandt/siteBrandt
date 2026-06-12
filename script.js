document.addEventListener("DOMContentLoaded", () => {

    /* ==================================================
       MENU MOBILE
    ================================================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });

    }

    /* ==================================================
       FECHAR MENU AO CLICAR EM UM LINK
    ================================================== */

    const menuLinks = document.querySelectorAll(".nav-menu a");

    menuLinks.forEach(link => {

        link.addEventListener("click", () => {

            if (navMenu) {
                navMenu.classList.remove("active");
            }

        });

    });

    /* ==================================================
       MENU ATIVO CONFORME A ROLAGEM
    ================================================== */

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

    /* ==================================================
       CARROSSEL DOS SERVIÇOS
    ================================================== */

    const sliders = document.querySelectorAll(".card-img");

    sliders.forEach(slider => {

        const images = slider.querySelectorAll("img");

        
        /* ==========================================
           CRIAR DOTS CONFORME O NÚMERO DE IMAGENS
        ========================================== */

        const dotsContainer = document.createElement("div");
        dotsContainer.classList.add("slider-dots");

        images.forEach((img, index) => {

            const dot = document.createElement("span");

            dot.classList.add("dot");

            if (index === 0) {
                dot.classList.add("active");
            }

            dotsContainer.appendChild(dot);

        });

        slider.appendChild(dotsContainer);

        const dots = dotsContainer.querySelectorAll(".dot");

        const nextBtn = slider.querySelector(".next");
        const prevBtn = slider.querySelector(".prev");

        const indicator = slider.querySelector(".swipe-indicator");

        let current = 0;
        let startX = 0;
        let endX = 0;

        let idleTimer;
        let hintCount = 0;

        /* ==========================================
           EXIBIR IMAGEM
        ========================================== */

        function showImage(index) {

            images.forEach(img => {
                img.classList.remove("active");
            });

            dots.forEach(dot => {
                dot.classList.remove("active");
            });

            images[index].classList.add("active");

            if (dots[index]) {
                dots[index].classList.add("active");
            }

        }

        /* ==========================================
           PRÓXIMA IMAGEM
        ========================================== */

        function nextSlide() {

            current = (current + 1) % images.length;

            showImage(current);

        }

        /* ==========================================
           IMAGEM ANTERIOR
        ========================================== */

        function prevSlide() {

            current = (current - 1 + images.length) % images.length;

            showImage(current);

        }

        /* ==========================================
           INDICADOR DE SWIPE
        ========================================== */

        function showIndicator() {

            function showIndicator() {

                if (!indicator) return;

                if (hintCount >= 3) return;

                hintCount++;

                indicator.classList.add("show");

                setTimeout(() => {

                    indicator.classList.remove("show");

                }, 4000);

            }

        }

        /* ==========================================
           CONTROLE DE INATIVIDADE
        ========================================== */

        function resetIdleTimer() {


            clearTimeout(idleTimer);

            idleTimer = setTimeout(() => {

                showIndicator();

            }, 15000);

        }

        /* ==========================================
           BOTÕES DESKTOP
        ========================================== */

        if (nextBtn) {

            nextBtn.addEventListener("click", () => {

                nextSlide();
                resetIdleTimer();

            });

        }

        if (prevBtn) {

            prevBtn.addEventListener("click", () => {

                prevSlide();
                resetIdleTimer();

            });

        }

        /* ==========================================
           SWIPE MOBILE
        ========================================== */

        slider.addEventListener("touchstart", (e) => {

            startX = e.touches[0].clientX;

            resetIdleTimer();

        });

        slider.addEventListener("touchend", (e) => {

            endX = e.changedTouches[0].clientX;

            if (startX - endX > 50) {
                nextSlide();
            }

            if (endX - startX > 50) {
                prevSlide();
            }

            resetIdleTimer();

        });

        /* ==========================================
           CLIQUE NO INDICADOR
        ========================================== */

        slider.addEventListener("click", () => {

            resetIdleTimer();

        });

        /* ==========================================
           INICIALIZAÇÃO
        ========================================== */

        showImage(0);

        showIndicator();
        resetIdleTimer();

    });

});