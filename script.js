


const colorPicker = document.querySelector('#colorPicker');
const fontSelect = document.querySelector('#font-select');
const themeToggle = document.querySelector('#theme-toggle');
const articleColorPicker = document.querySelector('#article-color-picker');
const body = document.querySelector('body');
const newsArticles= document.querySelector('.news');

/* Carrega as preferencias do usuário do localStorage e aplica as configurações na página
@function loadPreferences
*/
const loadPreferences = () => {
    const savedColor = localStorage.getItem('primaryColor');
    if (savedColor) {
        document.docuementElement.style.setProperty('--primary-color', savedColor);
        colorPicker.value = savedColor;
    }
};

    colorPicker.addEventListener('input', (e) => {
        const color = e.target.value; // captura o valor selecionado no color picker
        document.documentElement.style.setProperty('--primary-color', color);
        localStorage.setItem('primaryColor', color);
    });

    articleColorPicker.addEventListener('input', (e) => {
        const color = e.target.value;
        newsArticles.forEach(article =>{
            article.style.backgroundColor = color;
        })
        localStorage.setItem('articleColor', color);
    });

fontSelect.addEventListener('change', (e) => {

});

themeToggle.addEventListener('click', () => {

});






