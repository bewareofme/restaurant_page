export default function contactbuttons(){
    const body=document.querySelector('body')
    const main= document.createElement('div')
    main.classList.add('main')
    const cardhome =  document.createElement('div')
    cardhome.classList.add('card-info')
      const homeul= document.createElement('ul')
      const menu1= document.createElement('li')
      const menu2= document.createElement('li')
      const menu3= document.createElement('li')
      menu1.textContent='Lane: 743 avenue bourdois';
      menu2.textContent='Country:Mauritius';
      menu3.textContent='City: Portlouis';
      body.appendChild(main)
      main.appendChild(cardhome)
      cardhome.appendChild(homeul)
      homeul.appendChild(menu1)
      homeul.appendChild(menu2)
      homeul.appendChild(menu3)
      console.log('I get called from contact.js!');
    }