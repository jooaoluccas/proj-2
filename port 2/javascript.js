window.onload = function() {
    alert("Bem-vindo ao meu portfólio!");

    // Função de rolagem suave
    var links = document.querySelectorAll("nav ul li a");
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function(event) {
            event.preventDefault();
            var target = this.getAttribute("href");
            var targetPosition = document.querySelector(target).offsetTop;
            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        });
    }
};
