import AppendHome from './home';
import AppendMenu from './menu';
import AppendContact from './contact';
import './headerStyles.css';
import './homeStyles.css';
import './menuStyles.css';
import './contactStyles.css'; 
import './fonts.css';
import './animations.css';
import favicon from './favicon.svg';

const homeBtn = document.getElementById('homeLi');
const menuBtn = document.getElementById('menuLi');
const contactBtn = document.getElementById('contactLi');
const contentDiv = document.getElementById('content');

let loadPage = (page) => {
  contentDiv.innerHTML = '';
  switch (page){
    case 'home':
      AppendHome(contentDiv);
      break;
    case 'menu':
      AppendMenu(contentDiv);
      break;
    case 'contact':
      AppendContact(contentDiv);
      break;
  }
}

const head = document.querySelector('head');
const link = document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = favicon;
head.appendChild (link);

loadPage('home');

homeBtn.addEventListener("click", () => loadPage('home'));
menuBtn.addEventListener("click", () => loadPage('menu'));
contactBtn.addEventListener("click", () => loadPage('contact'));