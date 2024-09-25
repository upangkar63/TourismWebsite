(() => {
    'use strict'

    const forms = document.querySelectorAll('.needs-validation');

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if(!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    })
})();

const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});


// Script for filtering or searching in the explore section
document.getElementById('filter-btn').addEventListener('click', function() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const theme = document.getElementById('filter-theme').value;

    const cards = document.querySelectorAll('.destination-card');
    cards.forEach(card => {
        const cardTitle = card.querySelector('h3').textContent.toLowerCase();
        const cardDescription = card.querySelector('p').textContent.toLowerCase();

        if (cardTitle.includes(searchInput) || cardDescription.includes(searchInput) || theme === '') {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
