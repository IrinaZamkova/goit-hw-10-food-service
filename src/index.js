import './styles.css';
import './templates/menu.js';



const refs=  {
    bodyRef : document.querySelector('body'),
    switchInputRef : document.querySelector('.js-switch-input'),
    
} ;

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

refs.bodyRef.classList.add(localStorage.Theme)
savedTheme()
refs.switchInputRef.addEventListener('change', addLocalStTheme )

function addLocalStTheme (ev){
    localStorage.setItem("Theme", refs.switchInputRef.checked ? Theme.DARK : Theme.LIGHT )
    addBodyTheme()
    
}
console.dir(refs.switchInputRef)

function addBodyTheme(){
    if(localStorage.Theme===Theme.LIGHT){
        refs.bodyRef.classList.remove('dark-theme')
        refs.bodyRef.classList.add('light-theme')
    }else{
        refs.bodyRef.classList.remove('light-theme')
        refs.bodyRef.classList.add('dark-theme')
    }

    }


    function savedTheme()  {
    if(localStorage.Theme===Theme.DARK){
        refs.switchInputRef.checked=true;
    }
    }
console.log("tttoo")