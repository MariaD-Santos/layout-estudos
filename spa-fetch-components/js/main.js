import { startMenu } from '../components/menu.js';

// Load the HTML via fetch and injects into the container

const loadComponent = async (contentPatch, container) => {
    try{
        const response = await fetch(contentPatch);

        if(!response.ok){
            throw new Error('Erro ao carregar componente')
        }

        const html = await response.text();
        container.innerHTML = html;

    } catch (erro) {
        console.error(erro);
    }
};


const startLinks = () => {

    const content = document.querySelector('[data-conteudo]');

    document.querySelectorAll('[data-link]').forEach((link) => {
        link.addEventListener('click', async (event) => {
            event.preventDefault();

            const page = link.dataset.link;

            const menu = document.querySelector('[data-menu]');
            const button = menu.querySelector('.menu__button');

            if (menu.classList.contains('active')) {
                menu.classList.remove('active');

                button.setAttribute('aria-expanded', false)
                button.setAttribute('aria-label', 'Abrir Menu');
            }

            await loadComponent(`./pages/${page}.html`, content)
        });
    });
};


const startApp = async () => {
    const containerMenu = document.querySelector('[data-componente = "menu"]');

    await loadComponent('./components/menu.html', containerMenu);

    startMenu();

    startLinks();

    const content = document. querySelector('[data-conteudo]');
    await loadComponent('./pages/home.html', content);
};

/*  
    Await: Pauses the execution of a async function until an Promise(sucess or failure) is resolved
    Async: Allows the page to load time-consuming tasks without breaking the main page's thread
    Catch: Treats the error present inside the code block.
*/

startApp();