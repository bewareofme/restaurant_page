export default function clear(){
    const main =document.querySelector('.main')
    const footer=document.querySelector('.footer')
    footer.remove();
    main.remove();
}