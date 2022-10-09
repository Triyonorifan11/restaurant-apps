import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const humbergerButton = document.querySelector('#humberger');
const maincontent = document.querySelector('main');
const jumbotron = document.querySelector('.jumbotron');
const navbar = document.querySelector('#navbar');

const app = new App({
  button: humbergerButton,
  drawer: navbar,
  content: maincontent,
});

jumbotron.addEventListener('click', () => {
  navbar.classList.remove('open-navbar');
});

window.addEventListener('hashchange', () => {
  app.renderPageApp();
});

window.addEventListener('load', () => {
  app.renderPageApp();
  swRegister();
});
