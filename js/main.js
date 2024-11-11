// Mostrar o esconder la flecha dependiendo del desplazamiento del scroll
window.addEventListener("scroll", function() {
    const scrollButton = document.getElementById("scrollToTop");
    
    // Si el desplazamiento es mayor que 100px desde el top, mostramos la flecha
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
});

// Desplazamiento suave hacia el top al hacer clic
document.getElementById("scrollToTop").addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
