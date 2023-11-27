const links = document.querySelectorAll('a');

// Adiciona a classe 'active' ao primeiro link
links[0].classList.add('active');
links[0].style.color = "orange"; // Aplica a cor laranja ao primeiro link

links.forEach(link => {
    link.addEventListener('click', () => {
        const isActive = link.classList.contains('active');

        links.forEach(otherLink => {
            otherLink.classList.remove('active');
            otherLink.style.color = "";
        });

        if (!isActive) {
            link.classList.add('active');
            link.style.color = "orange";
        }
    });
});