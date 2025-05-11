(function () {
    "use strict";

    /*/ Spinner
    var spinner = function () {
        setTimeout(function () {
            const spinnerElement = document.querySelector('#spinner');
            if (spinnerElement) {
                spinnerElement.classList.remove('show');
            }
        }, 1);
    };
    spinner();*/
    

    // Sticky Navbar
    window.addEventListener('scroll', function () {
        const navBar = document.querySelector('.nav-bar');
        if (navBar) {
            if (window.scrollY > 45) {
                navBar.classList.add('sticky-top');
            } else {
                navBar.classList.remove('sticky-top');
            }
        }
    });
    
})();

