(() => {
    const menuIcon = document.getElementsByClassName('menuIcon')[0];
    const hiddenMenu = document.getElementsByClassName('hiddenMenu')[0];

    menuIcon.addEventListener('click', () => {
        if (menuIcon.classList.contains('menuIcon')) {
            menuIcon.classList.remove('menuIcon');
            menuIcon.classList.add('closeIcon');
            hiddenMenu.style.display = 'block';
        } else {
            menuIcon.classList.remove('closeIcon');
            menuIcon.classList.add('menuIcon');
            hiddenMenu.style.display = 'none';
        }
    });
})();