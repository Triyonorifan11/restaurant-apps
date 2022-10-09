import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import './main';

const humbergerButton = document.querySelector('#humberger');
const maincontent = document.querySelector('main');
const jumbotron = document.querySelector('.jumbotron');
const navbar = document.querySelector('#navbar');

humbergerButton.addEventListener('click', (event) => {
  navbar.classList.toggle('open-navbar');
  event.stopPropagation();
});

jumbotron.addEventListener('click', () => {
  navbar.classList.remove('open-navbar');
});
maincontent.addEventListener('click', () => {
  navbar.classList.remove('open-navbar');
});
