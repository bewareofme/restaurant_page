import './style.css';
import sushi from './sushi.jpeg';
import sushiMenu from './sushi-menu.jpeg';
import homebuttons from './home.js';
import clear from './clear.js';
import contactbuttons from './contact.js';
import menubuttons from './menu.js';
import footer from './footer.js';

const body =document.querySelector('body')
const content =document.createElement('div')
content.setAttribute('id','content')
const header =document.createElement('div')
header.classList.add('header')
body.appendChild(content)
content.appendChild(header)
const logo =document.createElement('div')
logo.classList.add('logo')
logo.textContent='logo';
header.appendChild(logo)
const headerul =document.createElement('ul')
header.appendChild(headerul)

const headerlihome =document.createElement('li')
const homebutton=document.createElement('button')
homebutton.classList.add('home')
homebutton.textContent='Home';
headerul.appendChild(headerlihome)
headerlihome.appendChild(homebutton)

const headerlicontact =document.createElement('li')
const contactbutton=document.createElement('button')
contactbutton.classList.add('info')
contactbutton.textContent='contact';
headerul.appendChild(headerlicontact)
headerlicontact.appendChild(contactbutton)

const headerlimenu =document.createElement('li')
const menubutton=document.createElement('button')
menubutton.classList.add('menu')
menubutton.textContent='Menu';
headerul.appendChild(headerlimenu)
headerlimenu.appendChild(menubutton)
homebuttons();
footer();
homebutton.addEventListener('click',()=>{
    clear();
    homebuttons();
    footer();
})
contactbutton.addEventListener('click',()=>{
    clear();
    contactbuttons();
    footer();
})
menubutton.addEventListener('click',()=>{
    clear();
    menubuttons();
    footer();
    
})
