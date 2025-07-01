document.addEventListener('DOMContentLoaded', () => {
    
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav'); 

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.querySelector('ul').classList.toggle('active');
            console.log('Menu toggled'); 

        });

      
        mainNav.querySelectorAll('ul li a').forEach(link => {
            link.addEventListener('click', () => {
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                }
            });
        });
    }

});