document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");

    if (!carousel) {
        console.error("Elemento '.carousel' não encontrado!");
        return;
    }

    let isDown = false;
    let startX;
    let scrollLeft;

    carousel.addEventListener("mousedown", (e) => {
        isDown = true;
        carousel.classList.add("active");
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener("mouseleave", () => {
        isDown = false;
        carousel.classList.remove("active");
    });

    carousel.addEventListener("mouseup", () => {
        isDown = false;
        carousel.classList.remove("active");
    });

    carousel.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2;

        // Verifica se atingiu os limites do carrossel
        const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
        if (scrollLeft - walk < 0) {
            carousel.scrollLeft = 0; // Impede rolagem negativa
        } else if (scrollLeft - walk > maxScrollLeft) {
            carousel.scrollLeft = maxScrollLeft; // Impede rolagem além do limite
        } else {
            carousel.scrollLeft = scrollLeft - walk; // Rolagem normal
        }
    });
});


