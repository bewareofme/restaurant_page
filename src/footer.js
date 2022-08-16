export default function footer(){
const body =document.querySelector('body')
const footer=document.createElement('div')
footer.classList.add('footer')
footer.textContent='this is a cool restaurant'
body.appendChild(footer)
}