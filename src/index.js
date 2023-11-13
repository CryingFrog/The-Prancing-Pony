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

const head = document.querySelector('head');
const link = document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = favicon;
head.appendChild (link);

AppendContact(document.body);
