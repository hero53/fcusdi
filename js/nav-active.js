/**
 * Script pour activer automatiquement l'onglet de navigation correspondant à la page actuelle
 */
(function() {
    'use strict';

    // Attendre que le DOM soit complètement chargé
    window.addEventListener('load', function() {
        // Obtenir le chemin de la page actuelle
        let currentPage = window.location.pathname.split('/').pop();

        // Si le chemin est vide ou est un slash, c'est la page index
        if (!currentPage || currentPage === '' || currentPage === '/') {
            currentPage = 'index.html';
        }

        // Sélectionner tous les liens de navigation
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

        // Parcourir tous les liens
        navLinks.forEach(function(link) {
            // Retirer la classe 'active' de tous les liens
            link.classList.remove('active');

            // Obtenir le href du lien
            const href = link.getAttribute('href');

            // Vérifier si le href correspond à la page actuelle
            if (href === currentPage) {
                // Ajouter la classe 'active' au lien correspondant
                link.classList.add('active');
                console.log('Active link set for:', href);
            }
        });

        console.log('Current page:', currentPage);
    });
})();
