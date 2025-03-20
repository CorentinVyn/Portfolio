document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        let rect = card.getBoundingClientRect();
        let x = e.clientX - rect.left; // Position X dans la carte
        let y = e.clientY - rect.top;  // Position Y dans la carte
        let centerX = rect.width / 2;
        let centerY = rect.height / 2;
        let rotateX = (centerY - y) / 10; // Inclinaison X
        let rotateY = (x - centerX) / 10; // Inclinaison Y

        card.style.setProperty('--rx', `${rotateX}deg`);
        card.style.setProperty('--ry', `${rotateY}deg`);
    });

    card.addEventListener('mouseleave', () => {
        card.style.setProperty('--rx', '0deg');
        card.style.setProperty('--ry', '0deg');
    });
});




// Sélectionne toutes les cartes
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        let modalId = this.getAttribute('data-modal'); // Récupère l'ID du modal lié à cette carte
        let modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('show');
        }
    });
});

// Sélectionne tous les boutons de fermeture
document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', function() {
        this.closest('.modal').classList.remove('show');
    });
});

// Ferme la modal en cliquant en dehors du contenu
window.addEventListener('click', function(event) {
    document.querySelectorAll('.modal').forEach(modal => {
        if (event.target === modal) {
            modal.classList.remove('show');
        }
    });
});









document.querySelectorAll('.slider-container').forEach(slider => {
    let slidesWrapper = slider.querySelector(".slides");
    let slides = slider.querySelectorAll(".slide");
    let currentIndex = 0;
    let autoSlide; // Variable pour stocker l'intervalle

    function changeSlide(direction) {
        currentIndex += direction;

        // Gérer le débordement
        if (currentIndex < 0) {
            currentIndex = slides.length - 1;
        } else if (currentIndex >= slides.length) {
            currentIndex = 0;
        }

        // Déplacer le slider
        slidesWrapper.style.transform = `translateX(${-currentIndex * 100}%)`;
    }

    function startAutoSlide() {
        autoSlide = setInterval(() => changeSlide(1), 5000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlide);
    }

    // Ajouter les événements sur les boutons du slider actuel
    slider.querySelector(".prev").addEventListener("click", () => changeSlide(-1));
    slider.querySelector(".next").addEventListener("click", () => changeSlide(1));

    // Démarrer le défilement automatique
    startAutoSlide();

    // Arrêter le défilement auto au survol et le reprendre après
    slider.addEventListener("mouseenter", stopAutoSlide);
    slider.addEventListener("mouseleave", startAutoSlide);
});
