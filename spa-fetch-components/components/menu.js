export const startMenu = () => {
    const menus = document.querySelectorAll('[data-menu]');
    console.log(menus);
    menus.forEach((menu) => {
        const button = menu.querySelector('.menu__button');

        // Changes the menu activity
        const toggleMenu = () => {
            menu.classList.contains('active');
            const active = menu.classList.contains('active');

            button.setAttribute('aria-expanded', active);
            button.setAttribute('aria-label', active ? 'Fechar Menu' : 'Abrir Menu')
        };

        const closeWithEsc = (event) => {
            const isEsc = event.key === 'Escape';
            const active = menu.classList.contains('active');

            if (isEsc && active){
                menu.classList.remove('active');

                button.setAttribute('aria-expanded', false);
                button.setAttribute('aria-label', 'Abrir Menu');

                button.focus();
            }
        };

        button.addEventListener('pointerdown', toggleMenu);

        document.addEventListener('keydown', closeWithEsc);
        
    });
    
}
startMenu();