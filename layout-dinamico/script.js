const colorPicker = document.querySelector('#color-picker');
const fontSelect = document.querySelector('#font-select');
const themeToggle = document.querySelector('#theme-toggle');
const articleColorPicker = document.querySelectorAll('#article-color-picker');
const body = document.querySelector('body');
const newsArticles = document.querySelector('.news');


const loadPreferences = () => {
    const savedColor = localStorage.getItem('primaryColor');
    if (savedColor) {
        document.documentElement.style.setProperty('--primary-color',
            savedColor);
        colorPicker.value = savedColor;
    }

    const savedArticleColor = localStorage.getItem('articleColor');
    if (savedArticleColor) {
        document.documentElement.setProperty('--primary-color', savedColor);
        colorPicker.value = savedColor;
    }


    const savedFont = localStorage.getItem('fontFamily');
    if (savedFont) {
        document.documentElement.setProperty('--font-family', savedFont);
        localStorage.setItem = savedFont;
    }


    const savedTheme = localStorage.getItem('theme');
    console.log(savedTheme)
    if (savedTheme === 'dark') {
        body.classList.add('dark');
        themeToggle.textContent = 'dark_mode'
    }


};


colorPicker.addEventListener('input', (e) => {
    const color = e.target.value;

    document.documentElement.style.setProperty('--primaryColor', color)

    localStorage.setItem('primaryColor', color)

});

articleColorPicker.addEventListener('input', (e) => {
    
    const color = e.target.value;
    newsArticles.forEach(article => {article.style.backgroundColor = color })

    localStorage.setItem('articleColor', color)

});

fontSelect.addEventListener('change', (e) => {
    const font = e.target.value;
    document.documentElement.style.setProperty('--font-family', font)
    localStorage.setItem('fontFamily', font)
});


themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');

    themeToggle.textContent = 'dark_mode'
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
});


loadPreferences();